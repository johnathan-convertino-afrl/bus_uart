//******************************************************************************
// file:    up_uart.v
//
// author:  JAY CONVERTINO
//
// date:    2024/02/29
//
// about:   Brief
// uP Core for interfacing with axis uart.
//
// license: License MIT
// Copyright 2024 Jay Convertino
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.
//
//******************************************************************************

`timescale 1ns/100ps

/*
 * Module: up_uart
 *
 * uP based uart communications device.
 *
 * Parameters:
 *
 *   ADDRESS_WIDTH   - Width of the uP address port, max 32 bit.
 *   BUS_WIDTH       - Width of the uP bus data port.
 *   CLOCK_SPEED     - This is the aclk frequency in Hz
 *   BAUD_RATE       - Serial Baud, this can be any value including non-standard.
 *   PARITY_ENA      - Enable Parity for the data in and out.
 *   PARITY_TYPE     - Set the parity type, 0 = even, 1 = odd, 2 = mark, 3 = space.
 *   STOP_BITS       - Number of stop bits, 0 to crazy non-standard amounts.
 *   DATA_BITS       - Number of data bits, 1 to crazy non-standard amounts.
 *   RX_DELAY        - Delay in rx data input.
 *   RX_BAUD_DELAY   - Delay in rx baud enable. This will delay when we sample a bit (default is midpoint when rx delay is 0).
 *   TX_DELAY        - Delay in tx data output. Delays the time to output of the data.
 *   TX_BAUD_DELAY   - Delay in tx baud enable. This will delay the time the bit output starts.
 *
 * Ports:
 *
 *   clk            - Clock for all devices in the core
 *   rstn           - Negative reset
 *   up_rreq        - uP bus read request
 *   up_rack        - uP bus read ack
 *   up_raddr       - uP bus read address
 *   up_rdata       - uP bus read data
 *   up_wreq        - uP bus write request
 *   up_wack        - uP bus write ack
 *   up_waddr       - uP bus write address
 *   up_wdata       - uP bus write data
 *   irq            - Interrupt when data is received
 *   tx             - transmit for UART (output to RX)
 *   rx             - receive for UART (input from TX)
 *   rts            - request to send is a loop with CTS
 *   cts            - clear to send is a loop with RTS
 */
module up_uart #(
    parameter ADDRESS_WIDTH = 32,
    parameter BUS_WIDTH     = 4,
    parameter CLOCK_SPEED   = 100000000,
    parameter BAUD_RATE     = 2000000,
    parameter PARITY_ENA    = 0,
    parameter PARITY_TYPE   = 0,
    parameter STOP_BITS     = 1,
    parameter DATA_BITS     = 8,
    parameter RX_DELAY      = 0,
    parameter RX_BAUD_DELAY = 0,
    parameter TX_DELAY      = 0,
    parameter TX_BAUD_DELAY = 0
  ) 
  (
    input                                       clk,
    input                                       rstn,
    input                                       up_rreq,
    output                                      up_rack,
    input   [ADDRESS_WIDTH-(BUS_WIDTH/2)-1:0]   up_raddr,
    output  [(BUS_WIDTH*8)-1:0]                 up_rdata,
    input                                       up_wreq,
    output                                      up_wack,
    input   [ADDRESS_WIDTH-(BUS_WIDTH/2)-1:0]   up_waddr,
    input   [(BUS_WIDTH*8)-1:0]                 up_wdata,
    output                                      irq,
    output                                      tx,
    input                                       rx,
    output                                      rts,
    input                                       cts
  );

  // var: DIVISOR
  // Divide the address register default location for 1 byte access to multi byte access. (register offsets are byte offsets).
  localparam DIVISOR = BUS_WIDTH/2;

  // var: FIFO_DEPTH
  // Depth of the fifo, matches UART LITE (xilinx), so I kept this just cause
  localparam FIFO_DEPTH = 16;

  // Group: Register Information
  // Core has 4 registers at the offsets that follow.
  //
  //  <RX_FIFO_REG> - h0
  //  <TX_FIFO_REG> - h4
  //  <STATUS_REG>  - h8
  //  <CONTROL_REG> - hC

  // Register Address: RX_FIFO_REG
  // Defines the address offset for RX FIFO
  // (see diagrams/reg_RX_FIFO.png)
  // Valid bits are from DATA_BITS:0, which are data. Multiply by 4 to get register offset on bus.
  localparam RX_FIFO_REG = 4'h0 >> DIVISOR;
  // Register Address: TX_FIFO_REG
  // Defines the address offset to write the TX FIFO.
  // (see diagrams/reg_TX_FIFO.png)
  // Valid bits are from DATA_BITS:0, which are data. Multiply by 4 to get register offset on bus.
  localparam TX_FIFO_REG = 4'h4 >> DIVISOR;
  // Register Address: STATUS_REG
  // Defines the address offset to read the status bits. Multiply by 4 to get register offset on bus.
  // (see diagrams/reg_STATUS.png)
  localparam STATUS_REG  = 4'h8 >> DIVISOR;
  /* Register Bits: Status Register Bits
   *
   * PE           - 7, Parity error, active high on error
   * FE           - 6, Frame error, active high on error
   * OE           - 5, Overrun error, active high on error
   * irq_en       - 4, 1 when the IRQ is enabled by <CONTROL_REG>
   * tx_full      - 3, When 1 the tx fifo is full.
   * tx_empty     - 2, When 1 the tx fifo is empty.
   * rx_full      - 1, When 1 the rx fifo is full.
   * rx_valid     - 0, When 1 the rx fifo contains valid data.
   */
  // Register Address: CONTROL_REG
  // Defines the address offset to set the control bits. Multiply by 4 to get register offset on bus.
  // (see diagrams/reg_CONTROL.png)
  // See Also: <ENABLE_INTR_BIT>, <RESET_RX_BIT>, <RESET_TX_BIT>
  localparam CONTROL_REG = 4'hC >> DIVISOR;
  /* Register Bits: Control Register Bits
   *
   * ENABLE_INTR_BIT  - 4, Control Register offset bit for enabling the interrupt.
   * RESET_RX_BIT     - 1, Control Register offset bit for resetting the RX FIFO.
   * RESET_TX_BIT     - 0, Control Register offset bit for resetting the TX FIFO.
   */
  localparam ENABLE_INTR_BIT  = 4;
  localparam RESET_RX_BIT     = 1;
  localparam RESET_TX_BIT     = 0;

  //fifo internal reset
  reg  [FIFO_DEPTH-1:0]     r_rstn_rx_delay;
  reg  [FIFO_DEPTH-1:0]     r_rstn_tx_delay;

  //uart tx
  wire [(BUS_WIDTH*8)-1:0]  tx_rdata;
  wire                      tx_valid;
  wire                      s_axis_tready;
  wire                      tx_full;
  wire                      tx_empty;
  reg  [(BUS_WIDTH*8)-1:0]  r_tx_wdata;
  reg                       r_tx_wen;

  //uart rx
  wire [DATA_BITS-1:0]      m_axis_tdata;
  wire                      m_axis_tvalid;
  wire                      rx_full;
  wire [(BUS_WIDTH*8)-1:0]  rx_rdata;
  wire                      rx_valid;
  wire                      rx_empty;
  wire                      s_rx_ren;
  wire                      s_parity_err;
  wire                      s_frame_err;
  reg                       r_rx_ren;
  reg                       r_overflow;

  //up registers
  reg                       r_up_rack;
  reg  [(BUS_WIDTH*8)-1:0]  r_up_rdata;
  reg                       r_up_wack;

  //control register
  reg  [(BUS_WIDTH*8)-1:0]  r_control_reg;
  reg                       r_irq_en;

  //interrupt
  reg                       r_irq;

  //output signals assigned to registers.
  assign up_rack  = r_up_rack & up_rreq;
  assign up_wack  = r_up_wack & up_wreq;
  assign up_rdata = r_up_rdata;
  assign irq      = r_irq;

  assign s_rx_ren = ((up_raddr[3:0] == RX_FIFO_REG) && up_rreq ? r_up_rack & r_rx_ren : 0);

  //up registers decoder
  always @(posedge clk)
  begin
    if(rstn == 1'b0)
    begin
      r_up_rack   <= 1'b0;
      r_up_wack   <= 1'b0;
      r_up_rdata  <= 0;

      r_rx_ren    <= 1'b0;

      r_overflow  <= 1'b0;

      r_control_reg <= 0;
    end else begin
      r_up_rack   <= 1'b0;
      r_up_wack   <= 1'b0;
      r_tx_wen    <= 1'b0;
      r_rx_ren    <= 1'b0;
      r_up_rdata  <= r_up_rdata;
      //clear reset bits
      r_control_reg[RESET_RX_BIT] <= 1'b0;
      r_control_reg[RESET_TX_BIT] <= 1'b0;

      if(rx_full == 1'b1)
      begin
        r_overflow <= 1'b1;
      end


      if(up_rreq == 1'b1)
      begin
        r_up_rack <= 1'b1;

        case(up_raddr[3:0])
          RX_FIFO_REG: begin
            r_up_rdata <= rx_rdata & {{(BUS_WIDTH*8-DATA_BITS){1'b0}}, {DATA_BITS{1'b1}}};
            r_rx_ren <= 1'b1;
          end
          STATUS_REG: begin
            r_up_rdata <= {{(BUS_WIDTH*8-8){1'b0}}, s_parity_err, s_frame_err, r_overflow, r_irq_en, tx_full, tx_empty, rx_full, rx_valid};
            r_overflow <= 1'b0;
          end
          default:begin
            r_up_rdata <= 0;
          end
        endcase
      end

      if(up_wreq == 1'b1)
      begin
        r_up_wack <= 1'b1;

        if(r_up_wack == 1'b1) begin
          case(up_waddr[3:0])
            TX_FIFO_REG: begin
              r_tx_wdata  <= up_wdata;
              r_tx_wen    <= 1'b1;
            end
            CONTROL_REG: begin
              r_control_reg <= up_wdata;
            end
            default:begin
            end
          endcase
        end
      end
    end
  end

  //up control register processing and fifo reset
  always @(posedge clk)
  begin
    if(rstn == 1'b0)
    begin
      r_rstn_rx_delay <= ~0;
      r_rstn_tx_delay <= ~0;
      r_irq_en <= 1'b0;
    end else begin
      r_rstn_rx_delay <= {1'b1, r_rstn_rx_delay[FIFO_DEPTH-1:1]};
      r_rstn_tx_delay <= {1'b1, r_rstn_rx_delay[FIFO_DEPTH-1:1]};

      if(r_control_reg[RESET_RX_BIT])
      begin
        r_rstn_rx_delay <= {FIFO_DEPTH{1'b0}};
      end

      if(r_control_reg[RESET_TX_BIT])
      begin
        r_rstn_tx_delay <= {FIFO_DEPTH{1'b0}};
      end

      if(r_control_reg[ENABLE_INTR_BIT] != r_irq_en)
      begin
        r_irq_en <= r_control_reg[ENABLE_INTR_BIT];
      end
    end
  end

  //irq generator
  always @(posedge clk)
  begin
    if(rstn == 1'b0)
    begin
      r_irq <= 1'b0;
    end else if(r_irq_en == 1'b1)
    begin
      r_irq <= 1'b0;

      if(tx_empty || ~rx_empty)
      begin
        r_irq <= 1'b1;
      end
    end
  end

  //Group: Instantiated Modules
  /*
   * Module: inst_axis_uart
   *
   * UART instance with AXIS interface for TX/RX
   */
  axis_uart #(
    .BAUD_CLOCK_SPEED(CLOCK_SPEED),
    .BAUD_RATE(BAUD_RATE),
    .PARITY_ENA(PARITY_ENA),
    .PARITY_TYPE(PARITY_TYPE),
    .STOP_BITS(STOP_BITS),
    .DATA_BITS(DATA_BITS),
    .RX_DELAY(RX_DELAY),
    .RX_BAUD_DELAY(RX_BAUD_DELAY),
    .TX_DELAY(TX_DELAY),
    .TX_BAUD_DELAY(TX_BAUD_DELAY)
  ) inst_axis_uart (
    .aclk(clk),
    .arstn(rstn),
    .parity_err(s_parity_err),
    .frame_err(s_frame_err),
    .s_axis_tdata(tx_rdata[DATA_BITS-1:0]),
    .s_axis_tvalid(tx_valid),
    .s_axis_tready(s_axis_tready),
    .m_axis_tdata(m_axis_tdata),
    .m_axis_tvalid(m_axis_tvalid),
    .m_axis_tready(~rx_full),
    .uart_clk(clk),
    .uart_rstn(rstn),
    .tx(tx),
    .rx(rx),
    .rts(rts),
    .cts(cts)
  );

  /*
   * Module: inst_rx_fifo
   *
   * Buffer up to 16 items output from the axis_1553_encoder.
   */
  fifo #(
    .FIFO_DEPTH(FIFO_DEPTH),
    .BYTE_WIDTH(BUS_WIDTH),
    .COUNT_WIDTH(8),
    .FWFT(1),
    .RD_SYNC_DEPTH(0),
    .WR_SYNC_DEPTH(0),
    .DC_SYNC_DEPTH(0),
    .COUNT_DELAY(0),
    .COUNT_ENA(0),
    .DATA_ZERO(0),
    .ACK_ENA(0),
    .RAM_TYPE("block")
  ) inst_rx_fifo (
    .rd_clk(clk),
    .rd_rstn(rstn & r_rstn_rx_delay[0]),
    .rd_en(s_rx_ren),
    .rd_valid(rx_valid),
    .rd_data(rx_rdata),
    .rd_empty(rx_empty),
    .wr_clk(clk),
    .wr_rstn(rstn & r_rstn_rx_delay[0]),
    .wr_en(m_axis_tvalid),
    .wr_ack(),
    .wr_data({{(BUS_WIDTH*8-DATA_BITS){1'b0}}, m_axis_tdata}),
    .wr_full(rx_full),
    .data_count_clk(clk),
    .data_count_rstn(rstn & r_rstn_rx_delay[0]),
    .data_count()
  );

  /*
   * Module: inst_tx_fifo
   *
   * Buffer up to 16 items to input to the axis_1553_decoder.
   */
  fifo #(
    .FIFO_DEPTH(FIFO_DEPTH),
    .BYTE_WIDTH(BUS_WIDTH),
    .COUNT_WIDTH(8),
    .FWFT(1),
    .RD_SYNC_DEPTH(0),
    .WR_SYNC_DEPTH(0),
    .DC_SYNC_DEPTH(0),
    .COUNT_DELAY(0),
    .COUNT_ENA(0),
    .DATA_ZERO(0),
    .ACK_ENA(0),
    .RAM_TYPE("block")
  ) inst_tx_fifo (
    .rd_clk(clk),
    .rd_rstn(rstn & r_rstn_tx_delay[0]),
    .rd_en(s_axis_tready),
    .rd_valid(tx_valid),
    .rd_data(tx_rdata),
    .rd_empty(tx_empty),
    .wr_clk(clk),
    .wr_rstn(rstn & r_rstn_tx_delay[0]),
    .wr_en(r_tx_wen),
    .wr_ack(),
    .wr_data(r_tx_wdata),
    .wr_full(tx_full),
    .data_count_clk(clk),
    .data_count_rstn(rstn & r_rstn_tx_delay[0]),
    .data_count()
  );
endmodule

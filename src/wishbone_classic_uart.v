//******************************************************************************
/// @FILE    wishbone_uart.v
/// @AUTHOR  JAY CONVERTINO
/// @DATE    2024.02.29
/// @BRIEF   WISHBONE UART
/// @DETAILS
///
/// @LICENSE MIT
///  Copyright 2024 Jay Convertino
///
///  Permission is hereby granted, free of charge, to any person obtaining a copy
///  of this software and associated documentation files (the "Software"), to
///  deal in the Software without restriction, including without limitation the
///  rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
///  sell copies of the Software, and to permit persons to whom the Software is
///  furnished to do so, subject to the following conditions:
///
///  The above copyright notice and this permission notice shall be included in
///  all copies or substantial portions of the Software.
///
///  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
///  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
///  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
///  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
///  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
///  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
///  IN THE SOFTWARE.
//******************************************************************************

`timescale 1ns/100ps

//UART
module wishbone_classic_uart #(
    parameter ADDRESS_WIDTH     = 32,
    parameter BUS_WIDTH         = 4,
    parameter CLOCK_SPEED       = 100000000,
    parameter BAUD_RATE         = 115200,
    parameter PARITY_ENA        = 0,
    parameter PARITY_TYPE       = 0,
    parameter STOP_BITS         = 1,
    parameter DATA_BITS         = 8,
    parameter RX_DELAY          = 0,
    parameter RX_BAUD_DELAY     = 0,
    parameter TX_DELAY          = 0,
    parameter TX_BAUD_DELAY     = 0
  )
  (
    //clock and reset
    input           clk,
    input           rst,
    //Wishbone
    input                       s_wb_cyc,
    input                       s_wb_stb,
    input                       s_wb_we,
    input   [ADDRESS_WIDTH-1:0] s_wb_addr,
    input   [BUS_WIDTH*8-1:0]   s_wb_data_i,
    input   [ 3:0]              s_wb_sel,
    input   [ 1:0]              s_wb_bte,
    input   [ 2:0]              s_wb_cti,
    output                      s_wb_ack,
    output  [BUS_WIDTH*8-1:0]   s_wb_data_o,
    output                      s_wb_err,
    //irq
    output          irq,
    //UART
    output          tx,
    input           rx,
    output          rts,
    input           cts
  );

  //read interface
  wire                      up_rreq;
  wire                      up_rack;
  wire  [ADDRESS_WIDTH-1:0] up_raddr;
  wire  [BUS_WIDTH*8-1:0]   up_rdata;
  //write interface
  wire                      up_wreq;
  wire                      up_wack;
  wire  [ADDRESS_WIDTH-1:0] up_waddr;
  wire  [BUS_WIDTH*8-1:0]   up_wdata;

  up_wishbone_classic #(
    .ADDRESS_WIDTH(ADDRESS_WIDTH),
    .BUS_WIDTH(BUS_WIDTH)
  ) inst_up_wishbone_classic (
    .clk(clk),
    .rst(rst),
    //Wishbone
    .s_wb_cyc(s_wb_cyc),
    .s_wb_stb(s_wb_stb),
    .s_wb_we(s_wb_we),
    .s_wb_addr(s_wb_addr),
    .s_wb_data_i(s_wb_data_i),
    .s_wb_sel(s_wb_sel),
    .s_wb_cti(s_wb_cti),
    .s_wb_bte(s_wb_bte),
    .s_wb_ack(s_wb_ack),
    .s_wb_data_o(s_wb_data_o),
    .s_wb_err(s_wb_err),
    //uP
    //read interface
    .up_rreq(up_rreq),
    .up_rack(up_rack),
    .up_raddr(up_raddr),
    .up_rdata(up_rdata),
    //write interface
    .up_wreq(up_wreq),
    .up_wack(up_wack),
    .up_waddr(up_waddr),
    .up_wdata(up_wdata)
  );

  up_uart #(
    .ADDRESS_WIDTH(ADDRESS_WIDTH),
    .BUS_WIDTH(BUS_WIDTH),
    .CLOCK_SPEED(CLOCK_SPEED),
    .BAUD_RATE(BAUD_RATE),
    .PARITY_ENA(PARITY_ENA),
    .PARITY_TYPE(PARITY_TYPE),
    .STOP_BITS(STOP_BITS),
    .DATA_BITS(DATA_BITS),
    .RX_DELAY(RX_DELAY),
    .RX_BAUD_DELAY(RX_BAUD_DELAY),
    .TX_DELAY(TX_DELAY),
    .TX_BAUD_DELAY(TX_BAUD_DELAY)
  ) inst_up_uart (
    //axis clock and reset
    .clk(clk),
    .rstn(~rst),
    //UP interface
    //read interface
    .up_rreq(up_rreq),
    .up_rack(up_rack),
    .up_raddr(up_raddr),
    .up_rdata(up_rdata),
    //write interface
    .up_wreq(up_wreq),
    .up_wack(up_wack),
    .up_waddr(up_waddr),
    .up_wdata(up_wdata),
    //irq
    .irq(irq),
    //UART
    .tx(tx),
    .rx(rx),
    .rts(rts),
    .cts(cts)
  );

endmodule

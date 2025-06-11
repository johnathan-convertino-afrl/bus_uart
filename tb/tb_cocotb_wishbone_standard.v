//******************************************************************************
// file:    tb_cocotb_wishbone_standard.v
//
// author:  JAY CONVERTINO
//
// date:    2025/04/01
//
// about:   Brief
// Test bench wrapper for cocotb
//
// license: License MIT
// Copyright 2025 Jay Convertino
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
// IN THE SOFTWARE.BUS_WIDTH
//
//******************************************************************************

`timescale 1ns/100ps

/*
 * Module: tb_cocotb
 *
 * Wishbone Stanard based UART communications device.
 *
 * Parameters:
 *
 *   ADDRESS_WIDTH   - Width of the axi address bus
 *   BUS_WIDTH       - Number of bytes for the data bus.
 *   CLOCK_SPEED     - This is the aclk frequency in Hz
 *   BAUD_RATE       - Serial Baud, this can be any value including non-standard.
 *   PARITY_TYPE     - Set the parity type, 0 = none, 1 = even, 2 = odd, 3 = mark, 4 = space.
 *   STOP_BITS       - Number of stop bits, 0 to crazy non-standard amounts.
 *   DATA_BITS       - Number of data bits, 1 to crazy non-standard amounts.
 *   RX_BAUD_DELAY   - Delay in rx baud enable. This will delay when we sample a bit (default is midpoint when rx delay is 0).
 *   TX_BAUD_DELAY   - Delay in tx baud enable. This will delay the time the bit output starts.
 *
 * Ports:
 *
 *   clk            - Clock for all devices in the core
 *   rst            - Positive reset
 *   s_wb_cyc       - Bus Cycle in process
 *   s_wb_stb       - Valid data transfer cycle
 *   s_wb_we        - Active High write, low read
 *   s_wb_addr      - Bus address
 *   s_wb_data_i    - Input data
 *   s_wb_sel       - Device Select
 *   s_wb_ack       - Bus transaction terminated
 *   s_wb_data_o    - Output data
 *   s_wb_err       - Active high when a bus error is present
 *   irq            - Interrupt when data is received
 *   tx             - transmit for UART (output to RX)
 *   rx             - receive for UART (input from TX)
 */
module tb_cocotb #(
    parameter ADDRESS_WIDTH     = 32,
    parameter BUS_WIDTH         = 4,
    parameter CLOCK_SPEED       = 100000000,
    parameter BAUD_RATE         = 115200,
    parameter PARITY_TYPE       = 0,
    parameter STOP_BITS         = 1,
    parameter DATA_BITS         = 8,
    parameter RX_BAUD_DELAY     = 0,
    parameter TX_BAUD_DELAY     = 0
  )
  (
    input                       clk,
    input                       rst,
    input                       s_wb_cyc,
    input                       s_wb_stb,
    input                       s_wb_we,
    input   [ADDRESS_WIDTH-1:0] s_wb_addr,
    input   [BUS_WIDTH*8-1:0]   s_wb_data_i,
    input   [BUS_WIDTH-1:0]     s_wb_sel,
    output                      s_wb_ack,
    output  [BUS_WIDTH*8-1:0]   s_wb_data_o,
    output                      s_wb_err,
    output                      irq,
    output                      tx,
    input                       rx
  );

  // fst dump command
  initial begin
    $dumpfile ("tb_cocotb.fst");
    $dumpvars (0, tb_cocotb);
    #1;
  end
  
  //Group: Instantiated Modules

  /*
   * Module: dut
   *
   * Device under test, wishbone_standard_uart_lite
   */
  wishbone_standard_uart_lite #(
    .ADDRESS_WIDTH(ADDRESS_WIDTH),
    .BUS_WIDTH(BUS_WIDTH),
    .CLOCK_SPEED(CLOCK_SPEED),
    .BAUD_RATE(BAUD_RATE),
    .PARITY_TYPE(PARITY_TYPE),
    .STOP_BITS(STOP_BITS),
    .DATA_BITS(DATA_BITS),
    .RX_BAUD_DELAY(RX_BAUD_DELAY),
    .TX_BAUD_DELAY(TX_BAUD_DELAY)
  ) dut (
    .clk(clk),
    .rst(rst),
    .s_wb_cyc(s_wb_cyc),
    .s_wb_stb(s_wb_stb),
    .s_wb_we(s_wb_we),
    .s_wb_addr(s_wb_addr),
    .s_wb_data_i(s_wb_data_i),
    .s_wb_sel(s_wb_sel),
    .s_wb_ack(s_wb_ack),
    .s_wb_data_o(s_wb_data_o),
    .s_wb_err(s_wb_err),
    .irq(irq),
    .tx(tx),
    .rx(rx)
  );
  
endmodule


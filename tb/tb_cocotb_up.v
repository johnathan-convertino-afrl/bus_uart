//******************************************************************************
// file:    tb_cocotb_up.v
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
 * uP 1553 testbench
 *
 * Parameters:
 *
 *   ADDRESS_WIDTH   - Width of the uP address port, max 32 bit.
 *   BUS_WIDTH       - Width of the uP bus data port.
 *   CLOCK_SPEED     - This is the aclk frequency in Hz
 *   SAMPLE_RATE     - Rate of in which to sample the 1553 bus. Must be 2 MHz or more and less than aclk. This is in Hz.
 *   BIT_SLICE_OFFSET- Adjust where the sample is taken from the input.
 *   INVERT_DATA     - Invert all 1553 bits coming in and out.
 *   SAMPLE_SELECT   - Adjust where in the array of samples to select a bit.
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
 *   i_diff         - Input differential signal for 1553 bus
 *   o_diff         - Output differential signal for 1553 bus
 *   en_o_diff      - Enable output of differential signal (for signal switching on 1553 module)
 *   irq            - Interrupt when data is received
 */
module tb_cocotb #(
    parameter ADDRESS_WIDTH = 32,
    parameter BUS_WIDTH     = 4,
    parameter CLOCK_SPEED   = 100000000,
    parameter SAMPLE_RATE   = 2000000,
    parameter BIT_SLICE_OFFSET  = 0,
    parameter INVERT_DATA       = 0,
    parameter SAMPLE_SELECT     = 0
  )
  (
    input                                           clk,
    input                                           rstn,
    input                                           up_rreq,
    output                                          up_rack,
    input   [ADDRESS_WIDTH-(BUS_WIDTH/2)-1:0]       up_raddr,
    output  [(BUS_WIDTH*8)-1:0]                     up_rdata,
    input                                           up_wreq,
    output                                          up_wack,
    input   [ADDRESS_WIDTH-(BUS_WIDTH/2)-1:0]       up_waddr,
    input   [(BUS_WIDTH*8)-1:0]                     up_wdata,
    input   [1:0]                                   i_diff,
    output  [1:0]                                   o_diff,
    output                                          en_o_diff,
    output                                          irq
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
   * Device under test, up_1553
   */
  up_1553 #(
    .ADDRESS_WIDTH(ADDRESS_WIDTH),
    .BUS_WIDTH(BUS_WIDTH),
    .CLOCK_SPEED(CLOCK_SPEED),
    .SAMPLE_RATE(SAMPLE_RATE),
    .BIT_SLICE_OFFSET(BIT_SLICE_OFFSET),
    .INVERT_DATA(INVERT_DATA),
    .SAMPLE_SELECT(SAMPLE_SELECT)
  ) dut (
    .clk(clk),
    .rstn(rstn),
    .up_rreq(up_rreq),
    .up_rack(up_rack),
    .up_raddr(up_raddr),
    .up_rdata(up_rdata),
    .up_wreq(up_wreq),
    .up_wack(up_wack),
    .up_waddr(up_waddr),
    .up_wdata(up_wdata),
    .i_diff(i_diff),
    .o_diff(o_diff),
    .en_o_diff(en_o_diff),
    .irq(irq)
  );
  
endmodule


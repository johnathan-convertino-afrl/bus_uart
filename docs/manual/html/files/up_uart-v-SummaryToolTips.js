﻿NDSummary.OnToolTipsLoaded("File:up_uart.v",{47:"<div class=\"NDToolTip TInformation LSystemVerilog\"><div class=\"TTSummary\">uP Core for interfacing with axis uart.</div></div>",48:"<div class=\"NDToolTip TInformation LSystemVerilog\"><div class=\"TTSummary\">Copyright 2024 Jay Convertino</div></div>",12:"<div class=\"NDToolTip TModule LSystemVerilog\"><div id=\"NDPrototype12\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/13/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/13/2\"><span class=\"SHKeyword\">module</span> up_uart #(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">ADDRESS_WIDTH</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHNumber\">32</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">BUS_WIDTH</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"3/4/4/5\" style=\"grid-area:2/5/3/6\"><span class=\"SHNumber\">4</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"3/2/4/3\" data-NarrowGridArea=\"4/1/5/2\" style=\"grid-area:3/2/4/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\">CLOCK_SPEED</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"3/4/4/5\" data-NarrowGridArea=\"4/3/5/4\" style=\"grid-area:3/4/4/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"3/5/4/6\" data-NarrowGridArea=\"4/4/5/5\" style=\"grid-area:3/5/4/6\"><span class=\"SHNumber\">100000000</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"4/2/5/3\" data-NarrowGridArea=\"5/1/6/2\" style=\"grid-area:4/2/5/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"4/3/5/4\" data-NarrowGridArea=\"5/2/6/3\" style=\"grid-area:4/3/5/4\">BAUD_RATE</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"4/4/5/5\" data-NarrowGridArea=\"5/3/6/4\" style=\"grid-area:4/4/5/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"4/5/5/6\" data-NarrowGridArea=\"5/4/6/5\" style=\"grid-area:4/5/5/6\"><span class=\"SHNumber\">2000000</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"5/2/6/3\" data-NarrowGridArea=\"6/1/7/2\" style=\"grid-area:5/2/6/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"5/3/6/4\" data-NarrowGridArea=\"6/2/7/3\" style=\"grid-area:5/3/6/4\">PARITY_ENA</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"5/4/6/5\" data-NarrowGridArea=\"6/3/7/4\" style=\"grid-area:5/4/6/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"5/5/6/6\" data-NarrowGridArea=\"6/4/7/5\" style=\"grid-area:5/5/6/6\"><span class=\"SHNumber\">0</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"6/2/7/3\" data-NarrowGridArea=\"7/1/8/2\" style=\"grid-area:6/2/7/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"6/3/7/4\" data-NarrowGridArea=\"7/2/8/3\" style=\"grid-area:6/3/7/4\">PARITY_TYPE</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"6/4/7/5\" data-NarrowGridArea=\"7/3/8/4\" style=\"grid-area:6/4/7/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"6/5/7/6\" data-NarrowGridArea=\"7/4/8/5\" style=\"grid-area:6/5/7/6\"><span class=\"SHNumber\">0</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"7/2/8/3\" data-NarrowGridArea=\"8/1/9/2\" style=\"grid-area:7/2/8/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"7/3/8/4\" data-NarrowGridArea=\"8/2/9/3\" style=\"grid-area:7/3/8/4\">STOP_BITS</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"7/4/8/5\" data-NarrowGridArea=\"8/3/9/4\" style=\"grid-area:7/4/8/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"7/5/8/6\" data-NarrowGridArea=\"8/4/9/5\" style=\"grid-area:7/5/8/6\"><span class=\"SHNumber\">1</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"8/2/9/3\" data-NarrowGridArea=\"9/1/10/2\" style=\"grid-area:8/2/9/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"8/3/9/4\" data-NarrowGridArea=\"9/2/10/3\" style=\"grid-area:8/3/9/4\">DATA_BITS</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"8/4/9/5\" data-NarrowGridArea=\"9/3/10/4\" style=\"grid-area:8/4/9/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"8/5/9/6\" data-NarrowGridArea=\"9/4/10/5\" style=\"grid-area:8/5/9/6\"><span class=\"SHNumber\">8</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"9/2/10/3\" data-NarrowGridArea=\"10/1/11/2\" style=\"grid-area:9/2/10/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"9/3/10/4\" data-NarrowGridArea=\"10/2/11/3\" style=\"grid-area:9/3/10/4\">RX_DELAY</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"9/4/10/5\" data-NarrowGridArea=\"10/3/11/4\" style=\"grid-area:9/4/10/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"9/5/10/6\" data-NarrowGridArea=\"10/4/11/5\" style=\"grid-area:9/5/10/6\"><span class=\"SHNumber\">0</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"10/2/11/3\" data-NarrowGridArea=\"11/1/12/2\" style=\"grid-area:10/2/11/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"10/3/11/4\" data-NarrowGridArea=\"11/2/12/3\" style=\"grid-area:10/3/11/4\">RX_BAUD_DELAY</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"10/4/11/5\" data-NarrowGridArea=\"11/3/12/4\" style=\"grid-area:10/4/11/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"10/5/11/6\" data-NarrowGridArea=\"11/4/12/5\" style=\"grid-area:10/5/11/6\"><span class=\"SHNumber\">0</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"11/2/12/3\" data-NarrowGridArea=\"12/1/13/2\" style=\"grid-area:11/2/12/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"11/3/12/4\" data-NarrowGridArea=\"12/2/13/3\" style=\"grid-area:11/3/12/4\">TX_DELAY</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"11/4/12/5\" data-NarrowGridArea=\"12/3/13/4\" style=\"grid-area:11/4/12/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"11/5/12/6\" data-NarrowGridArea=\"12/4/13/5\" style=\"grid-area:11/5/12/6\"><span class=\"SHNumber\">0</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"12/2/13/3\" data-NarrowGridArea=\"13/1/14/2\" style=\"grid-area:12/2/13/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"12/3/13/4\" data-NarrowGridArea=\"13/2/14/3\" style=\"grid-area:12/3/13/4\">TX_BAUD_DELAY</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"12/4/13/5\" data-NarrowGridArea=\"13/3/14/4\" style=\"grid-area:12/4/13/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"12/5/13/6\" data-NarrowGridArea=\"13/4/14/5\" style=\"grid-area:12/5/13/6\"><span class=\"SHNumber\">0</span></div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"12/6/13/7\" data-NarrowGridArea=\"14/1/15/6\" style=\"grid-area:12/6/13/7\">) ( <span class=\"SHKeyword\">input</span> clk, <span class=\"SHKeyword\">input</span> rstn, <span class=\"SHKeyword\">input</span> up_rreq, <span class=\"SHKeyword\">output</span> up_rack, <span class=\"SHKeyword\">input</span> [ADDRESS_WIDTH-(BUS_WIDTH/<span class=\"SHNumber\">2</span>)<span class=\"SHNumber\">-1</span>:<span class=\"SHNumber\">0</span>] up_raddr, <span class=\"SHKeyword\">output</span> [(BUS_WIDTH*<span class=\"SHNumber\">8</span>)<span class=\"SHNumber\">-1</span>:<span class=\"SHNumber\">0</span>] up_rdata, <span class=\"SHKeyword\">input</span> up_wreq, <span class=\"SHKeyword\">output</span> up_wack, <span class=\"SHKeyword\">input</span> [ADDRESS_WIDTH-(BUS_WIDTH/<span class=\"SHNumber\">2</span>)<span class=\"SHNumber\">-1</span>:<span class=\"SHNumber\">0</span>] up_waddr, <span class=\"SHKeyword\">input</span> [(BUS_WIDTH*<span class=\"SHNumber\">8</span>)<span class=\"SHNumber\">-1</span>:<span class=\"SHNumber\">0</span>] up_wdata, <span class=\"SHKeyword\">output</span> irq, <span class=\"SHKeyword\">output</span> tx, <span class=\"SHKeyword\">input</span> rx, <span class=\"SHKeyword\">output</span> rts, <span class=\"SHKeyword\">input</span> cts )</div></div></div></div><div class=\"TTSummary\">uP based uart communications device.</div></div>",16:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype16\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">localparam</span> DIVISOR = BUS_WIDTH/<span class=\"SHNumber\">2</span></div></div><div class=\"TTSummary\">Divide the address register default location for 1 byte access to multi byte access. (register offsets are byte offsets).</div></div>",57:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype57\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">localparam</span> FIFO_DEPTH = <span class=\"SHNumber\">16</span></div></div><div class=\"TTSummary\">Depth of the fifo, matches UART LITE (xilinx), so I kept this just cause</div></div>",58:"<div class=\"NDToolTip TGroup LSystemVerilog\"><div class=\"TTSummary\">Core has 4 registers at the offsets that follow.</div></div>",77:"<div class=\"NDToolTip TRegisterAddress LSystemVerilog\"><div id=\"NDPrototype77\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">localparam</span> RX_FIFO_REG = <span class=\"SHNumber\">4\'h0</span> &gt;&gt; DIVISOR</div></div><div class=\"TTSummary\">Defines the address offset for RX FIFO</div></div>",78:"<div class=\"NDToolTip TRegisterAddress LSystemVerilog\"><div id=\"NDPrototype78\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">localparam</span> TX_FIFO_REG = <span class=\"SHNumber\">4\'h4</span> &gt;&gt; DIVISOR</div></div><div class=\"TTSummary\">Defines the address offset to write the TX FIFO.</div></div>",79:"<div class=\"NDToolTip TRegisterAddress LSystemVerilog\"><div id=\"NDPrototype79\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">localparam</span> STATUS_REG = <span class=\"SHNumber\">4\'h8</span> &gt;&gt; DIVISOR</div></div><div class=\"TTSummary\">Defines the address offset to read the status bits. Multiply by 4 to get register offset on bus.</div></div>",89:"<div class=\"NDToolTip TRegisterAddress LSystemVerilog\"><div id=\"NDPrototype89\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">localparam</span> CONTROL_REG = <span class=\"SHNumber\">4\'hC</span> &gt;&gt; DIVISOR</div></div><div class=\"TTSummary\">Defines the address offset to set the control bits. Multiply by 4 to get register offset on bus.</div></div>",70:"<div class=\"NDToolTip TModule LSystemVerilog\"><div id=\"NDPrototype70\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/11/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/11/2\">axis_uart #(</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">BAUD_CLOCK_SPEED(CLOCK_SPEED),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">BAUD_RATE(BAUD_RATE),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"3/2/4/3\" data-NarrowGridArea=\"4/1/5/2\" style=\"grid-area:3/2/4/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\">PARITY_ENA(PARITY_ENA),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"4/2/5/3\" data-NarrowGridArea=\"5/1/6/2\" style=\"grid-area:4/2/5/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"4/3/5/4\" data-NarrowGridArea=\"5/2/6/3\" style=\"grid-area:4/3/5/4\">PARITY_TYPE(PARITY_TYPE),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"5/2/6/3\" data-NarrowGridArea=\"6/1/7/2\" style=\"grid-area:5/2/6/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"5/3/6/4\" data-NarrowGridArea=\"6/2/7/3\" style=\"grid-area:5/3/6/4\">STOP_BITS(STOP_BITS),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"6/2/7/3\" data-NarrowGridArea=\"7/1/8/2\" style=\"grid-area:6/2/7/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"6/3/7/4\" data-NarrowGridArea=\"7/2/8/3\" style=\"grid-area:6/3/7/4\">DATA_BITS(DATA_BITS),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"7/2/8/3\" data-NarrowGridArea=\"8/1/9/2\" style=\"grid-area:7/2/8/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"7/3/8/4\" data-NarrowGridArea=\"8/2/9/3\" style=\"grid-area:7/3/8/4\">RX_DELAY(RX_DELAY),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"8/2/9/3\" data-NarrowGridArea=\"9/1/10/2\" style=\"grid-area:8/2/9/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"8/3/9/4\" data-NarrowGridArea=\"9/2/10/3\" style=\"grid-area:8/3/9/4\">RX_BAUD_DELAY(RX_BAUD_DELAY),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"9/2/10/3\" data-NarrowGridArea=\"10/1/11/2\" style=\"grid-area:9/2/10/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"9/3/10/4\" data-NarrowGridArea=\"10/2/11/3\" style=\"grid-area:9/3/10/4\">TX_DELAY(TX_DELAY),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"10/2/11/3\" data-NarrowGridArea=\"11/1/12/2\" style=\"grid-area:10/2/11/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"10/3/11/4\" data-NarrowGridArea=\"11/2/12/3\" style=\"grid-area:10/3/11/4\">TX_BAUD_DELAY(TX_BAUD_DELAY)</div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"10/4/11/5\" data-NarrowGridArea=\"12/1/13/4\" style=\"grid-area:10/4/11/5\">) inst_axis_uart ( .aclk(clk), .arstn(rstn), .parity_err(s_parity_err), .frame_err(s_frame_err), .s_axis_tdata(tx_rdata[DATA_BITS-<span class=\"SHNumber\">1</span>:<span class=\"SHNumber\">0</span>]), .s_axis_tvalid(tx_valid), .s_axis_tready(s_axis_tready), .m_axis_tdata(m_axis_tdata), .m_axis_tvalid(m_axis_tvalid), .m_axis_tready(~rx_full), .uart_clk(clk), .uart_rstn(rstn), .tx(tx), .rx(rx), .rts(rts), .cts(cts) )</div></div></div></div><div class=\"TTSummary\">UART instance with AXIS interface for TX/RX</div></div>",71:"<div class=\"NDToolTip TModule LSystemVerilog\"><div id=\"NDPrototype71\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/13/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/13/2\">fifo #(</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">FIFO_DEPTH(FIFO_DEPTH),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">BYTE_WIDTH(BUS_WIDTH),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"3/2/4/3\" data-NarrowGridArea=\"4/1/5/2\" style=\"grid-area:3/2/4/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\">COUNT_WIDTH(<span class=\"SHNumber\">8</span>),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"4/2/5/3\" data-NarrowGridArea=\"5/1/6/2\" style=\"grid-area:4/2/5/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"4/3/5/4\" data-NarrowGridArea=\"5/2/6/3\" style=\"grid-area:4/3/5/4\">FWFT(<span class=\"SHNumber\">1</span>),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"5/2/6/3\" data-NarrowGridArea=\"6/1/7/2\" style=\"grid-area:5/2/6/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"5/3/6/4\" data-NarrowGridArea=\"6/2/7/3\" style=\"grid-area:5/3/6/4\">RD_SYNC_DEPTH(<span class=\"SHNumber\">0</span>),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"6/2/7/3\" data-NarrowGridArea=\"7/1/8/2\" style=\"grid-area:6/2/7/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"6/3/7/4\" data-NarrowGridArea=\"7/2/8/3\" style=\"grid-area:6/3/7/4\">WR_SYNC_DEPTH(<span class=\"SHNumber\">0</span>),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"7/2/8/3\" data-NarrowGridArea=\"8/1/9/2\" style=\"grid-area:7/2/8/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"7/3/8/4\" data-NarrowGridArea=\"8/2/9/3\" style=\"grid-area:7/3/8/4\">DC_SYNC_DEPTH(<span class=\"SHNumber\">0</span>),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"8/2/9/3\" data-NarrowGridArea=\"9/1/10/2\" style=\"grid-area:8/2/9/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"8/3/9/4\" data-NarrowGridArea=\"9/2/10/3\" style=\"grid-area:8/3/9/4\">COUNT_DELAY(<span class=\"SHNumber\">0</span>),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"9/2/10/3\" data-NarrowGridArea=\"10/1/11/2\" style=\"grid-area:9/2/10/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"9/3/10/4\" data-NarrowGridArea=\"10/2/11/3\" style=\"grid-area:9/3/10/4\">COUNT_ENA(<span class=\"SHNumber\">0</span>),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"10/2/11/3\" data-NarrowGridArea=\"11/1/12/2\" style=\"grid-area:10/2/11/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"10/3/11/4\" data-NarrowGridArea=\"11/2/12/3\" style=\"grid-area:10/3/11/4\">DATA_ZERO(<span class=\"SHNumber\">0</span>),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"11/2/12/3\" data-NarrowGridArea=\"12/1/13/2\" style=\"grid-area:11/2/12/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"11/3/12/4\" data-NarrowGridArea=\"12/2/13/3\" style=\"grid-area:11/3/12/4\">ACK_ENA(<span class=\"SHNumber\">0</span>),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"12/2/13/3\" data-NarrowGridArea=\"13/1/14/2\" style=\"grid-area:12/2/13/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"12/3/13/4\" data-NarrowGridArea=\"13/2/14/3\" style=\"grid-area:12/3/13/4\">RAM_TYPE(<span class=\"SHString\">&quot;block&quot;</span>)</div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"12/4/13/5\" data-NarrowGridArea=\"14/1/15/4\" style=\"grid-area:12/4/13/5\">) inst_rx_fifo ( .rd_clk(clk), .rd_rstn(rstn &amp; r_rstn_rx_delay[<span class=\"SHNumber\">0</span>]), .rd_en(s_rx_ren), .rd_valid(rx_valid), .rd_data(rx_rdata), .rd_empty(rx_empty), .wr_clk(clk), .wr_rstn(rstn &amp; r_rstn_rx_delay[<span class=\"SHNumber\">0</span>]), .wr_en(m_axis_tvalid), .wr_ack(), .wr_data({{(BUS_WIDTH*<span class=\"SHNumber\">8</span>-DATA_BITS){<span class=\"SHNumber\">1\'b0</span>}}, m_axis_tdata}), .wr_full(rx_full), .data_count_clk(clk), .data_count_rstn(rstn &amp; r_rstn_rx_delay[<span class=\"SHNumber\">0</span>]), .data_count() )</div></div></div></div><div class=\"TTSummary\">Buffer up to 16 items output from the axis_1553_encoder.</div></div>",72:"<div class=\"NDToolTip TModule LSystemVerilog\"><div id=\"NDPrototype72\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/13/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/13/2\">fifo #(</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">FIFO_DEPTH(FIFO_DEPTH),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">BYTE_WIDTH(BUS_WIDTH),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"3/2/4/3\" data-NarrowGridArea=\"4/1/5/2\" style=\"grid-area:3/2/4/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\">COUNT_WIDTH(<span class=\"SHNumber\">8</span>),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"4/2/5/3\" data-NarrowGridArea=\"5/1/6/2\" style=\"grid-area:4/2/5/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"4/3/5/4\" data-NarrowGridArea=\"5/2/6/3\" style=\"grid-area:4/3/5/4\">FWFT(<span class=\"SHNumber\">1</span>),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"5/2/6/3\" data-NarrowGridArea=\"6/1/7/2\" style=\"grid-area:5/2/6/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"5/3/6/4\" data-NarrowGridArea=\"6/2/7/3\" style=\"grid-area:5/3/6/4\">RD_SYNC_DEPTH(<span class=\"SHNumber\">0</span>),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"6/2/7/3\" data-NarrowGridArea=\"7/1/8/2\" style=\"grid-area:6/2/7/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"6/3/7/4\" data-NarrowGridArea=\"7/2/8/3\" style=\"grid-area:6/3/7/4\">WR_SYNC_DEPTH(<span class=\"SHNumber\">0</span>),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"7/2/8/3\" data-NarrowGridArea=\"8/1/9/2\" style=\"grid-area:7/2/8/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"7/3/8/4\" data-NarrowGridArea=\"8/2/9/3\" style=\"grid-area:7/3/8/4\">DC_SYNC_DEPTH(<span class=\"SHNumber\">0</span>),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"8/2/9/3\" data-NarrowGridArea=\"9/1/10/2\" style=\"grid-area:8/2/9/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"8/3/9/4\" data-NarrowGridArea=\"9/2/10/3\" style=\"grid-area:8/3/9/4\">COUNT_DELAY(<span class=\"SHNumber\">0</span>),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"9/2/10/3\" data-NarrowGridArea=\"10/1/11/2\" style=\"grid-area:9/2/10/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"9/3/10/4\" data-NarrowGridArea=\"10/2/11/3\" style=\"grid-area:9/3/10/4\">COUNT_ENA(<span class=\"SHNumber\">0</span>),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"10/2/11/3\" data-NarrowGridArea=\"11/1/12/2\" style=\"grid-area:10/2/11/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"10/3/11/4\" data-NarrowGridArea=\"11/2/12/3\" style=\"grid-area:10/3/11/4\">DATA_ZERO(<span class=\"SHNumber\">0</span>),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"11/2/12/3\" data-NarrowGridArea=\"12/1/13/2\" style=\"grid-area:11/2/12/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"11/3/12/4\" data-NarrowGridArea=\"12/2/13/3\" style=\"grid-area:11/3/12/4\">ACK_ENA(<span class=\"SHNumber\">0</span>),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"12/2/13/3\" data-NarrowGridArea=\"13/1/14/2\" style=\"grid-area:12/2/13/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"12/3/13/4\" data-NarrowGridArea=\"13/2/14/3\" style=\"grid-area:12/3/13/4\">RAM_TYPE(<span class=\"SHString\">&quot;block&quot;</span>)</div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"12/4/13/5\" data-NarrowGridArea=\"14/1/15/4\" style=\"grid-area:12/4/13/5\">) inst_tx_fifo ( .rd_clk(clk), .rd_rstn(rstn &amp; r_rstn_tx_delay[<span class=\"SHNumber\">0</span>]), .rd_en(s_axis_tready), .rd_valid(tx_valid), .rd_data(tx_rdata), .rd_empty(tx_empty), .wr_clk(clk), .wr_rstn(rstn &amp; r_rstn_tx_delay[<span class=\"SHNumber\">0</span>]), .wr_en(r_tx_wen), .wr_ack(), .wr_data(r_tx_wdata), .wr_full(tx_full), .data_count_clk(clk), .data_count_rstn(rstn &amp; r_rstn_tx_delay[<span class=\"SHNumber\">0</span>]), .data_count() )</div></div></div></div><div class=\"TTSummary\">Buffer up to 16 items to input to the axis_1553_decoder.</div></div>"});
﻿NDSummary.OnToolTipsLoaded("File:wishbone_standard_uart.v",{26:"<div class=\"NDToolTip TInformation LSystemVerilog\"><div class=\"TTSummary\">AXI Lite 1553 is a core for interfacing with 1553 devices over the AXI lite bus.</div></div>",27:"<div class=\"NDToolTip TInformation LSystemVerilog\"><div class=\"TTSummary\">Copyright 2024 Jay Convertino</div></div>",28:"<div class=\"NDToolTip TModule LSystemVerilog\"><div id=\"NDPrototype28\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"6\" data-NarrowColumnCount=\"5\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/13/2\" data-NarrowGridArea=\"1/1/2/6\" style=\"grid-area:1/1/13/2\"><span class=\"SHKeyword\">module</span> wishbone_standard_uart #(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">ADDRESS_WIDTH</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"2/4/3/5\" style=\"grid-area:1/5/2/6\"><span class=\"SHNumber\">32</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">BUS_WIDTH</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"3/4/4/5\" style=\"grid-area:2/5/3/6\"><span class=\"SHNumber\">4</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"3/2/4/3\" data-NarrowGridArea=\"4/1/5/2\" style=\"grid-area:3/2/4/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\">CLOCK_SPEED</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"3/4/4/5\" data-NarrowGridArea=\"4/3/5/4\" style=\"grid-area:3/4/4/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"3/5/4/6\" data-NarrowGridArea=\"4/4/5/5\" style=\"grid-area:3/5/4/6\"><span class=\"SHNumber\">100000000</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"4/2/5/3\" data-NarrowGridArea=\"5/1/6/2\" style=\"grid-area:4/2/5/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"4/3/5/4\" data-NarrowGridArea=\"5/2/6/3\" style=\"grid-area:4/3/5/4\">BAUD_RATE</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"4/4/5/5\" data-NarrowGridArea=\"5/3/6/4\" style=\"grid-area:4/4/5/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"4/5/5/6\" data-NarrowGridArea=\"5/4/6/5\" style=\"grid-area:4/5/5/6\"><span class=\"SHNumber\">115200</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"5/2/6/3\" data-NarrowGridArea=\"6/1/7/2\" style=\"grid-area:5/2/6/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"5/3/6/4\" data-NarrowGridArea=\"6/2/7/3\" style=\"grid-area:5/3/6/4\">PARITY_ENA</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"5/4/6/5\" data-NarrowGridArea=\"6/3/7/4\" style=\"grid-area:5/4/6/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"5/5/6/6\" data-NarrowGridArea=\"6/4/7/5\" style=\"grid-area:5/5/6/6\"><span class=\"SHNumber\">0</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"6/2/7/3\" data-NarrowGridArea=\"7/1/8/2\" style=\"grid-area:6/2/7/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"6/3/7/4\" data-NarrowGridArea=\"7/2/8/3\" style=\"grid-area:6/3/7/4\">PARITY_TYPE</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"6/4/7/5\" data-NarrowGridArea=\"7/3/8/4\" style=\"grid-area:6/4/7/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"6/5/7/6\" data-NarrowGridArea=\"7/4/8/5\" style=\"grid-area:6/5/7/6\"><span class=\"SHNumber\">0</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"7/2/8/3\" data-NarrowGridArea=\"8/1/9/2\" style=\"grid-area:7/2/8/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"7/3/8/4\" data-NarrowGridArea=\"8/2/9/3\" style=\"grid-area:7/3/8/4\">STOP_BITS</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"7/4/8/5\" data-NarrowGridArea=\"8/3/9/4\" style=\"grid-area:7/4/8/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"7/5/8/6\" data-NarrowGridArea=\"8/4/9/5\" style=\"grid-area:7/5/8/6\"><span class=\"SHNumber\">1</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"8/2/9/3\" data-NarrowGridArea=\"9/1/10/2\" style=\"grid-area:8/2/9/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"8/3/9/4\" data-NarrowGridArea=\"9/2/10/3\" style=\"grid-area:8/3/9/4\">DATA_BITS</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"8/4/9/5\" data-NarrowGridArea=\"9/3/10/4\" style=\"grid-area:8/4/9/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"8/5/9/6\" data-NarrowGridArea=\"9/4/10/5\" style=\"grid-area:8/5/9/6\"><span class=\"SHNumber\">8</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"9/2/10/3\" data-NarrowGridArea=\"10/1/11/2\" style=\"grid-area:9/2/10/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"9/3/10/4\" data-NarrowGridArea=\"10/2/11/3\" style=\"grid-area:9/3/10/4\">RX_DELAY</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"9/4/10/5\" data-NarrowGridArea=\"10/3/11/4\" style=\"grid-area:9/4/10/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"9/5/10/6\" data-NarrowGridArea=\"10/4/11/5\" style=\"grid-area:9/5/10/6\"><span class=\"SHNumber\">0</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"10/2/11/3\" data-NarrowGridArea=\"11/1/12/2\" style=\"grid-area:10/2/11/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"10/3/11/4\" data-NarrowGridArea=\"11/2/12/3\" style=\"grid-area:10/3/11/4\">RX_BAUD_DELAY</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"10/4/11/5\" data-NarrowGridArea=\"11/3/12/4\" style=\"grid-area:10/4/11/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"10/5/11/6\" data-NarrowGridArea=\"11/4/12/5\" style=\"grid-area:10/5/11/6\"><span class=\"SHNumber\">0</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"11/2/12/3\" data-NarrowGridArea=\"12/1/13/2\" style=\"grid-area:11/2/12/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"11/3/12/4\" data-NarrowGridArea=\"12/2/13/3\" style=\"grid-area:11/3/12/4\">TX_DELAY</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"11/4/12/5\" data-NarrowGridArea=\"12/3/13/4\" style=\"grid-area:11/4/12/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"11/5/12/6\" data-NarrowGridArea=\"12/4/13/5\" style=\"grid-area:11/5/12/6\"><span class=\"SHNumber\">0</span>,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"12/2/13/3\" data-NarrowGridArea=\"13/1/14/2\" style=\"grid-area:12/2/13/3\"><span class=\"SHKeyword\">parameter</span>&nbsp;</div><div class=\"PName\" data-WideGridArea=\"12/3/13/4\" data-NarrowGridArea=\"13/2/14/3\" style=\"grid-area:12/3/13/4\">TX_BAUD_DELAY</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"12/4/13/5\" data-NarrowGridArea=\"13/3/14/4\" style=\"grid-area:12/4/13/5\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"12/5/13/6\" data-NarrowGridArea=\"13/4/14/5\" style=\"grid-area:12/5/13/6\"><span class=\"SHNumber\">0</span></div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"12/6/13/7\" data-NarrowGridArea=\"14/1/15/6\" style=\"grid-area:12/6/13/7\">) ( <span class=\"SHKeyword\">input</span> clk, <span class=\"SHKeyword\">input</span> rst, <span class=\"SHKeyword\">input</span> s_wb_cyc, <span class=\"SHKeyword\">input</span> s_wb_stb, <span class=\"SHKeyword\">input</span> s_wb_we, <span class=\"SHKeyword\">input</span> [ADDRESS_WIDTH-<span class=\"SHNumber\">1</span>:<span class=\"SHNumber\">0</span>] s_wb_addr, <span class=\"SHKeyword\">input</span> [BUS_WIDTH*<span class=\"SHNumber\">8</span>-<span class=\"SHNumber\">1</span>:<span class=\"SHNumber\">0</span>] s_wb_data_i, <span class=\"SHKeyword\">input</span> [ <span class=\"SHNumber\">3</span>:<span class=\"SHNumber\">0</span>] s_wb_sel, <span class=\"SHKeyword\">output</span> s_wb_ack, <span class=\"SHKeyword\">output</span> [BUS_WIDTH*<span class=\"SHNumber\">8</span>-<span class=\"SHNumber\">1</span>:<span class=\"SHNumber\">0</span>] s_wb_data_o, <span class=\"SHKeyword\">output</span> s_wb_err, <span class=\"SHKeyword\">output</span> irq, <span class=\"SHKeyword\">output</span> tx, <span class=\"SHKeyword\">input</span> rx, <span class=\"SHKeyword\">output</span> rts, <span class=\"SHKeyword\">input</span> cts )</div></div></div></div><div class=\"TTSummary\">Wishbone Standard based uart device.</div></div>",30:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype30\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">wire</span> up_rreq</div></div><div class=\"TTSummary\">uP read bus request</div></div>",31:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype31\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">wire</span> up_rack</div></div><div class=\"TTSummary\">uP read bus acknowledge</div></div>",32:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype32\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">wire</span> [ADDRESS_WIDTH-(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">BUS_WIDTH</div><div class=\"PSymbols\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">/</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\"><span class=\"SHNumber\">2</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"3/1/4/5\" style=\"grid-area:1/5/2/6\">)<span class=\"SHNumber\">-1</span>:<span class=\"SHNumber\">0</span>] up_raddr</div></div></div></div><div class=\"TTSummary\">uP read bus address</div></div>",33:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype33\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">wire</span> [<span class=\"SHNumber\">31</span>:<span class=\"SHNumber\">0</span>] up_rdata</div></div><div class=\"TTSummary\">uP read bus request</div></div>",34:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype34\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">wire</span> up_wreq</div></div><div class=\"TTSummary\">uP write bus request</div></div>",35:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype35\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">wire</span> up_wack</div></div><div class=\"TTSummary\">uP write bus acknowledge</div></div>",36:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype36\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">wire</span> [ADDRESS_WIDTH-(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">BUS_WIDTH</div><div class=\"PSymbols\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">/</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\"><span class=\"SHNumber\">2</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"1/5/2/6\" data-NarrowGridArea=\"3/1/4/5\" style=\"grid-area:1/5/2/6\">)<span class=\"SHNumber\">-1</span>:<span class=\"SHNumber\">0</span>] up_waddr</div></div></div></div><div class=\"TTSummary\">uP write bus address</div></div>",37:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype37\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">wire</span> [<span class=\"SHNumber\">31</span>:<span class=\"SHNumber\">0</span>] up_wdata</div></div><div class=\"TTSummary\">uP write bus data</div></div>",39:"<div class=\"NDToolTip TModule LSystemVerilog\"><div id=\"NDPrototype39\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/3/2\">up_wishbone_standard #(</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">ADDRESS_WIDTH(ADDRESS_WIDTH),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">BUS_WIDTH(BUS_WIDTH)</div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"4/1/5/4\" style=\"grid-area:2/4/3/5\">) inst_up_wishbone_standard ( .clk(clk), .rst(rst), .s_wb_cyc(s_wb_cyc), .s_wb_stb(s_wb_stb), .s_wb_we(s_wb_we), .s_wb_addr(s_wb_addr), .s_wb_data_i(s_wb_data_i), .s_wb_sel(s_wb_sel), .s_wb_ack(s_wb_ack), .s_wb_data_o(s_wb_data_o), .s_wb_err(s_wb_err), .up_rreq(up_rreq), .up_rack(up_rack), .up_raddr(up_raddr), .up_rdata(up_rdata), .up_wreq(up_wreq), .up_wack(up_wack), .up_waddr(up_waddr), .up_wdata(up_wdata) )</div></div></div></div><div class=\"TTSummary\">Module instance of up_wishbone_standard for the Wishbone Classic Standard bus to the uP bus.</div></div>",40:"<div class=\"NDToolTip TModule LSystemVerilog\"><div id=\"NDPrototype40\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/13/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/13/2\">up_uart #(</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">ADDRESS_WIDTH(ADDRESS_WIDTH),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">BUS_WIDTH(BUS_WIDTH),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"3/2/4/3\" data-NarrowGridArea=\"4/1/5/2\" style=\"grid-area:3/2/4/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\">CLOCK_SPEED(CLOCK_SPEED),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"4/2/5/3\" data-NarrowGridArea=\"5/1/6/2\" style=\"grid-area:4/2/5/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"4/3/5/4\" data-NarrowGridArea=\"5/2/6/3\" style=\"grid-area:4/3/5/4\">BAUD_RATE(BAUD_RATE),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"5/2/6/3\" data-NarrowGridArea=\"6/1/7/2\" style=\"grid-area:5/2/6/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"5/3/6/4\" data-NarrowGridArea=\"6/2/7/3\" style=\"grid-area:5/3/6/4\">PARITY_ENA(PARITY_ENA),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"6/2/7/3\" data-NarrowGridArea=\"7/1/8/2\" style=\"grid-area:6/2/7/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"6/3/7/4\" data-NarrowGridArea=\"7/2/8/3\" style=\"grid-area:6/3/7/4\">PARITY_TYPE(PARITY_TYPE),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"7/2/8/3\" data-NarrowGridArea=\"8/1/9/2\" style=\"grid-area:7/2/8/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"7/3/8/4\" data-NarrowGridArea=\"8/2/9/3\" style=\"grid-area:7/3/8/4\">STOP_BITS(STOP_BITS),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"8/2/9/3\" data-NarrowGridArea=\"9/1/10/2\" style=\"grid-area:8/2/9/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"8/3/9/4\" data-NarrowGridArea=\"9/2/10/3\" style=\"grid-area:8/3/9/4\">DATA_BITS(DATA_BITS),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"9/2/10/3\" data-NarrowGridArea=\"10/1/11/2\" style=\"grid-area:9/2/10/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"9/3/10/4\" data-NarrowGridArea=\"10/2/11/3\" style=\"grid-area:9/3/10/4\">RX_DELAY(RX_DELAY),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"10/2/11/3\" data-NarrowGridArea=\"11/1/12/2\" style=\"grid-area:10/2/11/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"10/3/11/4\" data-NarrowGridArea=\"11/2/12/3\" style=\"grid-area:10/3/11/4\">RX_BAUD_DELAY(RX_BAUD_DELAY),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"11/2/12/3\" data-NarrowGridArea=\"12/1/13/2\" style=\"grid-area:11/2/12/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"11/3/12/4\" data-NarrowGridArea=\"12/2/13/3\" style=\"grid-area:11/3/12/4\">TX_DELAY(TX_DELAY),</div><div class=\"PSymbols InFirstParameterColumn\" data-WideGridArea=\"12/2/13/3\" data-NarrowGridArea=\"13/1/14/2\" style=\"grid-area:12/2/13/3\">.</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"12/3/13/4\" data-NarrowGridArea=\"13/2/14/3\" style=\"grid-area:12/3/13/4\">TX_BAUD_DELAY(TX_BAUD_DELAY)</div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"12/4/13/5\" data-NarrowGridArea=\"14/1/15/4\" style=\"grid-area:12/4/13/5\">) inst_up_uart ( .clk(clk), .rstn(~rst), .up_rreq(up_rreq), .up_rack(up_rack), .up_raddr(up_raddr), .up_rdata(up_rdata), .up_wreq(up_wreq), .up_wack(up_wack), .up_waddr(up_waddr), .up_wdata(up_wdata), .irq(irq), .tx(tx), .rx(rx), .rts(rts), .cts(cts) )</div></div></div></div><div class=\"TTSummary\">Module instance of up_uart creating a Logic wrapper for uart axis bus cores to interface with uP bus.</div></div>"});
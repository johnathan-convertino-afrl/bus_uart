﻿NDSummary.OnToolTipsLoaded("File2:tb_cocotb_up.py",{96:"<div class=\"NDToolTip TInformation LPython\"><div class=\"TTSummary\">Cocotb test bench</div></div>",97:"<div class=\"NDToolTip TInformation LPython\"><div class=\"TTSummary\">Copyright 2025 Jay Convertino</div></div>",99:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype99\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">def</span> random_bool()</div></div><div class=\"TTSummary\">Return a infinte cycle of random bools</div></div>",100:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype100\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">def</span> start_clock(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">dut</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Start the simulation clock generator.</div></div>",101:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype101\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">async def</span> reset_dut(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">dut</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Cocotb coroutine for resets, used with await to make sure system is reset.</div></div>",102:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype102\" class=\"NDPrototype WideForm\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">@cocotb.test()</span></div><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">async def</span> increment_test_uart_tx(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">dut</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Coroutine that is identified as a test routine. Setup up to tx uart data.</div></div>",103:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype103\" class=\"NDPrototype WideForm\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">@cocotb.test()</span></div><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">async def</span> increment_test_uart_rx(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">dut</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Coroutine that is identified as a test routine. Setup up to rx uart data</div></div>",104:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype104\" class=\"NDPrototype WideForm\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">@cocotb.test()</span></div><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">async def</span> in_reset(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">dut</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Coroutine that is identified as a test routine. This routine tests if device stays in unready state when in reset.</div></div>",105:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype105\" class=\"NDPrototype WideForm\"><div class=\"PSection PPlainSection\"><span class=\"SHMetadata\">@cocotb.test()</span></div><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">async def</span> no_clock(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">dut</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Coroutine that is identified as a test routine. This routine tests if no ready when clock is lost and device is left in reset.</div></div>"});
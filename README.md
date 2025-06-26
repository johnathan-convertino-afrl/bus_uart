# BUS UART LITE
### UART TO BUS (WISHBONE STANDARD, AXI_LITE)
---

![image](docs/manual/img/AFRL.png)

---

  author: Jay Convertino   
  
  date: 2024.03.11
  
  details: Interface UART data at some baud to a AXI LITE or Wishbone Standard interface bus, duplicates Xilinx UART Lite registers and behavior.
  
  license: MIT   
   
  Actions:  

  [![Lint Status](../../actions/workflows/lint.yml/badge.svg)](../../actions)  
  [![Manual Status](../../actions/workflows/manual.yml/badge.svg)](../../actions)  
  
---

### Version
#### Current
  - V1.0.0 - initial release

#### Previous
  - none

### DOCUMENTATION
  For detailed usage information, please navigate to one of the following sources. They are the same, just in a different format.

  - [bus_uart_lite.pdf](docs/manual/bus_uart_lite.pdf)
  - [github page](https://johnathan-convertino-afrl.github.io/bus_uart/)

### PARAMETERS

  * ADDRESS_WIDTH     - Width of the axi address bus
  * CLOCK_SPEED       - Clock speed of the baud clock. Best if it is a integer multiple of the baud rate, but does not have to be.
  * BAUD_RATE         - Baud rate of the input/output data for the core.
  * PARITY_TYPE       - Set the parity type, 0 = none, 1 = odd, 2 = even, 3 = mark, 4 = space.
  * STOP_BITS         - Number of stop bits, 0 to to some amount that is less than the total of: PARITY_BIT + DATA_BITS + START_BIT.
  * DATA_BITS         - Number of data bits, 1 to 8.
  * RX_BAUD_DELAY     - Delay in rx baud enable. This will delay when we sample a bit (default is midpoint when rx delay is 0).
  * TX_BAUD_DELAY     - Delay in tx baud enable. This will delay the time the bit output starts.

### REGISTERS

  - 0x0 = RX_FIFO (R)
    * 32 bit register, DATA_BITS downto 0 hold RX UART data.
  - 0x4 = TX FIFO (W)
    * 32 bit register, DATA_BITS downto 0 hold TX UART data.
  - 0x8 = STATUS REGISTER (R)
    * 32 bit register with the following bits: 7 = Parity Error, 6 = Frame Error, 5 = Overrun Error, 4 = Interupt Enabled, 3 = TX FIFO Full, 2 = TX FIFO Empty, 1 = RX FIFO Full, 0 = RX FIFO Data Valid.
  - 0xC = CONTROL_REGISTER (W)
    * 32 bit register with the following bits: 4 = Enable INTR, 1 = RST_RX_FIFO, 0 = RST_TX_FIFO.

### COMPONENTS
#### SRC

* up_uart_lite.v
* wishbone_classic_uart_lite.v
* axi_lite_uart_lite.v
  
#### TB

* tb_cocotb_up.v
* tb_cocotb_up.py
* tb_cocotb_axi_lite.v
* tb_cocotb_axi_lite.py
* tb_cocotb_wishbone_standard.v
* tb_cocotb_wishbone_standard.py

### FUSESOC

* fusesoc_info.core created.
* Simulation uses cocotb with icarus to run data through the core.

#### Targets

* RUN WITH: (fusesoc run --target=sim VENDER:CORE:NAME:VERSION)
  - default (for IP integration builds)
  - lint
  - sim_cocotb


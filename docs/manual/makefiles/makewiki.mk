SRCDIR=src

LAT_MD_SRC=$(SRCDIR)/md.tex

WIKI=Home.md
WIKI_DIR=$(PROJECT_NAME).wiki

.PHONY: clean

all: $(WIKI_DIR)/$(WIKI)

$(WIKI_DIR)/$(WIKI): $(LAT_MD_SRC)
	mkdir -p $(WIKI_DIR)
	pandoc -f latex -t gfm -s -o $@ $<

clean:
	rm -rf $(WIKI_DIR)/$(WIKI)

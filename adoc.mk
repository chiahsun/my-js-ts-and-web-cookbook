
.PHONY: adoc-build adoc-view adoc-watch

adoc-build: $(ROOT)/dark.css $(ROOT)/highlight/highlight.min.js
	asciidoctor -a lang=en -a stylesheet=$(ROOT)/dark.css -a highlightjsdir=$(ROOT)/highlight -v -t -o index.html index.adoc
	asciidoctor -a lang=zh_TW -a stylesheet=$(ROOT)/dark.css -a highlightjsdir=$(ROOT)/highlight -v -t -o index-zh_TW.html index.adoc


adoc-view:
	open index.html -a Safari
	
adoc-watch:
	$(ROOT)/watch_build.sh

adoc-download-css:

$(ROOT)/dark.css:
	cd $(ROOT) && curl -LO https://github.com/darshandsoni/asciidoctor-skins/raw/gh-pages/css/dark.css

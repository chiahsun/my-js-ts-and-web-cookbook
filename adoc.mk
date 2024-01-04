
.PHONY: adoc-build adoc-view adoc-watch

adoc-build: $(ROOT)/dark.css $(ROOT)/highlight/highlight.min.js
	asciidoctor -a stylesheet=$(ROOT)/dark.css -a highlightjsdir=$(ROOT)/highlight -v -t index.adoc

adoc-view:
	open index.html -a Safari
	
adoc-watch:
	$(ROOT)/watch_build.sh

adoc-download-css:

$(ROOT)/dark.css:
	cd $(ROOT) && curl -LO https://github.com/darshandsoni/asciidoctor-skins/raw/gh-pages/css/dark.css

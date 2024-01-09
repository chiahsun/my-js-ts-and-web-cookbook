SOURCES=index.html main.css html5.png about.html

all: $(SOURCES)

$(SOURCES): 
	cp ../05_lesson/$@ .

IMGS=caribbean.jpg html_logo_300x300.png vacation.jpg
DEST_IMGS=$(addprefix img/, $(IMGS))

download: $(DEST_IMGS) 

# https://www.gnu.org/software/make/manual/html_node/File-Name-Functions.html
img/%:
	curl -L -o $@ https://github.com/gitdagray/html_course/blob/main/06_lesson/img/$*?raw=true

clean:
	rm -f $(SOURCES) $(DEST_IMGS)

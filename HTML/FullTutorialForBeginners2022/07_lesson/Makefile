SOURCES=index.html main.css html5.png about.html
DIRS=img
SRC_FOLDER=06_lesson

all: $(SOURCES) $(DIRS)

$(SOURCES): 
	cp ../$(SRC_FOLDER)/$@ .

$(DIRS):
	cp -r ../$(SRC_FOLDER)/$@ .

clean:
	rm -rf $(SOURCES) $(DIRS)

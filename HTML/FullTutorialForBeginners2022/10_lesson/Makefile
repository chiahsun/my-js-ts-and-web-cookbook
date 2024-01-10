
all: 

IMGS=tacos_and_drink_400x267.png tacos_tray_400x267.png tacos_close_up_400x260.png

DEST_IMGS=$(addprefix img/, $(IMGS))

download: $(DEST_IMGS) css/style.css

img/%:
	curl -L -o $@ https://github.com/gitdagray/html_course/blob/main/10_lesson/img/$*?raw=true

css/style.css:
	curl -L -o $@ https://github.com/gitdagray/html_course/blob/main/10_lesson/css/style.css?raw=true

clean:
	rm -f $(SOURCES) $(DEST_IMGS)



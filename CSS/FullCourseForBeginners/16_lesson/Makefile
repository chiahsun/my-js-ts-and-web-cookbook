
.PHONY: download

all: 

download: index.html css/style.css img/bubbles.png img/pat1.png img/pat2.png img/profile-800x800.png img/pat2-transparency.png img/scenic-2200x1331.png img/map-2176x1451.png

css/style.css:
	mkdir -p css
	touch css/style.css

img/%:
	mkdir -p img
	curl -L -o $@ https://github.com/gitdagray/css_course/blob/main/16_lesson_starter/img/$*?raw=true

%:
	curl -L -o $@ https://github.com/gitdagray/css_course/blob/main/16_lesson_starter/$*?raw=true

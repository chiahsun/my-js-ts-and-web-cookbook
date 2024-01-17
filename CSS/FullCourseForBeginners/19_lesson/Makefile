
.PHONY: download

all: 

download: index.html css/style.css img/profile1-500x500.png img/profile2-500x500.png img/profile3-500x500.png

#css/style.css:
#	mkdir -p css
#	touch css/style.css

img/%:
	mkdir -p img
	curl -L -o $@ https://github.com/gitdagray/css_course/blob/main/19_lesson_starter/img/$*?raw=true

%:
	curl -L -o $@ https://github.com/gitdagray/css_course/blob/main/19_lesson_starter/$*?raw=true

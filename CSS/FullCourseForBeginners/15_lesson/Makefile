
.PHONY: download

all: 

download: index.html
	mkdir -p css
	touch css/style.css

%:
	curl -L -o $@ https://github.com/gitdagray/css_course/blob/main/15_lesson_starter/$*?raw=true

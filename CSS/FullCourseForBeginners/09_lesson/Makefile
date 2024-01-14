
.PHONY: download

all: 

download: index.html one.html two.html
	mkdir -p css
	touch css/style.css

%:
	curl -L -o $@ https://github.com/gitdagray/css_course/blob/main/09_lesson_starter/$*?raw=true

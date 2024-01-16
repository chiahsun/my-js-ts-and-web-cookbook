
.PHONY: download

all: 

download: index.html notes.md
	mkdir -p css
	touch css/style.css

%:
	curl -L -o $@ https://github.com/gitdagray/css_course/blob/main/17_lesson_starter/$*?raw=true

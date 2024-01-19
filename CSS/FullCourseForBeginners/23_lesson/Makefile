
.PHONY: download

all: 

download: index.html css/style.css

#css/style.css:
#	mkdir -p css
#	touch css/style.css

%:
	mkdir -p $(@D)
	curl -L -o $@ https://github.com/gitdagray/css_course/blob/main/23_lesson_starter/$*?raw=true


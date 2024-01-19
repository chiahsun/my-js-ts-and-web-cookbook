
.PHONY: download

all: 

download: index.html menu.html products.html css/style.css css/menu.css

#css/style.css:
#	mkdir -p css
#	touch css/style.css

%:
	mkdir -p $(@D)
	curl -L -o $@ https://github.com/gitdagray/css_course/blob/main/22_lesson_starter/$*?raw=true


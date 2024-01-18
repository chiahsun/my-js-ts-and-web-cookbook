
.PHONY: download

all: 

download: index.html css/style.css

#css/style.css:
#	mkdir -p css
#	touch css/style.css


# https://stackoverflow.com/questions/12605051/how-to-check-if-a-directory-doesnt-exist-in-make-and-create-it
# https://stackoverflow.com/questions/1950926/create-directories-using-make-file
%:
	mkdir -p $(@D)
	curl -L -o $@ https://github.com/gitdagray/css_course/blob/main/20_lesson_starter/$*?raw=true


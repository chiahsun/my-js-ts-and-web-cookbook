ROOT=.

all: adoc-build adoc-view gitignore-update
-include $(ROOT)/adoc.mk
-include gitignore.mk
-include js.mk

clean: gitignore-clean

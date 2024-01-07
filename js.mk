
JSC=node
TSC=npx ts-node
JS_FILES=$(shell find . -type f -name '*.js' -not -path './highlight/*' -not -path './Vite/*')
JS_LOG_FILES=$(patsubst %.js, %.js.log, $(JS_FILES))
# For .d.ts which is the type inferred by tsc -d, we don't want to get its log to we filter out them
TS_FILES=$(shell find . -type f -name '*.ts' -not -path './highlight/*' -not -path './Vite/*' | grep -vE '[.](d.ts)')
TS_LOG_FILES=$(patsubst %.ts, %.ts.log, $(TS_FILES))
SOURCE_FILES=$(JS_FILES) $(TS_FILES)
TARGET_FILES=$(JS_LOG_FILES) $(TS_LOG_FILES)

js-echo:
	@echo $(SOURCE_FILES)
	@echo $(TARGET_FILES)

js-compile: $(TARGET_FILES)

%.js.log: %.js
	$(JSC) $< > $@

%.ts.log: %.ts
	$(TSC) $< > $@

js-clean:
	rm -f $(TARGET_FILES)


all: inference.d.ts array.d.ts never.d.ts alias.d.ts literal.d.ts

%.d.ts: %.ts
	npx tsc -d $< 
	sleep 1
	rm -f $*.js $*.js.log  


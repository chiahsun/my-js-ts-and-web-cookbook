
all: class.d.ts access_modifier.d.ts read_only.d.ts

%.d.ts: %.ts
	npx tsc -d $< 
	sleep 1
	rm -f $*.js $*.js.log  


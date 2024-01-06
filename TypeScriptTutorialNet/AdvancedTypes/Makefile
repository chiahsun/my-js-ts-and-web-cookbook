
all: intersection_types.d.ts guards.d.ts

%.d.ts: %.ts
	npx tsc -d $< 
	sleep 1
	rm -f $*.js $*.js.log  



all: intersection_types.d.ts guards.d.ts type_assertions.d.ts

%.d.ts: %.ts
	npx tsc -d $< 
	sleep 1
	rm -f $*.js $*.js.log  


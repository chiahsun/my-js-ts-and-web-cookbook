
all: function_types.d.ts overloading.d.ts

%.d.ts: %.ts
	npx tsc -d $< 
	sleep 1
	rm -f $*.js $*.js.log  


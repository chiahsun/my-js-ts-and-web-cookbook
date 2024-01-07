
all: generics.d.ts generic_constraints.d.ts generic_class.d.ts generic_interface.d.ts

%.d.ts: %.ts
	npx tsc -d $< 
	sleep 1
	rm -f $*.js $*.js.log  


const json = `{"latitude": 10.11, "longitude": 12.12}`
console.log(json);

const currentLocation = JSON.parse(json);
console.log(currentLocation);

console.log(currentLocation.x);

let result: any;
result = 3.14159;
console.log(result.toFixed());
// TypeError: result.willExists is not a function
// Error at runtime, since the function may be provided later, so it wouldn't fail to compile
// result.willExists(); 

let result2: object;
// error TS2339: Property 'willExists' does not exist on type 'object'
// result2.willExists();
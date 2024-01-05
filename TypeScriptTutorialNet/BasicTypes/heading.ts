// Since we don't want to run this script in an HTML from a brower, we use the following library to mimic DOM 
// https://github.com/jsdom/jsdom
const { JSDOM } = require("jsdom");
global.document = new JSDOM(`<!DOCTYPE html><h1>Hello world</h1>`).window.document;
const heading = document.querySelector('h1');
console.log(typeof(heading));
// https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
if (typeof heading === 'object' && !Array.isArray(heading) && heading !== null) {
    console.log("It's an object");
}
// https://stackoverflow.com/questions/35546421/how-to-get-a-variable-type-in-typescript
if ((<HTMLHeadingElement>heading)) {
    console.log("It's an object of type JSDOM.HTMLHeadingElement");
}

// error TS2339: Property 'rotate' does not exist on type 'HTMLHeadingElement'.
// heading?.rotate();
const { JSDOM } = require("jsdom");
global.document = new JSDOM(`<input type="text" id="name"/>`).window.document;
const input = document.querySelector('input[type="text"]');
// error TS2339: Property 'value' does not exist on type 'Element'.
// console.log(input.value);
console.log('Value: ', (input as HTMLInputElement).value);

// https://stackoverflow.com/questions/7609130/set-the-default-value-of-an-input-field
document?.getElementById('name')?.setAttribute('value', 'John');
console.log('Value: ', (input as HTMLInputElement).value);

const input2 = <HTMLInputElement>document.querySelector('input[type="text"]');
console.log('Value: ', (input2 as HTMLInputElement).value);

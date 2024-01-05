// https://www.typescripttutorial.net/typescript-tutorial/typescript-type-inference/
let counter = 0;

function increment(counter: number) {
    return counter++;
}

let numberArray = [1, 2, 3, null];
let numberOrStringArray = [0, 1, null, 'Hi'];

let arr = [new Date(), new RegExp('\d+')];

// Contextual typing
const { JSDOM } = require("jsdom");
global.document = new JSDOM(`<!DOCTYPE html><h1>Hello world</h1>`).window.document;
const heading = document.querySelector('h1');

document.addEventListener('click', function (event) {
    // For jsdom, we have no button so the below code only works in browser
    // console.log(event.button);
});

document.addEventListener('scroll', function (event) {
    // error TS2339: Property 'button' does not exist on type 'Event'.
    // console.log(event.button);
});
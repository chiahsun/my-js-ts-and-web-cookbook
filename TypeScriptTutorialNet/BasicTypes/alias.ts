// https://www.typescripttutorial.net/typescript-tutorial/typescript-type-aliases/

type chars = string;
let msg: chars = "Hello";

function sayHello() {
    return msg;
}

console.log(sayHello());

type alphanumerics = string | number;
let input: alphanumerics;
input = 100;
input = 'A';
// error TS2322: Type 'boolean' is not assignable to type 'alphanumerics'.
// input = false;

function sayAlphanumerics() {
    return input;
}
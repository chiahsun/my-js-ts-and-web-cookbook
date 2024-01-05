// https://www.typescripttutorial.net/typescript-tutorial/typescript-type-annotations/

let counter: number;
counter = 1;
console.log(counter);
console.log('');
// error TS2322: Type 'string' is not assignable to type 'number'.
// counter = 'Hello';

let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary']
console.log(names);
console.log('');

// Object
let person: {
    name: string;
    age: number;
};

person = {
    name: 'John',
    age: 25
};

console.log(person);
console.log('');

// Function arguments & return types

let greeting : (name: string) => string;
greeting = function(name: string) {
    return `Hi ${name}`;
};
console.log(greeting(person.name));

greeting = function() { // <1>
    return `Hi nobody`;
};
console.log(greeting(person.name));
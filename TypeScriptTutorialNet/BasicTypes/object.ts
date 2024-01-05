// https://www.typescripttutorial.net/typescript-tutorial/typescript-object-type/

let employeeBad: object;

employeeBad = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web developer'
}

console.log(employeeBad);
// error TS2339: Property 'hireDate' does not exist on type 'object'.
// console.log(employee.hireDate);
// error TS2339: Property 'age' does not exist on type 'object'.
// console.log(employee.age);
console.log('');

let employee : {
    firstName: string,
    lastName: string,
    age: number,
    jobTitle: string
}

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web developer'
}
// console.log(employee.hireDate);
console.log(employee.age, '\n');

let employeeInOneLine : {
    firstName: string,
    lastName: string,
    age: number,
    jobTitle: string
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web developer'
}
console.log(employeeInOneLine, '\n');

// Empty type
let vacant: {} = {};
// error TS2339: Property 'firstName' does not exist on type '{}'.
// vacant.firstName
console.log(vacant.toString());
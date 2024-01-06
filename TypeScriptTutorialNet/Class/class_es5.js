// https://www.typescripttutorial.net/typescript-tutorial/typescript-class/
function Person(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

let person = new Person('111-22-3333', 'John', 'Doe');
console.log(person.getFullName());

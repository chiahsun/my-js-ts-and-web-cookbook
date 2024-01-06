class Person {
    ssn;
    firstName;
    lastName;
    
    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let person = new Person('111-22-3333', 'John', 'Doe');
console.log(person.getFullName());
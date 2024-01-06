class Person {
    constructor(private firstName:string , private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
    
    describe() {
        return this.getFullName();
    }
}

let person = new Person('John', 'Doe');
console.log(person.getFullName());
console.log(person.describe(), '\n');

class Employee extends Person {
    constructor(firstName: string, lastName: string, private jobTitle: string) {
        super(firstName, lastName);
    }
    
    describe() {
        return `${super.describe()} as ${this.jobTitle}`
    }
}

let employee = new Employee('John', 'Doe', 'Manager');
console.log(employee.describe());
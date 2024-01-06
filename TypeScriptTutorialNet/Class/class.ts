class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName:string , lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let person2 = new Person('111-22-3333', 'John', 'Doe');
console.log(person2.getFullName());
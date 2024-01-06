// https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/
class Person {
    private ssn: string;
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName:string , lastName: string) {
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

// error TS2341: Property 'ssn' is private and only accessible within class 'Person'.
// console.log(person.ssn);


// https://www.typescripttutorial.net/typescript-tutorial/typescript-readonly/
class Person {
    readonly birthDate: Date;
    
    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}

let person = new Person(new Date(1900, 1, 1));
console.log(person.birthDate);

//  error TS2540: Cannot assign to 'birthDate' because it is a read-only property.
// person.birthDate = new Date(1991, 1, 1);

class Person2 {
    constructor(readonly birthDate: Date) {
        this.birthDate = birthDate;
    }
}

let person2 = new Person2(new Date(1955, 1, 1));
console.log(person2.birthDate);
// error TS2540: Cannot assign to 'birthDate' because it is a read-only property.
// person2.birthDate = new Date(1991, 1, 1);
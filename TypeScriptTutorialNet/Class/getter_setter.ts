class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;
    
    constructor(firstName: string, lastName: string, age: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    
    public get age() {
        return this._age;
    }
    
    public set age(theAge) {
        if (theAge < 0 || theAge >= 150) {
            throw new Error('Impossible age');
        }
        this._age = theAge;
    }
    
    public get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    
    public set fullName(name) {
        let parts = name.split(' ');
        if (parts.length != 2) {
            throw new Error('Invalid name format: firstName lastName');
        }
        this._firstName = parts[0];
        this._lastName = parts[1];
    }
}

let person = new Person('John', 'Doe', 20);
console.log(person);
person.age = 22;
console.log(person);
console.log(person.age);
console.log(person.fullName);
// Error: Impossible age
// person.age = 200;

person.fullName = "Joe Doe";
console.log(person);
// Error: Invalid name format: firstName lastName
// person.fullName = "Joe";
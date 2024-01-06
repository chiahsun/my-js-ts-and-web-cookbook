declare class Person {
    private _age;
    private _firstName;
    private _lastName;
    constructor(firstName: string, lastName: string, age: number);
    get age(): number;
    set age(theAge: number);
    get fullName(): string;
    set fullName(name: string);
}
declare let person: Person;

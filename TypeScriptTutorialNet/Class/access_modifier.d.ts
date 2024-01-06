declare class Person {
    private ssn;
    private firstName;
    private lastName;
    constructor(ssn: string, firstName: string, lastName: string);
    getFullName(): string;
}
declare let person: Person;

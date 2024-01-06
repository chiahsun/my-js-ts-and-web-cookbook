declare class Person {
    ssn: string;
    firstName: string;
    lastName: string;
    constructor(ssn: string, firstName: string, lastName: string);
    getFullName(): string;
}
declare let person2: Person;

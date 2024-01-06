interface Person {
    firstName: string;
    lastName: string;
}
declare function getFullName(person: Person): string;
declare let john: {
    firstName: string;
    lastName: string;
};
interface StringFormat {
    (str: string, isUpper: boolean): string;
}
declare let lowerCase: StringFormat;
interface Json {
    toJson(): string;
}
declare class Human implements Json {
    private firstName;
    private lastName;
    constructor(firstName: string, lastName: string);
    toJson(): string;
}
declare let alex: Human;

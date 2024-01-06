interface Person {
    firstName: string;
    lastName: string;
}

function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`;
}

let john = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log(getFullName(john), '\n');

// Optional property
// read-only property
// Function types

interface StringFormat {
    (str: string, isUpper: boolean): string
}

let lowerCase:  StringFormat;
lowerCase = function(str: string) {
    return str.toLowerCase();
}
console.log(lowerCase('Hi', false));

// Class types
interface Json {
    toJson(): string
}

class Human implements Json {
    constructor(private firstName: string, private lastName: string) {
    }
    
    toJson(): string {
        return JSON.stringify(this);
    }
}

let alex = new Human('Alex', 'Doe');
console.log(alex.toJson());
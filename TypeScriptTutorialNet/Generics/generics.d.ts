declare function getRandomNumber(items: number[]): number;
declare function getRandomAny(items: any[]): any;
declare function getRandomElement<T>(items: T[]): T;
declare let someNumber: number;
declare function merge<U, V>(u: U, v: V): (U | V)[];
declare let merged: (number | {
    a: number;
})[];

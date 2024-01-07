function getRandomNumber(items: number[]): number {
    return items[Math.floor(Math.random() * items.length)];
}

console.log(getRandomNumber([3, 1, 7, 9, 2]));

function getRandomAny(items: any[]): any {
    return items[Math.floor(Math.random() * items.length)];
}

console.log(getRandomAny(['Hello', 1, {a: 1, b: 2}]));

function getRandomElement<T>(items: T[]): T {
    return items[Math.floor(Math.random() * items.length)];
}

console.log(getRandomElement(['Hello', 1, {a: 1, b: 2}]));

// error TS2322: Type 'string | number | bigint | { a: number; b: number; }' is not assignable to type 'number'.
// let someNumber: number = getRandomElement(['Hello', 1, {a: 1, b: 2}, 28n]);

// error TS2352: Conversion of type 'string | number | bigint | { a: number; b: number; }' to type 'number[]' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
// console.log(getRandomElement(['Hello', 1, {a: 1, b: 2}, 28n]) as number[]);
let someNumber: number = getRandomElement([3, 1, 7, 9, 2]);
console.log(someNumber);

// Generic functions with multiple types
function merge<U, V>(u: U, v: V) {
    return [u, v];
}

let merged = merge(1, {a: 2});
console.log(merged);
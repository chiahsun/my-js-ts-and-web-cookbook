// https://www.typescripttutorial.net/typescript-tutorial/typescript-union-type/

function addAny(a: any, b: any) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    
    throw new Error("Pareters must be numbers or strings");
}

console.log(addAny(1, 2));

// Runtime error:
// Error: Pareters must be numbers or strings
// console.log(addAny(true, false));

function addSome(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error("Pareters must be numbers or strings");
}

// error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
// console.log(addSome(true, false));
console.log(addSome("Hello, ", "World!"));

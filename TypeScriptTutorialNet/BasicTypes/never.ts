// https://www.typescripttutorial.net/typescript-tutorial/typescript-never-type/

function raiseSomeError(message: string): never {
    throw new Error(message);
}

function reject() {
    return raiseSomeError("Oops");
}

let loop = function forever() {
    while (true) {
        console.log('Hello');
    }
}

// error TS2366: Function lacks ending return statement and return type does not include 'undefined'.
/* function fn(a: string | number): boolean {
    if (typeof a === 'string') {
        return true;
    } else if (typeof a === 'number') {
        return false;
    }
}*/

function fn(a: string | number): boolean {
    if (typeof a === 'string') {
        return true;
    } else if (typeof a === 'number') {
        return false;
    }
    return reject();
}
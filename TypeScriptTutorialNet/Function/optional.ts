
function multiply(a: number, b: number, c?: number): number {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

console.log(multiply(3, 5));

console.log(multiply(3, 5, 2), '\n');

 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
function multiply_n(...args: number[]): number {
    // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    return args.reduce((acc, cur) => acc* cur, 1);
}

console.log(multiply_n(3, 5));

console.log(multiply_n(3, 5, 2));

console.log(multiply_n(3, 5, 2, 7));
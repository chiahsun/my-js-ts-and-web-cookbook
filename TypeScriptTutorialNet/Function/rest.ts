function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(getTotal());
console.log(getTotal(1, 3, 5), '\n');


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
function multiply_n(...args: number[]): number {
    // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    return args.reduce((acc, cur) => acc* cur, 1);
}

console.log(multiply_n(3, 5));

console.log(multiply_n(3, 5, 2));

console.log(multiply_n(3, 5, 2, 7));
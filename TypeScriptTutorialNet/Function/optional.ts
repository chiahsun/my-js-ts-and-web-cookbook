
function multiply(a: number, b: number, c?: number): number {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

console.log(multiply(3, 5));

console.log(multiply(3, 5, 2), '\n');

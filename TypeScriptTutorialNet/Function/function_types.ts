// https://www.typescripttutorial.net/typescript-tutorial/typescript-function-types/

let my_add: (x: number, y: number) => number;

my_add = function(x: number, y: number) { return x + y; };

console.log(my_add(1, 2));

let my_add2: (x: number, y: number) => number = function(x: number, y: number) {
    return x + y;
};

console.log(my_add(3, 4));

let my_add3 = function(x: number, y: number) {
    return x + y;
};

console.log(my_add(5, 6));

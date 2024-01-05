function add(x: number, y: number) {
    return x + y;
}

// - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(add("Harry", "Potter"));
console.log(add(3, 5));

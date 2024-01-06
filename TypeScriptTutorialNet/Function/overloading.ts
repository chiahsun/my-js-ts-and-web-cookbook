function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: object, b: object): object;

function add2(a: any, b: any): any {
    if (typeof a === 'object') {
        // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
        return Object.assign(a, b);
    }
    return a + b;
}

console.log(add2(1, 2));
console.log(add2("1", "2"));
console.log(add2({1: "a"}, {2: "b"}), '\n');

//  error TS2769: No overload matches this call.
//  Overload 1 of 3, '(a: number, b: number): number', gave the following error.
//    Argument of type 'string' is not assignable to parameter of type 'number'.
//  Overload 2 of 3, '(a: string, b: string): string', gave the following error.
//    Argument of type 'number' is not assignable to parameter of type 'string'.
//  Overload 3 of 3, '(a: object, b: object): object', gave the following error.
//    Argument of type 'number' is not assignable to parameter of type 'object'.
// console.log(add2(1, "2"));

// Function overloading with optional parameters

function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;

function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3), '\n');

// Method overloading

class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values =[];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return this.current;
    }
}

let myCounter = new Counter();
console.log(myCounter.count());
console.log(myCounter.count());
console.log(myCounter.count(2));
console.log(myCounter.count());
console.log(myCounter.count(5));
console.log(myCounter.count());

function merge<U, V>(u: U, v: V) {
    return [u, v];
}

let merged = merge(1, {a: 2});
console.log(merged);

function mergeObject<U extends object, V extends object>(u: U, v: V) {
    return [u, v];
}

let merged2 = mergeObject({b: 1}, {a: 2});
console.log(merged2);
//  error TS2345: Argument of type 'number' is not assignable to parameter of type 'object'
// console.log( mergeObject(1, {a: 2}))

// Use type parameters in generic constraints
//  error TS2536: Type 'K' cannot be used to index type 'T'.
// function prop<T, K>(obj: T, key: K) {
//    return obj[key];
// }

function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
console.log(prop({name: 'John'}, 'name'));
// error TS2345: Argument of type '"age"' is not assignable to parameter of type '"name"'
// console.log(prop({name: 'John'}, 'age'));
declare function merge<U, V>(u: U, v: V): (U | V)[];
declare let merged: (number | {
    a: number;
})[];
declare function mergeObject<U extends object, V extends object>(u: U, v: V): (U | V)[];
declare let merged2: ({
    b: number;
} | {
    a: number;
})[];
declare function prop<T, K extends keyof T>(obj: T, key: K): T[K];

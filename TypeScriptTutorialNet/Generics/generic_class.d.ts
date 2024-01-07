declare class Stack<T> {
    private elements;
    constructor();
    push(element: T): void;
    pop(): T;
}
declare let st: Stack<number>;
declare let words: string;
declare let wordSt: Stack<string>;
declare let stAny: Stack<unknown>;

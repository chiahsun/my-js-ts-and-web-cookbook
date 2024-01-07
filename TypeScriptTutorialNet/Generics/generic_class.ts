class Stack<T> {
    private elements: T[] = [];
    
    constructor() {
    }
    
    push(element: T) {
        this.elements.push(element);
    }
    
    pop(): T {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty');
        }
        return this.elements.pop()!;
    }
}

let st = new Stack<number>();
st.push(1)
st.push(2);
console.log(st);
console.log(st.pop());
console.log(st);
console.log(st.pop());
console.log(st);


let words = 'This is a sample string';
let wordSt = new Stack<string>();
words.split(' ').forEach(word => wordSt.push(word));
console.log(wordSt);
console.log(wordSt.pop());
console.log(wordSt);

let stAny = new Stack();
stAny.push(1);
stAny.push('Hello');
console.log(stAny);
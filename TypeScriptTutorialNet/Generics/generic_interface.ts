interface Pair<K, V> {
    key: K;
    value: V;
}

let month: Pair<string, number> = {
    key: 'John',
    value: 1
};

console.log(month, '\n');

interface Collection<T> {
    add(t: T): void
    remove(t: T): void
}

// Generic interfaces that describe methods
class List<T> implements Collection<T> {
    private items: T[] = [];
    add(t: T): void {
        this.items.push(t);
    }
    remove(t: T): void {
        let index = this.items.indexOf(t);
        if (index != -1) {
            // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
            this.items.splice(index, 1);
        }
    }
}

let l = new List<number>();
l.add(1);
l.add(2);
console.log(l);
l.remove(2);
console.log(l);
l.remove(1);
console.log(l, '\n');

// Generic interfaces describing index types
interface Options<T> {
    [name: string]: T
}

let inputOptions: Options<boolean> = {
    'disabled': false,
    'visible': true
};
console.log(inputOptions);
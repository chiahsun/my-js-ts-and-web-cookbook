interface Pair<K, V> {
    key: K;
    value: V;
}
declare let month: Pair<string, number>;
interface Collection<T> {
    add(t: T): void;
    remove(t: T): void;
}
declare class List<T> implements Collection<T> {
    private items;
    add(t: T): void;
    remove(t: T): void;
}
declare let l: List<number>;
interface Options<T> {
    [name: string]: T;
}
declare let inputOptions: Options<boolean>;

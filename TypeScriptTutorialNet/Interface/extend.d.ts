interface Mailable {
    send(email: string): boolean;
    queue(email: string): boolean;
}
interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean;
}
declare class FutureEmail implements FutureMailable {
    send(email: string): boolean;
    queue(email: string): boolean;
    later(email: string, after: number): boolean;
}
declare let fe: FutureEmail;
declare class Control {
    private state;
    constructor(state: boolean);
}
declare class Keep {
    private state;
    constructor(state: boolean);
}
interface StatefulControl extends Control {
}
declare class FurtherControl extends Control implements StatefulControl {
}

interface Mailable {
    send(email: string): boolean
    queue(email: string): boolean
}

interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}

class FutureEmail implements FutureMailable {
    send(email: string): boolean {
        return true;
    }
    queue(email: string): boolean {
        return true;
    }
    later(email: string, after: number): boolean {
        console.log(`Send ${email} after ${after} days`);
        return true;
    }
}

let fe = new FutureEmail();
fe.later("hello", 2);

// Interfaces extending multiple interfaces

// Interfaces extending classes
class Control {
    constructor(private state: boolean) {
    }
}

class Keep {
    constructor(private state: boolean) {
    }
}

interface StatefulControl extends Control {
    
}

class  FurtherControl extends Control implements StatefulControl {

}

// error TS2420: Class 'FurtherKeep' incorrectly implements interface 'StatefulControl'.
//  Types have separate declarations of a private property 'state'.
// class FurtherKeep extends Keep implements StatefulControl {
//    
// }


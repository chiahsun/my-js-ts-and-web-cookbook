// https://www.typescripttutorial.net/typescript-tutorial/typescript-void-type/

function myLog(message: string): void {
    console.log(message);
}
myLog("some message");

let useless: void = undefined;
// error TS2322: Type 'null' is not assignable to type 'void'.
// useless = null; // <1>
console.log(useless);
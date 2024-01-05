// https://www.typescripttutorial.net/typescript-tutorial/typescript-tuple/

let habit: [string, number] = ["workout", 5];
console.log(habit);

// error TS2322: Type 'number' is not assignable to type 'string'.
// error TS2322: Type 'string' is not assignable to type 'number'.
// habit = [5, "workout"];

// Optional tuple elements
let bgColor, fgColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0];
fgColor = [255, 0, 255];
console.log(bgColor);
console.log(fgColor);


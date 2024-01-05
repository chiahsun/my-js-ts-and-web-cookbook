// https://www.typescripttutorial.net/typescript-tutorial/typescript-array-type/
let skills: string[] = [];

skills[0] = "Problem solving";
skills[2] = "from";
console.log(skills);

skills.push('here');
console.log(skills);

skills[1] = "start";
console.log(skills);

// error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
// skills.push(100);

console.log(skills.length);

console.log([1, 2, 3].map(a => 2 * a));

let scores = ['Programming', 5];
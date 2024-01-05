// https://www.typescripttutorial.net/typescript-tutorial/typescript-enum/

enum Month {
    Jan, Feb, Mar, Apr, May, Jun, Jul, Aug,
    Sep, Oct, Nov, Dec
}

function isSummer(month: Month) {
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            return true;
        default:
            return false;
    }
}

console.log(isSummer(Month.Apr));
console.log(isSummer(Month.Aug));
console.log(Month);
console.log(Month[0]);
console.log(Month['0']);
console.log(Month['Jan'], '\n');

enum Day {
    monday = 1, tuesday = 2
}

console.log(Day.monday);
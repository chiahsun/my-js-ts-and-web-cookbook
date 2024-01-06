function applyDiscount(price: number, discount=0.05) {
    return price * (1 - discount);
}

console.log(applyDiscount(100));

function daysInMonth(year = new Date().getFullYear(), month: number): number {
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;
        case 4: case 6: case 9: case 11:
            return 30;
        case 2:
            if (((year % 4 == 0) && !(year % 100 == 0)) || (year % 400 == 0)) { return 29; }
            else { return 28; }
        default:
            throw Error(`Invalid month ${month}`);
    }
}

console.log(daysInMonth(2019, 2));
console.log(daysInMonth(undefined, 2));
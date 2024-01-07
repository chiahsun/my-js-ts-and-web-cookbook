// https://www.typescripttutorial.net/typescript-tutorial/type-assertions/

function getDiscountedPrice(price: number, discount: number, asString: boolean): number | string {
    let discountedPrice = price * (1  - discount);
    return asString ? `${discountedPrice}` : discountedPrice;
}

let discountedPrice = getDiscountedPrice(100, 0.05, true);
let discountedPriceAsString = discountedPrice as string;
console.log(discountedPrice);


function addCurrency(price: string) {
    return `$${price}`
}

// error TS2345: Argument of type 'string | number' is not assignable to parameter of type 'string'.
//  Type 'number' is not assignable to type 'string'.
// console.log(addCurrency(discountedPrice));
console.log(addCurrency(discountedPriceAsString));
interface Product {
    id: number,
    name: string,
    price: number
};

function getProduct(id: number) : Product {
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    }
}

const product = getProduct(1);
console.log(`The product ${product.name} costs $${product.price}`);
// error TS2551: Property 'Name' does not exist on type '{ id: any; name: string; price: number; }'. Did you mean 'name'?
// console.log(`The product ${product.Name} costs $${product.price}`); 
console.log("");

const showProduct = (name: string, price: number) => {
    console.log(`The product ${name} costs $${price}`);
}

showProduct(product.name, product.price);
//  error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
// showProduct(product.price, product.name);
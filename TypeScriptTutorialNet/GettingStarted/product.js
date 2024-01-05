function getProduct(id) {
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5
  }
}

const product = getProduct(1);
console.log(`The product ${product.name} costs $${product.price}`);
console.log(`The product ${product.Name} costs $${product.price}`);
console.log("");

const showProduct = (name, price) => {
  console.log(`The product ${name} costs $${price}`);
}

showProduct(product.name, product.price);
showProduct(product.price, product.name);
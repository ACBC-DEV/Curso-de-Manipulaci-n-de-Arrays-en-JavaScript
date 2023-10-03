const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
  { title: "Hot Dog", price: 121, id: "🌭" },
];

const myProducts = [];
console.log("Products: ", products);
console.log("My Products: ", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex((product) => product.id === "🍔");
if (productIndex !== -1) {
  myProducts.push(products[productIndex]);
  products.splice(productIndex, 1);
}

console.log("Products: ", products);
console.log("My Products: ", myProducts);
console.log("-".repeat(10));

const product2 = products.filter((product) => product.id !== "🍕");

console.log("Products: ", products);
console.log("My Products: ", product2);

// update

const productsV2 = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
  { title: "Hot Dog", price: 121, id: "🌭" },
];

const update = {
  id: "🍔",
  changes: {
    price: 200,
  },
};
const productIndex2 = productsV2.findIndex(
  (product) => product.id === update.id
);
productsV2[productIndex2] = {
  ...productsV2[productIndex2],
  ...update.changes,
};

console.log("Products: ", productsV2);
console.log("-".repeat(10));

const productIndex3 = productsV2.findIndex((product) => product.id === "🍕");
const product3Update = [...productsV2];
product3Update[productIndex3] = {
  ...product3Update[productIndex3],
  ...update.changes,
};
console.log("Products: ", product3Update);
console.log("-", productsV2);
console.log("-".repeat(10));

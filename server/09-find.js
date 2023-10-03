const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let rta = undefined;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 5) {
    rta = numbers[i];
    break;
  }
}
console.log(rta);

const rta2 = numbers.find((item) => item === 10);
console.log(rta2);

const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
];

const rta3 = products.find((item) => item.id === "🍔");
console.log(rta3);

const rta4 = products.findIndex((item) => item.id === "🍔");
console.log(rta4);

const words = ["spray", "limit", "elite", "exuberant"];
const newArray = [];
for (let word of words) {
  if (word.length > 6) {
    newArray.push(word);
  }
}
console.log(words);
console.log(newArray);

const rta = words.filter((word) => word.length > 6);
console.log(rta);
console.log(words);
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const rta2 = orders.filter((item) => item.delivered && item.total >= 100);
console.log(rta2);

const search = (query) => {
  return orders.filter((item) => {
    return item.customerName.includes(query);
  });
};
console.log(search("Santiago"));

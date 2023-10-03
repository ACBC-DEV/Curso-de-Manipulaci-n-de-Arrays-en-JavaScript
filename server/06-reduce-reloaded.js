const items = [1, 3, 2, 3, 51, 1];

const rta = items.reduce((obj, ele) => {
  if (!obj[ele]) {
    obj[ele] = 1;
  } else {
    obj[ele] = obj[ele] + 1;
  }
  return obj;
}, {});

console.log(rta);

const data = [
  {
    name: "luis",
    level: "low",
  },
  {
    name: "Ana",
    level: "medium",
  },
  {
    name: "Pedro",
    level: "high",
  },
  {
    name: "Juan",
    level: "low",
  },
  {
    name: "Maria",
    level: "medium",
  },
  {
    name: "Jorge",
    level: "high",
  },
  {
    name: "Luisa",
    level: "low",
  },
  {
    name: "Alberto",
    level: "medium",
  },
  {
    name: "Carolina",
    level: "high",
  },
  {
    name: "Fernanda",
    level: "low",
  },
  {
    name: "Fernando",
    level: "medium",
  },
  {
    name: "Fernando",
    level: "high",
  },
];

const rta2 = data
  .map((item) => item.level)
  .reduce((obj, ele) => {
    if (!obj[ele]) {
      obj[ele] = 1;
    } else {
      obj[ele] = obj[ele] + 1;
    }
    return obj;
  }, {});
console.log(rta2);

const list = [];
for (let i = 0; i < 100; i++) {
  list.push(Math.floor(Math.random() * 11));
}
const beetween = (num, min, max) => num >= min && num <= max;
const rta3 = list.reduce(
  (obj, ele) => {
    if (beetween(ele, 1, 5)) obj["1-5"] += 1;
    else if (beetween(ele, 6, 10)) obj["6-10"] += 1;
    else obj["9-11"] += 1;
    return obj;
  },
  { "1-5": 0, "6-10": 0, "9-11": 0 }
);
console.log(rta3);
console.log(list);

const elements = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const othersElements = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

const newArray = [...elements];
for (ele of othersElements) {
  newArray.push(ele);
}
console.log(newArray);

const rta2 = elements.concat(othersElements);
console.log(rta2);
console.log(elements);

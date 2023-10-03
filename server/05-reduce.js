const totals = [1, 2, 3, 4, 5];
let sum = 0;
for (let total of totals) {
  sum += total;
}
console.log(sum);

const rta = totals.reduce((acc, ele) => acc + ele, 0);
console.log(rta);

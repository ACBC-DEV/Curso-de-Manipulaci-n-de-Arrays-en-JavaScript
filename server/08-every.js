const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let rta = true;
for (let number of numbers) {
  if (number >= 40) {
    rta = false;
  }
}
console.log(rta);

const rta2 = numbers.every((number) => number <= 40);
console.log(rta2);

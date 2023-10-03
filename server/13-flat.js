const matriz = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [1, 2]]],
  [7, 8, 9, 10],
];
const rta = [];
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    rta.push(matriz[i][j]);
  }
}
console.log(rta);
console.log(matriz);

const rta2 = matriz.flat(3);
console.log(rta2);

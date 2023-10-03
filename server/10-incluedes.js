const pets = ["cat", "dog", "bat"];

let rta = false;
for (pet of pets) {
  if (pet === "dog") {
    rta = true;
    break;
  }
}
console.log(rta);

const rta2 = pets.includes("dog");
console.log(rta2);

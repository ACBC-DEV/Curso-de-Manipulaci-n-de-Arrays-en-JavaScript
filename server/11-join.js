const elements = ["Fire", "Air", "Water"];

let rta = "";
const separator = "-";
for (element of elements) {
  rta += element + separator;
}
console.log(rta);

const rta2 = elements.join("-");
console.log(rta2);

const title = "Curso de manipulación de arrays";

const urlFinal = title.split(" ").join("-").toLowerCase();
console.log(urlFinal);

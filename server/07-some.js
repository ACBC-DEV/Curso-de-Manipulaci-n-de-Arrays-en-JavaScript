const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let rta = false;
for (const number of numbers) {
  const element = number;
  if (element % 2 === 0) {
    rta = true;
    break;
  }
}
console.log(rta);

const rta2 = numbers.some((element) => element % 2 === 0);

console.log(rta2);

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
const rta3 = orders.some((item) => item.total >= 100);
console.log(rta3);

import { areIntervalsOverlapping } from "date-fns";

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 18),
  endDate: new Date(2021, 1, 1, 19),
  title: "dormir",
};
const isOverlap = (newData) => {
  return dates.some((date) => {
    return areIntervalsOverlapping(
      { start: date.startDate, end: date.endDate },
      { start: newData.startDate, end: newData.endDate }
    );
  });
};
console.log(isOverlap(newAppointment));

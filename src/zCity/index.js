import { createCity, placePizzeria, findMostPizzaOptions } from './Helper.js';
const readlineSync = require('readline-sync');

const N = readlineSync.questionInt('What is the city width? (N)');
console.log(`City dimensions are ${N} by ${N}`);

let city = createCity(N);

console.log('The city has been create.');
console.log(city);

const M = readlineSync.questionInt(
  'How many pizzerias are there in the city? (M)'
);

for (let i = 1; i <= M; i++) {
  console.log(
    `You must place pizzeria ${i} using a coordinate system where the axis starts in the TOP LEFT.`
  );

  let locationX = 0;
  while (locationX < 1 || locationX > N) {
    locationX = readlineSync.questionInt(
      `X location (1-${N}) of pizzeria ${i}? `
    );
  }

  let locationY = 0;
  while (locationY < 1 || locationY > N) {
    locationY = readlineSync.questionInt(
      `Y location (1-${N}) of pizzeria ${i}? `
    );
  }

  const radius = readlineSync.questionInt(
    `Radius, in blocks, pizzeria ${i} can deliver to?`
  );
  const indexX = locationX - 1;
  const indexY = locationY - 1;
  city = placePizzeria(indexX, indexY, radius, city);
}
console.log(`All the pizzerias have been placed`);

console.log(city);

const highestDevliveries = findMostPizzaOptions(city);

console.log(
  `The block with the most amount of delivery options can choose from ${highestDevliveries} different pizzerias.`
);

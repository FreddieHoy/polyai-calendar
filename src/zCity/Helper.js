export const createCity = (N) => {
  let city = [];
  for (let i = 0; i < N; i++) {
    let row = [];
    for (let j = 0; j < N; j++) {
      row.push(0);
    }
    city.push(row);
  }
  return city;
};

export const placePizzeria = (indexX, indexY, radius, city) => {
  if (radius === 0) return city;
  for (let i = 0; i < city.length; i++) {
    let distanceY = Math.abs(indexY - i);
    for (let j = 0; j < city.length; j++) {
      let distanceX = Math.abs(indexX - j);
      if (distanceX + distanceY <= radius && distanceX + distanceY >= -radius) {
        city[i][j] += 1;
      }
    }
  }
  return city;
};

export const findMostPizzaOptions = (city) => {
  let highestNumber = 0;
  for (let i = 0; i < city.length; i++) {
    for (let j = 0; j < city.length; j++) {
      if (city[i][j] > highestNumber) {
        highestNumber = city[i][j];
      }
    }
  }
  return highestNumber;
};

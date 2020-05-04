import { createCity, placePizzeria, findMostPizzaOptions } from './Helper';

describe('createCity', () => {
  it('should create a N by N array of all 0s', () => {
    const N = 2;
    const result = createCity(N);
    expect(result).toEqual([
      [0, 0],
      [0, 0]
    ]);
  });
});

describe('placePizzeria', () => {
  it('should correctly add 1 to all blocks within the radius', () => {
    const emptyCity = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    const indexX = 1;
    const indexY = 1;
    const radius = 1;

    const result = placePizzeria(indexX, indexY, radius, emptyCity);
    expect(result).toEqual([
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0]
    ]);
  });
  it('should correctly add 1 to all blocks within the radius a second time', () => {
    const onePizzeriaCity = [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0]
    ];
    const indexX = 0;
    const indexY = 0;
    const radius = 1;

    const result = placePizzeria(indexX, indexY, radius, onePizzeriaCity);
    expect(result).toEqual([
      [1, 2, 0],
      [2, 1, 1],
      [0, 1, 0]
    ]);
  });
  it('should not add any numbers if radius is 0', () => {
    const onePizzeriaCity = [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0]
    ];
    const indexX = 0;
    const indexY = 0;
    const radius = 0;

    const result = placePizzeria(indexX, indexY, radius, onePizzeriaCity);
    expect(result).toEqual([
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0]
    ]);
  });
});

describe('findMostPizzaOptions', () => {
  it('should create a N by N array of all 0s', () => {
    const city = [
      [1, 2, 0],
      [2, 1, 1],
      [0, 1, 0]
    ];
    const result = findMostPizzaOptions(city);
    expect(result).toEqual(2);
  });
});

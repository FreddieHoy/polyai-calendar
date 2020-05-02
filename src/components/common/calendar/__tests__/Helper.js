import { createMonthCountArray } from '../Helper';

describe('createMonthCountArray', () => {
  it('should return 1 to the number as an array of strings', () => {
    const number = 3;

    const result = createMonthCountArray(number);

    expect(result).toEqual(['1', '2', '3']);
    expect(typeof result[0]).toEqual('string');
  });
  it('should return an empty array given null', () => {
    const number = null;

    const result = createMonthCountArray(number);

    expect(result).toEqual([]);
  });
});

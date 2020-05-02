import {
  createMonthCountArray,
  createEmpty42Array,
  getYear,
  getMonthName,
  getNumDaysInThisMonth,
  getDatesArray,
  getHighlightedDay
} from '../Helper';
import { correctEmptyArray, correctDatesArray } from '../testHelper/testArrays';

describe('getYear', () => {
  it('should return just the year as a number when given a date object', () => {
    const date = new Date(2020, 0, 1);
    const result = getYear(date);

    expect(result).toEqual(2020);
    expect(typeof result).toEqual('number');
  });
});

describe('getMonthName', () => {
  it('should return just the month as a string when given a date object', () => {
    const date = new Date(2020, 0, 1);
    const result = getMonthName(date);

    expect(result).toEqual('January');
    expect(typeof result).toEqual('string');
  });
});

describe('getDatesArray', () => {
  it('should return the correct dates array when given a date object', () => {
    const date = new Date(2020, 0, 1);
    const result = getDatesArray(date);

    expect(result).toEqual(correctDatesArray);
    expect(typeof result).toEqual('object');
  });
});

describe('getNumDaysInThisMonth', () => {
  it('should return just the month as a string when given a date object', () => {
    const date = new Date(2020, 0, 1);
    const result = getNumDaysInThisMonth(date);

    expect(result).toEqual(31);
    expect(typeof result).toEqual('number');
  });
});

describe('createMonthCountArray', () => {
  it('should return an array of strings from 1 to the number given', () => {
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

describe('createEmpty42Array', () => {
  it('should create the correct array', () => {
    const result = createEmpty42Array();

    expect(result).toEqual(correctEmptyArray);
  });
});

describe('getHighlightedDay', () => {
  it('should return the date number as a string if given the same date as today', () => {
    const date = new Date();
    const result = getHighlightedDay(date);

    expect(result).toEqual(new Date().getDate().toString());
    expect(typeof result).toEqual('string');
  });
  it('should return null if given a different date as today', () => {
    const date = new Date(2020, 0, 1);
    const result = getHighlightedDay(date);

    expect(result).toEqual(null);
  });
});

// Try to avoid dates that will expire.
// Use moment to test highlighted day.

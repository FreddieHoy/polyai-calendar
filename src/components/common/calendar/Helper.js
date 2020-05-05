export const getYear = (date) => date.getFullYear();

export const getMonthName = (date) =>
  date.toLocaleString('default', { month: 'long' });

export const getDatesArray = (date) => {
  const firstDayMonthObject = new Date(date.getFullYear(), date.getMonth(), 1);

  const weekDayIndex = firstDayMonthObject.getDay();

  const numberOfDaysInThisMonth = getNumDaysInThisMonth(firstDayMonthObject);

  const monthCountArray = createMonthCountArray(numberOfDaysInThisMonth);

  const calendarArray = createEmpty42Array();
  calendarArray.splice(
    weekDayIndex,
    numberOfDaysInThisMonth,
    ...monthCountArray
  );

  return calendarArray;
};

export const createEmpty42Array = () => new Array(42).fill('');

export const getNumDaysInThisMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

export const createMonthCountArray = (number) => {
  let a = [];
  for (let i = 1; i <= number; i++) {
    const numberString = i.toString();
    a.push(numberString);
  }
  return a;
  // a is ['1', '2', '3'... to 'number']
};

export const getHighlightedDay = (date) => {
  const thisMonth = getMonthName(new Date());
  const targetMonth = getMonthName(date);

  const thisYear = getYear(new Date());
  const targetYear = getYear(date);

  if (thisMonth === targetMonth && thisYear === targetYear) {
    return new Date().getDate().toString();
  } else return null;
};

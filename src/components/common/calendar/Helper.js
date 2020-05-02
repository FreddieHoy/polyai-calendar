const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const getYear = (date) => +date.getFullYear();

export const getMonth = (date) => {
  const numberMonth = date.getMonth();
  return Months[numberMonth];
};
// Maybe see if JS dates can get month name

export const getDatesArray = (date) => {
  const firstDayMonthObject = new Date(date.getFullYear(), date.getMonth(), 1);

  // WeekDayIndex goes from Monday === 0 to Sunday === 6
  let weekDayIndex;
  if (firstDayMonthObject.getDay() === 0) {
    weekDayIndex = 6;
  } else {
    weekDayIndex = firstDayMonthObject.getDay() - 1;
  }

  const numberOfDaysInThisMonth = GetNumDaysInThisMonth(firstDayMonthObject);

  const monthCountArray = CreatemonthCountArray(numberOfDaysInThisMonth);

  const calendarArray = CreateEmpty42Array();
  calendarArray.splice(
    weekDayIndex,
    numberOfDaysInThisMonth,
    ...monthCountArray
  );

  return calendarArray;
};

const GetNumDaysInThisMonth = (anyDateInMonth) => {
  return new Date(
    anyDateInMonth.getFullYear(),
    anyDateInMonth.getMonth() + 1,
    0
  ).getDate();
};

const CreatemonthCountArray = (number) => {
  let a = [];
  for (let i = 1; i <= number; i++) {
    const numberString = i.toString();
    a.push(numberString);
  }
  return a;
  // a is ['1', '2', '3'... to 'N'], Where N is the number of days in that month
};

const CreateEmpty42Array = () => {
  let a = [];
  for (let i = 0; i < 42; i++) {
    a.push('');
  }
  return a;
};

export const getHighlightedDay = (date) => {
  const thisMonth = getMonth(new Date());
  const suggestedMonth = getMonth(date);

  if (thisMonth === suggestedMonth) {
    return new Date().getDate().toString();
  } else return null;
};

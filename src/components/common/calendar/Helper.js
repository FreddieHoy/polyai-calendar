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

export const getDatesArray = (date) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const firstDayOfMonthWeekDayNumber = firstDayOfMonth.getDay() - 1;

  const numberofDaysInMonth = GetNumberOfDaysInMonth(firstDayOfMonth);

  const monthArray = CreateCountingArray(numberofDaysInMonth);

  const emptyArray = CreateEmpty42Array();
  emptyArray.splice(
    firstDayOfMonthWeekDayNumber,
    numberofDaysInMonth,
    ...monthArray
  );
  const NewArray = emptyArray;

  return NewArray;
};

const GetNumberOfDaysInMonth = (anyDateInMonth) => {
  return new Date(
    anyDateInMonth.getFullYear(),
    anyDateInMonth.getMonth() + 1,
    0
  ).getDate();
};

const CreateCountingArray = (number) => {
  let a = [];
  for (let i = 1; i <= number; i++) {
    const numberString = i.toString();
    a.push(numberString);
  }
  return a;
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

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
export const getYear = () => +new Date().getFullYear();

export const getMonth = () => {
  const numberMonth = +new Date().getMonth();

  return Months[numberMonth];
};

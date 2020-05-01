import React from 'react';
import DatePicker from './DatePicker';

const todaysDate = new Date();

// const tomorrow = new Date(todaysDate);
// tomorrow.setDate(tomorrow.getDate() + 1);

// let nextMonth = new Date(todaysDate.setMonth(todaysDate.getMonth() + 1));

const Calendar = () => (
  <div>
    <DatePicker date={todaysDate} />
  </div>
);

export default Calendar;

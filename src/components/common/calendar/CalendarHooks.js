import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import WeekDays from './WeekDays';
import Dates from './Dates';
import MonthYear from './MonthYear';
import {
  getYear,
  getMonthName,
  getDatesArray,
  getHighlightedDay
} from './Helper';

const Container = styled.div`
  border: 1px solid black;
  width: 352px;
  text-align: center;
`;

const CalendarHooks = () => {
  const [targetDate, setTargetDate] = useState(new Date());
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [today, setToday] = useState('');
  const [datesArray, setDatesArray] = useState([]);

  const updateVariables = (targetDate) => {
    setYear(getYear(targetDate));
    setMonth(getMonthName(targetDate));
    setDatesArray(getDatesArray(targetDate));
    setToday(getHighlightedDay(targetDate));
  };

  const switchMonth = (e) => {
    const nextMonthIndexNumber = targetDate.getMonth() + (e.target.id ? 1 : -1);
    const adjacentMonth = new Date(targetDate.setMonth(nextMonthIndexNumber));

    setTargetDate(adjacentMonth);
    updateVariables(targetDate);
  };

  useEffect(() => {
    updateVariables(targetDate);
  }, [targetDate]);

  return (
    <Container>
      <MonthYear month={month} year={year} switchMonth={switchMonth} />
      <WeekDays />
      <Dates array={datesArray} today={today} />
    </Container>
  );
};

export default CalendarHooks;

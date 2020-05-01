import React from 'react';
import styled from 'styled-components';
import WeekDays from './WeekDays';
import Dates from './Dates';
import MonthYear from './MonthYear';
import { getYear, getMonth, getDatesArray, getHighlightedDay } from './Helper';

const Container = styled.div`
  border: 1px solid black;
  width: 352px;
  text-align: center;
`;

const DatePicker = ({ date }) => {
  console.log('This is going in ', date);
  const Year = getYear(date);
  const Month = getMonth(date);
  const DatesArray = getDatesArray(date);
  const HighlighedDay = getHighlightedDay(date);

  return (
    <Container>
      <MonthYear month={Month} year={Year} />
      <WeekDays />
      <Dates array={DatesArray} today={HighlighedDay} />
    </Container>
  );
};

export default DatePicker;

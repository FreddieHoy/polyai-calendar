import React from 'react';
import styled from 'styled-components';
import WeekDays from './WeekDays';
import Dates from './Dates';
import MonthYear from './MonthYear';
import { getYear, getMonth, getDatesArray } from './Helper';

const Container = styled.div`
  border: 1px solid black;
  width: 352px;
  text-align: center;
`;

const Month = getMonth();

const Year = getYear();

const DatesArray = getDatesArray();

const Calendar = () => (
  <Container>
    <MonthYear month={Month} year={Year} />
    <WeekDays />
    <Dates array={DatesArray} />
  </Container>
);

export default Calendar;

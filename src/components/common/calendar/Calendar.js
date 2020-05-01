import React from 'react';
import styled from 'styled-components';
import WeekDays from './WeekDays';
import Dates from './Dates';
import MonthYear from './MonthYear';
import { getYear, getMonth } from './Helper';

const Container = styled.div`
  border: 1px solid black;
  width: 352px;
  text-align: center;
`;

const Month = getMonth();

const Year = getYear();

const DatesArray = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41'
];

const Calendar = () => (
  <Container>
    <MonthYear month={Month} year={Year} />
    <WeekDays />
    <Dates array={DatesArray} />
  </Container>
);

export default Calendar;

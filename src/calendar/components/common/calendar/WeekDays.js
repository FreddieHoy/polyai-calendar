import React from 'react';
import { CalendarText } from 'calendar/config/FontStyles';
import styled from 'styled-components';

const DayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const DayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  border: 1px solid black;
  background-color: #d1d1d1;
`;

const WeekDays = () => (
  <Container>
    {DayNames.map((day) => (
      <DayContainer key={day}>
        <CalendarText>{day}</CalendarText>
      </DayContainer>
    ))}
  </Container>
);

export default WeekDays;

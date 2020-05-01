import React from 'react';
import { CalText } from 'config/FontStyles';
import styled from 'styled-components';

const DayNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

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
        <CalText>{day}</CalText>
      </DayContainer>
    ))}
  </Container>
);

export default WeekDays;

import React from 'react';
import styled from 'styled-components';
import { CalText } from 'config/FontStyles';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const DayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid black;
`;

const Dates = ({ array }) => (
  <Container>
    {array.map((day) => (
      <DayContainer key={day}>
        <CalText>{day}</CalText>
      </DayContainer>
    ))}
  </Container>
);

export default Dates;

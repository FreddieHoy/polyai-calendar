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

const DayContainerHighlighted = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  background-color: yellow;
`;

// Repeating Code

const Dates = ({ array, today }) => {
  let counter = 0;
  return (
    <Container>
      {array.map((day) => (
        <div key={counter++}>
          {today !== day && (
            <DayContainer>
              <CalText>{day}</CalText>
            </DayContainer>
          )}
          {today === day && (
            <DayContainerHighlighted>
              <CalText>{day}</CalText>
            </DayContainerHighlighted>
          )}
        </div>
      ))}
    </Container>
  );
};

export default Dates;

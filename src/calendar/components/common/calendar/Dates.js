import React from 'react';
import styled from 'styled-components';
import { CalendarText } from 'calendar/config/FontStyles';

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
  background-color: ${(props) => (props.highlight ? '#CEECFF' : 'none')};
`;

const Dates = ({ array, today }) => {
  let counter = 0;
  return (
    <Container>
      {array.map((day) => (
        <div key={counter++}>
          {today !== day && (
            <DayContainer>
              <CalendarText>{day}</CalendarText>
            </DayContainer>
          )}
          {today === day && (
            <DayContainer highlight>
              <CalendarText>{day}</CalendarText>
            </DayContainer>
          )}
        </div>
      ))}
    </Container>
  );
};

export default Dates;

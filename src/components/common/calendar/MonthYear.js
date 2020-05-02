import React from 'react';
import styled from 'styled-components';
import { CalendarText } from 'config/FontStyles';

const Container = styled.div`
  border: solid 1px black;
  display: flex;
  justify-content: space-between;
`;

const Arrows = styled.p`
  margin: 0 10px 3px 10px;
  :hover {
    cursor: pointer;
  }
`;

const MonthYear = ({ year, month, switchMonth }) => (
  <Container>
    <Arrows onClick={switchMonth} id={''}>
      {'<'}
    </Arrows>
    <CalendarText>{`${month} ${year}`}</CalendarText>
    <Arrows onClick={switchMonth} id={'+'}>
      {'>'}
    </Arrows>
  </Container>
);

export default MonthYear;

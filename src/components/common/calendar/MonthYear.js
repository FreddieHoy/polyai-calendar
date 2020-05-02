import React from 'react';
import styled from 'styled-components';
import { CalText } from 'config/FontStyles';

const Container = styled.div`
  border: solid 1px black;
  display: flex;
  justify-content: space-between;
`;

const Arrows = styled.div`
  margin: 0 10px 3px 10px;
  :hover {
    cursor: pointer;
  }
`;

const MonthYear = ({ year, month, addMonth, minusMonth }) => (
  <Container>
    <Arrows onClick={minusMonth}>{'<'}</Arrows>
    <CalText>{`${month} ${year}`}</CalText>
    <Arrows onClick={addMonth}>{'>'}</Arrows>
  </Container>
);

export default MonthYear;

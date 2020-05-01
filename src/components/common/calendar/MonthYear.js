import React from 'react';
import styled from 'styled-components';
import { CalText } from 'config/FontStyles';

const Container = styled.div`
  border: solid 1px black;
`;

const MonthYear = ({ year, month }) => (
  <Container>
    <CalText>{`${month} ${year}`}</CalText>
  </Container>
);

export default MonthYear;

import React from 'react';
import styled from 'styled-components';
import Calendar from 'components/common/calendar/Calendar';
import { Paragraph } from 'config/FontStyles';

const Container = styled.div``;

const Home = () => (
  <Container>
    <Paragraph>This is my home page and there is a Calendar here</Paragraph>
    <Calendar />
  </Container>
);

export default Home;

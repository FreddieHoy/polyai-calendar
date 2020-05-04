import React from 'react';
import styled from 'styled-components';
import Calendar from 'calendar/components/common/calendar/Calendar';
import { Paragraph } from 'calendar/config/FontStyles';

const Container = styled.div``;

const Home = () => (
  <Container>
    <Paragraph>This is my home page and there is a calendar here</Paragraph>
    <Calendar />
  </Container>
);

export default Home;

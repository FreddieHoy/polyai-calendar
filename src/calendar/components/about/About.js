import React from 'react';
import styled from 'styled-components';
import Calendar from 'calendar/components/common/calendar/Calendar';
import { Paragraph } from 'calendar/config/FontStyles';

const Container = styled.div``;

const About = () => (
  <Container>
    <Paragraph>
      This is my about page and there is also a calendar here.
    </Paragraph>
    <Calendar />
  </Container>
);

export default About;

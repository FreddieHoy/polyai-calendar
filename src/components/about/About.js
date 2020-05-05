import React from 'react';
import styled from 'styled-components';
import CalendarOld from 'components/common/calendar/CalendarOld';
import { Paragraph } from 'config/FontStyles';

const Container = styled.div``;

const About = () => (
  <Container>
    <Paragraph>
      This is my about page and this calendar uses a classical React component.
    </Paragraph>
    <CalendarOld />
  </Container>
);

export default About;

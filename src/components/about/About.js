import React from 'react';
import CalendarState from 'components/common/calendar/CalendarState';
import { HeadingOne, Paragraph } from 'config/FontStyles';

const About = () => (
  <div>
    <HeadingOne>State Calendar</HeadingOne>
    <Paragraph>
      This calendar is constructed and controlled using classical react
      component. See Home page for hooks controlled calendar.
    </Paragraph>
    <CalendarState />
  </div>
);

export default About;

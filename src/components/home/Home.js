import React from 'react';
import CalendarHooks from 'components/common/calendar/CalendarHooks';
import { HeadingOne, Paragraph } from 'config/FontStyles';

const Home = () => (
  <div>
    <HeadingOne>Hooks Calendar</HeadingOne>
    <Paragraph>
      This calendar is constructed using React hooks. See About page for state
      controlled calendar.
    </Paragraph>
    <CalendarHooks />
  </div>
);

export default Home;

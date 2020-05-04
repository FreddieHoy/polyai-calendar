import { shallow } from 'enzyme';
import React from 'react';

import WeekDays from '../WeekDays';

describe('WeekDays', () => {
  it('renders all components correctly', () => {
    const wrapper = shallow(<WeekDays />);

    expect(wrapper).toMatchSnapshot();
  });
});

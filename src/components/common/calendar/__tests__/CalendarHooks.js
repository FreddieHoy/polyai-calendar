import { shallow } from 'enzyme';
import React from 'react';

import CalendarHooks from '../CalendarHooks';

describe('CalendarHooks', () => {
  it('renders the correct components', () => {
    const wrapper = shallow(<CalendarHooks />);
    expect(wrapper).toMatchSnapshot();
  });
});

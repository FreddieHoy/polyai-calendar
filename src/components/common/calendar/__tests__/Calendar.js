import { shallow } from 'enzyme';
import React from 'react';

import CalendarOld from '../CalendarOld';

describe('CalendarOld', () => {
  it('renders the correct components', () => {
    const wrapper = shallow(<CalendarOld />);
    wrapper.setState({ today: null });
    expect(wrapper).toMatchSnapshot();
  });
});

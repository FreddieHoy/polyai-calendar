import { shallow } from 'enzyme';
import React from 'react';

import CalendarOld from '../CalendarOld';

describe('CalendarOld', () => {
  it('renders the correct components', () => {
    const wrapper = shallow(<CalendarOld />);
    wrapper.setState({ today: null });
    expect(wrapper).toMatchSnapshot();
  });

  it('adds one month to target date when switchMonth is called with e.target.id as plus', () => {
    const wrapper = shallow(<CalendarOld />);
    const e = {
      target: {
        id: 'plus'
      }
    };
    wrapper.setState({ targetDate: new Date(2020, 0, 1) });
    wrapper.instance().switchMonth(e);

    const newTargetDate = wrapper.state('targetDate');
    expect(newTargetDate).toEqual(new Date(2020, 1, 1));
  });

  it('minus one month to target date when switchMonth is called with e.target.id as plus', () => {
    const wrapper = shallow(<CalendarOld />);
    const e = {
      target: {
        id: ''
      }
    };
    wrapper.setState({ targetDate: new Date(2020, 2, 1) });
    wrapper.instance().switchMonth(e);

    const newTargetDate = wrapper.state('targetDate');
    expect(newTargetDate).toEqual(new Date(2020, 1, 1));
  });
});

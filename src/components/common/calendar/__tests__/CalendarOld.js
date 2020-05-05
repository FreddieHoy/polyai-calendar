import { shallow } from 'enzyme';
import React from 'react';

import CalendarOld from '../CalendarOld';

describe('CalendarOld', () => {
  it('adds one month to target date when switchMonth is called with e.target.id as plus', () => {
    const wrapper = shallow(<CalendarOld />);
    wrapper.setState({ targetDate: new Date(2020, 0, 1) });

    const plusArrow = wrapper.find('MonthYear').dive().find('#plus');
    plusArrow.simulate('click', { target: { id: 'plus' } });

    const newTargetDate = wrapper.state('targetDate');
    expect(newTargetDate).toEqual(new Date(2020, 1, 1));
  });

  it('minus one month to target date when switchMonth is called with e.target.id as plus', () => {
    const wrapper = shallow(<CalendarOld />);
    wrapper.setState({ targetDate: new Date(2020, 2, 1) });

    const plusArrow = wrapper.find('MonthYear').dive().find('#plus');
    plusArrow.simulate('click', { target: { id: '' } });

    const newTargetDate = wrapper.state('targetDate');
    expect(newTargetDate).toEqual(new Date(2020, 1, 1));
  });
});

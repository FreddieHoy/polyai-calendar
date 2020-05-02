import { shallow } from 'enzyme';
import React from 'react';

import MonthYear from '../MonthYear';

describe('MonthYear', () => {
  it('renders all components correctly when given the correct props', () => {
    const props = {
      year: 2020,
      month: 'January',
      switchMonth: () => {}
    };
    const wrapper = shallow(<MonthYear {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('runs function passed as prop when clicked', () => {
    const props = {
      year: 2020,
      month: 'January',
      switchMonth: jest.fn()
    };
    const wrapper = shallow(<MonthYear {...props} />);
    const plusArrow = wrapper.find('#plus');
    plusArrow.simulate('click');

    expect(props.switchMonth).toBeCalledTimes(1);
  });
});

import { shallow } from 'enzyme';
import React from 'react';

import { correctDatesArray } from '../testHelper/testArrays';
import Dates from '../Dates';

describe('Dates', () => {
  it('successfully renders calendar days with no highlight when today is null', () => {
    const props = {
      array: correctDatesArray,
      today: null
    };
    const wrapper = shallow(<Dates {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
  it('successfully renders calendar days when given an array and today is a number', () => {
    const props = {
      array: correctDatesArray,
      today: 1
    };
    const wrapper = shallow(<Dates {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});

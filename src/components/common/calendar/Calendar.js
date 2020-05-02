import React, { Component } from 'react';
import styled from 'styled-components';
import WeekDays from './WeekDays';
import Dates from './Dates';
import MonthYear from './MonthYear';
import { getYear, getMonth, getDatesArray, getHighlightedDay } from './Helper';

const Container = styled.div`
  border: 1px solid black;
  width: 352px;
  text-align: center;
`;

class Calendar extends Component {
  state = {
    targetDate: new Date(),
    month: '',
    year: '',
    today: '',
    datesArray: []
  };

  addMonth = () => {
    const nextMonth = new Date(
      this.state.targetDate.setMonth(this.state.targetDate.getMonth() + 1)
    );
    this.setState({
      targetDate: nextMonth,
      year: getYear(this.state.targetDate),
      month: getMonth(this.state.targetDate),
      datesArray: getDatesArray(this.state.targetDate),
      today: getHighlightedDay(this.state.targetDate)
    });
  };

  minusMonth = () => {
    const nextMonth = new Date(
      this.state.targetDate.setMonth(this.state.targetDate.getMonth() - 1)
    );
    this.setState({
      targetDate: nextMonth,
      year: getYear(this.state.targetDate),
      month: getMonth(this.state.targetDate),
      datesArray: getDatesArray(this.state.targetDate),
      today: getHighlightedDay(this.state.targetDate)
    });
  };
  // Change month??

  componentDidMount() {
    this.setState({
      year: getYear(this.state.targetDate),
      month: getMonth(this.state.targetDate),
      datesArray: getDatesArray(this.state.targetDate),
      today: getHighlightedDay(this.state.targetDate)
    });
  }

  render() {
    return (
      <Container>
        <MonthYear
          month={this.state.month}
          year={this.state.year}
          addMonth={this.addMonth}
          minusMonth={this.minusMonth}
        />
        <WeekDays />
        <Dates array={this.state.datesArray} today={this.state.today} />
      </Container>
    );
  }
}

export default Calendar;

import React, { Component } from 'react';
import styled from 'styled-components';
import WeekDays from './WeekDays';
import Dates from './Dates';
import MonthYear from './MonthYear';
import {
  getYear,
  getMonthName,
  getDatesArray,
  getHighlightedDay
} from './Helper';

const Container = styled.div`
  border: 1px solid black;
  width: 352px;
  text-align: center;
`;

class CalendarOld extends Component {
  state = {
    targetDate: new Date(),
    month: '',
    year: '',
    today: '',
    datesArray: []
  };

  switchMonth = (e) => {
    const nextMonthIndexNumber =
      this.state.targetDate.getMonth() + (e.target.id ? 1 : -1);

    const adjacentMonth = new Date(
      this.state.targetDate.setMonth(nextMonthIndexNumber)
    );

    this.setState({
      targetDate: adjacentMonth,
      year: getYear(this.state.targetDate),
      month: getMonthName(this.state.targetDate),
      datesArray: getDatesArray(this.state.targetDate),
      today: getHighlightedDay(this.state.targetDate)
    });
  };

  componentDidMount() {
    this.setState({
      year: getYear(this.state.targetDate),
      month: getMonthName(this.state.targetDate),
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
          switchMonth={this.switchMonth}
        />
        <WeekDays />
        <Dates array={this.state.datesArray} today={this.state.today} />
      </Container>
    );
  }
}

export default CalendarOld;

import React from 'react';
import Header from './Header';
import Modal from './Modal';
import Dates from './Dates';

class Calender extends React.Component {
  constructor(props) {
    super(props);

    this.date = new Date();
    this.dates = {};
    this.days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'];
    this.input = '';
    this.inputs = [];
    this.events = {};

    this.state = {
      month: String(this.date.getMonth()),
      year: String(this.date.getFullYear()),
      selectedDate: '',
      modal: false,
    };
  }

  getDays() {
    return (
      this.days.map(day => (
        <div
          className="calender__day"
          key={day}
        >
          {day}
        </div>
      )));
  }

  handleSelectDate = (event)  => {
    const { target } = event;
    const { selectedDate } = this.state;

    target.classList.add('selected');
    this.setState({
      selectedDate: target,
      modal: 'open',
    });
    if (selectedDate && selectedDate !== target) {
      selectedDate.classList.remove('selected');
      console.log(selectedDate)
      this.inputs = this.events[target.id] || [];
    }
  }

  handlePreviousM = () => {
    const { month } = this.state;
    if (month === 0) {
      this.setState((prevState) => {
        const previousYear = +prevState.year - 1;
        return {
          month: 12,
          year: previousYear,
        };
      });
    }
    this.setState((prevState) => {
      const previousMonth = +prevState.month - 1;
      return { month: previousMonth };
    });
    this.dates = {};
  }

  handleNextM = () => {
    const { month } = this.state;
    if (month === 11) {
      this.setState((prevState) => {
        const nextYear = +prevState.year + 1;
        return {
          month: -1,
          year: nextYear,
        };
      });
    }
    this.setState((prevState) => {
      const nextMonth = +prevState.month + 1;
      return { month: nextMonth };
    });
    this.dates = {};
  }

  handleToday = () => {
    this.setState((prevState) => {
      return {
        month: String(this.date.getMonth()),
        year: String(this.date.getFullYear()),
      };
    });
    this.dates = {};
  }

  modalClose = () => {
    this.setState({
      modal: false,
    });
    this.input = '';
  }

  inputVal = (event) => {
    this.input = event.target.value;
  }

  saveEvent = () => {
    const { selectedDate } = this.state;
    this.setState({
      modal: false,
    });
    if (this.input) {
      this.inputs.push(this.input);
    }
    console.log(selectedDate.id);
    this.events[selectedDate.id] = this.inputs;
    console.log(this.events[selectedDate.id])
    this.input = '';
  }

  handleKey = (event) => {
    const enter = 13;
    const exit = 27;
    if (event.keyCode === exit) {
      this.modalClose();
    }
    if (event.keyCode === enter) {
      this.saveEvent();
    }
  }

  render() {
    const {
      selectedDate, month, year, modal,
    } = this.state;
    return (
      <div className="calender">
        <Header
          month={month}
          year={year}
          onPreviousM={this.handlePreviousM}
          onNextM={this.handleNextM}
          onToday={this.handleToday}
        />
        <div className="calender__board">
          <div className="calender__days">
            {this.getDays()}
          </div>
          {modal
            && (
            <Modal
              date={selectedDate.id}
              month={month}
              modalClose={this.modalClose}
              saveEvent={this.saveEvent}
              inputVal={this.inputVal}
              handleKey={this.handleKey}
            />
            )
          }
          <div className="calender__dates">
            <Dates
              todayD={String(this.date.getDate())}
              month={month}
              dates={this.dates}
              todayMonth={String(this.date.getMonth())}
              year={year}
              todayYear={String(this.date.getFullYear())}
              selectedDate={selectedDate}
              events={this.events}
              handleSelectDate={this.handleSelectDate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Calender;

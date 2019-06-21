import React from 'react';
import Header from './Header';
import Modal from './Modal';
import Dates from './Dates';

class Calender extends React.Component {
	constructor(props){
		super(props);
    this.state = {
      month: this.props.month,
      year: this.props.year,
      selectedDate: '',
      modal: false
    };
    this.dates = {};
		this.date = new Date(this.state.year, this.state.month, 1);
		this.days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'];
    this.inputs = [];
    this.input = "";
    this.events = {};
	}

  getDays(){
    return (
      this.days.map((day, i) => {
        return (
          <div className="calender__day" 
               key={day + i + 1}>
            {day}
          </div>
          )}))
  }

  handleSelectDate = (event) => {
    const target = event.target;
    const parent = target.parentNode;
    if(target.classList.contains("calender__date")){
      [...parent.children].forEach((item)=>{
        item.classList.remove("selected");
      })
      target.className += " selected";
      this.setState(() => {
        if (target.firstChild.data !== " "){
          return {selectedDate: target.firstChild.data,
                  modal: "open"
      }}})
      if(this.state.selectedDate !== target.firstChild.data){
        this.inputs = this.events[target.firstChild.data + "." + 
                                  this.state.month + "." + 
                                  this.state.year] || [];
      }
    } else if(parent.classList.contains("calender__date")){
      [...parent.parentNode.children].forEach((item)=>{
        item.classList.remove("selected");
      })
      parent.className += " selected";
      this.setState({
        selectedDate: parent.firstChild.data
      })
    }
  }

  handlePreviousM = () => {
    if(this.state.month === 0){
      this.setState(prevState => {
      let previousYear = +prevState.year - 1;
      return {month:12,
              year: previousYear }
      }) 
    this.date.setFullYear(this.state.year - 1); 
    }
    this.setState(prevState => {
      let previousMonth = --prevState.month;
      return {month: previousMonth}
    }) 
    this.date.setMonth(this.state.month-1);
    this.dates = {};
  }

  handleNextM = () => {
    if(this.state.month === 11){
      this.setState(prevState => {
      let nextYear = +prevState.year + 1;
      return {month:-1,
              year: nextYear }
      })  
    }
    this.setState(prevState => {
      let nextMonth = ++prevState.month;
      return {month: nextMonth}
    })
    this.dates = {};
  }

  handleToday = () => {
    this.setState({
      month: this.props.month,
      year: this.props.year
    })
    this.dates = [];
    this.date.setMonth(this.props.month);
    this.date.setFullYear(this.props.year); 
  }

  modalClose = () => {
    this.setState({
      modal: false
    })
    this.input = "";
  }

  inputVal = (event) => {
     this.input = event.target.value;
  }

  saveEvent = () => {
    this.setState({
      modal: false
    })
    if(this.input){
      this.inputs.push(this.input);
    }
    this.events[this.state.selectedDate + "." + 
                this.state.month + "." + 
                this.state.year] = this.inputs;
    this.input = "";
  }

  handleKey = (event) => {
    const enter = 13;
    const exit = 27;
    if(event.keyCode === exit){
      this.modalClose();
    }
    if(event.keyCode === enter){
      this.saveEvent();
    }
  }

  render(){
	  return (
      <div className="calender">
        <Header 
          date = {this.props.date}
          month = {this.state.month}
          year = {this.state.year}
          onPreviousM = {this.handlePreviousM}
          onNextM = {this.handleNextM}
          onToday = {this.handleToday}
        />
      	<div className="calender__board">
    			<div className="calender__days">
    				{this.getDays()}
    			</div>
            {this.state.modal &&
              <Modal date = {this.state.selectedDate}
                     month = {this.state.month}
                     modalClose = {this.modalClose}
                     saveEvent = {this.saveEvent}
                     inputVal = {this.inputVal}
                     handleKey = {this.handleKey}
              />
            }
            <div className="calender__dates">
            <Dates date = {this.date}
                   todayD = {this.props.date}
                   month = {this.state.month}
                   dates = {this.dates}
                   todayMonth = {this.props.month}
                   year = {this.state.year}
                   todayYear = {this.props.year}
                   selectedDate = {this.state.selectedDate}
                   events = {this.events}
                   handleSelectDate = {this.handleSelectDate}
                   select = {this.state.month + this.state.year}
            />
          </div>
      	</div>
      </div>
  )}
}

export default Calender;

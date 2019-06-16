import React from 'react';
import Header from './Header';
import Modal from './Modal';
import Dates from './Dates';

class Calender extends React.Component {
	constructor(props){
		super(props);
    this.dates=[];
		this.days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'];
    this.state={
      month: this.props.month,
      year: this.props.year,
      selectedDate: '',
      modal: false
    }
		this.date = new Date(this.state.year, this.state.month, 1);
    this.inputs=[];
    this.input="";
	}

  getDays(){
    return (
      this.days.map((day, i)=>{
        return (
          <div className="calender__day" key={day + i + 1}>
          {day}
          </div>
          )}))
  }

  handleSelectDate=(event)=>{
    if(this.state.selectedDate!=event.target.firstChild.data){
      this.inputs = [];
    }
    if(event.target.classList.contains("calender__date")){
      [...event.target.parentNode.children].forEach((item)=>{
        item.classList.remove("selected");})
      event.target.className += " selected";
      this.setState({
        modal: 'open',
        selectedDate: event.target.firstChild.data
    })
    } else if(event.target.parentNode.classList.contains("calender__date")){
      [...event.target.parentNode.parentNode.children].forEach((item)=>{
        item.classList.remove("selected");})
        this.setState({
          modal: 'open',
          selectedDate: event.target.parentNode.firstChild.data
      })
    }

    
    console.log(this.state.selectedDate)
  }

  handlePreviousM =()=>{
    if(this.state.month==0){
      this.setState(prevState => {
      let previousYear = +prevState.year - 1;
      return {month:12,
              year: previousYear }
      }) 
    this.date.setFullYear(this.state.year-1); 
    }
    this.setState(prevState => {
      let previousMonth = --prevState.month;
      return {month: previousMonth}
    }) 
    this.date.setMonth(this.state.month-1);
    this.dates = [];
  }

  handleNextM =()=>{
    if(this.state.month==11){
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
    this.dates = [];
  }

  handleToday=()=>{
    this.setState({
      month: this.props.month,
      year: this.props.year
    })
    this.dates = [];
    this.date.setMonth(this.props.month);
    this.date.setFullYear(this.props.year); 
  }

  modalClose =()=>{
    this.setState({
      modal: false
    })
  }

  inputVal=(event)=>{
    this.input = event.target.value;
    
  }

  saveEvent=()=>{
    this.setState({
      modal: false
    })
    this.inputs.push(this.input);
  }

  render(){
  	  return (
        <div className="calender">
          <Header 
            date={this.props.date}
            month={this.state.month}
            year={this.state.year}
            onPreviousM={this.handlePreviousM}
            onNextM={this.handleNextM}
            onToday={this.handleToday}/>
        	<div className="calender__board">
      			<div className="calender__days">
      				{this.getDays()}
      			</div>
            {this.state.modal &&
             <Modal modalClose={this.modalClose}
                    saveEvent={this.saveEvent}
                    inputVal={this.inputVal}/>}
            <div className="calender__dates">
              
              <Dates date={this.date}
                     todayD={this.props.date}
                     month={this.state.month}
                     dates={this.dates}
                     todayMonth={this.props.month}
                     year={this.state.year}
                     todayYear={this.props.year}
                     selectedDate={this.state.selectedDate}
                     event={this.inputs}
                     handleSelectDate={this.handleSelectDate}
               />
            </div>
        	</div>
        </div>
    )}
}

export default Calender;
// {this.getDates()}
const utils = {
  debounce
};


function debounce(f, delay) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      f.call(this, ...args);
    }, delay);
  };
}
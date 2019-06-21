import React from 'react';

class Dates extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events
    } 
  }

  getDates = () => {
    const {date, dates,  month, year, selectedDate} = this.props;
    if (+date.getDay() === 0) {
      for (let i = 6; i > date.getDay(); i--) {
        dates[1 + "." + i + "." + 1 ] = [" ", ""];
      }} else {
      for (let i = 1; i < date.getDay(); i++) {
        dates[1 + "." + i + "."+ 1 ] = [" ", ""];
      }
    }
    while(+date.getMonth() === +month) {
      let day = date.getDate() + "." + month + "." + year;
      dates[day] = [date.getDate(), this.state.events[day]];
      date.setDate(+date.getDate() + 1);
    }
    
    if (date.getDay() === 0) {
      dates["40.00.0001"] = [" ", ""];
    } else if (date.getDay() !== 1) {
      for (let i = date.getDay(); i < 8; i++) {
        dates["40.00.0"+ i + 1] = [" ", ""];
      }}
    Object.entries(dates).map(([day, event]) => {
      if(+selectedDate === +event[0] &&
         this.state.events[selectedDate + "." + month + "." + year]){
        event[1] = this.state.events[event[0] + "." + month + "." + year]    
      }
    })
    return dates;
  }

  render(){
    return (
      <>
      {Object.entries(this.getDates())
         .sort((a, b) => a[0] - b[0])
         .map(([day, event], i) => {
          return(
        <div className={(+event[0] === +this.props.todayD && 
                          +this.props.todayMonth === +this.props.month &&
                          +this.props.todayYear === +this.props.year )?
                          ("calender__date today")
                          :("calender__date")}
                key={day + String(this.props.date.getDay())}
                onClick={this.props.handleSelectDate}>
          {event[0]}
          <div className="events">
            {Array.isArray(event[1])?
              event[1].map((item, i) =>{
                return <p className="event" key={item + i}>
                        {item}
                       </p>})
              :""}
          </div>
        </div>
      )})}
    </>)
  }
}

export default Dates;

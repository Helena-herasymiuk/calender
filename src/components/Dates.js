import React from 'react';


function Dates(props) {  
    if (props.date.getDay() == 0) {
      for (let i = 6; i > props.date.getDay(); i--) {
        props.dates.push("")
      }} else {
    for (let i = 1; i < props.date.getDay(); i++) {
        props.dates.push("")
      }
    }
    while (String(props.date.getMonth()) == props.month) {
        props.dates.push(props.date.getDate());
        props.date.setDate(+props.date.getDate() + 1);
    }
    
    if (props.date.getDay() == 0){
      props.dates.push("")
    } else if (props.date.getDay() != 1) {
      for (let i = props.date.getDay(); i < 8; i++) {
        props.dates.push("")
        console.log(props.date.getDay())
      }}


    // renderEvents(){
    //   if(props.selectedDate){

    //   }
    // }
       // {props.selectedDate?(props.event.map(item=><p>{item}</p>)):("")}
    return (<>{props.dates.map((day, i)=>{
        return(
        <div className={(day == props.todayD && 
                        props.todayMonth == props.month &&
                        props.todayYear == props.year )?("calender__date today"):("calender__date")}
              key={props.month + day + String(props.date.getDay()) + i}
              onClick={props.handleSelectDate}>
          {day}
          <div className="events">
             {props.selectedDate==day?(props.event.map((item, i) =><p key={item + i}>{item}</p>)):("")}
          </div>
        </div>
    )})}</>)
 
}

export default Dates;

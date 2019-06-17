import React from 'react';


function Dates(props) {  
    if (props.date.getDay() == 0) {
      for (let i = 6; i > props.date.getDay(); i--) {
        props.dates[ "1" + i + 1 ]=[" ", " "];
      }} else {
    for (let i = 1; i < props.date.getDay(); i++) {
        props.dates[ "1" + i + 1 ]=[" ", " "];
      }
    }
    while (String(props.date.getMonth()) == props.month) {
        props.dates["2" + props.date.getDate() + 1]=[props.date.getDate(),[]];
        props.date.setDate(+props.date.getDate() + 1);
    }
    
    if (props.date.getDay() == 0){
      props.dates["400" + 1 ]=[" ", " "];
    } else if (props.date.getDay() != 1) {
      for (let i = props.date.getDay(); i < 8; i++) {
        props.dates["40"+ i + 1]=[" ", " "];
        console.log(props.date.getDay())
      }}

    Object.entries(props.dates).map(([day, event])=>{
      if(props.selectedDate == event[0] 
        // &&   props.selectedYear == props.year &&
        // props.selectedMonth == props.month
        ){
        return event[1] = props.event.map((item, i) =><p key={item + i}>{item}</p>)
        } 
})

    console.log(props.dates)

    return (<>{Object.entries(props.dates).sort((a, b) => a[0] - b[0]).map(([day, event], i)=>{
        return(
        <div className={(event[0] == props.todayD && 
                        props.todayMonth == props.month &&
                        props.todayYear == props.year )?("calender__date today"):("calender__date")}
              key={props.month + day + String(props.date.getDay()) + i}
              onClick={props.handleSelectDate}>
          {event[0]}
          <div className="events">
             {event[1]}
          </div>
        </div>
    )})}</>)
 
}

export default Dates;

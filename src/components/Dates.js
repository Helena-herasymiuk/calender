import React from 'react';

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date : new Date(this.props.year, this.props.month, 1),
    };
  }

  getDates = () => {
    const {
      dates, month, year, selectedDate, events,
    } = this.props;
    let startDate = this.state.date;
    const startDay = +startDate.getDay();

    switch (startDay) {
      case 0:
        for (let i = 6; i > 0; i--) {
          dates[`0.${i}empty`] = [];
        }
        break;
      default:
        for (let i = 1; i < startDay; i++) {
          dates[`0.${i}empty`] = [];
        }
        break;
    }
    console.log(+startDate.getMonth())
    console.log(month)
    while (+startDate.getMonth() === +month) {
      const day = `${startDate.getDate()}.${+month + 1}.${year}`;
      dates[day] = [events[day]];
      startDate.setDate(+startDate.getDate() + 1);
    }

    if (startDate.getDay() === 0) {
      dates.empty32 = [];
    } else if (startDate.getDay() !== 1) {
      for (let i = startDate.getDay(); i < 8; i++) {
        dates[`empty3${i}`] = [];
      }
    }
    Object.entries(dates).map(([day, event]) => {
      if (+selectedDate.id === +day && events[selectedDate.id]) {
        event = events[day];
      }
    });
    return dates;
  }

  render() {
    const {
      todayD, todayMonth, todayYear, handleSelectDate, month, year,
    } = this.props;
    return (
      <React.Fragment>
        {Object.entries(this.getDates())
          .sort((a, b) => parseInt(a) - parseInt(b))
          .map(([day, event]) => (
            <React.Fragment key={day}>
              {parseInt(day)
                ? (
                  <div
                    className={(+parseInt(day) === +todayD
                      && +todayMonth === +month
                      && +todayYear === +year)
                      ? ('calender__date today')
                      : ('calender__date')}
                    onClick={handleSelectDate}
                    onKeyDown={handleSelectDate}
                    id={day}
                  >
                    {parseInt(day)}
                    <div className="events">
                      {(event[0])
                        ? event.map(item => (
                          <p className="event" key={item}>
                            {item}
                          </p>
                        ))
                        : ''}
                    </div>
                  </div>
                )
                : (
                  <div
                    className="calender__date empty"
                    key={day}
                  >
                  </div>
                )}
            </React.Fragment>
          ))}
      </React.Fragment>
    );
  }
}

export default Dates;

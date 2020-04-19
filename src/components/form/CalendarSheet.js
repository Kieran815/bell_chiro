import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Button from "@material-ui/core/Button";
import Card from '../Card';




const CalendarSheet = (props) => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };
  return(
    <>
      <Calendar
        calendarType="US"
        onChange={onChange}
        value={date}
        minDate={new Date()}
        maxDate={new Date(Date.now() + 7.884e9)}
      />
      {date.toString()}
    </>
  );
};

export default CalendarSheet;

import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Button from "@material-ui/core/Button";

class CalendarSheet extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {

    const  { values, inputChange, formStyle } = this.props;

    return(
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <Calendar
          calendarType="US"
          onChange={inputChange("apptDate")}
          value={values.apptDate}
          minDate={new Date()}
          maxDate={new Date(Date.now() + 7.884e9)}
        />
        </div>
        <div style={{ display: 'flex', justifyContent: "space-around" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.back}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.continue}
          >
            Continue
          </Button>
        </div>
      </div>
    );
  }

};

export default CalendarSheet;

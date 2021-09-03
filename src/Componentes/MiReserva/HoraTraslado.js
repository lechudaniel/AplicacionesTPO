import React, { Fragment, useState } from "react";
import { TextField } from "@material-ui/core";
import { MobileTimePicker } from "@material-ui/pickers";

function TimeValidation(props) {
  const [selectedDate, handleDateChange] = useState(new Date("2020-01-01 00:00"));


  return (
    <Fragment>
      <MobileTimePicker
        renderInput={props => <TextField {...props} />}
        ampm={false}
        label={props.label}
       
        minutesStep={5}
        value={selectedDate}
        onChange={date => handleDateChange(date)}
      />
    </Fragment>
  );
}

export default TimeValidation;
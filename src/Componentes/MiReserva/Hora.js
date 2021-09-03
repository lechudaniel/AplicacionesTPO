import React, { Fragment, useState } from "react";
import { TextField } from "@material-ui/core";
import { MobileTimePicker } from "@material-ui/pickers";

function TimeValidation(props) {
  const [selectedDate, handleDateChange] = useState(props.date);

  return (
    <Fragment>

      <MobileTimePicker
        renderInput={props => <TextField {...props} />}
        ampm={false}
        label={props.label}
        minTime={props.minTime}
        maxTime={props.maxTime}
        minutesStep={5}
        value={selectedDate}
        onChange={date => handleDateChange(date)}
      />

    </Fragment>
  );
}

export default TimeValidation;
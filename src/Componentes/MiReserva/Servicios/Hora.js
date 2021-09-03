import React, { Fragment, useState } from "react";
import { TextField } from "@material-ui/core";
import { MobileTimePicker } from "@material-ui/pickers";

function TimeValidation(props) {
  const [selectedDate, setSelectedDate] = useState(new Date("2020-01-01 00:00"));

  const handleDateChange = (date) => {
    setSelectedDate(date);
    var hora=date.getHours()
    var minutos=date.getMinutes()
    props.callHora(hora+":"+minutos)
  };


  return (
    <Fragment>
      <MobileTimePicker
        renderInput={props => <TextField {...props} />}
        ampm={false}
        label={props.label}
        minutesStep={5}
        value={selectedDate}
        onChange={handleDateChange}
      />
    </Fragment>
  );
}

export default TimeValidation;
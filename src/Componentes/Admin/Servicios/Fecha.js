import React from "react";
import { TextField } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";

function Fecha(props) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  

  const handleDateChange = (date) => {
    setSelectedDate(date);
   
  };

  return (
    <DatePicker
      label={props.label}
      value={selectedDate}
      disablePast
      margin="normal"
      onChange={handleDateChange}
      renderInput={props => <TextField {...props} />}
    />
  );
}

export default Fecha;
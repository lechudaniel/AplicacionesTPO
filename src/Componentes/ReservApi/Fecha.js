import React, { useEffect } from "react";
import { TextField } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";

function Fecha(props) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  function pad(n) {
    return n + 1
  }

  useEffect(() => {
    setSelectedDate(props.fecha)
  }, [props.fecha]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    var dia = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var fecha = year + "-" + pad(month) + "-" + dia;
    props.callFecha(fecha)
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
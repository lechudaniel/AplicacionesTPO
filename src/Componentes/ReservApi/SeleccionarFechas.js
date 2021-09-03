import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fecha from './Fecha'
import { InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  espacio: {
    marginTop: theme.spacing(3)
  }
}));

export default function AddressForm(props) {


  const [huespedes, setHuespedes] = React.useState(0);
  const [habitacion, setHabitacion] = React.useState('Ejecutiva');

  useEffect(() => {
    setHuespedes(props.huespedes)
  }, [props.huespedes]);

  function noches(checkIn, checkOut) {

    var aFecha1 = checkIn.split("-");
    var aFecha2 = checkOut.split("-");
    var fFecha1 = Date.UTC(aFecha1[0], aFecha1[1] - 1, aFecha1[2]);
    var fFecha2 = Date.UTC(aFecha2[0], aFecha2[1] - 1, aFecha2[2]);
    var dif = fFecha2 - fFecha1;
    var dias = Math.floor(dif / (1000 * 60 * 60 * 24));

    return dias
  }

  const handleChangeHuespedes = (event) => {
    setHuespedes(event.target.value);
    props.callHuespedes(event.target.value)
  };
  const handleChangeHabitacion = (event) => {
    setHabitacion(event.target.value);
    props.callHabitacion(event.target.value)
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container direction="row" >

        <Grid item md={12} >
          <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
            <Grid item md={12} xs={9}>
              <Typography variant="h6" gutterBottom>
                Tus fechas
              </Typography>
            </Grid>
            <Grid item md={6} xs={10}>
              <Fecha label={"Check-in"} fecha={props.CheckIn} callFecha={props.callCheckIn} />
            </Grid>
            <Grid item md={6} xs={10}>
              <Fecha label={"Check-out"} fecha={props.CheckOut} callFecha={props.callCheckOut} />
            </Grid>
          </Grid>
        </Grid>


        <Grid item md={6} xs={12}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item md={12} >
              <Typography variant="h6" gutterBottom className={classes.espacio}>
                Cantidad de huespedes
              </Typography>
            </Grid>
            <Grid item md={12}>
              <FormControl variant="standard" className={classes.formControl}>
                <InputLabel>Huespedes</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={huespedes}
                  onChange={handleChangeHuespedes}
                  label="Huespedes"
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={1}>1 Huesped</MenuItem>
                  <MenuItem value={2}>2 Huespedes</MenuItem>
                  <MenuItem value={3}>3 Huespedes</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>



        <Grid item md={6} xs={12}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item md={12} >
              <Typography variant="h6" gutterBottom className={classes.espacio}>
                Tipo de habitacion
          </Typography>
            </Grid>
            <Grid item md={12}>
              <FormControl variant="standard" className={classes.formControl}>
                <InputLabel>Habitacion</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={habitacion}
                  onChange={handleChangeHabitacion}
                  label="Huespedes"
                >
                  <MenuItem value={"Ejecutiva"}>Ejecutiva</MenuItem>
                  <MenuItem value={"Deluxe"}>Deluxe</MenuItem>
                  <MenuItem value={"Premium"}>Premium</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Typography variant="h6" gutterBottom className={classes.espacio}>
            Resumen
            </Typography>
        </Grid>

        <Grid item md={12}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item md={12}>
              <Typography gutterBottom>Precio por noche: ${props.precio} </Typography>
              <Typography gutterBottom>Cantidad de noches: {noches(props.CheckIn, props.CheckOut)}</Typography>
              <Typography gutterBottom>Total: ${noches(props.CheckIn, props.CheckOut) * parseInt(props.precio)}</Typography>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
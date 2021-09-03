import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import ReservaHelper from './../../Utils/ReservaHelper.js'
import { Divider } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props) {
  const classes = useStyles();

  function getTotalPrice(checkIn, checkOut, precio) {
    return ReservaHelper.total(checkIn, checkOut, precio);
  }

  return (
    <React.Fragment>
      <Divider />
      <Typography variant="h6" gutterBottom className={classes.title}>
        Resumen
      </Typography>
      <List disablePadding>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Noches" />
          <Typography variant="subtitle1" className={classes.total}>
            {getTotalPrice(props.CheckIn, props.CheckOut)}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Precio por Noche" />
          <Typography variant="subtitle1" className={classes.total}>
            ${parseInt(props.precio)}
          </Typography>
        </ListItem>

        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${getTotalPrice(props.CheckIn, props.CheckOut) * parseInt(props.precio)}
          </Typography>
        </ListItem>

      </List>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={6}>
          <Divider />
          <Typography variant="h6" gutterBottom className={classes.title}>
            Reserva
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography  gutterBottom>Ckeck-In: </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography  align="left" gutterBottom>{props.CheckIn}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Ckeck-Out: </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography  align="left" gutterBottom>{props.CheckOut}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography   gutterBottom>Huespedes: </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography  align="left" gutterBottom>{props.huespedes}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Tipo Habitacion:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography  align="left" gutterBottom>{props.habitacion}</Typography>
            </Grid>
          </Grid>




        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Divider />
          <Typography variant="h6" gutterBottom className={classes.title}>
            Tarjeta de Reserva
          </Typography>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <Typography gutterBottom>Tipo: </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography  gutterBottom>{props.tipoTarjeta}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Nombre y apellido:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{props.nombreTarjeta}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Numero:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography  gutterBottom>{props.numeroTarjeta}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography gutterBottom>Vencimiento: </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography  gutterBottom>{props.mesTarjeta}/{props.añoTarjeta}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { Grid } from '@material-ui/core';
import ChipServicios from './ChipServicios'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Servicios</Title>
      <Typography component="p" variant="h4">
        
      </Typography>
      <Grid className={classes.depositContext}>
       <ChipServicios/>
      </Grid>
      <div>
        <Link color="primary" onClick={props.serviciosOpen}>
          Ver Mas Servicios
        </Link>
      </div>
    </React.Fragment>
  );
}
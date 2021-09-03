import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
}));

export default function Tintoreria(props) {
  const classes = useStyles();
  const { uno, dos, tres, cuatro, sinseleccionarT } = props;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Dias a la semana</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox color="primary" checked={uno} onChange={props.handleTintoreria} name="uno" />}
            label="1 Vez a la semana"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={dos} onChange={props.handleTintoreria} name="dos" />}
            label="2 Veces a la semana"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={tres} onChange={props.handleTintoreria} name="tres" />}
            label="3 Veces a la semana"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={cuatro} onChange={props.handleTintoreria} name="cuatro" />}
            label="4 Veces a la semana"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={sinseleccionarT} onChange={props.handleTintoreria} name="sinseleccionarT" />}
            label="Sin Seleccionar"
          />
        </FormGroup>
        <FormHelperText>*Sujeto a disponibilidad del Hotel </FormHelperText>
      </FormControl>


    </div>
  );
}
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

export default function HouseKeeping(props) {
  const classes = useStyles();
  const { siete, nueve, once, trece, sinseleccionarL } = props;


  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Horario de limpieza</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox color="primary" checked={siete} onChange={props.handleLimpieza} name="siete" />}
            label="07:00 - 09:00 Hs"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={nueve} onChange={props.handleLimpieza} name="nueve" />}
            label="09:00 - 11:00 Hs"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={once} onChange={props.handleLimpieza} name="once" />}
            label="11:00 - 13:00 Hs"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={trece} onChange={props.handleLimpieza} name="trece" />}
            label="13:00 - 15:00 Hs"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={sinseleccionarL} onChange={props.handleLimpieza} name="sinseleccionarL" />}
            label="Sin Seleccionar"
          />
        </FormGroup>
        <FormHelperText>*Sujeto a disponibilidad del Hotel </FormHelperText>
      </FormControl>


    </div>
  );
}
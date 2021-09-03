import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormularioDatos from '../MiPerfil/FormularioDatos'


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function PerfilCkeckIn(props) {
  const classes = useStyles();

  function estado() {
    if (props.perfilCompletado === true && props.numero === 1)
      return "(Completado)"
    else
      return " (No completado)"
  }

  function check(){
    if (props.perfilCompletado === true && props.numero === 1)
      return true
    else
      return false
  }



  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox color="primary" checked={check()} />}
            label={"Huesped " + props.numero + estado()}
          />

        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormularioDatos
            user={props.user}
            numero={props.numero}
            modo={"CheckIn"}
            callPerfilCompletado={props.callPerfilCompletado}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  );
}
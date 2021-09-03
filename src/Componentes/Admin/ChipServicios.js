import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ChipsArray() {
  const classes = useStyles();
  const [chipData, /*setChipData*/] = React.useState([
    { check: false, label: 'Fútbol' },
    { check: true, label: ' Hockey' },
    { check: true, label: 'Tenis' },
    { check: true, label: 'Inglés' },
    { check: true, label: 'Francés' },
    { check: true, label: 'Portugués' },
    { check: true, label: 'Desayuno' },
    { check: true, label: 'Almuerzo' },
    { check: true, label: 'Merienda' },
    { check: true, label: 'Transporte' },
    { check: true, label: 'Danza' },
    { check: true, label: 'Teatro' },
    { check: true, label: 'Pintura' },
    { check: true, label: 'Música' },



   
  ]);

 

  return (
    <Grid component="ul" className={classes.root}>
      {chipData.map((data, index) => {
        if (data.check)
          return (
            <li key={index}>
              <Chip
                label={data.label}
                className={classes.chip}
              />
            </li>
          );
        else
            return(
              <div></div>
            )
      })}
    </Grid>
  );
}
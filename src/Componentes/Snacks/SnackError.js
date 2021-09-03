import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SnackError(props) {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    props.closeSnack()
  };

  return (
    <div className={classes.root}>
      <Snackbar open={props.openSnack} autoHideDuration={4000} onClose={handleClose}  anchorOrigin={{ vertical:"bottom", horizontal:"left" }} >
        <Alert severity="error" onClose={handleClose}>{props.mensaje}</Alert>
      </Snackbar>
    </div>
  );
}
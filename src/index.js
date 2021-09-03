import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@material-ui/pickers';
import DateFnsUtils from '@material-ui/pickers/adapter/date-fns';
import esLocale from "date-fns/locale/es";
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'

const localeMap = {
  es: esLocale,
};
const theme=createMuiTheme({
  palette:{
      primary: {         
          main: '#2c699a',         
          contrastText: '#ffffff',
        },
        secondary: {        
          main: '#f1c453',        
          contrastText: '#ffffff',
        },     
  }
  
})


ReactDOM.render(
  <MuiThemeProvider theme={theme}>
  <LocalizationProvider dateAdapter={DateFnsUtils} locale={localeMap.es}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LocalizationProvider>
  </MuiThemeProvider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


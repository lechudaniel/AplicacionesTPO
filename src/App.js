import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Inicio from './Paginas/Inicio'
import ReservaApi from './Paginas/ReservaApi'
import HotelHome from './Paginas/HotelHome'



function App() {
  return (

    <Switch>
      <Route exact  path='/' component={Inicio} />
      <Route  path='/ReservaOk/' component={Inicio} />
      <Route  path='/ReservaApi' component={ReservaApi} />
      <Route  path='/Hotel' component={HotelHome} />
    </Switch>

  );
}

export default App;

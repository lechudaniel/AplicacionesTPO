import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Inicio from './Paginas/Inicio'
import HotelHome from './Paginas/HotelHome'


function App() {
  return (

    <Switch>
      <Route exact  path='/' component={Inicio} />
      <Route exact  path='/Home' component={HotelHome} />
    </Switch> 

  );
}

export default App;

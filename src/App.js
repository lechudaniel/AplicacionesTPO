import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Inicio from './Paginas/Inicio'



function App() {
  return (

    <Switch>
      <Route exact  path='/' component={Inicio} />
    </Switch>

  );
}

export default App;

import {Component} from 'react';

class TurnosAPI extends Component {
    getTurnos(handleGetTurnos)
    {
        let url =  "https://integracion-escuela.herokuapp.com/escuelabackend/obtenerTurnos";
        fetch(url,{
          method: 'GET', 
          headers:{ 'Content-Type': 'application/json'}
      })
        .then ((response) => {
            console.log("response",response);
            if(response.headers.status !== 404) {
              return response.json();
            } else {
              return null;
            }
        })
        .then (responseData => {
            handleGetTurnos(responseData);
        });
    }
}

export default new TurnosAPI();
import {Component} from 'react';
import Constants from '../../Utils/Constants';
import HotelInfo from '../../Models/Hotel/HotelInfo';

class AlumnosAPI extends Component {

    createAlumno(alumnoInfo, handlePostAlumnoInfo) {
      let url = "https://integracion-escuela.herokuapp.com/escuelabackend/crearAlumno/Escalumno";
      let body = JSON.stringify( alumnoInfo );
        fetch(url,{
          method: 'Post', 
          headers:{ 'Content-Type': 'application/json'},
          body: body
      })
       .then ((response) => {
            console.log("response",response);
            return response.json();
        })
        .then (responseData => {
            handlePostAlumnoInfo(responseData);
        });
    }

    getAlumnos(handleGetAlumnos)
    {
        let url =  "https://integracion-escuela.herokuapp.com/escuelabackend/obtenerAlumnos";
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
            handleGetAlumnos(responseData);
        });
    }
}

export default new AlumnosAPI();
import {Component} from 'react';
import Constants from '../../Utils/Constants';
import HotelInfo from '../../Models/Hotel/HotelInfo';

class TitularesAPI extends Component {

    createTitular(titularInfo, handlePostTitularInfo) {
      let url = "https://integracion-escuela.herokuapp.com/escuelabackend/crearTitular/Esctitular";
      let body = JSON.stringify( titularInfo );
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
          handlePostTitularInfo(responseData);
        });
    }

    getTitulares(handleGetTiitulares)
    {
        let url =  "https://integracion-escuela.herokuapp.com/escuelabackend/obtenerTitulares";
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
            handleGetTiitulares(responseData);
        });
    }
}

export default new TitularesAPI();
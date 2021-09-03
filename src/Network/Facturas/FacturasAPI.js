import {Component} from 'react';
import Constants from '../../Utils/Constants';
import HotelInfo from '../../Models/Hotel/HotelInfo';

class FacturaAPI extends Component {

    createFactura(facturaInfo, handlePostFacturaInfo) {
      let url = "https://integracion-escuela.herokuapp.com/escuelabackend/crearCuota/Esccuota";
      let body = JSON.stringify( facturaInfo );
        fetch(url,{
          method: 'POST', 
          headers:{ 'Content-Type': 'application/json'},
          body: body
      })
       .then ((response) => {
            console.log("response",response);
            if(response.status == 200) {
              return response.json();
            } else {
              return null;
            }
        })
        .then (responseData => {
          handlePostFacturaInfo(responseData);
        });
    }

    getFacturas(handleGetFactura)
    {
      let url = "https://integracion-escuela.herokuapp.com/escuelabackend/obtenerCuotas";
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
            handleGetFactura(responseData);
        });
    }
}

export default new FacturaAPI();
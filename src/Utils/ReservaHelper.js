
import {Component} from 'react';

class ReservaHelper extends Component {

     total(checkIn,checkOut,precio){
      var aFecha1 = checkIn.split("-");
      var aFecha2 = checkOut.split("-");
      var fFecha1 = Date.UTC(aFecha1[0],aFecha1[1]-1,aFecha1[2]);
      var fFecha2 = Date.UTC(aFecha2[0],aFecha2[1]-1,aFecha2[2]);
      var dif = fFecha2 - fFecha1;
      var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
    
        return dias
      }
}

export default new ReservaHelper();
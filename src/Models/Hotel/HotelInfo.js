import CobroData from './CobroData'
import Reserva from '../Reserva'

class CobroInfo {

    static myInstance = null
    _userID = ""
    _name = ""
    _email = ""
    _hotelData = null
    _paymentInfo = []
    _reservas = []
   

    static getInstance() {
        if (CobroInfo.myInstance == null) {
            CobroInfo.myInstance = new CobroInfo();
        }

        return this.myInstance;
    }

    setHotelData(props) {
      if(props.id != null) {
        this._userID = props.id
      }

      this._name = props.nombre
      this._email = props.email
      var cobroData = new CobroData()
      cobroData.setCobroData(props)
      this._cobroData = cobroData
      
      //set Bookings info
      if (props.reservas !== undefined) {
        var reservas = props.reservas;
        reservas.forEach(r => {
          var reserva = new Reserva(r);
          reserva.setReservaInfo(r);
          this._reservas.push(reserva);
        })
      }
    }

    getName()  {
      return this._name;
    }

    getMail() {
      return this._mail;
    }

    getUserId() {
      return this._userID;
    }

    getCobroData() {
      return this._cobroData;
    }

    getHotelData() {
      return this._cobroData;
    }

    setUserType(userType) {
      this._userType = userType;
    }

    getReservas() {
      return this._reservas;
    }

    toJson() {      
      let dict

      if(this._CobroData !== null) {
         let cobroData = this._cobroData.toJson();
          dict = {
            email: this._email,
            nombre: this._name,
            razon: cobroData.razon,
            pais: cobroData.pais , 
            estado: cobroData.estado,
            ciudad: cobroData.ciudad,

          };
      } else {
        dict = {
          email: this._email,
          nombre: this._name,
        };
      }

    console.log("Cobro info", dict);
      return dict;
    }
}

  export default CobroInfo;
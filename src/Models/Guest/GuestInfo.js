import PaymentMethod from '../PaymentMethod.js'
import Perfil from './Perfil'
import Reserva from './../Reserva'
import GuestData from './GuestData.js'

class GuestInfo {

  static myInstance = null
  _userID = ""
  _name = ""
  _lastName = ""
  _email = ""
  _personalIdType = ""
  _personalId = ""
  _guestData = null
  _addressInfo = null
  _selectedProfile = null
  _paymentInfo = []
  _reservas = []

  static getInstance() {
    if (GuestInfo.myInstance == null) {
      GuestInfo.myInstance = new GuestInfo();
    }

    return this.myInstance;
  }

  //Payment Methods
  addPaymentMethod(paymentMethod) {
    let method = new PaymentMethod(paymentMethod);
    this._paymentInfo.push(method)
    console.log(this._paymentInfo)
  }

  //Reservas
  addReserva(booking) {
    let reserva = new Reserva(booking);
    reserva.setReservaInfo(booking);
    this._reservas.push(reserva)
    console.log(this._reservas);
  }

  updateReservaIfNeeded(booking) {
    let reservas = this._reservas.filter(r => r.id === booking._id);
    var reserva = null;

    if (reservas.length === 1) {
      reserva = reservas[0];
      reserva.setReservaInfo(booking);
    } else {
      reserva = new Reserva(booking);
      reserva.setReservaInfo(booking);
      this._reservas.push(reserva);
    }

    return reserva;
  }

  //Profiles
  saveSelectedProfile(profile) {
    var newProfile = new Perfil(profile);
    newProfile.setPerfilInfo(profile);
    this._selectedProfile = newProfile;
    console.log(this._selectedProfile);
  }

  //Init
  setUserData(props) {
    if (props.id !== undefined) {
      this._userID = props.id
    }

    this._name = props.nombre
    this._lastName = props.apellido
    this._email = props.email
    this._personalIdType = props.tipo
    this._personalId = props.documento

    var guestData = new GuestData()
    guestData.setHotelData(props)
    this._guestData = guestData

    //set profile info
    if (props.perfiles !== undefined) {
      let profile = new Perfil(props.perfiles);
      profile.setPerfilInfo(props.perfiles);
      this._selectedProfile = profile;
    }

    //set payment methods info
    if (props.tarjetas !== undefined) {
      var methods = props.tarjetas;
      methods.forEach(m => {
        var method = new PaymentMethod(m);
        this._paymentInfo.push(method);
      })
    }

    //set Bookings info
    if (props.reservas !== undefined) {
      var reservas = props.reservas;
      reservas.forEach(r => {
        var reserva = new Reserva(r);
        reserva.setReservaInfo(r);
        this._reservas.push(reserva);
      })
    }

    let messi = "";
  }

  //Getters
  getName() {
    return this._name;
  }

  getMail() {
    return this._mail;
  }

  getUserId() {
    return this._userID;
  }

  getPaymentMethods() {
    return this._paymentInfo;
  }

  getSelectedProfile() {
    return this._selectedProfile;
  }

  getReservas() {
    return this._reservas;
  }
  getGuestData() {
    return this._guestData;
  }

  toJson() {
    var dict = {}
    dict["email"] = this._email;
    dict["nombre"] = this._name;
    dict["apellido"] = this._lastName;
    dict["tipo"] = this._personalIdType;
    dict["documento"] = this._personalId;

    //Address
    if (this._guestData !== null) {
      let guestInfo = this._guestData.toJson();
      dict["pais"] = guestInfo.pais;
      dict["estado"] = guestInfo.estado;
      dict["ciudad"] = guestInfo.ciudad;
      dict["codigoPostal"] = guestInfo.codigoPostal;
      dict["direccion1"] = guestInfo.direccion1;
      dict["compañia"] = guestInfo.compañia;
    }

    //Payment methods
    var paymentMethods = [];
    if (this._paymentInfo !== []) {
      this._paymentInfo.forEach(m => {
        var tar = {}
        let method = m.toJson();
        tar["name"] = method.name;
        tar["cardNumber"] = method.cardNumber;
        tar["mes"] = method.mes;
        tar["año"] = method.año;
        tar["securityCode"] = method.securityCode;
        tar["tipo"] = method.tipo;
        paymentMethods.push(tar);
      });
    }

    dict["tarjetas"] = paymentMethods;

    //Profiles
    if (this._selectedProfile !== null) {
      let perfil = this._selectedProfile.toJson();
      dict["perfiles"] = perfil;
    }

    console.log("guestInfo", dict);

    return dict;
  }
}

export default GuestInfo;
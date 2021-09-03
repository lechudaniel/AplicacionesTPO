class Reserva {
  constructor(props) {
    this._id = "";
    this._bookingNumber = "";
    this._hotelName = "";
    this._hotelEmail = "";
    this._huesped = "";
    this._checkIn = "";
    this._checkOut = "";
    this._cantHuespedes = "";
    this._tipoHabitacion = "";
    this._precio = "";
    this._numeroTarjeta = "";
    this._services = [];
  }

  setReservaInfo(props) {
    this._id = props._id;
    this._bookingNumber = props.numero;
    this._hotelName = props.nombreHotel;
    this._hotelEmail = props.hotel;
    this._huesped = props.huesped;
    this._checkIn = props.checkIn;
    this._checkOut = props.checkOut;
    this._cantHuespedes = props.cantHuespedes;
    this._tipoHabitacion = props.tipoHabitacion;
    this._precio = props.precio;
    this._numeroTarjeta = props.numeroTarjeta;

    if (props.servicios !== undefined) {
      this._services = props.servicios;
    } else {
      this._services = [ {
        categoria: "",
      }];
    }
    
  }

  toJson() {
    return {
      hotel: this._hotelEmail,
      huesped: this._huesped,
      checkIn: this._checkIn,
      checkOut: this._checkOut,
      cantHuespedes: this._cantHuespedes,
      tipoHabitacion: this._tipoHabitacion,
      precio: this._precio,
      numeroTarjeta: this._numeroTarjeta,
      servicios: this._services,
    };
  }

  //Getters
  get id() {
    return this._id;
  }

  get bookingNumber() {
    return this._bookingNumber;
  }

  get  hotelName() {
    return this._hotelName;
  }

  get  hotelEmail() {
    return this._hotelEmail;
  }

  get huesped() {
    return this._huesped;
  }

  get checkIn() {
    return this._checkIn;
  }

  get checkOut() {
    return this._checkOut;
  }

  get cantidadHuespedes() {
    return this._cantHuespedes;
  }

  get tipoHabitacion() {
    return this._tipoHabitacion;
  }
    
  get precio() {
    return this._precio;
  }

  get numeroTarjeta() {
    return this._numeroTarjeta;
  }

  get services() {
    return this._services;
  }
}

export default Reserva;
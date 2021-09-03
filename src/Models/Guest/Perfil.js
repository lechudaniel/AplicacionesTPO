class Perfil {
  constructor(props) {
    this._perfil = "";
    this._bebida = "";
    this._acompaniamiento = "";
    this._limpieza = "";
    this._tintoreria = "";
  }

  setPerfilInfo(props) {
    this._perfil = props.perfil;
    this._bebida = props.bebida;
    this._acompaniamiento = props.acompaniamiento;
    this._limpieza = props.limpieza;
    this._tintoreria = props.tintoreria;
  }

  toJson() {
      return {
          perfil :this._perfil,
          bebida: this._bebida,
          acompaniamiento: this._acompaniamiento,
          limpieza: this._limpieza,
          tintoreria: this._tintoreria,
      };
  }

  //Getters
  get perfil() {
    return this._perfil;
  }
}


  export default Perfil;
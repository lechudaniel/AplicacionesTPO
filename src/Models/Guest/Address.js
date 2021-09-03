class Address {
    constructor(props) {
      this.state = {
        direccion1: "",
        direccion2: "",
        ciudad: "",
        estado: "",
        codigoPostal: "",
        pais: ""
      };
    }

    setAddressInfo(props) {
      var address2 = ""
      if(props.direccion2 != null) {
        address2 = props.direccion2
      }

      this.state = {
        direccion1: props.direccion1,
        direccion2: address2,
        ciudad: props.ciudad,
        estado: props.estado,
        codigoPostal: props.codigoPostal,
        pais: props.pais
      };
    }

    toJson() {
        return {
            direccion1 :this.state.direccion1,
            direccion2: this.state.direccion2,
            ciudad: this.state.ciudad,
            estado: this.state.estado,
            codigoPostal: this.state.codigoPostal,
            pais: this.state.pais

        };
    }
  }

  export default Address;
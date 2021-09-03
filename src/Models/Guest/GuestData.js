
class GuestData {
    constructor(props) {
        this.state = {
            nombre:"",           
            apellido: "",
            tipo:"",
            documento:"",
            email:"",
            pais: "",
            estado: "",
            ciudad: "",
            codigoPostal: "",
            direccion1: "",
            compañia:"",
        };
    }

    setHotelData(props) {

        this.state = {
            nombre:props.nombre,
            apellido: props.apellido,
            tipo:props.tipo,
            documento:props.documento,
            email:props.email,
            pais: props.pais,
            estado: props.estado,
            ciudad: props.ciudad,
            codigoPostal: props.codigoPostal,
            direccion1: props.direccion1,    
            compañia: props.compañia
        };
    }

    toJson() {
        return {
            nombre:this.state.nombre,
            apellido: this.state.apellido,
            tipo: this.state.tipo,
            documento: this.state.documento,
            email:this.state.email,
            pais: this.state.pais,
            estado: this.state.estado,
            ciudad: this.state.ciudad,
            codigoPostal: this.state.codigoPostal,
            direccion1: this.state.direccion1,           
            compañia: this.state.compañia,
        };
    }
}

export default GuestData;
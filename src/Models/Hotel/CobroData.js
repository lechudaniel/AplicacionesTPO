class CobroData {
    constructor(props) {
        this.state = {
            codigoCobro:"",           
            nombrePago: "",
            emailPago:"",
            documento: "",
            telefono: "",
            alumno: "",
            titular: "",
            url: "",
        };
    }

    setCobroData(props) {

        this.state = {
            codigoCobro:props.codigoCobro,
            nombrePago: props.nombrePago,
            emailPago:props.emailPago,
            documento: props.documento,
            telefono: props.telefono,
            alumno: props.alumno,
        };
    }

    toJson() {
        return {
            codigoCobro:this.state.nombre,
            nombreCobro: this.state.nombreCobro,
            emailCobro:this.state.emailCobro,
            documento: this.state.documento,
            telefono: this.state.telefono,
            alumno: this.state.alumno
            ,
       
        };
    }
}

export default CobroData;
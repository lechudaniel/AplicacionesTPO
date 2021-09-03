class PaymentMethod {
    constructor(props) {
      this.state = {
        name: props.name,
       // name: props.lastName,
        cardNumber: props.cardNumber,
        mes:props.mes,
        año:props.año,
        securityCode: props.securityCode,
        tipo:props.tipo
      };
    }

    toJson() {
        return {
            name: this.state.name,
            cardNumber: this.state.cardNumber,
            mes: this.state.mes,
            año: this.state.año,
            securityCode: this.state.securityCode,
            tipo: this.state.tipo,
        };
    }

    parsePaymentMethods(data) {
        return  data.items.map( dictionary => { return PaymentMethod(dictionary) })
      }
  }

  export default PaymentMethod;
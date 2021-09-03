import React from 'react';
import './TarjetaCheta.scss';
import MainScreen from './screens/MainScreen';

function TarjetaCheta(props) {
    return <MainScreen
        cardNumber={props.cardNumber}
        cardHolder={props.cardHolder}
        cardMonth={props.cardMonth}
        cardYear={props.cardYear}
        callCodTarjeta={props.callCodTarjeta}
    />;
}

export default TarjetaCheta;

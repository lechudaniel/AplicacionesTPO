import React from 'react';
import './TarjetaCheta.scss';
import MainScreen from './screens/MainScreen';

function TarjetaCheta(props) {
    return <MainScreen 
         callNumeroTarjeta={props.callNumeroTarjeta}
        callNombreTarjeta={props.callNombreTarjeta}
        callMesTarjeta={props.callMesTarjeta}
        callAñoTarjeta={props.callAñoTarjeta}
        callCodTarjeta={props.callCodTarjeta}
        callTipoTarjeta={props.callTipoTarjeta}
    />;
}

export default TarjetaCheta;

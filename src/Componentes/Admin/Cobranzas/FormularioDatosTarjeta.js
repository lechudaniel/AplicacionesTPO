import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography, Paper, ButtonBase, Divider, Button } from '@material-ui/core';
import visa from './Imagenes/Visa.png'
import mastercard from './Imagenes/mastercard.png'
import amex from './Imagenes/amex.png'
import mp from './Imagenes/mercadopago-logo.png'
import Tarjeta from './TarjetaCheta/TarjetaCheta';
import CobranzasAPI from '../../../Network/Cobranzas/CobranzasAPI';
import TarjetaVerificar from './TarjetaVerificar/TarjetaCheta'





const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    cardArea: {
        padding: theme.spacing(1),
        width: "100%",
        minHeight: 60,
    },
    logoVisa: {
        width: 100,
        height: 45,
        [theme.breakpoints.down('xs')]: {
            width: 70,
            height: 30,
        },
    },
    logoMaster: {
        width: 90,
        height: 45,
        [theme.breakpoints.down('xs')]: {
            width: 70,
            height: 40,
        },
    },
    logoAmex: {
        width: 60,
        height: 45,
        [theme.breakpoints.down('xs')]: {
            width: 70,
            height: 40,
        },
    },
    logoMp: {
        width: 100,
        height: 35,
        [theme.breakpoints.down('xs')]: {
            width: 75,
            height: 25,
        },
    },

    image: {
        position: 'relative',
        padding: theme.spacing(1),
        width: "100%",
        minHeight: 60,
        [theme.breakpoints.down('xs')]: {
        },
        '&:hover': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.1,
                borderLeft: "6px solid #01579b",
            },
        },
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0,
        transition: theme.transitions.create('opacity'),
        borderLeft: "6px solid #01579b",

    },
})

class FormularioDatosTarjeta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            numeroTarjeta: "",
            nombreTarjeta: "",
            mesTarjeta: "",
            añoTarjeta: "",
            codTarjeta: "",
            tipoTarjeta: "",
            tarjetas: [],
            edicion:true,
            loading: false,
            verificar: false,
            codVerificar: false,
            ver: {
                cardNumber: '#### #### #### ####',
                name: 'FULL NAME',
                mes: '',
                año: '',
                securityCode: '',
                tipo: ""
            },
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.edicionOpen = this.edicionOpen.bind(this);
        this.verificar = this.verificar.bind(this);
    }

    verificar(){
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    edicionOpen() {
        this.setState({ edicion: true, redOnly: false })
    }

    maskCardNumber = (x) => {
        let cardNumberArr = x.split('');
        cardNumberArr.forEach((val, index) => {
            if (index > 1 && index < 4) {
                if (cardNumberArr[index] !== ' ') {
                    cardNumberArr[index] = 'x';
                }
            }
        });

        return cardNumberArr;
    };

    agregar() {
        if (this.state.numeroTarjeta !== "" &&
            this.state.nombreTarjeta !== "" &&
            this.state.mesTarjeta !== "" &&
            this.state.añoTarjeta !== "" &&
            this.state.codTarjeta !== "" &&
            this.state.tipoTarjeta !== ""
        ) {
            var dict = this.getCardModel();
            console.log(dict)
            this.postCardInfo(dict)
        } else {
            alert("error")
        }
    }
    getCardModel() {
        return {
            cardNumber: this.state.numeroTarjeta,
            name: this.state.nombreTarjeta,
            mes: this.state.mesTarjeta,
            año: this.state.añoTarjeta,
            securityCode: this.state.codTarjeta,
            tipo: this.state.tipoTarjeta,
        };
    }

    //ApiCalls
    postCardInfo = (cardInfo) => {
        this.setState({ loading: true });
        CobranzasAPI.postTarjeta(cardInfo, this.handleCardInfo.bind(this));
    }

    handleCardInfo = async (cardInfo) => {
        this.setState({ loading: false });
        if (cardInfo.error == null) {
            //post was successful
            console.log("Guardado con exito")
            this.setState({ open: false })
        } else {
            //get user with email failed
            console.log("Errrooor pa")
        }
    }


    callNumeroTarjeta = (x) => {
        this.setState({ numeroTarjeta: x });
        if (this.props.modo === "ReservaApi")
            this.props.callNumeroTarjeta(x)
    }
    callNombreTarjeta = (x) => {
        this.setState({ nombreTarjeta: x });
        if (this.props.modo === "ReservaApi" )
            this.props.callNombreTarjeta(x)
    }
    callMesTarjeta = (x) => {
        this.setState({ mesTarjeta: x });
        if (this.props.modo === "ReservaApi" )
            this.props.callMesTarjeta(x)
    }
    callAñoTarjeta = (x) => {
        this.setState({ añoTarjeta: x });
        if (this.props.modo === "ReservaApi" )
            this.props.callAñoTarjeta(x)
    }
    callCodTarjeta = (x) => {
        this.setState({ codTarjeta: x });
        if (this.props.modo === "ReservaApi" )
            this.props.closeVerfyCard()
    }
    callVerificaCod = (x) => {
        this.setState({ codVerificar: x });
        if (this.props.modo === "ReservaApi" )
            this.props.callVerTarjeta(x)
    }
    callTipoTarjeta = (x) => {
        this.setState({ tipoTarjeta: x });
        if (this.props.modo === "ReservaApi" )
            this.props.callTipoTarjeta(x)
    }

    

    verificarTarjeta(state) {
        this.setState({ open: false, verificar: true, ver: state })
        if (this.props.modo === "ReservaApi") {
            this.props.openVerfyCard()
            this.props.callNumeroTarjeta(state.cardNumber)
            this.props.callNombreTarjeta(state.name)
            this.props.callMesTarjeta(state.mes)
            this.props.callAñoTarjeta(state.año)
            this.props.callTipoTarjeta(state.tipo)
            this.props.callCodTarjeta(state.securityCode)
        }
    }

    nuevaTarjeta() {
        this.setState({ open: true, verificar: false })
        if (this.props.modo === "ReservaApi")
            this.props.closeVerfyCard()
    }

    renderVerificar() {
        if (this.state.verificar) {
            return (
                <Grid>
                    <TarjetaVerificar
                        cardNumber={this.state.ver.cardNumber}
                        cardHolder={this.state.ver.name}
                        cardMonth={this.state.ver.mes}
                        cardYear={this.state.ver.año}
                        callCodTarjeta={this.callVerificaCod}
                    />
                </Grid>
            )
        }
    }



    tipoTarjeta(tipo) {
        const { classes } = this.props;
        if (tipo === "visa")
            return <img src={visa} alt="visa" className={classes.logoVisa} />
        else
            if (tipo === "mastercard")
                return <img src={mastercard} alt="visa" className={classes.logoMaster} />
            else
                if (tipo === "amex")
                    return <img src={amex} alt="visa" className={classes.logoAmex} />
    }
    ultimosTres(x) {
        let cardNumberArr = x.split('');
        cardNumberArr.forEach((val, index) => {
            if (index > -1 && index < 14) {
                if (cardNumberArr[index] !== ' ') {
                    cardNumberArr[index] = '';
                }
            }
        });
        return cardNumberArr;
    }


    render() {
        const { classes } = this.props;

        if (this.props.modo === "ReservaApi" || this.props.modo === "CheckOut") {


            return (
                <Grid container spacing={3} justify="center" alignItems="center">
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper>

                            {this.state.tarjetas.map((item, index) =>
                                <div key={index}>
                                    <ButtonBase className={classes.image} onClick={() => this.verificarTarjeta(item.state)}>
                                        <Grid container justify="center" alignItems="center" >
                                            <Grid item md={3} xs={3}>
                                                {this.tipoTarjeta(item.state.tipo)}
                                            </Grid>
                                            <Grid item md={9} xs={9}>
                                                <Typography variant="h6">Visa Débito terminada en {this.ultimosTres(item.state.cardNumber)}</Typography>
                                            </Grid>
                                        </Grid>
                                        <span className={classes.imageBackdrop} />
                                    </ButtonBase>
                                    <Divider />
                                </div>

                            )}
                            <ButtonBase className={classes.image}     >
                                <Grid container justify="center" alignItems="center" >
                                    <Grid item md={3} xs={4}>
                                        <img src={mp} alt="visa" className={classes.logoMp} />
                                    </Grid>
                                    <Grid item md={9} xs={8}>
                                        <Typography variant="body1" style={{ color: "#009ee3" }}>Pague con su cuenta de MercadoPago</Typography>
                                    </Grid>
                                </Grid>
                                <span className={classes.imageBackdrop} />
                            </ButtonBase>
                            <Divider />
                            <ButtonBase className={classes.image} onClick={() => this.nuevaTarjeta()}    >
                                <Grid container justify="center" alignItems="center" >
                                    <Grid item md={11} xs={10}>
                                        <Typography variant="body1" color="primary" align="left">Pagar con otra tarjeta</Typography>
                                    </Grid>
                                </Grid>
                                <span className={classes.imageBackdrop} />
                            </ButtonBase>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        
                        {this.renderVerificar()}
                    </Grid>
                </Grid>
            );
        } else {
            return (
                <Grid container spacing={3} justify="center" alignItems="center">
                    
                    <Grid item xs={12} md={7} lg={7}>
                    
                        
                            <Tarjeta
                                callNumeroTarjeta={this.callNumeroTarjeta}
                                callNombreTarjeta={this.callNombreTarjeta}
                                callMesTarjeta={this.callMesTarjeta}
                                callAñoTarjeta={this.callAñoTarjeta}
                                callCodTarjeta={this.callCodTarjeta}
                                callTipoTarjeta={this.callTipoTarjeta}
                            />
                            
                            <Grid container alignItems="flex-end" justify="flex-end">
                                <Grid item md={3} xs={5}>
                                    <Button variant="outlined" color="primary" size="large" onClick={this.props.handleCloseModal}>Cancelar</Button>
                                </Grid>
                                <Grid item md={3} xs={5}>
                                    <Button variant="contained" color="primary" size="large" onClick={this.agregar.bind(this)}>VALIDAR</Button>
                                </Grid>
                            </Grid>

                        
                    </Grid>
        
                </Grid >
            );
        }
    }
}

FormularioDatosTarjeta.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FormularioDatosTarjeta);
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import CompletarReserva from '../Componentes/ReservApi/CompletarReserva'
import firebase from '../firebaseConfig'
import DialogLogin from './../Componentes/login/DialogLogin.js'
import AuthController from '../Componentes/login/AuthController';
import GuestAPI from '../Network/Guest/GuestAPI';
import GuestInfo from '../Models/Guest/GuestInfo';
import LoadinPage from './LoadingPage/Index'



const styles = theme => ({

})

class General extends Component {

    constructor() {
        super();
        this.state = {
            id: "",
            emailHotel: "",
            CheckIn: "",
            CheckOut: "",
            huespedes: 0,
            precio: "",
            habitacion: "Ejecutivo",
            numeroTarjeta: "",
            nombreTarjeta: "",
            mesTarjeta: "",
            añoTarjeta: "",
            verTarjeta: "",
            codTarjeta: "",
            tipoTarjeta: "",
            fechaHoy: "",
            verifyCard: false,
            showLogin: true,
            user: null,
            verificar: false,
            loading: false,
            data: [],
        }
    }


    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user: user,
            });
            this.getGuestInfo(user.email)
        });


        const query = new URLSearchParams(this.props.location.search);
        const id = query.get('id')
        const emailHotel = query.get('email')
        const CheckIn = query.get('CheckIn')
        const CheckOut = query.get('CheckOut')
        const huespedes = query.get('huespedes')
        const precio = query.get('precio')
        let num = parseInt(huespedes)

        this.setState({
            id: id,
            emailHotel: emailHotel,
            CheckIn: CheckIn,
            CheckOut: CheckOut,
            huespedes: +num,
            precio: precio,
        })

        var date = new Date()
        var dia = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var fecha = year + "-" + this.pad(month) + "-" + dia;
        this.setState({ fechaHoy: fecha })

    }
    pad(n) {
        return n + 1
    }

    getGuestInfo(email) {
        this.setState({ loading: true });
        GuestAPI.getGuestInfo(email, this.handleGetGuestInfo);
    }

    handleGetGuestInfo = async (guestInfo) => {
        this.setState({ loading: false, });
        if (guestInfo.data === undefined || guestInfo === null) {
            //show error message

        } else {
            let userData = guestInfo.data.usuario;
            console.log(userData.email)
            if (userData !== null) {
                this.setState({ data: userData })
                GuestInfo.getInstance().setUserData(userData);
            }
        }
    }

    callHuespedes = (x) => {
        this.setState({ huespedes: x });
    }
    callCheckIn = (x) => {
        this.setState({ CheckIn: x });
    }
    callCheckOut = (x) => {
        this.setState({ CheckOut: x });
    }
    callNumeroTarjeta = (x) => {
        this.setState({ numeroTarjeta: x });
    }
    callNombreTarjeta = (x) => {
        this.setState({ nombreTarjeta: x });
    }
    callMesTarjeta = (x) => {
        this.setState({ mesTarjeta: x });
    }
    callAñoTarjeta = (x) => {
        this.setState({ añoTarjeta: x });
    }
    callCodTarjeta = (x) => {
        this.setState({ codTarjeta: x });
    }
    callVerTarjeta = (x) => {
        this.setState({ verTarjeta: x });
    }
    callTipoTarjeta = (x) => {
        this.setState({ tipoTarjeta: x });
    }
    callHabitacion = (x) => {
        this.setState({ habitacion: x });
    }

    openDialogLogin = () => {
        this.setState({ showLogin: true });
    }


    closeDialogLogin = () => {
        this.setState({ showLogin: false });
    }
    callbackVerificar = (x) => {
        this.setState({ verificar: x })
    }
    handleCloseVerificar = () => {
        this.setState({ verificar: false });
        AuthController.handleLogout()
    }

    verificacion() {
        if (this.state.codTarjeta === this.state.verTarjeta)
            return true
        else
            return false
    }


    isloginFacebook() {
        var face = firebase.auth().currentUser.providerData[0].providerId
        if (face === "facebook.com")
            return true
        else
            return false
    }


    openVerfyCard = () => {
        this.setState({ verifyCard: true })
    }
    closeVerfyCard = () => {
        this.setState({ verifyCard: false })
    }

    render() {
        //const { classes } = this.props;

        if (this.state.user) {
            if (this.state.user.emailVerified || this.isloginFacebook() === true) {
                if (this.state.loading)
                    return (
                        <LoadinPage />
                    )
                else
                    return (
                        <Grid container justify="center" alignItems="center">
                            <Grid item xs={12} md={8} lg={9}>
                                <CompletarReserva
                                    id={this.state.id}
                                    emailHotel={this.state.emailHotel}
                                    CheckIn={this.state.CheckIn}
                                    CheckOut={this.state.CheckOut}
                                    huespedes={this.state.huespedes}
                                    precio={this.state.precio}
                                    habitacion={this.state.habitacion}
                                    callHabitacion={this.callHabitacion}
                                    callNumeroTarjeta={this.callNumeroTarjeta}
                                    callNombreTarjeta={this.callNombreTarjeta}
                                    callMesTarjeta={this.callMesTarjeta}
                                    callAñoTarjeta={this.callAñoTarjeta}
                                    callCodTarjeta={this.callCodTarjeta}
                                    callVerTarjeta={this.callVerTarjeta}
                                    callTipoTarjeta={this.callTipoTarjeta}
                                    verificacion={this.verificacion}
                                    callHuespedes={this.callHuespedes}
                                    callCheckIn={this.callCheckIn}
                                    callCheckOut={this.callCheckOut}
                                    user={this.state.user}
                                    numeroTarjeta={this.state.numeroTarjeta}
                                    nombreTarjeta={this.state.nombreTarjeta}
                                    mesTarjeta={this.state.mesTarjeta}
                                    añoTarjeta={this.state.añoTarjeta}
                                    codTarjeta={this.state.codTarjeta}
                                    verTarjeta={this.state.verTarjeta}
                                    tipoTarjeta={this.state.tipoTarjeta}
                                    verifyCard={this.state.verifyCard}
                                    openVerfyCard={this.openVerfyCard}
                                    closeVerfyCard={this.closeVerfyCard}
                                    fechaHoy={this.state.fechaHoy}
                                />
                            </Grid>

                        </Grid>
                    )
            } else {
                return (
                    <DialogLogin
                        openVerificar={this.state.verificar}
                        onCloseVerificar={this.handleCloseVerificar}
                        verificar={this.callbackVerificar}
                    />
                )
            }

        } else {
            return (
                <DialogLogin
                    open={this.state.showLogin}
                    onClose={this.closeDialogLogin}
                    verificar={this.callbackVerificar}
                />
            );
        }
    }
}

General.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(General);
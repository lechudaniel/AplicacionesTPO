import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Galeria from '../Componentes/Galeria'
import IniciarSesion from '../Componentes/login/IniciarSesion'
import { DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Dialog, IconButton } from '@material-ui/core';
import firebase from '../firebaseConfig'
import AuthController from '../Componentes/login/AuthController'
import Registro from '../Componentes/login/Registro'
import Home from './Home'
import GuestAPI from '../Network/Guest/GuestAPI'
import GuestInfo from '../Models/Guest/GuestInfo'
import HotelHome from './HotelHome'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LoadinPage from './LoadingPage/Index'
import HotelAPI from '../Network/Hotel/HotelAPI';
import HotelInfo from '../Models/Hotel/HotelInfo';



const styles = theme => ({
    root: {
        height: '100vh',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    inicio: {
        marginTop: theme.spacing(5),
    }
})

class Inicio extends Component {

    constructor() {
        super();
        this.state = {
            user: null,
            inicio: true,
            verificar: false,
            id: "",
            CheckIn: "",
            CheckOut: "",
            huespedes: "",
            precio: "",
            completado: false,
            modoHotel: true,// Si se va a trabajar en el hotel ponerlo en true
            loading: true,
            data: [],
        };

    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user: user
            });
            //Diferencia entre modo hotel y trae el correcto            
            if (this.state.modoHotel) {
                //GET RESERVA HOTEL
                this.getHotelInfo(user.email)
            }
            else {
                //GET RESERVA HUESPED
                 this.getGuestInfo(user.email)
            }
    });


        if (this.props.location.state !== undefined) {
            const {
                id,
                CheckIn,
                CheckOut,
                huespedes,
                precio,
            } = this.props.location.state
            this.setState({
                id: id,
                CheckIn: CheckIn,
                CheckOut: CheckOut,
                huespedes: huespedes,
                precio: precio,
            })
        }
    }


    getGuestInfo(email) {
        this.setState({ loading: false });
        GuestAPI.getGuestInfo(email, this.handleGetGuestInfo);
    }
    getHotelInfo(email) {
        this.setState({ loading: false });
        HotelAPI.getHotelInfo(email, this.handleGetHotelInfo);
    }


    handleGetGuestInfo = async (guestInfo) => {
        this.setState({ loading: false, });
        if (guestInfo.data === undefined || guestInfo === null) {
            //show error message

        } else {
            let userData = guestInfo.data.usuario;
            console.log(userData.email)
            if (userData !== null) {
                if ((userData.apellido &&
                    userData.nombre && userData.email
                    && userData.tipo && userData.documento
                    && userData.pais && userData.estado
                    && userData.ciudad && userData.codigoPostal
                    && userData.direccion) !== "") {
                    this.callPerfilCompletado()
                    this.setState({ data: userData.reservas })

                }
                else {
                    this.callPerfilNoCompletado()
                }
                GuestInfo.getInstance().setUserData(userData);
            }
        }
    }
    handleGetHotelInfo = async (hotelInfo) => {
        this.setState({ loading: false, });
        if (hotelInfo.data === undefined || hotelInfo === null) {
            //show error message
            console.log(hotelInfo)
        } else {
            let userData = hotelInfo.data.hotel;
            console.log(userData.email)
            if (userData !== null) {
                HotelInfo.getInstance().setHotelData(userData)
            }
        }
    }

    callPerfilCompletado = () => {
        this.setState({ completado: true })
    }
    callPerfilNoCompletado = () => {
        this.setState({ completado: false })
    }

    callbackInicio = (x) => {
        this.setState({ inicio: x })
    }
    callbackVerificar = (x) => {
        this.setState({ verificar: x })
    }
    handleCloseVerificar = () => {
        this.setState({ verificar: false });
        AuthController.handleLogout()
    }
    callCheckIn = (x) => {
        this.setState({ CheckIn: x });
    }
    callCheckOut = (x) => {
        this.setState({ CheckOut: x });
    }
    callHuespedes = (x) => {
        this.setState({ huespedes: x });
    }
    callHotel = (x) => {
        this.setState({ modoHotel: x })
    }
  

    isloginFacebook() {
        var face = firebase.auth().currentUser.providerData[0].providerId
        if (face === "facebook.com")
            return true
        else
            return false
    }

    login() {
        const { classes } = this.props;
        if (this.state.inicio === true) {
            return (
                <Grid className={classes.inicio}>
                    <IniciarSesion
                        modoHotel={this.state.modoHotel}
                        inicio={this.state.inicio}
                        callHotel={this.callHotel}
                        callInicio={this.callbackInicio}                        
                    />
                </Grid>

            )
        }
        else {
            if (this.state.modoHotel === true) {
                return (
                    <Grid className={classes.inicio}>
                        <IniciarSesion modoHotel={this.state.modoHotel} inicio={this.callbackInicio} />
                    </Grid>
                )
            } else {
                return (
                    <Registro inicio={this.callbackInicio} verificar={this.callbackVerificar} />
                )
            }

        }
    }
    volver() {
        if (this.state.modoHotel) {
            return (
                <IconButton onClick={() => this.callHotel(false)}>
                    <ArrowBackIcon />
                </IconButton>
            )
        } else {
            if (this.state.inicio === false) {
                return (
                    <IconButton onClick={() => this.callbackInicio(true)}>
                        <ArrowBackIcon />
                    </IconButton>
                )
            }
        }

    }

    render() {
        const { classes } = this.props;
        if (this.state.user) {
            if (this.state.modoHotel) {
                if (this.state.loading)
                    return (
                        <LoadinPage />
                    )
                else
                    return (
                        <HotelHome
                            user={this.state.user}
                        />
                    )
            } else {
                if (this.state.user.emailVerified || this.isloginFacebook() === true) {
                    if (this.state.loading)
                        return (
                            <LoadinPage />
                        )
                    else
                        return (
                            <Home
                                user={this.state.user}
                                id={this.state.id}
                                CheckIn={this.state.CheckIn}
                                CheckOut={this.state.CheckOut}
                                huespedes={this.state.huespedes}
                                precio={this.state.precio}
                                callCheckIn={this.callCheckIn}
                                callCheckOut={this.callCheckOut}
                                callHuespedes={this.callHuespedes}
                                perfilCompletado={this.state.completado}
                                callPerfilCompletado={this.callPerfilCompletado}
                                data={this.state.data}
                            />
                        )
                } else {
                    return (
                        <Grid container component="main" className={classes.root}>

                            <CssBaseline />
                            <Grid item xs={false} sm={4} md={7} className={classes.sectionDesktop}>
                                <Galeria />
                            </Grid>
                            <Grid item xs={false} sm={4} md={7} className={classes.sectionMobile} />
                            <Grid item xs={12} sm={8} md={5}  >
                                {this.login()}
                            </Grid>
                            <Dialog open={this.state.verificar} onClose={this.handleCloseVerificar} >
                                <DialogTitle >{"Verificar correo electronico"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText >
                                        Por favor verificar su correo electronico para poder iniciar sesion. Si no aparece verifique su casilla de spam.
                                   </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleCloseVerificar} color="primary">
                                        Cerrar
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Grid>
                    )
                }
            }
        } else {
            return (
                <Grid container component="main" className={classes.root}>
                    <CssBaseline />
                    <Grid item xs={false} sm={4} md={7} className={classes.sectionDesktop}>
                        <Galeria />
                    </Grid>
                    <Grid item xs={false} sm={4} md={7} className={classes.sectionMobile} />
                    <Grid item xs={12} sm={8} md={5} >
                        {this.volver()}
                        {this.login()}
                    </Grid>


                </Grid>
            );
        }

    }
}

Inicio.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inicio);
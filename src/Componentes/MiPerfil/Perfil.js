import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';

import TabsPerfil from './TabsPerfil';
import GuestInfo from '../../Models/Guest/GuestInfo';
import GuestAPI from '../../Network/Guest/GuestAPI';

import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorMessageModal from '../Commons/ErrorMessageModal';
import '../../Styles/Common.css'
import AlumnosAPI from './../../Network/Alumnos/AlumnosAPI'

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    botones: {
        marginTop: theme.spacing(1),
        minWidth: 200
    },
    espacio: {
        marginTop: theme.spacing(4),
    },
})

class Perfil extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alumnos: [],
            data: [],
            futbol: false,
            hockey: false,
            natacion: false,
            ingles: false,
            perfilElegido: "",
            aguaFria: false,
            champagne: false,
            gaseosa: false,
            vino: false,
            sinseleccionarB: true,
            bebidaElegida: "",
            chocolates: false,
            golosinas: false,
            fiambres: false,
            pasteleria: false,
            sinseleccionarA: true,
            acompañamientoElegido: "",
            siete: false,
            nueve: false,
            once: false,
            trece: false,
            sinseleccionarL: true,
            limpiezaElegida: "",
            uno: false,
            dos: false,
            tres: false,
            cuatro: false,
            sinseleccionarT: true,
            tintoreriaElegida: "",

            loading: false,
            open: false,
            errorMessageIsOpen: false,
            errorMessage: ""
        }
    }

    //Life Cycle methods
    componentDidMount() {
        this.getAlumnos();
    }

    getAlumnos() {
        this.setState({ loading: true });
        AlumnosAPI.getAlumnos(this.handleGetAlumnos.bind(this));
    }

    handleGetAlumnos(alumnos) {
        this.setState({ loading: false });

        if (alumnos === undefined || alumnos === null) {
            //show error message if needed
        } else {
            this.setState( { alumnos: alumnos } , this.forceUpdate());
        }
    }

    getSelectedProfile() {
        let profile = GuestInfo.getInstance().getSelectedProfile();
        if (profile !== null) {
            // let perfilSeleccionado = String();
            switch (profile.perfil) {
                case "romantico":
                    this.handleChangeSwitch(profile.perfil)
                    break;
                case "ejecutivo":
                    this.handleChangeSwitch(profile.perfil)
                    break;
                case "familia":
                    this.handleChangeSwitch(profile.perfil)
                    break;
                case "preferencias":
                    this.handleChangeSwitch(profile.perfil)
                    this.handleBebida(profile._bebida)
                    this.handleAcompañamiento(profile._acompaniamiento)
                    this.handleLimpieza(profile._limpieza)
                    this.handleTintoreria(profile._tintoreria)
                    break;
                default:
                    break;
            }
        }
    }

    //Handle Button Actions
    callBebidaElegida = (x) => {
        this.setState({ bebidaElegida: x })
    }

    callAcompañamientoElegido = (x) => {
        this.setState({ acompañamientoElegido: x })
    }

    callLimpiezaElegida = (x) => {
        this.setState({ limpiezaElegida: x })
    }

    callTintoreriaElegida = (x) => {
        this.setState({ tintoreriaElegida: x })
    }

    closeErrorModal() {
        this.setState({ errorMessageIsOpen: false }, this.forceUpdate());
    }

    guardarPerfil() {
        let perfil = {
            "perfil": this.state.perfilElegido,
            "bebida": this.state.bebidaElegida,
            "acompaniamiento": this.state.acompañamientoElegido,
            "limpieza": this.state.limpiezaElegida,
            "tintoreria": this.state.tintoreriaElegida
        };

        GuestInfo.getInstance().saveSelectedProfile(perfil);
        this.postGuestInfo()
    }

    //Service Calls
    postGuestInfo = () => {
        this.setState({ loading: true });
        GuestAPI.postGuestInfo(this.handlePostGuestInfo);
    }

    handlePostGuestInfo = async (guestInfo) => {
        this.setState({ loading: false });
        if (guestInfo.error == null) {
            //post was successful
            console.log("Guardado con exito")
            this.setState({ open: false })
        } else {
            //get user with email failed
            console.log("Errrooor pa")
        }
    }

    handlePostGuestInfo(guestInfo) {
        this.setState({ loading: false });
        if (guestInfo.error == null) {
            //post was successful
            console.log("Guardado con exito")
        } else {
            //get user with email failed
            this.setState({
                errorMessageIsOpen: true,
                errorMessage: "Intentelo de nuevo por favor."
            });
        }
    }

    //Render view
    showLoaderIfNeeded() {
        if (this.state.loading) {
            return (
                <div className="loader">
                    <CircularProgress disableShrink />;
                </div>
            );
        } else {
            return null;
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <div>
                    {this.showLoaderIfNeeded()}
                    <ErrorMessageModal title={'Algo salió mal'} errorMessage={this.state.errorMessage} isOpen={this.state.errorMessageIsOpen} closeErrorModal={this.closeErrorModal.bind(this)} />
                </div>
                <Grid container>
                    <Grid item xs={12} md={12} lg={12}>
                        <Typography variant="h3">Hola {this.props.user.displayName}!</Typography>
                    </Grid>

                    <Grid item xs={12} md={12} lg={12} className={classes.espacio}>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <Grid item xs={12} md={12} lg={12}>
                                <Paper>
                                    <TabsPerfil
                                        alumnos = { this.state.alumnos }
                                        user={this.props.user}
                                        perfil={this.props.perfil}
                                        futbol={this.state.futbol}
                                        hockey={this.state.hockey}
                                        natacion={this.state.natacion}
                                        ingles={this.state.ingles}
                                        perfilElegido={this.state.perfilElegido}

                                        guardarPerfil={this.guardarPerfil.bind(this)}
                                        perfilCompletado={this.props.perfilCompletado}
                                        callPerfilCompletado={this.props.callPerfilCompletado}
                                    />
                                </Paper>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>

            </div>
        );
    }
}

Perfil.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Perfil);
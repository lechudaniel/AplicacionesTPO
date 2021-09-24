import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextField, Grid, ButtonBase, Typography, Avatar, Button, Paper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorMessageModal from '../../Commons/ErrorMessageModal';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import ServicioDataService from "../../../Servicios/servicios.servicios";

const styles = theme => ({
    paper: {
        padding: theme.spacing(5),
        marginTop: theme.spacing(2)
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    container: {
        backgroundColor: 'red',
        fullWidth: true,
    },
    input: {
        display: 'none',
    },
    createButton: {
        marginTop: 20,
        marginLeft: '80%'
    }, 
    buttonTarjeta:{
        margin: theme.spacing(1),
    }
})

class FormularioDatosServicio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            servicio: "",
            tamaño: "",
            velocidad: "",

            edicion: true,
            redOnly: false,
            lastResponse: null,
            loading: false,
            errorMessageIsOpen: false,
            successMessageIsOpen: false,



        }
        this.handleChange = this.handleChange.bind(this);
        this.edicionOpen = this.edicionOpen.bind(this);
        this.guardar = this.guardar.bind(this);
    }

    componentDidMount() {
    }


    guardar() {
        if (
            this.state.servicio !== "" &&
            this.state.tamaño !== "" &&
            this.state.velocidad !== ""
        ) {
            var servicioNuevo = {
                servicio: this.state.servicio,
                tamaño: this.state.tamaño,
                velocidad: this.state.velocidad,
            };
            ServicioDataService.crear(servicioNuevo);
            this.props.servicioCreado(servicioNuevo);
            this.setState({ edicion: false, redOnly: true });
        } else {
            this.setState({
                errorMessageIsOpen: true,
                errorMessage: "Verifique si lleno todos los datos."
            });
        }
    }

    handleCloseModal = () => {
        this.setState({ tarjetaIsOpen: false})
    }
    edicionOpen = () => {
        this.setState({ edicion: true, redOnly: false })
    }

    showLoaderIfNeeded() {
        if (this.state.loading) {
            return (
                <div className="loader">
                    <CircularProgress />
                    <CircularProgress color="secondary" />
                </div>
            )
        } else {
            return (
                <div />
            )
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    //Modal handlers
    closeErrorModal() {
        this.setState({ errorMessageIsOpen: false }, this.forceUpdate());
    }

    closeSuccessModal() {
        this.props.cobranzaCreada(this.state.cobranzaCreada);
        this.setState({ successMessageIsOpen: false }, this.forceUpdate());
    } 

    render() {
        const { classes } = this.props;

        return (
            <Grid >
                <Dialog
                    maxWidth="lg"
                    fullWidth={true}
                    open={this.state.tarjetaIsOpen}
                    onClose={this.handleCloseModal}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent className="dialogContent">
                    </DialogContent>
                    <DialogActions>
                    </DialogActions>
                </Dialog>
                {this.showLoaderIfNeeded()}
                <ErrorMessageModal title={'Algo salió mal'} errorMessage={this.state.errorMessage} isOpen={this.state.errorMessageIsOpen} closeErrorModal={this.closeErrorModal.bind(this)} />
                <Paper className={classes.paper}>
                    <Grid container spacing={3}>
                        
                        <Grid item xs={12} sm={6}>
                        <TextField
                                required
                                id="nombre"
                                name="servicio"
                                label="Nombre del Servicio"
                                fullWidth
                                autoComplete="Nombre del Servicio"
                                value={this.state.servicio}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>                   
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="tamaño"
                                name="tamaño"
                                label="Tamaño"
                                fullWidth
                                autoComplete="Tamaño"
                                value={this.state.tamaño}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="velocidad"
                                name="velocidad"
                                label="Velocidad"
                                fullWidth
                                autoComplete="Velocidad"
                                value={this.state.velocidad}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                    </Grid>
                </Paper>
                <Button className = { classes.createButton } variant= "contained" onClick={ this.guardar.bind(this) } color="primary" autoFocus>
                    Crear Servicio
                </Button>
            </Grid>
        );
    }
}

FormularioDatosServicio.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FormularioDatosServicio);

/*<Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="nroFactura"
                                name="nroFactura"
                                label="Número de Factura a pagar"
                                fullWidth
                                autoComplete="nroFactura"
                                value={this.state.numeroFactura}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>*/
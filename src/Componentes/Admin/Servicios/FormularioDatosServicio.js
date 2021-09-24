import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextField, Grid, ButtonBase, Typography, Avatar, Button, Paper } from '@material-ui/core';
import HotelInfo from '../../../Models/Hotel/HotelInfo'
import HotelAPI from '../../../Network/Hotel/HotelAPI'
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorMessageModal from '../../Commons/ErrorMessageModal';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import CobranzasAPI from '../../../Network/Cobranzas/CobranzasAPI'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import clientes from '../Clientes/dataClientes'

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

class FormularioDatosCobranza extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            nombre: "",
            tamaño: "",
            velocidad: "",
            edicion: true,
            redOnly: false,
            lastResponse: null,
            loading: false,
            errorMessageIsOpen: false,
            cobranzaCreada: null,
            successMessageIsOpen: false,



        }
        this.handleChange = this.handleChange.bind(this);
        this.edicionOpen = this.edicionOpen.bind(this);
        this.guardar = this.guardar.bind(this);
    }

    componentDidMount() {
        //  this.getHotelInfo()
    }


    guardar() {
        if (
            this.state.formaDePago !== "" 
            //this.state.correo !== "" &&
            //this.state.documento !== "" &&
            //this.state.telefono !== "" &&
            
            
        ) {
            var dict = this.getCobranzaModel();
            this.postCobranzaInfo(dict);
        } else {
            this.setState({
                errorMessageIsOpen: true,
                errorMessage: "Verifique si lleno todos los datos."
            });
        }
    }

    addButtonTarjeta = () => {
        this.setState({ tarjetaIsOpen: true })
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
    handleChangeMes(e) {
        this.setState({mesFactura: e.target.value });
    }

    handleChangeAnio(e) {
        this.setState({anioFactura: e.target.value });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    //Api Calls

    postCobranzaInfo = (cobranzaData) => {
        this.setState({ loading: true });
        CobranzasAPI.createCobranza(cobranzaData, this.handlePostCobranzaInfo.bind(this));
    }

  
    handlePostCobranzaInfo = async (cobranzaInfo) => {
        this.setState({ loading: false });
        if (cobranzaInfo.error == null) {
            //post was successful
            this.setState({ edicion: false,
                 redOnly: true,
                 cobranzaCreada: cobranzaInfo,
                successMessageIsOpen: true })
           
        } else {
            //get user with email failed
        }
    }
    
    getTitularMenuValue() {
        if( this.state.titularSeleccionado === null ) {
            return null;
        } else {
            return this.state.titularSeleccionado.nombre + " "  + this.state.titularSeleccionado.apellido
        }
    }

    handleTitularesMenuOpen() {
        this.setState({ titularesMenuOpen: true });
    }

    handleTitularesMenuClose() {
        this.setState({ titularesMenuOpen: false });
    }

    handleChangeTitular(e) {
        let titular = this.props.titulares[ e.target.value ];
        this.setState({ titularSeleccionado: e.target.value });
    }

    getCobranzaModel() {
        let titularSeleccionado = this.props.titulares[this.state.titularSeleccionado];
        return {
        
            numeroFactura: this.state.numeroFactura,
            formaDePago: this.state.formaDePago,
        };

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
                                name="nombre"
                                label="Nombre del Servicio"
                                fullWidth
                                autoComplete="Nombre del Servicio"
                                value={this.state.nombre}
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

FormularioDatosCobranza.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FormularioDatosCobranza);

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
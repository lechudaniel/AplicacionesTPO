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
import FormularioDatosTarjeta from './FormularioDatosTarjeta';
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
            titularSeleccionado: null,
            titularesMenuOpen: false,
            titularesMenuOpen: false,
            lote: "",
            numeroFactura: "",
            titular: "",
            edicion: true,
            redOnly: false,
            lastResponse: null,
            titular: "",
            loading: false,
            errorMessageIsOpen: false,
            errorMessage: "",
            mes:"",
            anio:"",
            pagada:false,
            totalCuota:"",
            numeroTransaccion:"",
            tarjetaIsOpen: false,
            mesFactura: "",
            anioFactura: "",
            formaDePago: "",
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
                        <FormularioDatosTarjeta handleCloseModal={this.handleCloseModal.bind(this)}/>
                    </DialogContent>
                    <DialogActions>
                    </DialogActions>
                </Dialog>
                {this.showLoaderIfNeeded()}
                <ErrorMessageModal title={'Algo salió mal'} errorMessage={this.state.errorMessage} isOpen={this.state.errorMessageIsOpen} closeErrorModal={this.closeErrorModal.bind(this)} />
                <Paper className={classes.paper}>
                    <Grid container spacing={3}>
                        
                        <Grid item xs={12} sm={6}>
                        <InputLabel id="demo-mutiple-name-label">Nombre Titular</InputLabel>
                            <Select
                            fullWidth
                            labelId="demo-mutiple-name-label"
                            id="demo-controlled-open-select"
                            open={ this.state.titularesMenuOpen }
                            onClose={ this.handleTitularesMenuClose.bind(this) }
                            onOpen={ this.handleTitularesMenuOpen.bind(this) }
                            value = { this.state.titularSeleccionado }
                            onChange={ e => this.handleChangeTitular(e) }
                            >
                            { clientes.map((titular, index) => (
                                <MenuItem value={index}> { titular.nombre } { titular.apellido} </MenuItem>
                            ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                                <form noValidate>
                                    <TextField id="date" value={this.state.fechaEmision} label="Fecha de pago" type = "date"
                                    defaultValue="2020-11-26"
                                    InputLabelProps={{shrink:true,}}/>
                                </form>
                        </Grid>                   
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="mes"
                                name="mes"
                                label="Mes"
                                fullWidth
                                autoComplete="mes"
                                value={this.state.mes}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="anio"
                                name="anio"
                                label="Año"
                                fullWidth
                                autoComplete="anio"
                                value={this.state.anio}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Select
                                native
                                value={this.state.formaDePago}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'formaDePago',
                                    id: 'formaDePago',
                                }}
                                >

                                <option value='' selected>Seleccionar opción</option>
                                <option value={10}>Tarjeta de crédito</option>
                                <option value={20}>Tarjeta de débito</option>
                                <option value={30}>Efectivo</option>
                                <option value={40}>Cheque</option>
                          
                            </Select>
                        </Grid> 
                        <Grid item xs={12} sm={6}>
                        {(this.state.formaDePago==10 || this.state.formaDePago==20) ? 
                        <TextField
                        id="lote"
                        name="lote"
                        label="Lote"
                        fullWidth
                        autoComplete="anio"
                        value={this.state.lote}
                        onChange={this.handleChange}
                        InputProps={{
                            readOnly: this.state.redOnly,
                        }}
                    />
                    : <TextField
                    id="lote"
                    name="lote"
                    label="Lote"
                    fullWidth
                    autoComplete="anio"
                    value={this.state.lote}
                    onChange={this.handleChange}
                    InputProps={{
                        readOnly: true,
                    }}
                />}
                        
                        </Grid> 
                       

                    </Grid>
                </Paper>
                <Button className = { classes.createButton } variant= "contained" onClick={ this.guardar.bind(this) } color="primary" autoFocus>
                    Confirmar Pago
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
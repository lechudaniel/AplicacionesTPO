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

import CobranzasDataService from "../../../Servicios/cobranzas.servicio";
import ClientesDataService from "../../../Servicios/clientes.servicio";

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
            monto: "",
            fecha_emision: "",
            forma_de_pago: "",
            id_cliente: "",
            lote: " ",

            edicion: true,
            redOnly: false,
            lastResponse: null,
            loading: false,
            errorMessageIsOpen: false,
            errorMessage: "",
            tarjetaIsOpen: false,
            successMessageIsOpen: false,

            clientes: []

        }
        this.handleChange = this.handleChange.bind(this);
        this.edicionOpen = this.edicionOpen.bind(this);
        this.guardar = this.guardar.bind(this);
    }

    componentDidMount() {
        this.getClientes();
    }

    getClientes() {
        this.setState({loading:true});
        ClientesDataService.getAll()
        .then(response => {
          this.setState({
            clientes: response.data
          });
        })
        .catch(e => {
        });
        this.setState({loading:false});
    }

    guardar() {
        if (
            this.state.forma_de_pago !== "" &&
            this.state.id_cliente !== "" &&
            this.state.fecha_emision !== "" &&
            this.state.monto !== "" &&
            this.state.lote !== ""
        ) {
            var cobranzaNueva = {
                forma_de_pago: this.state.forma_de_pago,
                id_cliente: this.state.id_cliente,
                fecha_emision: this.state.fecha_emision,
                monto: this.state.monto,
                lote: this.state.lote
            }
            console.log(cobranzaNueva);
            CobranzasDataService.crear(cobranzaNueva);
            this.props.cobranzaCreada(cobranzaNueva);
            this.setState({ edicion: false, redOnly: true });
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

    findArrayElementById(array, id) {
        return array.find((element) => {
          return element.id === id;
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
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
                            <TextField
                                id="cliente" 
                                name="id_cliente"
                                label= "Cliente" 
                                fullWidth
                                value={this.findArrayElementById(this.state.clientes, this.state.id_cliente)}
                                autoComplete="Cliente"
                                onChange={this.handleChange}                           
                                select>

                                { this.state.clientes.map((row, index) => (
                                    <MenuItem value={row.id_cliente}>{row.nombre}  {row.apellido}</MenuItem>
                                ))}      
                            </TextField>                
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                    id="fecha_emision"
                                    name="fecha_emision"
                                    label="Fecha de Emision"
                                    fullWidth
                                    autoComplete="fecha_emision"
                                    value={this.state.fecha_emision}
                                    onChange={this.handleChange}
                                    InputProps={{
                                        readOnly: this.state.redOnly,
                                    }}
                                />
                        </Grid>                   
                        
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="monto"
                                name="monto"
                                label="Total"
                                fullWidth
                                autoComplete="monto"
                                value={this.state.monto}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        

                        {(this.state.forma_de_pago=="Tarjeta de Debito" || this.state.forma_de_pago=="Tarjeta de Credito") ? 
                         <Button variant="outlined" color="primary" onClick={ this.addButtonTarjeta }>
                              COMPLETAR DATOS DE TARJETA
                         </Button> : <Button variant="outlined" color="primary" disabled>
                              COMPLETAR DATOS DE TARJETA
                        </Button>
                      
                        }






                        {(this.state.forma_de_pago == "Tarjeta de Debito" || this.state.forma_de_pago === "Tarjeta de Credito") ? 
                            <TextField
                                id="lote"
                                name="lote"
                                label="Lote"
                                fullWidth
                                autoComplete="lote"
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
                            autoComplete="lote"
                            value={this.state.lote}
                            onChange={this.handleChange}
                            InputProps={{
                                readOnly: true,
                            }}
                        />}
                            
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Select
                                native
                                value={this.state.forma_de_pago}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'forma_de_pago',
                                    id: 'forma_de_pago',
                                }}
                                >

                                <option value='' selected>Seleccionar opción</option>
                                <option value={"Tarjeta de Credito"}>Tarjeta de crédito</option>
                                <option value={"Tarjeta de Debito"}>Tarjeta de débito</option>
                                <option value={"Efectivo"}>Efectivo</option>
                                <option value={"Cheque"}>Cheque</option>
                          
                            </Select>
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
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextField, Grid, Button, Paper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorMessageModal from '../../Commons/ErrorMessageModal';
import MenuItem from '@material-ui/core/MenuItem';

import ClientesDataService from '../../../Servicios/clientes.servicio';
import FacturasDataService from '../../../Servicios/facturas.servicio';

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
    }
})

class FormularioDatosFactura extends Component {

    constructor(props) {
        super(props);
        this.state = {
            monto: "",
            año: "",
            mes: "",
            id_cliente: "",

            clientes: [],

            loading: false,
            errorMessageIsOpen: false,
            errorMessage: "",
            successMessageIsOpen: false,
        }

        this.guardar = this.guardar.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.getClientes();
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
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

    findArrayElementById(array, id) {
        return array.find((element) => {
          return element.id === id;
        })
    }

    guardar() {
        if (this.state.monto !== "" &&
            this.state.año !== "" &&
            this.state.mes !== "" &&
            this.state.id_cliente !== ""
        ) {
            var facturaNueva = {
                monto: this.state.monto,
                año: this.state.año,
                mes: this.state.mes,
                id_cliente: this.state.id_cliente
            };
            console.log(facturaNueva);
            FacturasDataService.crear(facturaNueva);
            this.props.facturaCreada(facturaNueva);
            this.setState({ edicion: false, redOnly: true });
        } else {
            this.setState({
                errorMessageIsOpen: true,
                errorMessage: "Verifique si lleno todos los datos."
            });
        }
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

    //Modal handlers
    closeErrorModal() {
        this.setState({ errorMessageIsOpen: false }, this.forceUpdate());
    }

    showSuccessModal() {

    }

    closeSuccessModal() {
        this.props.facturaCreado(this.state.facturaCreada);
        this.setState({ successMessageIsOpen: false }, this.forceUpdate());
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid >
                {this.showLoaderIfNeeded()}
                <ErrorMessageModal title={'Algo salió mal'} errorMessage={this.state.errorMessage} isOpen={this.state.errorMessageIsOpen} closeErrorModal={this.closeErrorModal.bind(this)} />
                <ErrorMessageModal title={'Factura Generada con éxito'} errorMessage= { 'Factura Generada'} isOpen={this.state.successMessageIsOpen} closeErrorModal={this.closeSuccessModal.bind(this)} />
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
                                id="mes"
                                name="mes"
                                label="Mes Factura a emitir"
                                fullWidth
                                autoComplete="mes"
                                value={ this.state.mes }
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="año"
                                name="año"
                                label="Año Factura a Emitir"
                                fullWidth
                                autoComplete="año"
                                value={this.state.año}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: false,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="monto"
                                name="monto"
                                label="Monto"
                                fullWidth
                                autoComplete="monto"
                                value={this.state.monto}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: false,
                                }}
                            />
                        </Grid>
                    </Grid>
                </Paper>
                <Button className = { classes.createButton } variant= "contained" onClick={ this.guardar.bind(this) } color="primary" autoFocus>
                    Generar Factura
                </Button>
            </Grid>
        );
    }
}

FormularioDatosFactura.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FormularioDatosFactura);
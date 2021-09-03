import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextField, Grid, ButtonBase, Typography, Avatar, Button, Paper } from '@material-ui/core';
import HotelInfo from '../../../Models/Hotel/HotelInfo'
import FacturasAPI from '../../../Network/Facturas/FacturasAPI'
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorMessageModal from '../../Commons/ErrorMessageModal';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import clientes from '../Empleados/dataClientes';

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
            titularSeleccionado: null,
            titularesMenuOpen: false,
            titularesMenuOpen: false,
            mesFactura: "",
            anioFactura: "",
            loading: false,
            errorMessageIsOpen: false,
            errorMessage: "",
            successMessageIsOpen: false,
            titular:"",
            facturaCreada: null,
        }
        this.guardar = this.guardar.bind(this);
    }

    componentDidMount() {
        console.log("Facturas");
    }

    guardar() {
        /*if (
            this.turnoSeleccionado !== null,
            this.state.mesFactura !== "" &&
            this.state.anioFactura !== ""
        ) {
            var dict = this.getFacturaModel();
            this.postFacturaInfo(dict);
        } else {
            this.setState({
                errorMessageIsOpen: true,
                errorMessage: "Verifique si lleno todos los datos."
            });
        }*/
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

    //Turnos Menu
    handleChangeTurno(e) {
        this.setState({ alumnoSeleccionado: e.target.value });
    }

    handleTurnosMenuOpen() {
        this.setState({ turnosMenuOpen: true });
    }

    handleTurnosMenuClose() {
        this.setState({ turnosMenuOpen: false });
    }

    getTitularMenuValue() {
        if( this.state.titularSeleccionado === null ) {
            return null;
        } else {
            return this.state.titularSeleccionado.nombre + " "  + this.state.titularSeleccionado.apellido
        }
    }

    //Api Calls
    postFacturaInfo = (facturaInfo) => {
        this.setState({ loading: true });
        FacturasAPI.createFactura(facturaInfo, this.handlePostFacturaInfo.bind(this));
    }

    handlePostFacturaInfo = async (facturaInfo) => {
        this.setState({ loading: false });
        if (facturaInfo.error == null) {
            //post was successful
            this.setState({ edicion: false, 
                            redOnly: true,
                            facturaCreada: facturaInfo,
                            successMessageIsOpen: true
                          })
        } else {
            //get user with email failed
        }
    }

    getFacturaModel() {
        let titularSeleccionado = this.props.titulares[this.state.titularSeleccionado];
        let titular = this.props.titulares[this.state.titularSeleccionado];
        let turno = this.props.turnos[this.state.turnoSeleccionado];
        return {
            idTitular: titularSeleccionado.id,
            mes: this.state.mesFactura,
            anio: this.state.anioFactura,
        };
    }

     //Menu
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

    getFacturaCreadaMessage() {
        if(this.state.facturaCreada !== null) {
            return "Pueder ir al banco B con el nro de factura" + this.state.facturaCreada.numeroFactura + " y codigo de pago electronico " +
            "ESCB_" + this.state.facturaCreada.datosFacturacion.documento + " para realizar el pago."
        } else {
            return "Pueder ir al banco B y pagar la misma"
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid >
                {this.showLoaderIfNeeded()}
                <ErrorMessageModal title={'Algo salió mal'} errorMessage={this.state.errorMessage} isOpen={this.state.errorMessageIsOpen} closeErrorModal={this.closeErrorModal.bind(this)} />
                <ErrorMessageModal title={'Factura Generada con éxito'} errorMessage= { this.getFacturaCreadaMessage() } isOpen={this.state.successMessageIsOpen} closeErrorModal={this.closeSuccessModal.bind(this)} />
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
                            <TextField
                                id="mesTextField"
                                name="MesTextField"
                                label="Mes Factura a emitir"
                                fullWidth
                                autoComplete="mesTextField"
                                value={ this.state.mesFactura }
                                onChange={ e => this.handleChangeMes(e) }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="anio"
                                name="Anio"
                                label="Año Factura a Emitir"
                                fullWidth
                                autoComplete="anio"
                                value={this.state.anioFactura}
                                onChange={ e => this.handleChangeAnio(e) }
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
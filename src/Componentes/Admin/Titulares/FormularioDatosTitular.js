import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextField, Grid, ButtonBase, Typography, Avatar, Button, Paper } from '@material-ui/core';
import HotelInfo from '../../../Models/Hotel/HotelInfo'
import TitularesAPI from '../../../Network/Titulares/TitularesAPI'
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorMessageModal from '../../Commons/ErrorMessageModal';
import MenuItem from '@material-ui/core/MenuItem';
import clientes from '../Empleados/dataClientes';
import repartidores from '../Alumnos/dataRepart'

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

class FormularioDatosTitular extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            apellido: "",
            email: "",
            documento:"",
            pais: "",
            provincia: "",
            ciudad: "",
            codigoPostal: "",
            direccion: "",
            telefono1: "",
            telefono2: "",
            estrellas: "",
            edicion: true,
            redOnly: false,
            lastResponse: null,

            loading: false,
            errorMessageIsOpen: false,
            errorMessage: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.edicionOpen = this.edicionOpen.bind(this);
        this.guardar = this.guardar.bind(this);
    }

    componentDidMount() {
        //  this.getHotelInfo()
    }

    guardar() {
        if (this.state.nombre !== "" &&
            this.state.apellido !== "" &&
            this.state.email !== "" &&
            this.state.pais !== "" &&
            this.state.provincia !== "" &&
            this.state.ciudad !== "" &&
            this.state.codigoPostal !== "" &&
            this.state.direccion !== "" &&
            this.state.telefono1 !== "" &&
            this.state.telefono2 !== ""&&
            this.state.documento !==""
        ) {
            
            this.postTitularInfo(this.getHotelModel())
        } else {
            this.setState({
                errorMessageIsOpen: true,
                errorMessage: "Verifique si lleno todos los datos."
            });
        }
    }

    edicionOpen() {
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

    //Api Calls
    postTitularInfo = (titularData) => {
        this.setState({ loading: true });
        TitularesAPI.createTitular(titularData, this.handlePostTitularInfo.bind(this));
    }

    handlePostTitularInfo = async (titularInfo) => {
        this.setState({ loading: false });
        if (titularInfo.error == null) {
            //post was successful
            this.setState({ edicion: false, redOnly: true })
            var dict = this.getHotelModel();
            this.props.titularCreado(dict);
        } else {
            //get user with email failed
        }
    }

    getHotelModel() {
        return {
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            correo: this.state.email,
            pais: this.state.pais,
            estado: this.state.provincia,
            ciudad: this.state.ciudad,
            codigoPostal: this.state.codigoPostal,
            direccion: this.state.direccion,
            telefonoContacto: this.state.telefono1,
            telefono2: this.state.telefono2,
            documento: this.state.documento,
        };
    }

    //Modal handlers
    closeErrorModal() {
        this.setState({ errorMessageIsOpen: false }, this.forceUpdate());
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid >
                {this.showLoaderIfNeeded()}
                <ErrorMessageModal title={'Algo salió mal'} errorMessage={this.state.errorMessage} isOpen={this.state.errorMessageIsOpen} closeErrorModal={this.closeErrorModal.bind(this)} />
                <Paper className={classes.paper}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                                id="select" 
                                name="Servicio"
                                label= "Servicio" 
                                fullWidth
                                value={this.state.Ser}
                                autoComplete="Servicio"
                                onChange={this.handleChange}                           
                                select>
                                <MenuItem value="10">Servicio Premium</MenuItem>
                                <MenuItem value="20">Servicio Normal</MenuItem>  
                                <MenuItem value="30">Servicio Express</MenuItem>                       
                            </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Direccion"
                                name="direccion"
                                label="Direccion de entrega"
                                fullWidth
                                autoComplete="Nombre"
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
                                id="Codigo Postal"
                                name="Cosidgo Postal"
                                label="Codigo Postal"
                                fullWidth
                                autoComplete="Codigo Postal"
                                value={this.state.apellido}
                                onChange={this.handleChange}
                                
                            />
                        </Grid>
                        <Grid item xs={12} sm= {6}>
                            <TextField
                                required
                                id="Ciudad"
                                name="Ciudad"
                                label="Ciudad"
                                fullWidth
                                autoComplete="Ciudad"
                                value={this.state.email}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs = {12} sm = {6}>
                            <TextField
                                id="cliente" 
                                name="Clientes"
                                label= "Cliente" 
                                fullWidth
                                value={this.state.Ser}
                                autoComplete="Cliente"
                                onChange={this.handleChange}                           
                                select>
                                { clientes.map((row, index) => (
                                <MenuItem key = {index}>{row.nombre}  {row.apellido}</MenuItem>
                        ))}    
                            </TextField>           
                        </Grid>
                        <Grid item xs = {12} sm = {6}>
                            <TextField
                                id="select" 
                                name="Repartidor"
                                label= "Repartidor" 
                                fullWidth
                                value={this.state.Ser}
                                autoComplete="Repartidor"
                                onChange={this.handleChange}                           
                                select>
                                { repartidores.map((row, index) => (
                                <MenuItem key = {index}>{row.nombre}  {row.apellido}</MenuItem>
                        ))}    
                            </TextField>           
                        </Grid>
                    </Grid>
                </Paper>
                <Button className = { classes.createButton } variant= "contained" onClick={ this.guardar.bind(this) } color="primary" autoFocus>
                    Crear titular
                </Button>
            </Grid>
        );
    }
}

FormularioDatosTitular.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FormularioDatosTitular);
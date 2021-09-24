import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextField, Grid, Button, Paper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorMessageModal from '../../Commons/ErrorMessageModal';
import MenuItem from '@material-ui/core/MenuItem';
import TipoClientesDataServicio from '../../../Servicios/tipo_clientes.servicio.js';
import ClienteDataServicio from '../../../Servicios/clientes.servicio.js';

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

class FormularioDatosCliente extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            apellido: "",
            email: "",
            ciudad: "",
            codigoPostal: "",
            direccion: "",
            telefono: "",
            pais: "",
            provincia: " ",
            id_tipo_cliente: "",

            tipo_clientes: [],

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
        // obtenemos todos los tipos de clientes que hay para el menu desplegable
        this.getTipoClientes();
    }

    getTipoClientes() {
        TipoClientesDataServicio.getAll()
        .then(response => {
          this.setState({
            tipo_clientes: response.data
          });
        })
        .catch(e => {
        });
    }

    guardar() {
        if (this.state.nombre !== "" &&
            this.state.apellido !== "" &&
            this.state.telefono !== "" &&
            this.state.mail !== "" &&
            this.state.id_tipo_cliente !== "" &&
            this.state.ciudad !== "" &&
            this.state.pais !== "" &&
            this.state.provincia !== "" &&
            this.state.cp !== ""
        ) {
            var clienteNuevo = {
                nombre: this.state.nombre,
                apellido: this.state.apellido,
                telefono: this.state.telefono,
                id_tipo_cliente: this.state.id_tipo_cliente,
                mail: this.state.email,
                ciudad: this.state.ciudad,
                pais: this.state.pais,
                provincia: this.state.provincia,
                cp: this.state.codigoPostal
            };
            ClienteDataServicio.crear(clienteNuevo);
            this.props.clienteCreado(clienteNuevo);
            this.setState({ edicion: false, redOnly: true });
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

    findArrayElementById(array, id) {
        return array.find((element) => {
          return element.id === id;
        })
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
                                required
                                id="Nombre"
                                name="nombre"
                                label="Nombre del Cliente"
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
                                id="Apellido"
                                name="apellido"
                                label="Apellido/s"
                                fullWidth
                                autoComplete="apellido"
                                value={this.state.apellido}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="Correo"
                                name="email"
                                label="Correo Electronico"
                                fullWidth
                                autoComplete="Correo"
                                value={this.state.email}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="País"
                                name="pais"
                                label="País"
                                fullWidth
                                autoComplete="País"
                                value={this.state.pais}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="Estado"
                                name="estado"
                                label="Estado/Provincia/Región"
                                fullWidth
                                value={this.state.estado}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Ciudad"
                                name="ciudad"
                                label="Ciudad"
                                fullWidth
                                autoComplete="Ciudad"
                                value={this.state.ciudad}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Código Postal"
                                name="codigoPostal"
                                label="Código Postal"
                                fullWidth
                                autoComplete="Código Postal"
                                value={this.state.codigoPostal}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="Direccion"
                                name="direccion"
                                label="Direccion"
                                fullWidth
                                autoComplete="Direccion"
                                value={this.state.direccion}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Telefono"
                                name="telefono"
                                label="Telefono"
                                fullWidth
                                autoComplete="Telefono1"
                                value={this.state.telefono}
                                onChange={this.handleChange}
                                InputProps={{
                                    readOnly: this.state.redOnly,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="select" 
                                name="id_tipo_cliente"
                                label= "categoria" 
                                fullWidth
                                value={this.findArrayElementById(this.state.tipo_clientes, this.state.id_tipo_cliente)}
                                autoComplete="Categoria"
                                onChange={this.handleChange}                           
                                select>

                                { this.state.tipo_clientes.map((row, index) => (
                                    <MenuItem value={row.id_tipo_cliente}>{row.tipo_cliente}</MenuItem>
                                ))}
      
                            </TextField>                          
                        </Grid> 


                    </Grid>
                </Paper>
                <Button className = { classes.createButton } variant= "contained" onClick={ this.guardar.bind() } color="primary" autoFocus>
                    Crear Cliente
                </Button>
            </Grid>
        );
    }
}

FormularioDatosCliente.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FormularioDatosCliente);
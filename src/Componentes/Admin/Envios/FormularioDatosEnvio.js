import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextField, Grid, ButtonBase, Typography, Avatar, Button, Paper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorMessageModal from '../../Commons/ErrorMessageModal';
import MenuItem from '@material-ui/core/MenuItem';
import ClientesDataService from "../../../Servicios/clientes.servicio";
import EnvioDataService from "../../../Servicios/envios.servicio";
import ServiciosDataService from "../../../Servicios/servicios.servicios";
import RepartidoresDataService from "../../../Servicios/repartidores.servicio";

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

class FormularioDatosEnvio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id_servicio: "",
            direccion: "",
            id_cliente: "",
            ciudad: "",
            cp: "",
            id_estado: "1",
            id_repartidor: "",
            
            repartidores: [],
            servicios: [],
            clientes: [],

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
        this.getRepartidores();
        this.getClientes();
        this.getServicios();
    }

    getServicios() {
        this.setState({loading:true});
        ServiciosDataService.getAll()
        .then(response => {
          this.setState({
            servicios: response.data
          });
        })
        .catch(e => {
        });
        this.setState({loading:false});
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

    getRepartidores() {
        this.setState({loading:true});
        RepartidoresDataService.getAll()
        .then(response => {
          this.setState({
            repartidores: response.data
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
        if (this.state.id_servicio !== "" &&
            this.state.direccion !== "" &&
            this.state.id_cliente !== "" &&
            this.state.ciudad !== "" &&
            this.state.cp !== "" &&
            this.state.id_estado !== "" &&
            this.state.id_repartidor !== ""
        ) {
            var envioNuevo = {
                id_servicio: this.state.id_servicio,
                direccion: this.state.direccion,
                id_cliente: this.state.id_cliente,
                ciudad: this.state.ciudad,
                cp: this.state.cp,
                id_estado: this.state.id_estado,
                id_repartidor: this.state.id_repartidor
            };

            EnvioDataService.crear(envioNuevo)
    
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
                                id="select" 
                                name="id_servicio"
                                label= "Servicio" 
                                fullWidth
                                value={this.findArrayElementById(this.state.servicios, this.state.id_servicio)}
                                autoComplete="Servicio"
                                onChange={this.handleChange}                           
                                select>

                                { this.state.servicios.map((row, index) => (
                                    <MenuItem value={row.id_servicio}>{row.servicio}</MenuItem>
                                ))}                   
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
                                id="Codigo Postal"
                                name="cp"
                                label="Codigo Postal"
                                fullWidth
                                autoComplete="Codigo Postal"
                                value={this.state.cp}
                                onChange={this.handleChange}
                                
                            />
                        </Grid>
                        <Grid item xs={12} sm= {6}>
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
                        <Grid item xs = {12} sm = {6}>
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
                        <Grid item xs = {12} sm = {6}>
                            <TextField
                                id="select" 
                                name="id_repartidor"
                                label= "Repartidor" 
                                fullWidth
                                value={this.findArrayElementById(this.state.repartidores, this.state.id_repartidor)}
                                autoComplete="Repartidor"
                                onChange={this.handleChange}                           
                                select>

                                { this.state.repartidores.map((row, index) => (
                                    <MenuItem value={row.id_repartidor}>{row.nombre}  {row.apellido}</MenuItem>
                                ))}      
                            </TextField>           
                        </Grid>
                    </Grid>
                </Paper>
                <Button className = { classes.createButton } variant= "contained" onClick={ this.guardar.bind(this) } color="primary" autoFocus>
                    Crear Envio
                </Button>
            </Grid>
        );
    }
}

FormularioDatosEnvio.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FormularioDatosEnvio);
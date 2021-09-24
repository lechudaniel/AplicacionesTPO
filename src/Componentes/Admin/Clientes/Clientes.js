import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableClientes from './TableClientes'
import ClientesDataService from '../../../Servicios/clientes.servicio.js'

const styles = theme => ({

})

class Clientes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientes: [],
            loading: false,
        }
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

    clienteCreado = (cliente) => {
        var clientesActualizado = this.state.clientes;
        clientesActualizado.push(cliente);
        this.setState({ clientes: clientesActualizado});
        this.props.actualizarClientes(clientesActualizado);
    }

    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TableClientes clientes = { this.state.clientes } clienteCreado = { this.clienteCreado.bind(this)} />
            </Grid>
        </Grid>
        );
    }
}

Clientes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Clientes);
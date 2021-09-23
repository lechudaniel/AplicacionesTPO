import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import EmpleadosAPI from '../../../Network/Clientes/EmpleadosAPI'
import TableEmpleados from './TableClientes'
import clientes from './dataClientes'

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
        this.getEmpleados();
    }

    //Api Calls
    getEmpleados() {
        this.setState({ loading: true });
        EmpleadosAPI.getEmpleados(this.handleGetEmpleados.bind(this));
    }

     empleadoCreado = (cliente) => {
        var empleadosActualizado = this.state.clientes;
        empleadosActualizado.push(cliente);
        this.setState({ clientes: empleadosActualizado});
    }

    handleGetEmpleados(clientes) {
        this.setState({ loading: false });

        if (clientes === undefined || clientes === null) {
            //show error message if needed
        } else {
            this.setState( { clientes: clientes } , this.forceUpdate());
        }
    }

    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TableEmpleados clientes = { this.state.clientes } empleadoCreado = { this.empleadoCreado } />
            </Grid>
        </Grid>
        );
    }
}

Clientes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Clientes);
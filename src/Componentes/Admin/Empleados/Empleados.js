import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import EmpleadosAPI from './../../../Network/Empleados/EmpleadosAPI'
import TableEmpleados from './TableEmpleados'
import clientes from './dataClientes'

const styles = theme => ({

})

class Empleados extends Component {

    constructor(props) {
        super(props);
        this.state = {
            empleados: [],
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

     empleadoCreado = (empleado) => {
        var empleadosActualizado = this.state.empleados;
        empleadosActualizado.push(empleado);
        this.setState({ empleados: empleadosActualizado});
    }

    handleGetEmpleados(empleados) {
        this.setState({ loading: false });

        if (empleados === undefined || empleados === null) {
            //show error message if needed
        } else {
            this.setState( { empleados: empleados } , this.forceUpdate());
        }
    }

    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TableEmpleados empleados = { this.state.empleados } empleadoCreado = { this.empleadoCreado } />
            </Grid>
        </Grid>
        );
    }
}

Empleados.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Empleados);
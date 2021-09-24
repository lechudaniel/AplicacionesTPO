import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableEmpleados from './TableClientes'
import ClienteDataServicio from '../../../Servicios/clientes.servicio.js'

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
        ClienteDataServicio.getAll()
        .then(response => {
          this.setState({
            clientes: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }

    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TableEmpleados clientes = { this.state.clientes } />
            </Grid>
        </Grid>
        );
    }
}

Clientes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Clientes);
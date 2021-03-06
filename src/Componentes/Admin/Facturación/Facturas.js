import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableFacturas from './TableFacturas'
import FacturasDataService from "../../../Servicios/facturas.servicio";

const styles = theme => ({

})

class Facturas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            facturas: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.getFacturas();
    }

    //Api Calls
    getFacturas() {
        this.setState({loading:true});
        FacturasDataService.getAll()
        .then(response => {
          this.setState({
            facturas: response.data
          });
        })
        .catch(e => {
        });
        this.setState({loading:false});
    }

    facturaCreada = (factura) => {
        var facturasActualizadas = this.state.facturas;
        facturasActualizadas.push(factura);
        this.setState({ facturas: facturasActualizadas});
    }

    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
            <TableFacturas facturas = {this.state.facturas} facturaCreada = { this.facturaCreada.bind(this)}/>
            </Grid>
        </Grid>
        );
    }
}

Facturas.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Facturas);
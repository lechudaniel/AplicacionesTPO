import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableCobranzas from './TableCobranzas'
import CobranzasDataService from "../../../Servicios/cobranzas.servicio";

const styles = theme => ({

})

class Cobranzas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cobranzas: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.getCobranzas();
    }

    getCobranzas() {
        this.setState({loading:true});
        CobranzasDataService.getAll()
        .then(response => {
          this.setState({
            cobranzas: response.data
          });
        })
        .catch(e => {
        });
        this.setState({loading:false});
    }

    cobranzaCreada = (cobranza) => {
        var cobranzasActualizado = this.state.cobranzas;
        cobranzasActualizado.push(cobranza);
        this.setState({ cobranzas: cobranzasActualizado});
        this.props.actualizarCobranzas(cobranzasActualizado);
    }


    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TableCobranzas cobranzas = { this.state.cobranzas } cobranzaCreada = { this.cobranzaCreada.bind(this)} />
            </Grid>
        </Grid>
        );
    }
}

Cobranzas.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cobranzas);
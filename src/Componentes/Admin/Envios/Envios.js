import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableEnvios from './TableEnvios'
import EnviosDataService from '../../../Servicios/envios.servicio';

const styles = theme => ({

})

class Envios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            envios: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.getEnvios();
    }

    getEnvios() {
        this.setState({loading:true});
        EnviosDataService.getAll()
        .then(response => {
          this.setState({
            envios: response.data
          });
        })
        .catch(e => {
        });
        this.setState({loading:false});
    }

    envioCreado = (envio) => {
        var enviosActualizado = this.state.envios;
        enviosActualizado.push(envio);
        this.setState({ envios: enviosActualizado});
    }

    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TableEnvios envios = { this.state.envios } envioCreado = { this.envioCreado.bind(this)} />
            </Grid>
        </Grid>
        );
    }
}

Envios.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Envios);
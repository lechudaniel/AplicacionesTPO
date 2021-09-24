import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableServicios from './TableServicios'
import ServiciosDataService from "../../../Servicios/servicios.servicios";

const styles = theme => ({

})

class Servicios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            servicios: [],
            loading: false,
        }
    }

    componentDidMount() {
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

    servicioCreado = (servicio) => {
        var serviciosActualizado = this.state.servicios;
        serviciosActualizado.push(servicio);
        this.setState({ servicios: serviciosActualizado});
        this.props.actualizarServicios(serviciosActualizado);
    }

    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TableServicios servicios = { this.state.servicios } servicioCreado = { this.servicioCreado.bind(this) } />
            </Grid>
        </Grid>
        );
    }
}

Servicios.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Servicios);
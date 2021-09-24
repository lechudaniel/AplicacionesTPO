import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableRepartidores from './TableRepartidores';
import RepartidoresDataService from '../../../Servicios/repartidores.servicio';

const styles = theme => ({

})

class Repartidores extends Component {

    constructor(props) {
        super(props);
        this.state = {
            repartidores: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.getRepartidores();
        //this.setState({ repartidores: this.props.repartidores });
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


    repartidorCreado = (repartidor) => {
        var repartidoresActualizado = this.props.repartidores;
        repartidoresActualizado.push(repartidor);
        this.setState({ repartidores: repartidoresActualizado });
        this.props.actualizarRepartidores(repartidoresActualizado);
    }

    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TableRepartidores repartidores = { this.state.repartidores }  repartidorCreado = { this.repartidorCreado.bind(this)}/>
            </Grid>
        </Grid>
        );
    }
}

Repartidores.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Repartidores);
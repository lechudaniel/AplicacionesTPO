import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableEnvios from './TableEnvios'
import TitularesAPI from '../../../Network/Titulares/TitularesAPI';
import TurrnosAPI from '../../../Network/Turnos/TurnosAPI'
import AlumnosAPI from '../../../Network/Alumnos/AlumnosAPI'

const styles = theme => ({

})

class Titulares extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulares: [],
            turnos: [],
            alumnos: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.getTitulares();
        this.getTurnos();
        this.getAlumnos();
    }

    //Api Calls
    getTitulares() {
        this.setState({ loading: true });
        TitularesAPI.getTitulares(this.handleGetTitulares.bind(this));
    }

     titularCreado = (titular) => {
        var titularesActualizado = this.state.titulares;
        titularesActualizado.push(titular);
        this.setState({ titulares: titularesActualizado});
    }

    handleGetTitulares(titulares) {
        this.setState({ loading: false });

        if (titulares === undefined || titulares === null) {
            //show error message if needed
        } else {
            this.setState( { titulares: titulares } , this.forceUpdate());
            this.props.actualizarTitulares(titulares);
        }
    }

    getTurnos() {
        this.setState({ loading: true });
        TurrnosAPI.getTurnos(this.handleGetTurnos.bind(this));
    }

    handleGetTurnos(turnos) {
        this.setState({ loading: false });

        if (turnos === undefined || turnos === null) {
            //show error message if needed
        } else {
            this.setState( { turnos: turnos } , this.forceUpdate());
            this.props.actualizarTurnos(turnos);
        }
    }

    getAlumnos() {
        this.setState({ loading: true });
        AlumnosAPI.getAlumnos(this.handleGetAlumnos.bind(this));
    }

    handleGetAlumnos(alumnos) {
        this.setState({ loading: false });

        if (alumnos === undefined || alumnos === null) {
            //show error message if needed
        } else {
            this.setState( { alumnos: alumnos } , this.forceUpdate());
            this.props.actualizarAlumnos(alumnos);
        }
    }

    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TableEnvios titulares = { this.state.titulares } titularCreado = { this.titularCreado.bind(this)} />
            </Grid>
        </Grid>
        );
    }
}

Titulares.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Titulares);
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableAlumnos from './TableAlumnos';
import repartidores from './dataRepart';

const styles = theme => ({

})

class Alumnos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alumnos: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.setState({ alumnos: this.props.alumnos });
    }

    alumnoCreado = (alumno) => {
        var alumnosActualizado = this.props.alumnos;
        alumnosActualizado.push(alumno);
        this.setState({ alumnos: alumnosActualizado });
        this.props.actualizarAlumnos(alumnosActualizado);
    }

    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TableAlumnos alumnos = { this.props.alumnos }  titulares = { this.props.titulares }
                turnos = { this.props.turnos } 
                alumnoCreado = { this.alumnoCreado.bind(this)}/>
            </Grid>
        </Grid>
        );
    }
}

Alumnos.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Alumnos);
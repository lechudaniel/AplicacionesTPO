import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {  Grid } from '@material-ui/core';
import TableCobros from './TableCobros'

const styles = theme => ({

})

class Cobros extends Component {
    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} >
               <TableCobros turnos = { this.props.turnos } titulares = { this.props.titulares } />
            </Grid>
        </Grid>
        );
    }
}

Cobros.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cobros);
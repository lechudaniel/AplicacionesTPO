import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import foto from '../../Imagenes/logoHotel.png'
import RenderHistorial from './ReservaRender/ReservaHIstorial';
import GuestInfo from '../../Models/Guest/GuestInfo';
import TableCuotas from './TableCuotas';

class Historial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reserva: [],
        }
    }

    componentDidMount() {
        let allReservas = GuestInfo.getInstance().getReservas();
        this.setState({reserva: allReservas});
    }

   
    render() {

        return (
            <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item xs={12} md={8} lg={9}>
                    <Typography variant="h3">Cuota Activa</Typography>
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <Grid container spacing={2}>
                        
                        
                       <TableCuotas/>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

Historial.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Historial;
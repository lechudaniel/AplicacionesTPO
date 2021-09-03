import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';


import foto from '../../Imagenes/logoHotel.png'
//import foto2 from '../../Imagenes/logoFourSeason.jpg'

//import ReservasAPI from './../../Network/Reserva/ReservasAPI'
import GuestInfo from './../../Models/Guest/GuestInfo'
import LoadingReserva from '../Commons/LoadingReserva';
import RenderCheckOut from './ReservaRender/RenderCheckOut';


const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
})

class CheckOut extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reserva: [],
        }
    }

    componentDidMount() {
        let allReservas = GuestInfo.getInstance().getReservas();
        this.setState({ reserva: allReservas })
    }



    render() {
        //const { classes } = this.props;
        if (this.state.loading)
            return (
                <LoadingReserva />
            )
        else
            return (
                <Grid container spacing={3} justify="center" alignItems="center">
                    <Grid item xs={12} md={8} lg={9}>
                        <Typography variant="h3">Check-Out</Typography>
                    </Grid>
                    <Grid item xs={12} md={8} lg={9}>
                        <Grid container spacing={2}>
                            {this.state.reserva.map((item, index) =>
                                <Grid item key={index}>
                                    <RenderCheckOut
                                        user={this.props.user}
                                        id={item.id}
                                        hotelName={item.hotelName}
                                        nroReserva={item.bookingNumber}
                                        logo={foto}
                                        CheckIn={item.checkIn}
                                        CheckOut={item.checkOut}
                                        huespedes={item.cantidadHuespedes}
                                        precio={item.precio}
                                        checkInOpen={this.props.checkInOpen}
                                        checkOutOpen={this.props.checkOutOpen}
                                        modo={this.props.modo}
                                    />
                                </Grid>
                            )}
                        </Grid>

                    </Grid>
                </Grid>
            );
    }
}

CheckOut.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckOut);
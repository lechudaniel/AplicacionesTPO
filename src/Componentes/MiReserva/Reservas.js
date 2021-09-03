import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import foto from '../../Imagenes/logoHotel.png'
import RenderReserva from './ReservaRender/RenderReserva';
import GuestInfo from '../../Models/Guest/GuestInfo';






const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 400,
    },
})

class Reservas extends Component {
    constructor(props) {
        super(props);
        this.state = {          
            reserva: [],
        }
    }

    componentDidMount() {
        let allReservas = GuestInfo.getInstance().getReservas();
        this.setState({reserva: allReservas})
    }

    render() {
        //const { classes } = this.props;

        return (
            <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item xs={12} md={8} lg={9}>
                    <Typography variant="h3">Cuota Activa</Typography>
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <Grid container spacing={2}>
                        {this.state.reserva.map((item, index) =>
                            <Grid item key={index}>
                                <RenderReserva
                                    id={item.id}
                                    user={this.props.user}
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
                                    callCheckIn={this.props.callCheckIn}
                                    callCheckOut={this.props.callCheckOut}
                                    callHuespedes={this.props.callHuespedes}
                                />

                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

Reservas.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reservas);
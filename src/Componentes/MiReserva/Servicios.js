import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import foto from '../../Imagenes/logoHotel.png'
import GuestInfo from '../../Models/Guest/GuestInfo';
import RenderServicios from './ReservaRender/RenderServicios';
import ServiciosHabilitados from './Servicios/ServiciosHabilitados';

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

class Servicios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reserva: [],
        }
    }

    componentDidMount() {
        let allReservas = GuestInfo.getInstance().getReservas();
        this.setState({ reserva: allReservas });
    }
    pad(n) {
        return n + 1
    }

    fechaNow() {
        var date = new Date()
        var dia = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var fecha = year + "-" + this.pad(month) + "-" + dia;
        return fecha
    }
    fechaOut(fecha) {
        var now = this.fechaNow()
        var aFecha2 = fecha.split("-");
        var aNow = now.split("-");
        var fFecha2 = Date.UTC(aFecha2[0], aFecha2[1] - 1, aFecha2[2]);
        var fNow = Date.UTC(aNow[0], aNow[1] - 1, aNow[2]);
        var dif2 = fFecha2 - fNow;
        var Fin = Math.floor(dif2 / (1000 * 60 * 60 * 24));
        return Fin
    }
    fechaIn(fecha) {
        var now = this.fechaNow()
        var aFecha1 = fecha.split("-");
        var aNow = now.split("-");
        var fFecha1 = Date.UTC(aFecha1[0], aFecha1[1] - 1, aFecha1[2]);
        var fNow = Date.UTC(aNow[0], aNow[1] - 1, aNow[2]);
        var dif3 = fNow - fFecha1
        var Dias = Math.floor(dif3 / (1000 * 60 * 60 * 24));
        return Dias
    }


    render() {

        if (this.props.checkInOK)
            return (
                <Grid container spacing={3} justify="center" alignItems="center">                    
                    <Grid item xs={12} md={12} lg={12}>
                        <Grid container spacing={2}>
                            {this.state.reserva.map((item, index) => {
                                var fechaIn = this.fechaIn(item.checkIn)
                                var fechaOut = this.fechaOut(item.checkOut)
                                if (fechaIn >= 0 && fechaOut > 0)
                                    return (
                                        <Grid item key={index}>
                                            <ServiciosHabilitados
                                                id={item.id}
                                                user={this.props.user}
                                                hotelName={item.hotelName}
                                                bookingNumber={item.bookingNumber}
                                                logo={foto}
                                                CheckIn={item.checkIn}
                                                CheckOut={item.checkOut}
                                                huespedes={item.cantidadHuespedes}
                                                precio={item.precio}
                                                modo={this.props.modo}
                                                checkInOK={this.props.checkInOK}
                                                servicios = { item.services }
                                            />
                                        </Grid>
                                    )
                                else
                                    return (<div></div>)
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            )
        else
            return (
                <Grid container spacing={3} justify="center" alignItems="center">
                    <Grid item xs={12} md={8} lg={9}>
                        <Typography variant="h3">Servicios</Typography>
                    </Grid>
                    <Grid item xs={12} md={8} lg={9}>
                        <Grid container spacing={2}>
                            {this.state.reserva.map((item, index) => {
                                var fechaIn = this.fechaIn(item.checkIn)
                                var fechaOut = this.fechaOut(item.checkOut)
                                if (fechaIn >= 0 && fechaOut > 0)
                                    return (
                                        <Grid item key={index}>
                                            <ServiciosHabilitados
                                                id={item.id}
                                                user={this.props.user}
                                                hotelName={item.hotelName}
                                                bookingNumber={item.bookingNumber}
                                                logo={foto}
                                                CheckIn={item.checkIn}
                                                CheckOut={item.checkOut}
                                                huespedes={item.cantidadHuespedes}
                                                precio={item.precio}
                                                modo={this.props.modo}
                                                checkInOK={this.props.checkInOK}
                                            />
                                        </Grid>
                                    )
                                else
                                    return (
                                        <Grid item key={index}>
                                            <RenderServicios
                                                id={item.id}
                                                user={this.props.user}
                                                hotelName={item.hotelName}
                                                nroReserva={item.bookingNumber}
                                                logo={foto}
                                                CheckIn={item.checkIn}
                                                CheckOut={item.checkOut}
                                                huespedes={item.cantidadHuespedes}
                                                precio={item.precio}
                                                modo={this.props.modo}
                                            />
                                        </Grid>
                                    )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            );
    }
}

Servicios.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Servicios);
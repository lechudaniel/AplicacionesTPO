import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import foto from '../../Imagenes/logoHotel.png'
import RenderCheckIn from './ReservaRender/RenderCheckIn';
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

class CheckIn extends Component {
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

        return (
            <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item xs={12} md={8} lg={9}>
                    <Typography variant="h3">Facturas</Typography>
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <Grid container spacing={2}>
                        {this.state.reserva.map((item, index) =>
                            <Grid item key={index}>
                                <RenderCheckIn
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
                                    romantico={this.props.romantico}
                                    ejecutivo={this.props.ejecutivo}
                                    familia={this.props.familia}
                                    preferencias={this.props.preferencias}
                                    perfil={this.props.perfil}
                                    romanticoOpen={this.props.romanticoOpen}
                                    ejecutivoOpen={this.props.ejecutivoOpen}
                                    familiaOpen={this.props.familiaOpen}
                                    preferenciasOpen={this.props.preferenciasOpen}
                                    reservasOpenContacto={this.props.reservasOpenContacto}
                                    perfilCompletado={this.props.perfilCompletado}
                                    callPerfilCompletado={this.props.callPerfilCompletado}
                                    checkInOK={this.props.checkInOK}
                                    handleCheckIn={this.props.handleCheckIn}
                                />
                            
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

CheckIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckIn);
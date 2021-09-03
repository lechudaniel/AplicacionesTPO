import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Paper, Typography, Button, Divider, ButtonBase } from '@material-ui/core';
import clsx from 'clsx';
import foto from '../../../Imagenes/logoHotel.png'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import TabsServicios from '../Servicios/TabsServicios'
import Solicitados from '../Servicios/Solicitados';
import DialogSolicitudes from '../Servicios/DialogSolicitudes';
import RenderFaltaCheckIn from '../ReservaRender/RenderFaltaCheckIn';
//import Prueba from './Prueba'

import ReservasAPI from './../../../Network/Reserva/ReservasAPI';
import GuestInfo from './../../../Models/Guest/GuestInfo';

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    paperSolicitudes: {
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    titleSolicitudes: {
        padding: theme.spacing(1),
    },
    fixedHeight: {
        height: 100,
        [theme.breakpoints.down('xs')]: {
            height: 150,
        },
    },
    fixedHeightDatos: {
        height: 400,
        [theme.breakpoints.down('xs')]: {
            height: 380,
        },
    },
    izq: {
        borderRight: "1px solid #e0e0e0",
        [theme.breakpoints.down('xs')]: {
            borderRight: "1px solid #ffffff",
        },
    },
    arriba: {
        borderBottom: "1px solid #e0e0e0",
        [theme.breakpoints.down('xs')]: {
            borderRight: "1px solid #ffffff",
        },
        paddingLeft: theme.spacing(1),
    },
    logo: {
        padding: theme.spacing(1),
        height: 60,
        width: 60,

    },
    base: {
        width: "100%",
        padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.1,
            },
        },
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0,
        transition: theme.transitions.create('opacity'),
    },

})



class ServiciosHabilitados extends Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurante: false,
            estacionamiento: false,
            tintoreria: false,
            servicio: false,
            limpieza: false,
            comidas: false,
            spa: false,
            gimnasio: false,
            masajes: false,
            tratamiento: false,
            botes: false,
            bicicletas: false,
            autos: false,
            motos: false,
            ski: false,
            Buceo: false,
            eventos: false,
            actividades: false,
            open: false,
            loading: false,
        }
        this.add = this.add.bind(this);
    }

    add(newData) {
        this.props.servicios.push(newData);
        this.postServicio();
    }

    componentDidMount() {
        this.getBookingDetail();
    }

    //Post servicios 
    postServicio() {
        this.setState({ loading: true });
        ReservasAPI.postBooking(this.getBookingDictionary(), this.handlePostBooking.bind(this));
    }

    handlePostBooking(booking) {
        this.setState({ loading: false });

        if (booking.error !== null) {
        //show error message if needed
        GuestInfo.getInstance().updateReservaIfNeeded(booking);
        } else {
            //show error message
        }
    }

    getBookingDetail() {
        this.setState({ loading: true });
        ReservasAPI.getBookingInfo(this.props.id, this.handleBookingDetail.bind(this));
    }

    handleBookingDetail(booking) {
        this.setState({ loading: false });

        if (booking.error !== null) {
        //show error message if needed
        GuestInfo.getInstance().updateReservaIfNeeded(booking);

        if(booking.servicios !== undefined) {
            this.props.servicios = booking.servicios;
        }

        } else {
            //show error message
        }
    }

    getBookingDictionary() {
        let booking = {
            _id: this.props.id,
            hotel: this.props.emailHotel,
            nombreHotel: this.props.id,
            huesped: this.props.user.email,
            checkIn: this.props.CheckIn,
            checkOut: this.props.CheckOut,
            cantHuespedes: this.props.huespedes,
            precio: this.props.precio,
            tipoHabitacion: this.props.habitacion,     
            numeroTarjeta: this.props.numeroTarjeta,
            servicios: this.props.servicios,
        };

        return booking;
    }

    //Handlers
    handleOpen = () => {
        this.setState({ open: true })
    }
    handleClose = () => {
        this.setState({ open: false })
    }


    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };


    fechas(fecha) {

        var fechaArray = fecha.split("-");
        var dia = fechaArray[2]
        var mes = fechaArray[1]
        var año = fechaArray[0]
        var fNueva = []
        var fecha2 = fNueva.concat(dia, mes, año)
        return fecha2.join("/")

    }




    render() {
        const { classes } = this.props;
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        const fixedHeightPaperDatos = clsx(classes.paperSolicitudes, classes.fixedHeightDatos);

        if (this.props.checkInOK)
            return (
                <Grid container spacing={2}>

                    <Grid item xs={12} md={8} lg={9}>
                        <Grid container spacing={2}>

                            <Grid item xs={12} >
                                <Paper className={fixedHeightPaper} elevation={3} >
                                    <Grid container>
                                        <Grid item md={1} xs={2} className={classes.izq}>
                                            <img src={foto} alt="logo" className={classes.logo} />
                                        </Grid>
                                        <Grid item md={11} xs={10}>
                                            <Grid container>
                                                <Grid item md={12} className={classes.arriba}>
                                                    <Typography component="h2" variant="h6" color="primary">Estadia Hotel {this.props.hotelName} #000{this.props.bookingNumber}</Typography>
                                                </Grid>
                                                <Grid item md={12}>
                                                    <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                                                        <Grid item md={6} xs={12}>
                                                            <Grid container direction="row" alignItems="center" justify="center">
                                                                <Grid item md={5} xs={6}>
                                                                    <Button
                                                                        size="small"
                                                                        className={classes.botones}
                                                                        startIcon={<AssignmentTurnedInIcon />}
                                                                        onClick={this.props.checkInOpen}
                                                                    >
                                                                        Check-In:
                                                                    </Button>
                                                                </Grid>
                                                                <Grid item md={4} xs={4}>
                                                                    <Typography >{this.fechas(this.props.CheckIn)}</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>

                                                        <Grid item md={6} xs={12}>
                                                            <Grid container direction="row" alignItems="center" justify="center">
                                                                <Grid item md={6} xs={6}>
                                                                    <Button
                                                                        size="small"
                                                                        className={classes.botones}
                                                                        startIcon={<MeetingRoomIcon />}
                                                                        onClick={this.props.checkOutOpen}
                                                                    >
                                                                        Check-Out:
                                                                    </Button>
                                                                </Grid>
                                                                <Grid item md={4} xs={4}>
                                                                    <Typography >{this.fechas(this.props.CheckOut)}</Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>

                            <Grid item xs={12}>
                                <Paper className={classes.paper} elevation={3}>
                                    <Typography component="h2" variant="h6" color="primary" gutterBottom>Seleccione sus servicios</Typography>
                                    <Divider />

                                    <TabsServicios
                                        restaurante={this.state.restaurante}
                                        estacionamiento={this.state.estacionamiento}
                                        tintoreria={this.state.tintoreria}
                                        servicio={this.state.servicio}
                                        limpieza={this.state.limpieza}
                                        comidas={this.state.comidas}
                                        spa={this.state.spa}
                                        gimnasio={this.state.gimnasio}
                                        masajes={this.state.masajes}
                                        tratamiento={this.state.tratamiento}
                                        botes={this.state.botes}
                                        bicicletas={this.state.bicicletas}
                                        autos={this.state.autos}
                                        motos={this.state.motos}
                                        ski={this.state.ski}
                                        Buceo={this.state.Buceo}
                                        eventos={this.state.eventos}
                                        actividades={this.state.actividades}
                                        handleChange={this.handleChange}
                                        add={this.add}
                                        data={ this.props.servicios }
                                    />
                                </Paper>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={4} lg={3}>
                        <Paper className={fixedHeightPaperDatos} elevation={3}>
                            <Typography component="h2" variant="h6" color="primary" className={classes.titleSolicitudes} gutterBottom>Servicios Solicitados</Typography>
                            <Divider />
                            {this.props.servicios.map((item, index) => {
                                if (item.categoria !== "")
                                    return (
                                        <div key={index}>
                                            <ButtonBase className={classes.base} onClick={this.handleOpen} focusVisibleClassName>
                                                <Solicitados item={item} />
                                                <span className={classes.imageBackdrop} />
                                            </ButtonBase>
                                            <Divider />
                                            <DialogSolicitudes item={item} open={this.state.open} onClose={this.handleClose} />
                                        </div>
                                    )
                                else
                                    return (<div></div>)
                            })}

                        </Paper>
                    </Grid>
                </Grid>
            )
        else
            return (
                <Grid container spacing={3} justify="center" alignItems="center">
                   
                    <Grid item xs={12} >
                        <RenderFaltaCheckIn
                            user={this.props.user}
                            id={this.props.id}
                            hotelName={this.props.hotelName}
                            nroReserva={this.props.bookingNumber}
                            logo={foto}
                            CheckIn={this.props.CheckIn}
                            CheckOut={this.props.CheckOut}
                            huespedes={this.props.huespedes}
                            precio={this.props.precio}
                            checkInOpen={this.props.checkInOpen}
                            checkOutOpen={this.props.checkOutOpen}
                            modo={"faltaChekIn"}
                        />
                    </Grid>
                </Grid>
            )

    }
}

ServiciosHabilitados.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServiciosHabilitados);
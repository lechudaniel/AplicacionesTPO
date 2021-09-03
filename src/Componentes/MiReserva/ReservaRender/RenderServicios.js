import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, Card, CardContent } from '@material-ui/core';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';




const useStyles = makeStyles(theme => ({
    main: {


    },
    izq: {
        borderRight: "1px solid #e0e0e0",
        [theme.breakpoints.down('xs')]: {
            borderRight: "1px solid #ffffff",
        },
    },
    logo: {
        padding: theme.spacing(1),
        height: 120,
        width: 120,
    },
    reserva: {
        marginTop: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(0),
        },
    },
    botones: {
        //width: 150,
        //[theme.breakpoints.down('xs')]: {
        //    width: 140,
        //},
    },
    noreserva: {
        marginTop: theme.spacing(2),
    },
    reservaChekIn: {
        marginTop: theme.spacing(4),
        marginLeft: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            //marginBottom: theme.spacing(2),
        },
    },
    tituloMobile: {
        display: "none",
        [theme.breakpoints.down('xs')]: {
            display: "block",
        },
    }
}));

export default function RenderServicios(props) {
    const classes = useStyles();


    function fechas(fecha) {

        var fechaArray = fecha.split("-");
        var dia = fechaArray[2]
        var mes = fechaArray[1]
        var año = fechaArray[0]
        var fNueva = []
        var fecha2 = fNueva.concat(dia, mes, año)
        return fecha2.join("/")

    }
    function pad(n) {
        return n + 1
    }
    function fechaNow() {
        var date = new Date()
        var dia = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var fecha = year + "-" + pad(month) + "-" + dia;
        return fecha
    }

    function mostrarServicios(fecha) {
        var now = fechaNow()
        var aFecha1 = fecha.split("-");
        var aFecha2 = now.split("-");
        var fFecha1 = Date.UTC(aFecha1[0], aFecha1[1] - 1, aFecha1[2]);
        var fFecha2 = Date.UTC(aFecha2[0], aFecha2[1] - 1, aFecha2[2]);
        var dif = fFecha1 - fFecha2;
        var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
        if (dias >= 0)
            return (
                <Card elevation={10}>
                    <CardContent>
                        <Grid container direction="row"  >
                            {/*IZQUIERDA */}
                            <Grid item md={3} xs={12} className={classes.izq} >
                                <Grid container direction="row" justify="center" alignItems="center" >
                                    <Grid item md={12} xs={12}>
                                        <Typography align="center">Reserva: #000{props.nroReserva}</Typography>
                                    </Grid>
                                    <Grid item md={8} xs={5}>
                                        <img src={props.logo} alt="logo" width className={classes.logo} />
                                    </Grid>
                                    <Grid item md={12} xs={7} >
                                        <Typography variant="h6" align="center" style={{ fontWeight: "bold" }}> Hotel {props.hotelName}</Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                            {/*Derecha */}
                            <Grid item md={8} xs={12}>
                                <Grid container direction="row">

                                    <Grid item md={12} className={classes.reserva}>
                                        <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                                            <Grid item md={6} xs={12}>
                                                <Grid container direction="row" alignItems="center" justify="center">
                                                    <Grid item md={6} xs={6}>
                                                        <Button
                                                            size="small"
                                                            className={classes.botones}
                                                            startIcon={<AssignmentTurnedInIcon />}
                                                            onClick={props.checkInOpen}
                                                        >
                                                            Check-In:
                                                        </Button>
                                                    </Grid>
                                                    <Grid item md={4} xs={4}>
                                                        <Typography >{fechas(props.CheckIn)}</Typography>
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
                                                            onClick={props.checkOutOpen}
                                                        >
                                                            Check-Out:
                                                    </Button>
                                                    </Grid>
                                                    <Grid item md={6} xs={4}>
                                                        <Typography >{fechas(props.CheckOut)}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={12} xs={12} className={classes.reservaChekIn}>
                                        <Typography align="center" variant="h5" color="error">Cuando empieze su estadia va a poder seleccionar servicios</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            )
    }


    if (props.modo === "Servicios")
        if ((props.hotelName && props.nroReserva && props.CheckIn && props.CheckOut && props.huespedes && props.precio) !== undefined)
            if (props.hotelName !== null)
                return (
                    <div>
                        {mostrarServicios(props.CheckOut)}
                    </div>
                )
            else
                return (<div></div>)
        else
            return (<div></div>)




}



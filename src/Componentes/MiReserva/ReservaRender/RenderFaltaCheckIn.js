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

export default function RenderFaltaCheckIn(props) {
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
   
    
   





    if (props.modo === "faltaChekIn") {
        if (props.id !== "") {
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
                                        <Typography align="center" variant="h5" color="error">Realice su Check-In primero para empezar a utilizar sus servicios</Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }
}
                 






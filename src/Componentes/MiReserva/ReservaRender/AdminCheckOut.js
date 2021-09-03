import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid, Typography, Divider, IconButton, TextField, Link, Button, Dialog, DialogContent, DialogActions, DialogTitle } from '@material-ui/core';
import Hora from '../Hora'
import HoraTraslado from '../HoraTraslado'
import MiniBar from '../Servicios/MiniBar'
import Tarjetas from '../../MiPerfil/Tarjetas';
import Cuestionario from '../Cuestionario';
import LoadingPay from '../../Commons/LoadingPay';








const useStyles = makeStyles(theme => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    izq: {
        borderRight: "1px solid #e0e0e0",
        [theme.breakpoints.down('xs')]: {
            borderRight: "1px solid #ffffff",
        },
    },
    main: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(2),
            marginLeft: theme.spacing(0),

        },
    },
    tituloMobile: {
        display: "block",
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
    },
    perfilDatos: {
        marginBottom: theme.spacing(1),
    },
    backContent:{
        backgroundColor:"#ffe0b2"
    }
}));


export default function AdminReserva(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);
    const [pagar, setpagar] = React.useState(false);
    const [cuestionario, setCuestionario] = React.useState(false);
    const [paySucces, setPaySucces] = React.useState(false);
    const timer = React.useRef();

    React.useEffect(() => {
        return () => {
          clearTimeout(timer.current);
        };
      }, []);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handlePagar = () => {
        setpagar(!pagar);
    };
    const handleCuestionario = () => {
        setCuestionario(!cuestionario);
    };
    const handleClosePaySucces =()=>{
        if (!paySucces) {
            setCuestionario(false);
            setPaySucces(true);
            timer.current = setTimeout(() => {
                setCuestionario(true);
                setPaySucces(false);
            }, 2000);
    }
    }



    return (
        <Grid>
            <Grid container direction="row" >
                <Grid item md={3} xs={12} className={classes.izq} >
                    <Grid item md={12} xs={7} className={classes.tituloMobile}>
                        <Typography variant="h6" align="center" style={{ fontWeight: "bold" }}> Hotel {props.hotelName}</Typography>
                    </Grid>
                </Grid>
                <Grid item md={8} xs={12}>
                    <Grid container direction="row" justify="flex-end" alignItems="flex-end">
                        <Grid item md={1}>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                aria-expanded={expanded}
                                color="primary"
                                onClick={handleExpandClick}
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider />


            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Grid container direction="row" spacing={2} className={classes.main} >
                    <Grid item md={12}>
                        <Typography variant="h5">Realice su Check-Out</Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Typography >Seleccione a la hora que se va</Typography>
                        <Typography variant="subtitle2" color="error" >*obligatorio</Typography>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Hora minTime={new Date(0, 0, 0, 7)} maxTime={new Date(0, 0, 0, 14)} label={"Horario de retirada"} date={new Date("2020-01-01 07:00")} />
                    </Grid>
                    <Grid item md={4} xs={11}>
                        <Typography variant="subtitle2" align="justify" style={{ color: "#9e9e9e" }} >
                            *Si desea seleccionar un horario de egreso fuera del rango permitido, por favor dirijase a
                        {<Link onClick={props.reservasOpenContacto}> CONTACTAR HOTEL</Link>}
                        </Typography>
                    </Grid>
                    <Grid item md={11} xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item md={11} xs={12}>
                        <Typography variant="h5">Consumo de MiniBar</Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Typography >Seleccione lo que consumio en el MiniBar</Typography>
                        <Typography variant="subtitle2" color="error" >*obligatorio</Typography>
                    </Grid>
                    <Grid item md={3} xs={12}>
                      <MiniBar/>
                    </Grid>
                    <Grid item md={4} xs={11}>
                        <Typography variant="subtitle2" align="justify" style={{ color: "#9e9e9e" }} >
                            *Acuerdese que se revisara la habitacion para corrobar si consumio algo y se le hara un recargo a su tarjera si es necesario.
                       
                        </Typography>
                    </Grid>
                    <Grid item md={11} xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item md={11} xs={12}>
                        <Typography variant="h5">Resumen de su estadia</Typography>
                    </Grid>
                    <Grid item md={11} xs={12}>
                        <Grid container spacing={2} >
                            <Grid item md={12}>
                                <Typography style={{ color: "#9e9e9e" }}>
                                    Servicios contratados
                             </Typography>
                            </Grid>
                            <Grid item md={6} xs={6}>
                                <Typography >
                                    Tintoreia
                               </Typography>
                            </Grid>
                            <Grid item md={6} xs={6}>
                                <Typography align="right">
                                    $200
                                </Typography>
                            </Grid>
                            <Grid item md={6} xs={6}>
                                <Typography>
                                    Alquiler de Auto
                               </Typography>
                                
                            </Grid>
                            <Grid item md={6} xs={6}>
                                <Typography align="right">
                                    $20000
                                </Typography>
                            </Grid>
                            <Grid item md={6} xs={6}>
                                <Typography style={{ fontWeight: "bold" }}>
                                   TOTAL
                               </Typography>
                                
                            </Grid>
                            <Grid item md={6} xs={6}>
                                <Typography align="right" style={{ fontWeight: "bold" }}>
                                    $20200
                                </Typography>
                            </Grid>
                           
                            
                        </Grid>
                    </Grid>
                   
                    <Grid item md={11} xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Typography variant="h5">Adicionales</Typography>
                    </Grid>

                    <Grid item md={4} xs={12}>
                        <Typography>Traslados al Aeropuerto</Typography>
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <Grid container spacing={2}>
                            <Grid item md={5} xs={12}>
                                <TextField
                                    label="Aeropuerto"
                                />
                            </Grid>
                            <Grid item md={5} xs={12}>
                                <TextField
                                    label="Numero de vuelo"
                                />
                            </Grid>
                            <Grid item md={5} xs={12}>
                                <HoraTraslado label={"Horario de partida"} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={11} xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item md={11} xs={12}>
                        <Grid container justify="flex-end">
                            <Grid item >
                                <Button variant="contained" color="primary"  onClick={handlePagar} >Confirmar</Button>
                                <Dialog open={pagar} onClose={handlePagar} maxWidth="lg">
                                <DialogTitle>Metodo de pago</DialogTitle>
                                    <DialogContent dividers className={classes.backContent}>
                                        <Tarjetas modo={"CheckOut"} handleCheckOut={props.handleCheckOut}/>
                                    </DialogContent>      
                                    <DialogActions>
                                        <Button variant="outlined" color="primary" onClick={handlePagar}>Cancelar</Button>
                                        <Button variant="outlined" color="primary" onClick={handleClosePaySucces} >Pagar</Button>
                                    </DialogActions>                         
                                </Dialog>
                                <Dialog open={paySucces} onClose={handleClosePaySucces}>
                                    <LoadingPay/>
                                </Dialog>
                                <Dialog open={cuestionario} onClose={handleCuestionario} maxWidth="lg">
                                    <DialogTitle>Cuestionario</DialogTitle>
                                    <DialogContent dividers className={classes.backContent}>
                                        <Cuestionario/>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button variant="outlined" color="primary" onClick={props.handleCheckOut} >Finalizar</Button>
                                    </DialogActions>
                                </Dialog>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Collapse>
        </Grid >
    );

}
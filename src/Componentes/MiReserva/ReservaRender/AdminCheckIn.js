import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid, Typography, Divider, IconButton, FormControl, FormGroup, FormLabel, FormControlLabel, Switch, TextField, Link, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import Hora from '../Hora'
import HoraTraslado from '../HoraTraslado'
import PerfilCheckIn from '../PerfilCheckIn'
import TabsPreferencias from '../TabsPreferencias'







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
    }
}));


export default function AdminCheckIn(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);
    const [seleccionar, setSeleccionar] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const seleccionarClose = () => {
        setSeleccionar(!seleccionar);
    };
    function huespedes(h) {
        const huespedes = [];
        for (let i = 0; i < h; i++) {
            huespedes.push({
                name: ""
            });
        }
        return huespedes
    }

    function perfil() {
        if (props.romantico) {
            return (
                <FormControlLabel
                    control={<Switch color="primary" checked={true} /*onChange={romanticoOpen}*/ name="romantico" />}
                    label="Romantico"
                />
            )
        } else {
            if (props.ejecutivo) {
                return (
                    <FormControlLabel
                        control={<Switch color="primary" checked={true} /*onChange={romanticoOpen}*/ name="ejecutivo" />}
                        label="Ejecutivo"
                    />
                )
            } else {
                if (props.familia) {
                    return (
                        <FormControlLabel
                            control={<Switch color="primary" checked={true} /*onChange={romanticoOpen}*/ name="familia" />}
                            label="Familia"
                        />
                    )
                } else {
                    if (props.preferencias) {
                        return (
                            <FormControlLabel
                                control={<Switch color="primary" checked={true} /*onChange={romanticoOpen}*/ name="preferencias" />}
                                label="Mis Preferencias"
                            />
                        )
                    } else {
                        return (
                            <Typography align="center" color="error" variant="body2">No se ha seleccionado un perfil</Typography>
                        )
                    }
                }
            }
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
                        <Typography variant="h5">Realice su Check-In</Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Typography >Seleccione su hora de ingreso</Typography>
                        <Typography variant="subtitle2" color="error" >*obligatorio</Typography>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Hora minTime={new Date(0, 0, 0, 15)} maxTime={new Date(0, 0, 0, 23)} label={"Horario de ingreso"} date={new Date("2020-01-01 15:00")} />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Typography variant="subtitle2" align="justify" style={{ color: "#9e9e9e" }} >
                            *Si desea seleccionar un horario de ingreso fuera del rango permitido, por favor dirijase a
                        <Link onClick={props.reservasOpenContacto}> CONTACTAR HOTEL</Link>
                        </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Typography>Complete sus datos</Typography>
                        <Typography variant="subtitle2" color="error" >*obligatorio</Typography>
                        <Typography variant="subtitle2" color="primary" >{props.huespedes} Huespedes</Typography>
                    </Grid>
                    <Grid item md={7} xs={12}>
                        {huespedes(props.huespedes).map((num, index) => (
                            <Grid item className={classes.perfilDatos} key={index}>
                                <PerfilCheckIn
                                    user={props.user}
                                    numero={index + 1}
                                    callPerfilCompletado={props.callPerfilCompletado}
                                    perfilCompletado={props.perfilCompletado}
                                />

                            </Grid>
                        ))}
                    </Grid>
                    <Grid item md={11} xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Typography variant="h5">Adicionales</Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Typography>Perfil Seleccionado</Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <FormControl component="fieldset" className={classes.formControl}>
                           
                            <FormLabel component="legend">Perfil seleccionado</FormLabel>
                            <FormGroup tag="div">
                                {perfil()}
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Button variant="outlined" color="primary" onClick={seleccionarClose}>Seleccionar</Button>
                        <Dialog open={seleccionar} onClose={seleccionarClose} maxWidth="lg">
                            <DialogTitle>Seleccionar Perfil</DialogTitle>
                            <DialogContent dividers>
                                <TabsPreferencias
                                    perfil={props.perfil}
                                    romanticoOpen={props.romanticoOpen}
                                    ejecutivoOpen={props.ejecutivoOpen}
                                    familiaOpen={props.familiaOpen}
                                    preferenciasOpen={props.preferenciasOpen}
                                    romantico={props.romantico}
                                    ejecutivo={props.ejecutivo}
                                    familia={props.familia}
                                    preferencias={props.preferencias}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button variant="outlined" color="primary" onClick={seleccionarClose}>Cancelar</Button>
                                <Button variant="outlined" color="primary" onClick={seleccionarClose}>Confirmar</Button>
                            </DialogActions>
                        </Dialog>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Typography>Traslados al hotel</Typography>
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
                                <HoraTraslado label={"Horario de arribo"} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={11} xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item md={11} xs={12}>
                        <Grid container justify="flex-end">
                            <Grid item >
                                <Button variant="contained" color="primary" onClick={props.handleCheckIn}>Confirmar</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Collapse>
            
        </Grid>
    );

}
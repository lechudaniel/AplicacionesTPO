import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid, Typography, Button, Icon, Divider, Paper, FormControl, InputLabel, Select, MenuItem, TextField, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, List, ListItem, ListItemText } from '@material-ui/core';
import Fecha from '../../ReservApi/Fecha'






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
            borderBottom: "1px solid #e0e0e0",
        },
    },
    botones: {
        marginTop: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            marginBottom: theme.spacing(2),
        },
    },
    paper: {
        width: "100%",
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    espacio: {
        marginTop: theme.spacing(3)
    },
    boton: {
        minWidth: 180,
        minHeight: 40,
    },
    listItem: {
        padding: theme.spacing(1, 0),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1, 4),
        },
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
    tituloMobile: {
        display: "block",
        [theme.breakpoints.down('xs')]: {
            display: "none",
        },
    },
    botonAdmin: {

        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    }

}));
const products = [
    { name: 'Precio por Noche', desc: '', price: '$6500' },
    { name: 'Noches', desc: 'total', price: '10' }
];

export default function AdminReserva(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [modificar, setModificar] = React.useState(false);
    const [contacto, setContacto] = React.useState(false);
    const [cancelar, setCancelar] = React.useState(false);
    const [resumen, setResumen] = React.useState(false);
    const [/*huespedes*/, setHuespedes] = React.useState(0);
    const [dialogCanelar, setDialogConcelar] = React.useState(false);
    const [dialogModificar, setDialogModificar] = React.useState(false);
    const [dialogContactar, setDialogContactar] = React.useState(false);
    const [cancelarError, setCancelarError] = React.useState(false);
    const [asuntoVacio, setAsuntoVacio] = React.useState(false);
    const [mensajeVacio, setMensajeVacio] = React.useState(false);
    const [values, setValues] = React.useState({
        asunto: '',
        mensaje: '',
        cancelar: ''
    });


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    useEffect(() => {

        setExpanded(props.expanded)
        setContacto(props.contacto)
    }, [props.expanded, props.contacto]);

    const handleChangeHuespedes = (event) => {
        setHuespedes(event.target.value);
        props.callHuespedes(event.target.value)
    };
    const closeDialog = () => {
        setDialogConcelar(!dialogCanelar);
    };
    const closeDialogModificar = () => {
        setDialogModificar(!dialogModificar);
    };
    const closeDialogContactar = () => {
        setDialogContactar(!dialogContactar);
        setAsuntoVacio(false)
        setMensajeVacio(false)
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    function precio() {
        if (!expanded) {
            return (
                <Grid container justify="center"  >
                    <Grid item >
                        <Typography variant="h6" style={{ fontWeight: "bold" }}>Importe Total:</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="h6" color="primary" style={{ fontWeight: "bold" }}> ${props.precio}</Typography>
                    </Grid>
                </Grid>
            )
        }
    }

    const modificarOpen = () => {
        setModificar(true)
        contactoClose()
        cancelarClose()
        resumenClose()
    }
    const modificarClose = () => {
        setModificar(false)
    }
    const contactoOpen = () => {
        setContacto(true)
        modificarClose()
        cancelarClose()
        resumenClose()
    }
    const contactoClose = () => {
        setContacto(false)
    }
    const cancelarOpen = () => {
        setCancelar(true)
        modificarClose()
        contactoClose()
        resumenClose()
    }
    const cancelarClose = () => {
        setCancelar(false)
    }
    const resumenOpen = () => {
        setResumen(true)
        modificarClose()
        contactoClose()
        cancelarClose()
    }
    const resumenClose = () => {
        setResumen(false)
    }

    const botonContactar = () => {

        if (values.asunto !== "" && values.mensaje !== "") {
            closeDialogContactar()
        } else {
            if (values.asunto === "" && values.mensaje === "") {
                setAsuntoVacio(true)
                setMensajeVacio(true)
            } else {
                if (values.mensaje === "") {
                    setMensajeVacio(true)
                } else {
                    if (values.asunto === "") {
                        setAsuntoVacio(true)
                    }
                }
            }
        }

    }
    const botonCancelar = () => {
        if (values.cancelar !== props.nroReserva) {
            setCancelarError(true)
            alert("Numero de reserva incorrecto")
        } else (
            closeDialog()
        )

    }



    function container() {

        if (modificar) {
            return (
                <Grid container direction="row">
                    <Grid item md={12}>
                        <Typography variant="h6" gutterBottom>
                            Fechas
                        </Typography>
                    </Grid>
                    <Grid item md={12}>
                        <Grid container direction="row" alignItems="center" spacing={2}>
                            <Grid item md={5} xs={12}>
                                <Fecha label={"Check-in"} fecha={props.CheckIn} callFecha={props.callCheckIn} />
                            </Grid>
                            <Grid item md={5} xs={12}>
                                <Fecha label={"Check-out"} fecha={props.CheckOut} callFecha={props.callCheckOut} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item md={12} xs={12}>
                                <Typography variant="h6" gutterBottom className={classes.espacio}>
                                    Cantidad de huespedes
                                 </Typography>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <FormControl variant="standard" className={classes.formControl}>
                                    <InputLabel>Huespedes</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={props.huespedes}
                                        onChange={handleChangeHuespedes}
                                        label="Huespedes"
                                    >
                                        <MenuItem value=""></MenuItem>
                                        <MenuItem value={1}>1 Huesped</MenuItem>
                                        <MenuItem value={2}>2 Huespedes</MenuItem>
                                        <MenuItem value={3}>3 Huespedes</MenuItem>
                                        <MenuItem value={4}>4 Huespedes</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={12} xs={12} className={classes.espacio}>
                        <Grid container direction="row" justify="flex-end">
                            <Grid item md={4} xs={6}>
                                <Button variant="contained" onClick={closeDialogModificar} color="primary">Modificar</Button>
                                <Dialog open={dialogModificar} onClose={closeDialogModificar} >
                                    <DialogTitle>Modificacion reserva</DialogTitle>
                                    <DialogContent dividers>
                                        <DialogContentText>
                                            Se le confirmara por Correo electronico si el hotel puede realizar su modificacion.
                                        </DialogContentText>

                                    </DialogContent>
                                    <DialogActions>
                                        <Button color="primary" onClick={closeDialogModificar}>Cerrar</Button>

                                    </DialogActions>
                                </Dialog>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            )
        } else {
            if (contacto) {
                return (
                    <Grid container spacing={2}>
                        <Grid item >
                            <Typography variant="h6" gutterBottom>Contactar al hotel</Typography>
                            <Typography variant="body1" gutterBottom>Telefono: (011)456789</Typography>
                        </Grid>
                        <Grid item>
                            <Grid container >
                                <Grid item md={12}>
                                    <Typography variant="h6" gutterBottom>Enviar consulta</Typography>
                                </Grid>
                                <Grid item md={12}>
                                    <Typography>De: {props.user.displayName} ({props.user.email})</Typography>
                                </Grid>

                                <Grid item md={12}>
                                    <TextField
                                        id="standard-full-width"
                                        placeholder="Asunto"
                                        fullWidth
                                        margin="normal"
                                        error={asuntoVacio}
                                        value={values.asunto}
                                        onChange={handleChange("asunto")}
                                    />
                                </Grid>

                                <Grid item md={12}>
                                    <TextField
                                        id="standard-full-width"
                                        label="Mensaje"
                                        placeholder="Escriba su mensaje aqui"
                                        fullWidth
                                        margin="normal"
                                        error={mensajeVacio}
                                        multiline
                                        value={values.mensaje}
                                        onChange={handleChange("mensaje")}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12}>
                            <Grid container direction="row" justify="flex-end">

                                <Grid item>
                                    <Button variant="contained" color="primary" onClick={botonContactar}>Enviar</Button>
                                    <Dialog open={dialogContactar} onClose={closeDialogContactar} >
                                        <DialogTitle>Cantactar Hotel</DialogTitle>
                                        <DialogContent dividers>
                                            <DialogContentText>
                                                Su mensaje fue enviado, el hotel se contactara contigo lo antes posible.
                                        </DialogContentText>

                                        </DialogContent>
                                        <DialogActions>
                                            <Button color="primary" onClick={closeDialogContactar}>Cerrar</Button>

                                        </DialogActions>
                                    </Dialog>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                )
            } else {
                if (cancelar) {
                    return (
                        <Grid container spacing={2}>
                            <Grid item>
                                <Typography variant="h6">Para cancelar su reserva escriba su codigo de reserva </Typography>
                            </Grid>

                            <Grid item md={12}>
                                <TextField
                                    id="standard-full-width"
                                    placeholder="#0000000"
                                    label="Codigo de reserva"
                                    fullWidth
                                    error={cancelarError}
                                    value={values.cancelar}
                                    onChange={handleChange("cancelar")}
                                />
                            </Grid>

                            <Grid item md={12}>
                                <Grid container direction="row" justify="flex-end">

                                    <Grid item>
                                        <Button variant="contained" color="primary" onClick={botonCancelar}>Confirmar</Button>
                                        <Dialog open={dialogCanelar} onClose={closeDialog} >
                                            <DialogTitle>Cancelar reserva</DialogTitle>
                                            <DialogContent dividers>
                                                <DialogContentText>
                                                    Esta seguro de cancelar su reserva?,
                                                    si es asi se le enviara una confirmacion a su correo electronico y
                                                    podra tener recargo si es necesario
                                        </DialogContentText>

                                            </DialogContent>
                                            <DialogActions>
                                                <Button color="primary" onClick={closeDialog}>Cancelar</Button>
                                                <Button color="primary" onClick={closeDialog}>Confirmar</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                } else {
                    if (resumen) {
                        return (
                            <Grid >

                                <Typography variant="h6">
                                    Resumen
                                    </Typography>

                                <List disablePadding>
                                    {products.map((product) => (
                                        <ListItem className={classes.listItem} key={product.name}>
                                            <ListItemText primary={product.name} secondary={product.desc} />
                                            <Typography variant="body2">{product.price}</Typography>
                                        </ListItem>
                                    ))}

                                </List>

                            </Grid>
                        )
                    } else {
                        return (
                            <Grid container direction="row" alignItems="center" justify="center">
                                <Grid item xs={12}>
                                    <Typography variant="h6" >
                                        Seleccione como quiere administrar su reserva
                                    </Typography>
                                </Grid>
                            </Grid>
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
                    <Grid container direction="row" justify="center" >
                        <Grid item md={10} xs={12} className={classes.reserva}>
                            {precio()}
                        </Grid>
                        <Grid item md={2} xs={6}>
                            <Button
                                className={classes.botonAdmin}
                                onClick={handleExpandClick}
                                endIcon={
                                    <Icon
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded,
                                        })}
                                        aria-expanded={expanded}
                                        color="primary"
                                    >
                                        <ExpandMoreIcon />
                                    </Icon>
                                }> Administrar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider />


            <Collapse in={expanded} timeout="auto" unmountOnExit>

                <Grid container direction="row" >
                    <Grid item md={3} xs={12} className={classes.izq} >
                        <Grid container direction="row" justify="center" alignItems="center" spacing={2} className={classes.botones}>
                            <Grid item md={12}>
                                <Button variant="outlined" size="small" onClick={modificarOpen} className={classes.boton}>Modificar Reserva</Button>
                            </Grid>
                            <Grid item md={12}>
                                <Button variant="outlined" size="small" onClick={contactoOpen} className={classes.boton}>Contactar Hotel</Button>
                            </Grid>
                            <Grid item md={12}>
                                <Button variant="outlined" size="small" onClick={cancelarOpen} className={classes.boton}>Cancelar Reserva</Button>
                            </Grid>
                            <Grid item md={12}>
                                <Button variant="outlined" size="small" onClick={resumenOpen} className={classes.boton}>Resumen Reserva</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Grid item md={12}>
                            <Paper elevation={0} className={classes.paper}>
                                {container()}
                            </Paper>
                        </Grid>
                        <Grid item md={12}>
                            <Grid container direction="row">
                                <Grid item md={12} xs={12} className={classes.reserva}>
                                    <Grid container justify="center"  >
                                        <Grid item >
                                            <Typography variant="h6" style={{ fontWeight: "bold" }}>Importe Total:</Typography>
                                        </Grid>
                                        <Grid item >
                                            <Typography variant="h6" color="primary" style={{ fontWeight: "bold" }}> ${props.precio}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Collapse>
        </Grid >
    );

}
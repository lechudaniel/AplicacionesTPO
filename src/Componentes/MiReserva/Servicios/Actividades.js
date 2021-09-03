import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, FormControlLabel, Checkbox, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Divider, ExpansionPanelActions, Button, TextField, Dialog, DialogTitle, DialogContent, FormLabel, FormControl, DialogActions } from '@material-ui/core';
import Hora from './Hora'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fecha from '../../ReservApi/Fecha';

const styles = theme => ({
    formControl: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(2),
    },
    root: {
        width: '100%',
    },
})

class Actividades extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alquiler: false,
            actividades: false,
            fechaAlquiler: "",
            horaAlquiler: "",
            botes: false,
            bici: false,
            autos: false,
            motos: false,
            ski: false,
            buceo: false,
            alquilado: "Seleccionar",
            fechaEvento: "",
            horaEvento: "",
            detalle: "",
            fechaActividad: "",
            zumba: false,
            acuatico: false,
            boxeo: false,
            magia: false,
            recital: false,
            actividad: "Seleccionar",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    solicitarAlquiler() {
        let newData = [
            ...this.props.array,
            {
                servicio: "Actividades",
                categoria: "Alquileres",
                fechaAlquiler: this.state.fechaAlquiler,
                horaAlquiler: this.state.horaAlquiler,
                alquilado: this.state.alquilado,
            }
        ]
        this.props.add(newData)
    }
    solicitarEvento() {
        let newData = [
            ...this.props.array,
            {
                servicio: "Actividades",
                categoria: "Eventos",
                fechaEvento: this.state.fechaEvento,
                horaEvento: this.state.horaEvento,
                detalle: this.state.detalle,
            }
        ]
        this.props.add(newData)
    }
    solicitarACtividad() {
        let newData = [
            ...this.props.array,
            {
                servicio: "Actividades",
                categoria: "Actividades",
                fechaActividad: this.state.fechaActividad,
                actividad: this.state.actividad,
            }
        ]
        this.props.add(newData)
    }




    callFechaAlquier = (x) => {
        this.setState({ fechaAlquiler: x })
    }
    callHoraAlquiler = (x) => {
        this.setState({ horaAlquiler: x })
    }
    callFechaEvento = (x) => {
        this.setState({ fechaEvento: x })
    }
    callHoraEvento = (x) => {
        this.setState({ horaEvento: x })
    }
    callFechaActividad = (x) => {
        this.setState({ fechaActividad: x })
    }
    alquilerOpen = () => {
        this.setState({ alquiler: true })
    }
    alquilerClose = () => {
        this.setState({ alquiler: false })
        this.alquiler()
    }
    actividadesOpen = () => {
        this.setState({ actividades: true })
    }
    actividadesClose = () => {
        this.setState({ actividades: false })
        this.actividades()
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleChangeCheck = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    alquiler() {
        const state = this.state
        if (state.botes)
            this.setState({ alquilado: "Bote" })
        else
            if (state.bici)
                this.setState({ alquilado: "Bicicleta" })
            else
                if (state.autos)
                    this.setState({ alquilado: "Auto" })
                else
                    if (state.motos)
                        this.setState({ alquilado: "Moto" })
                    else
                        if (state.ski)
                            this.setState({ alquilado: "Ski" })
                        else
                            if (state.buceo)
                                this.setState({ alquilado: "Buceo" })
                            else
                                this.setState({ alquilado: "" })
    }

    actividades() {
        const state = this.state
        if (state.zumba)
            this.setState({ actividad: "Clase de zumba" })
        else
            if (state.acuatico)
                this.setState({ actividad: "Evento acuatico" })
            else
                if (state.boxeo)
                    this.setState({ actividad: "Clase de boxeo" })
                else
                    if (state.magia)
                        this.setState({ actividad: "Magia en el salon" })
                    else
                        if (state.recital)
                            this.setState({ actividad: "Recital" })
                        else
                            this.setState({ actividad: "" })
    }




    render() {
        const { classes } = this.props;

        return (
            <Grid container>
                <ExpansionPanel className={classes.root}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>Alquileres</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <Fecha label={"Selecionar dia"} callFecha={this.callFechaAlquier} />
                            </Grid>
                            <Grid item md={3}>
                                <Hora label={"Horario"} callHora={this.callHoraAlquiler} />
                            </Grid>
                            <Grid item md={3}>
                                <TextField
                                    label="Alquiler seleccionado"
                                    value={this.state.alquilado}
                                    InputProps={{
                                        readOnly: true
                                    }}
                                />
                            </Grid>
                            <Grid item md={3}>
                                <Button variant="outlined" color="primary" onClick={this.alquilerOpen}>Seleccionar </Button>
                                <Dialog open={this.state.alquiler} onClose={this.alquilerClose}>
                                    <DialogTitle>Seleccionar tipo de alquiler</DialogTitle>
                                    <DialogContent>
                                        <FormLabel component="legend">Alquiler de</FormLabel>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('botes')} checked={this.state.botes} name="botes" />
                                                }
                                                label={"Botes"} />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('bici')} checked={this.state.bici} name="bici" />
                                                }
                                                label={"Bicicletas"} />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('autos')} checked={this.state.autos} name="autos" />
                                                }
                                                label={"Autos"} />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('motos')} checked={this.state.motos} name="motos" />
                                                }
                                                label={"Motos"} />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('ski')} checked={this.state.ski} name="ski" />
                                                }
                                                label={"Ski"} />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('buceo')} checked={this.state.buceo} name="buceo" />
                                                }
                                                label={"Buceo"} />
                                        </FormControl>


                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={this.alquilerClose}>Cancelar</Button>
                                        <Button onClick={this.alquilerClose}>Confirmar</Button>
                                    </DialogActions>
                                </Dialog>
                            </Grid>
                        </Grid>

                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>

                        <Button size="small" color="primary" onClick={this.solicitarAlquiler.bind(this)}>
                            Solicitar
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
                <ExpansionPanel className={classes.root}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>Eventos Organizados</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <Fecha label={"Seleccionar dia"} callFecha={this.callFechaEvento} />
                            </Grid>
                            <Grid item md={3}>
                                <Hora label={"Horario"} callHora={this.callHoraEvento} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField
                                    label="Detalles de su evento"
                                    name="detalle"
                                    fullWidth
                                    autoComplete="detalle"
                                    value={this.state.detalle}
                                    onChange={this.handleChange}
                                    multiline
                                />
                            </Grid>
                        </Grid>

                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>

                        <Button size="small" color="primary" onClick={this.solicitarEvento.bind(this)}>
                            Solicitar
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
                <ExpansionPanel className={classes.root}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>Actividades del hotel</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <Fecha label={"Selecionar dia"} callFecha={this.callFechaEvento} />
                            </Grid>
                            <Grid item md={4}>
                                <TextField
                                    label="Actividad seleccionada"
                                    value={this.state.actividad}
                                    InputProps={{
                                        readOnly: true
                                    }}
                                />
                            </Grid>
                            <Grid item md={3}>
                                <Button variant="outlined" color="primary" onClick={this.actividadesOpen}>Seleccionar </Button>
                                <Dialog open={this.state.actividades} onClose={this.actividadesClose}>
                                    <DialogTitle>Seleccionar tipo de alquiler</DialogTitle>
                                    <DialogContent>
                                        <FormLabel component="legend">Actividades del Hotel</FormLabel>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('zumba')} checked={this.state.zumba} name="zumba" />
                                                }
                                                label={"Clase de Zumba"} />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('acuatico')} checked={this.state.acuatico} name="acuatico" />
                                                }
                                                label={"Evento acuatico"} />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('boxeo')} checked={this.state.boxeo} name="boxeo" />
                                                }
                                                label={"Clase de boxeo"} />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('magia')} checked={this.state.magia} name="magia" />
                                                }
                                                label={"Magia en el salon principal"} />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('recital')} checked={this.state.recital} name="recital" />
                                                }
                                                label={"Recital"} />
                                        </FormControl>




                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={this.actividadesClose}>Cancelar</Button>
                                        <Button onClick={this.actividadesClose}>Confirmar</Button>
                                    </DialogActions>
                                </Dialog>
                            </Grid>
                        </Grid>


                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>

                        <Button size="small" color="primary" onClick={this.solicitarACtividad.bind(this)}>
                            Solicitar
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>

            </Grid>
        )

    }
}

Actividades.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Actividades);
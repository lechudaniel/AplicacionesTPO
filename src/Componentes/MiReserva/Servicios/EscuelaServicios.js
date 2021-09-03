import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, FormControlLabel, Checkbox, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Divider, ExpansionPanelActions, Button, TextField } from '@material-ui/core';
import Hora from './Hora'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fecha from '../../ReservApi/Fecha';
import Ropa from './Ropa'

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

class EscuelaServicios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fecha: "",
            hora: "",
            comentarios: "",
            desde: "",
            hasta: "",
            completo: false,
            dia: "",
            tiempo: "",
            prendas: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    solicitarResto() {
        let newData = [
            ...this.props.array,
            {
                servicio: "Hotel",
                categoria: "Restaurante",
                dia: this.state.fecha,
                horario: this.state.hora,
                comentario: this.state.comentarios,
            }
        ]
        this.props.add(newData)
    }
    solicitarEstacionamiento() {
        let newData = [
            ...this.props.array,
            {
                servicio: "Hotel",
                categoria: "Estacionamiento",
                desde: this.state.desde,
                hasta: this.state.hasta,
                completo: this.state.completo,
            }
        ]
        this.props.add(newData)
    }
    solicitarTintoreria() {
        let newData = [
            ...this.props.array,
            {
                servicio: "Hotel",
                categoria: "Tintoreria",
                dia: this.state.dia,
                horario: this.state.tiempo,
                prendas: this.state.prendas,
            }
        ]
        this.props.add(newData)
    }

    callFecha = (x) => {
        this.setState({ fecha: x })
    }
    callDesde = (x) => {
        this.setState({ desde: x })
    }
    callHasta = (x) => {
        this.setState({ hasta: x })
    }
    callDia = (x) => {
        this.setState({ dia: x })
    }

    callHora = (x) => {
        this.setState({ hora: x })
    }
    callTiempo = (x) => {
        this.setState({ tiempo: x })
    }
    callPrenda = (x) => {
        this.setState({ prendas: x })
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleChangeCheck = name => event => {
        this.setState({ [name]: event.target.checked });
    };





    render() {
        const { classes } = this.props;

        return (
            <Grid container>
                <ExpansionPanel className={classes.root}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                       <Typography>Reservar restaurante</Typography> 
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <Fecha label={"Selecionar dia"} callFecha={this.callFecha} />
                            </Grid>
                            <Grid item md={3}>
                                <Hora label={"Horario"} callHora={this.callHora} />
                            </Grid>
                            <Grid item md={6}>
                                <TextField
                                    label="Comentarios"
                                    name="comentarios"
                                    fullWidth
                                    autoComplete="comentarios"
                                    value={this.state.comentarios}
                                    onChange={this.handleChange}
                                    multiline
                                />
                            </Grid>
                        </Grid>

                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>

                        <Button size="small" color="primary" onClick={this.solicitarResto.bind(this)}>
                            Solicitar
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
                <ExpansionPanel className={classes.root}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>Reservar estacionamiento</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <Fecha label={"Desde"} callFecha={this.callDesde} />
                            </Grid>
                            <Grid item md={3}>
                                <Fecha label={"Hasta"} callFecha={this.callHasta} />
                            </Grid>
                            <Grid item md={4}>
                                <FormControlLabel control={<Checkbox color="primary" checked={this.state.completo} onChange={this.handleChangeCheck("completo")} name="completo" />} label="Toda la estadia" />
                            </Grid>
                        </Grid>

                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>

                        <Button size="small" color="primary" onClick={this.solicitarEstacionamiento.bind(this)}>
                            Solicitar
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
                <ExpansionPanel className={classes.root}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>Tintoreria</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <Fecha label={"Selecionar dia"} callFecha={this.callDia} />
                            </Grid>
                            <Grid item md={3}>
                                <Hora label={"Horario"} callHora={this.callTiempo} />
                            </Grid>
                            <Grid item md={3}>
                                <Ropa callPrenda={this.callPrenda} />
                            </Grid>
                        </Grid>


                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>

                        <Button size="small" color="primary" onClick={this.solicitarTintoreria.bind(this)}>
                            Solicitar
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>

            </Grid>
        )

    }
}

EscuelaServicios.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EscuelaServicios);
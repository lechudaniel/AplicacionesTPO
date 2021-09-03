import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Divider, ExpansionPanelActions, Button, TextField } from '@material-ui/core';
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

class ActsArtísticas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fechaSpa: "",
            horaSpa: "",
            comentariosSpa: "",
            fechaGimnasio: "",
            horaGimnasio: "",
            comentariosGimnasio: "",
            fechaMasajes: "",
            horaMasajes: "",
            comentariosMasajes: "",
            fechaTratamientos: "",
            horaTratamientos: "",
            comentariosTratamientos: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }


    solicitarSpa() {
        let newData = [
            ...this.props.array,
            {
                servicio: "ActsArtísticas",
                categoria: "Spa",
                fechaSpa: this.state.fechaSpa,
                horaSpa: this.state.horaSpa,
                comentariosSpa: this.state.comentariosSpa,
            }
        ]
        this.props.add(newData)
    }
    solicitarGimnasio() {
        let newData = [
            ...this.props.array,
            {
                servicio: "ActsArtísticas",
                categoria: "Gimnasio",
                fechaGimnasio: this.state.fechaGimnasio,
                horaGimnasio: this.state.horaGimnasio,
                comentariosGimnasio: this.state.comentariosGimnasio,
            }
        ]
        this.props.add(newData)
    }
    solicitarMasajes() {
        let newData = [
            ...this.props.array,
            {
                servicio: "ActsArtísticas",
                categoria: "Masajes",
                fechaMasajes: this.state.fechaMasajes,
                horaMasajes: this.state.horaMasajes,
                comentariosMasajes: this.state.comentariosMasajes,
            }
        ]
        this.props.add(newData)
    }
    solicitarTratamientos() {
        let newData = [
            ...this.props.array,
            {
                servicio: "ActsArtísticas",
                categoria: "Tratamientos",
                fechaTratamientos: this.state.fechaTratamientos,
                horaTratamientos: this.state.horaTratamientos,
                comentariosTratamientos: this.state.comentariosTratamientos,
            }
        ]
        this.props.add(newData)
    }

    callFechaSpa = (x) => {
        this.setState({ fechaSpa: x })
    }
    callHoraSpa = (x) => {
        this.setState({ horaSpa: x })
    }
    callFechaGimasio = (x) => {
        this.setState({ fechaGimnasio: x })
    }
    callHoraGimnasio = (x) => {
        this.setState({ horaGimnasio: x })
    }
    callFechaMasajes = (x) => {
        this.setState({ fechaMasajes: x })
    }
    callHoraMasajes = (x) => {
        this.setState({ horaMasajes: x })
    }
    callFechaTratamientos = (x) => {
        this.setState({ fechaTratamientos: x })
    }
    callHoraTratamientos = (x) => {
        this.setState({ horaTratamientos: x })
    }
    

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }




    render() {
        const { classes } = this.props;

        return (
            <Grid container>
                <ExpansionPanel className={classes.root}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>Reservar de Spa</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <Fecha label={"Selecionar dia"} callFecha={this.callFechaSpa} />
                            </Grid>
                            <Grid item md={3}>
                                <Hora label={"Horario"} callHora={this.callHoraSpa} />
                            </Grid>
                            <Grid item md={6}>
                                <TextField
                                    label="Comentarios"
                                    name="comentariosSpa"
                                    fullWidth
                                    autoComplete="comentarios"
                                    value={this.state.comentariosSpa}
                                    onChange={this.handleChange}
                                    multiline
                                />
                            </Grid>
                        </Grid>

                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>

                        <Button size="small" color="primary" onClick={this.solicitarSpa.bind(this)}>
                            Solicitar
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>

                <ExpansionPanel className={classes.root}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>Pedido al gimnasio</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <Fecha label={"Selecionar dia"} callFecha={this.callFechaGimasio} />
                            </Grid>
                            <Grid item md={3}>
                                <Hora label={"Horario"} callHora={this.callHoraGimnasio} />
                            </Grid>
                            <Grid item md={6}>
                                <TextField
                                    label="Comentarios"
                                    name="comentariosGimnasio"
                                    fullWidth
                                    autoComplete="comentarios"
                                    value={this.state.comentariosGimnasio}
                                    onChange={this.handleChange}
                                    multiline
                                />
                            </Grid>
                        </Grid>

                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>

                        <Button size="small" color="primary" onClick={this.solicitarGimnasio.bind(this)}>
                            Solicitar
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
                <ExpansionPanel className={classes.root}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>Pedido de masajes</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <Fecha label={"Selecionar dia"} callFecha={this.callFechaMasajes} />
                            </Grid>
                            <Grid item md={3}>
                                <Hora label={"Horario"} callHora={this.callHoraMasajes} />
                            </Grid>
                            <Grid item md={6}>
                                <TextField
                                    label="Comentarios"
                                    name="comentariosMasajes"
                                    fullWidth
                                    autoComplete="comentarios"
                                    value={this.state.comentariosMasajes}
                                    onChange={this.handleChange}
                                    multiline
                                />
                            </Grid>
                        </Grid>


                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>

                        <Button size="small" color="primary" onClick={this.solicitarMasajes.bind(this)}>
                            Solicitar
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>

                <ExpansionPanel className={classes.root}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>Tratamiento corporales</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <Fecha label={"Selecionar dia"} callFecha={this.callFechaTratamientos} />
                            </Grid>
                            <Grid item md={3}>
                                <Hora label={"Horario"} callHora={this.callHoraTratamientos} />
                            </Grid>
                            <Grid item md={6}>
                                <TextField
                                    label="Comentarios"
                                    name="comentariosTratamientos"
                                    fullWidth
                                    autoComplete="comentarios"
                                    value={this.state.comentariosTratamientos}
                                    onChange={this.handleChange}
                                    multiline
                                />
                            </Grid>
                        </Grid>


                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>

                        <Button size="small" color="primary" onClick={this.solicitarTratamientos.bind(this)}>
                            Solicitar
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>

            </Grid>
        )

    }
}

ActsArtísticas.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActsArtísticas);
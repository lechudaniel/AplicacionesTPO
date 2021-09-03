import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';

const styles = theme => ({


})

class Solicitados extends Component {
    render() {
        // const { classes } = this.props;
        const item = this.props.item
        if (item.servicio === "Hotel") {
            if (item.categoria === "Restaurante")
                return (
                    <Grid container>
                        <Grid item md={12} xs={12}>
                            <Typography variant="body1" align="left" style={{ fontWeight: "bold" }} >Reserva de Restaurante </Typography>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Servicios del Hotel</Typography>
                        </Grid>

                        <Grid item md={3} xs={2}>
                            <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Dia: </Typography>
                        </Grid>
                        <Grid item md={8} xs={4}>
                            <Typography variant="body2" align="left" >{item.dia}</Typography>
                        </Grid>
                        <Grid item md={3} xs={3}>
                            <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Hora: </Typography>
                        </Grid>
                        <Grid item md={8} xs={3}>
                            <Typography variant="body2" align="left">{item.horario}Hs</Typography>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Typography variant="body2" align="left" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                        </Grid>
                    </Grid>
                )
            else
                if (item.categoria === "Estacionamiento")
                    if (item.completo) {
                        return (
                            <Grid container>
                                <Grid item md={12} xs={12}>
                                    <Typography variant="body1" align="left" style={{ fontWeight: "bold" }} >Reserva de Estacionamiento </Typography>
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Servicios del Hotel</Typography>
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <Typography variant="body2" align="left" >Toda la estadia</Typography>
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <Typography variant="body2" align="left" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                </Grid>
                            </Grid>
                        )
                    } else {
                        return (
                            <Grid container>
                                <Grid item md={12} xs={12}>
                                    <Typography variant="body1" align="left" style={{ fontWeight: "bold" }} >Reserva de Estacionamiento </Typography>
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Servicios del Hotel</Typography>
                                </Grid>

                                <Grid item md={3} xs={2}>
                                    <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Desde: </Typography>
                                </Grid>
                                <Grid item md={8} xs={4}>
                                    <Typography variant="body2" align="left" >{item.desde}</Typography>
                                </Grid>
                                <Grid item md={3} xs={3}>
                                    <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Hasta: </Typography>
                                </Grid>
                                <Grid item md={8} xs={3}>
                                    <Typography variant="body2" align="left">{item.hasta}</Typography>
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <Typography variant="body2" align="left" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                </Grid>
                            </Grid>
                        )
                    }

                else
                    if (item.categoria === "Tintoreria")
                        return (
                            <Grid container>
                                <Grid item md={12} xs={12}>
                                    <Typography variant="body1" align="left" style={{ fontWeight: "bold" }} >Solicitud de tintoreria </Typography>
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Servicios del Hotel</Typography>
                                </Grid>

                                <Grid item md={3} xs={2}>
                                    <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Dia: </Typography>
                                </Grid>
                                <Grid item md={8} xs={4}>
                                    <Typography variant="body2" align="left" >{item.dia}</Typography>
                                </Grid>
                                <Grid item md={3} xs={3}>
                                    <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Hora: </Typography>
                                </Grid>
                                <Grid item md={8} xs={3}>
                                    <Typography variant="body2" align="left">{item.horario}</Typography>
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <Typography variant="body2" align="left" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                </Grid>
                            </Grid>
                        )
        } else {
            if (item.servicio === "Idiomas") {
                if (item.categoria === "Habitacion")
                    return (
                        <Grid container>
                            <Grid item md={12} xs={12}>
                                <Typography variant="body1" align="left" style={{ fontWeight: "bold" }} >Servico a la habitacion </Typography>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Idiomas de la escuela</Typography>
                            </Grid>
                            <Grid item md={3} xs={3}>
                                <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Hora: </Typography>
                            </Grid>
                            <Grid item md={8} xs={3}>
                                <Typography variant="body2" align="left">{item.horario}Hs</Typography>
                            </Grid>
                            <Grid item md={3} xs={2}>
                                <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Comida: </Typography>
                            </Grid>
                            <Grid item md={8} xs={4}>
                                <Typography variant="body2" align="left" >{item.habitacion}</Typography>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <Typography variant="body2" align="left" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                            </Grid>
                        </Grid>
                    )
                else
                    if (item.categoria === "Especiales")
                        return (
                            <Grid container>
                                <Grid item md={12} xs={12}>
                                    <Typography variant="body1" align="left" style={{ fontWeight: "bold" }} >Servico a la habitacion Especiales </Typography>
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Idiomas de la escuela</Typography>
                                </Grid>
                                <Grid item md={3} xs={3}>
                                    <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Hora: </Typography>
                                </Grid>
                                <Grid item md={8} xs={3}>
                                    <Typography variant="body2" align="left">{item.horario}Hs</Typography>
                                </Grid>
                                <Grid item md={3} xs={2}>
                                    <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Comida : </Typography>
                                </Grid>
                                <Grid item md={8} xs={4}>
                                    <Typography variant="body2" align="left" >{item.especiales}</Typography>
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <Typography variant="body2" align="left" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                </Grid>
                            </Grid>
                        )
            }
            else
                if (item.servicio === "ActsArtísticas") {
                    if (item.categoria === "Spa")
                        return (
                            <Grid container>
                                <Grid item md={12} xs={12}>
                                    <Typography variant="body1" align="left" style={{ fontWeight: "bold" }} >Reserva de Spa </Typography>
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>ActsArtísticas</Typography>
                                </Grid>

                                <Grid item md={3} xs={2}>
                                    <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Dia: </Typography>
                                </Grid>
                                <Grid item md={8} xs={4}>
                                    <Typography variant="body2" align="left" >{item.fechaSpa}</Typography>
                                </Grid>
                                <Grid item md={3} xs={3}>
                                    <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Hora: </Typography>
                                </Grid>
                                <Grid item md={8} xs={3}>
                                    <Typography variant="body2" align="left">{item.horaSpa}Hs</Typography>
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <Typography variant="body2" align="left" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                </Grid>
                            </Grid>
                        )
                    else
                        if (item.categoria === "Gimnasio")
                            return (
                                <Grid container>
                                    <Grid item md={12} xs={12}>
                                        <Typography variant="body1" align="left" style={{ fontWeight: "bold" }} >Reserva de Gimnasio </Typography>
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>ActsArtísticas</Typography>
                                    </Grid>

                                    <Grid item md={3} xs={2}>
                                        <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Dia: </Typography>
                                    </Grid>
                                    <Grid item md={8} xs={4}>
                                        <Typography variant="body2" align="left" >{item.fechaGimnasio}</Typography>
                                    </Grid>
                                    <Grid item md={3} xs={3}>
                                        <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Hora: </Typography>
                                    </Grid>
                                    <Grid item md={8} xs={3}>
                                        <Typography variant="body2" align="left">{item.horaGimnasio}Hs</Typography>
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <Typography variant="body2" align="left" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                    </Grid>
                                </Grid>
                            )
                        else
                            if (item.categoria === "Masajes")
                                return (
                                    <Grid container>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="body1" align="left" style={{ fontWeight: "bold" }} >Pedido de Masajes </Typography>
                                        </Grid>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>ActsArtísticas</Typography>
                                        </Grid>

                                        <Grid item md={3} xs={2}>
                                            <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Dia: </Typography>
                                        </Grid>
                                        <Grid item md={8} xs={4}>
                                            <Typography variant="body2" align="left" >{item.fechaMasajes}</Typography>
                                        </Grid>
                                        <Grid item md={3} xs={3}>
                                            <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Hora: </Typography>
                                        </Grid>
                                        <Grid item md={8} xs={3}>
                                            <Typography variant="body2" align="left">{item.horaMasajes}Hs</Typography>
                                        </Grid>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="body2" align="left" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                        </Grid>
                                    </Grid>
                                )
                            else
                                if (item.categoria === "Tratamientos")
                                    return (
                                        <Grid container>
                                            <Grid item md={12} xs={12}>
                                                <Typography variant="body1" align="left" style={{ fontWeight: "bold" }} >Tratamientos corporales </Typography>
                                            </Grid>
                                            <Grid item md={12} xs={12}>
                                                <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>ActsArtísticas</Typography>
                                            </Grid>

                                            <Grid item md={3} xs={2}>
                                                <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Dia: </Typography>
                                            </Grid>
                                            <Grid item md={8} xs={4}>
                                                <Typography variant="body2" align="left" >{item.fechaTratamientos}</Typography>
                                            </Grid>
                                            <Grid item md={3} xs={3}>
                                                <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Hora: </Typography>
                                            </Grid>
                                            <Grid item md={8} xs={3}>
                                                <Typography variant="body2" align="left">{item.horaTratamientos}Hs</Typography>
                                            </Grid>
                                            <Grid item md={12} xs={12}>
                                                <Typography variant="body2" align="left" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                            </Grid>
                                        </Grid>
                                    )
                }
                else
                    if (item.servicio === "Actividades") {
                        if (item.categoria === "Alquileres")
                            return (
                                <Grid container>
                                    <Grid item md={12} xs={12}>
                                        <Typography variant="body1" align="left" style={{ fontWeight: "bold" }} >Alquileres </Typography>
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Actividades</Typography>
                                    </Grid>
                                    <Grid item md={3} xs={2}>
                                        <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Dia: </Typography>
                                    </Grid>
                                    <Grid item md={8} xs={4}>
                                        <Typography variant="body2" align="left" >{item.fechaAlquiler}</Typography>
                                    </Grid>
                                    <Grid item md={3} xs={3}>
                                        <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Hora: </Typography>
                                    </Grid>
                                    <Grid item md={8} xs={3}>
                                        <Typography variant="body2" align="left">{item.horaAlquiler}Hs</Typography>
                                    </Grid>
                                    <Grid item md={4} xs={2}>
                                        <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Alquiler de: </Typography>
                                    </Grid>
                                    <Grid item md={7} xs={4}>
                                        <Typography variant="body2" align="left" >{item.alquilado}</Typography>
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <Typography variant="body2" align="left" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                    </Grid>
                                </Grid>

                            )
                        else
                            if (item.categoria === "Eventos")
                                return (
                                    <Grid container>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="body1" align="left" style={{ fontWeight: "bold" }} >Eventos organizados </Typography>
                                        </Grid>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Actividades</Typography>
                                        </Grid>

                                        <Grid item md={3} xs={2}>
                                            <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Dia: </Typography>
                                        </Grid>
                                        <Grid item md={8} xs={4}>
                                            <Typography variant="body2" align="left" >{item.fechaEvento}</Typography>
                                        </Grid>
                                        <Grid item md={3} xs={3}>
                                            <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Hora: </Typography>
                                        </Grid>
                                        <Grid item md={8} xs={3}>
                                            <Typography variant="body2" align="left">{item.horaEvento}Hs</Typography>
                                        </Grid>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="body2" align="left" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                        </Grid>
                                    </Grid>

                                )
                            else
                                if (item.categoria === "Actividades")
                                    return (
                                        <Grid container>
                                            <Grid item md={12} xs={12}>
                                                <Typography variant="body1" align="left" style={{ fontWeight: "bold" }} >Actividades del Hotel </Typography>
                                            </Grid>
                                            <Grid item md={12} xs={12}>
                                                <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Actividades</Typography>
                                            </Grid>
                                            <Grid item md={3} xs={3}>
                                                <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Dia: </Typography>
                                            </Grid>
                                            <Grid item md={8} xs={3}>
                                                <Typography variant="body2" align="left">{item.fechaActividad}</Typography>
                                            </Grid>
                                            <Grid item md={3} xs={2}>
                                                <Typography variant="body2" align="left" style={{ color: "#9e9e9e" }}>Actividad: </Typography>
                                            </Grid>
                                            <Grid item md={8} xs={4}>
                                                <Typography variant="body2" align="left" >{item.actividad}</Typography>
                                            </Grid>
                                            <Grid item md={12} xs={12}>
                                                <Typography variant="body2" align="left" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                            </Grid>
                                        </Grid>

                                    )

                    }

        }





    }
}

Solicitados.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Solicitados);
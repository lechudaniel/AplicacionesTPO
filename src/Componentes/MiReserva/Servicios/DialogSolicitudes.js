import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';

const styles = theme => ({


})

class DialogSolicitados extends Component {
    render() {
        // const { classes } = this.props;
        const item = this.props.item
        if (item.servicio === "Hotel") {
            if (item.categoria === "Restaurante")
                return (
                    <Dialog open={this.props.open} onClose={this.props.onClose}>
                        <DialogTitle>Reserva de Restaurante</DialogTitle>
                        <DialogContent dividers>
                            <Grid container>
                                <Grid item md={12} xs={12}>
                                    <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Servicios del Hotel</Typography>
                                </Grid>

                                <Grid item md={3} xs={2}>
                                    <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Dia: </Typography>
                                </Grid>
                                <Grid item md={8} xs={4}>
                                    <Typography variant="h6" align="left" >{item.dia}</Typography>
                                </Grid>
                                <Grid item md={3} xs={3}>
                                    <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Hora: </Typography>
                                </Grid>
                                <Grid item md={8} xs={3}>
                                    <Typography variant="h6" align="left">{item.horario}Hs</Typography>
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <Typography variant="h6" align="left" >Comentario: {item.comentario}</Typography>
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <Typography variant="h6" align="right" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                </Grid>

                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="outlined" onClick={this.props.onClose}>Cancelar Solicitud</Button>
                            <Button variant="outlined" onClick={this.props.onClose}>Modificar Solicitud</Button>
                            <Button variant="outlined" onClick={this.props.onClose}>Cerrar</Button>
                        </DialogActions>
                    </Dialog>

                )
            else
                if (item.categoria === "Estacionamiento")
                    if (item.completo) {
                        return (
                            <Dialog open={this.props.open} onClose={this.props.onClose}>
                                <DialogTitle>Reserva de Estacionamiento</DialogTitle>
                                <DialogContent dividers>
                                    <Grid container>

                                        <Grid item md={12} xs={12}>
                                            <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Servicios del Hotel</Typography>
                                        </Grid>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="h6" align="left" >Toda la estadia</Typography>
                                        </Grid>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="h6" align="right" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                        </Grid>
                                    </Grid>
                                </DialogContent>
                                <DialogActions>
                                    <Button variant="outlined" onClick={this.props.onClose}>Cancelar Solicitud</Button>
                                    <Button variant="outlined" onClick={this.props.onClose}>Modificar Solicitud</Button>
                                    <Button variant="outlined" onClick={this.props.onClose}>Cerrar</Button>
                                </DialogActions>
                            </Dialog>
                        )
                    } else {
                        return (
                            <Dialog open={this.props.open} onClose={this.props.onClose}>
                                <DialogTitle>Reserva de Estacionamiento</DialogTitle>
                                <DialogContent dividers>
                                    <Grid container>

                                        <Grid item md={12} xs={12}>
                                            <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Servicios del Hotel</Typography>
                                        </Grid>

                                        <Grid item md={3} xs={2}>
                                            <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Desde: </Typography>
                                        </Grid>
                                        <Grid item md={8} xs={4}>
                                            <Typography variant="h6" align="left" >{item.desde}</Typography>
                                        </Grid>
                                        <Grid item md={3} xs={3}>
                                            <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Hasta: </Typography>
                                        </Grid>
                                        <Grid item md={8} xs={3}>
                                            <Typography variant="h6" align="left">{item.hasta}</Typography>
                                        </Grid>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="h6" align="right" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                        </Grid>
                                    </Grid>
                                </DialogContent>
                                <DialogActions>
                                    <Button variant="outlined" onClick={this.props.onClose}>Cancelar Solicitud</Button>
                                    <Button variant="outlined" onClick={this.props.onClose}>Modificar Solicitud</Button>
                                    <Button variant="outlined" onClick={this.props.onClose}>Cerrar</Button>
                                </DialogActions>
                            </Dialog>
                        )
                    }

                else
                    if (item.categoria === "Tintoreria")
                        return (
                            <Dialog open={this.props.open} onClose={this.props.onClose}>
                                <DialogTitle>Solicitud de tintoreria</DialogTitle>
                                <DialogContent dividers>
                                    <Grid container>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Servicios del Hotel</Typography>
                                        </Grid>

                                        <Grid item md={3} xs={2}>
                                            <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Dia: </Typography>
                                        </Grid>
                                        <Grid item md={8} xs={4}>
                                            <Typography variant="h6" align="left" >{item.dia}</Typography>
                                        </Grid>
                                        <Grid item md={3} xs={3}>
                                            <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Hora: </Typography>
                                        </Grid>
                                        <Grid item md={8} xs={3}>
                                            <Typography variant="h6" align="left">{item.horario}</Typography>
                                        </Grid>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="h6" align="left" >Prendas: {item.prendas}</Typography>
                                        </Grid>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="h6" align="right" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                        </Grid>
                                    </Grid>
                                </DialogContent>
                                <DialogActions>
                                    <Button variant="outlined" onClick={this.props.onClose}>Cancelar Solicitud</Button>
                                    <Button variant="outlined" onClick={this.props.onClose}>Modificar Solicitud</Button>
                                    <Button variant="outlined" onClick={this.props.onClose}>Cerrar</Button>
                                </DialogActions>
                            </Dialog>
                        )
        } else {
            if (item.servicio === "Idiomas") {
                if (item.categoria === "Habitacion")
                    return (
                        <Dialog open={this.props.open} onClose={this.props.onClose}>
                            <DialogTitle>Servico a la habitacion</DialogTitle>
                            <DialogContent dividers>
                                <Grid container>
                                    <Grid item md={12} xs={12}>
                                        <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Idiomas de la escuela</Typography>
                                    </Grid>
                                    <Grid item md={3} xs={3}>
                                        <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Hora: </Typography>
                                    </Grid>
                                    <Grid item md={8} xs={3}>
                                        <Typography variant="h6" align="left">{item.horario}</Typography>
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <Typography variant="h6" align="left" >Comida: {item.habitacion}</Typography>
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <Typography variant="h6" align="right" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                    </Grid>
                                </Grid>
                            </DialogContent>
                            <DialogActions>
                                <Button variant="outlined" onClick={this.props.onClose}>Cancelar Solicitud</Button>
                                <Button variant="outlined" onClick={this.props.onClose}>Modificar Solicitud</Button>
                                <Button variant="outlined" onClick={this.props.onClose}>Cerrar</Button>
                            </DialogActions>
                        </Dialog>

                    )
                else
                    if (item.categoria === "Especiales")
                        return (
                            <Dialog open={this.props.open} onClose={this.props.onClose}>
                                <DialogTitle>Servico a la habitacion Especiales</DialogTitle>
                                <DialogContent dividers>
                                    <Grid container>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Idiomas de la escuela</Typography>
                                        </Grid>
                                        <Grid item md={3} xs={3}>
                                            <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Hora: </Typography>
                                        </Grid>
                                        <Grid item md={8} xs={3}>
                                            <Typography variant="h6" align="left">{item.horario}</Typography>
                                        </Grid>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="h6" align="left" >Comida: {item.especiales}</Typography>
                                        </Grid>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="h6" align="right" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                        </Grid>
                                    </Grid>
                                </DialogContent>
                                <DialogActions>
                                    <Button variant="outlined" onClick={this.props.onClose}>Cancelar Solicitud</Button>
                                    <Button variant="outlined" onClick={this.props.onClose}>Modificar Solicitud</Button>
                                    <Button variant="outlined" onClick={this.props.onClose}>Cerrar</Button>
                                </DialogActions>
                            </Dialog>
                        )
            }
            else
                if (item.servicio === "ActsArtísticas") {
                    if (item.categoria === "Spa")
                        return (
                            <Dialog open={this.props.open} onClose={this.props.onClose}>
                                <DialogTitle>Reserva de Spa</DialogTitle>
                                <DialogContent dividers>
                                    <Grid container>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>ActsArtísticas</Typography>
                                        </Grid>

                                        <Grid item md={3} xs={2}>
                                            <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Dia: </Typography>
                                        </Grid>
                                        <Grid item md={8} xs={4}>
                                            <Typography variant="h6" align="left" >{item.fechaSpa}</Typography>
                                        </Grid>
                                        <Grid item md={3} xs={3}>
                                            <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Hora: </Typography>
                                        </Grid>
                                        <Grid item md={8} xs={3}>
                                            <Typography variant="h6" align="left">{item.horaSpa}Hs</Typography>
                                        </Grid>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="h6" align="left" >Comentario: {item.comentariosSpa}</Typography>
                                        </Grid>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant="h6" align="right" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                        </Grid>

                                    </Grid>
                                </DialogContent>
                                <DialogActions>
                                    <Button variant="outlined" onClick={this.props.onClose}>Cancelar Solicitud</Button>
                                    <Button variant="outlined" onClick={this.props.onClose}>Modificar Solicitud</Button>
                                    <Button variant="outlined" onClick={this.props.onClose}>Cerrar</Button>
                                </DialogActions>
                            </Dialog>
                        )
                    else
                        if (item.categoria === "Gimnasio")
                            return (
                                <Dialog open={this.props.open} onClose={this.props.onClose}>
                                    <DialogTitle>Reserva de Gimnasio</DialogTitle>
                                    <DialogContent dividers>
                                        <Grid container>
                                            <Grid item md={12} xs={12}>
                                                <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Servicios del Hotel</Typography>
                                            </Grid>

                                            <Grid item md={3} xs={2}>
                                                <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Dia: </Typography>
                                            </Grid>
                                            <Grid item md={8} xs={4}>
                                                <Typography variant="h6" align="left" >{item.fechaGimnasio}</Typography>
                                            </Grid>
                                            <Grid item md={3} xs={3}>
                                                <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Hora: </Typography>
                                            </Grid>
                                            <Grid item md={8} xs={3}>
                                                <Typography variant="h6" align="left">{item.horaGimnasio}Hs</Typography>
                                            </Grid>
                                            <Grid item md={12} xs={12}>
                                                <Typography variant="h6" align="left" >Comentario: {item.comentariosGimnasio}</Typography>
                                            </Grid>
                                            <Grid item md={12} xs={12}>
                                                <Typography variant="h6" align="right" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                            </Grid>

                                        </Grid>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button variant="outlined" onClick={this.props.onClose}>Cancelar Solicitud</Button>
                                        <Button variant="outlined" onClick={this.props.onClose}>Modificar Solicitud</Button>
                                        <Button variant="outlined" onClick={this.props.onClose}>Cerrar</Button>
                                    </DialogActions>
                                </Dialog>
                            )
                        else
                            if (item.categoria === "Masajes")
                                return (
                                    <Dialog open={this.props.open} onClose={this.props.onClose}>
                                        <DialogTitle>Pedido de Masajes</DialogTitle>
                                        <DialogContent dividers>
                                            <Grid container>
                                                <Grid item md={12} xs={12}>
                                                    <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>ActsArtísticas</Typography>
                                                </Grid>

                                                <Grid item md={3} xs={2}>
                                                    <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Dia: </Typography>
                                                </Grid>
                                                <Grid item md={8} xs={4}>
                                                    <Typography variant="h6" align="left" >{item.fechaMasajes}</Typography>
                                                </Grid>
                                                <Grid item md={3} xs={3}>
                                                    <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Hora: </Typography>
                                                </Grid>
                                                <Grid item md={8} xs={3}>
                                                    <Typography variant="h6" align="left">{item.horaMasajes}Hs</Typography>
                                                </Grid>
                                                <Grid item md={12} xs={12}>
                                                    <Typography variant="h6" align="left" >Comentario: {item.comentariosMasajes}</Typography>
                                                </Grid>
                                                <Grid item md={12} xs={12}>
                                                    <Typography variant="h6" align="right" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                                </Grid>

                                            </Grid>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button variant="outlined" onClick={this.props.onClose}>Cancelar Solicitud</Button>
                                            <Button variant="outlined" onClick={this.props.onClose}>Modificar Solicitud</Button>
                                            <Button variant="outlined" onClick={this.props.onClose}>Cerrar</Button>
                                        </DialogActions>
                                    </Dialog>
                                )
                            else
                                if (item.categoria === "Tratamientos")
                                    return (
                                        <Dialog open={this.props.open} onClose={this.props.onClose}>
                                            <DialogTitle>Tratamientos corporales</DialogTitle>
                                            <DialogContent dividers>
                                                <Grid container>
                                                    <Grid item md={12} xs={12}>
                                                        <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>ActsArtísticas</Typography>
                                                    </Grid>

                                                    <Grid item md={3} xs={2}>
                                                        <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Dia: </Typography>
                                                    </Grid>
                                                    <Grid item md={8} xs={4}>
                                                        <Typography variant="h6" align="left" >{item.fechaTratamientos}</Typography>
                                                    </Grid>
                                                    <Grid item md={3} xs={3}>
                                                        <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Hora: </Typography>
                                                    </Grid>
                                                    <Grid item md={8} xs={3}>
                                                        <Typography variant="h6" align="left">{item.horaTratamientos}Hs</Typography>
                                                    </Grid>
                                                    <Grid item md={12} xs={12}>
                                                        <Typography variant="h6" align="left" >Comentario: {item.comentariosTratamientos}</Typography>
                                                    </Grid>
                                                    <Grid item md={12} xs={12}>
                                                        <Typography variant="h6" align="right" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                                    </Grid>

                                                </Grid>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button variant="outlined" onClick={this.props.onClose}>Cancelar Solicitud</Button>
                                                <Button variant="outlined" onClick={this.props.onClose}>Modificar Solicitud</Button>
                                                <Button variant="outlined" onClick={this.props.onClose}>Cerrar</Button>
                                            </DialogActions>
                                        </Dialog>
                                    )
                }
                else
                    if (item.servicio === "Actividades") {
                        if (item.categoria === "Alquileres")
                            return (
                                <Dialog open={this.props.open} onClose={this.props.onClose}>
                                    <DialogTitle>Alquileres</DialogTitle>
                                    <DialogContent dividers>
                                        <Grid container>
                                            <Grid item md={12} xs={12}>
                                                <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Actividades</Typography>
                                            </Grid>

                                            <Grid item md={3} xs={2}>
                                                <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Dia: </Typography>
                                            </Grid>
                                            <Grid item md={8} xs={4}>
                                                <Typography variant="h6" align="left" >{item.fechaAlquiler}</Typography>
                                            </Grid>
                                            <Grid item md={3} xs={3}>
                                                <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Hora: </Typography>
                                            </Grid>
                                            <Grid item md={8} xs={3}>
                                                <Typography variant="h6" align="left">{item.horaAlquiler}Hs</Typography>
                                            </Grid>
                                            <Grid item md={12} xs={12}>
                                                <Typography variant="h6" align="left" >Alquiler de: {item.alquilado}</Typography>
                                            </Grid>
                                            <Grid item md={12} xs={12}>
                                                <Typography variant="h6" align="right" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                            </Grid>

                                        </Grid>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button variant="outlined" onClick={this.props.onClose}>Cancelar Solicitud</Button>
                                        <Button variant="outlined" onClick={this.props.onClose}>Modificar Solicitud</Button>
                                        <Button variant="outlined" onClick={this.props.onClose}>Cerrar</Button>
                                    </DialogActions>
                                </Dialog>
                            )
                        else
                            if (item.categoria === "Eventos")
                                return (
                                    <Dialog open={this.props.open} onClose={this.props.onClose}>
                                        <DialogTitle>Eventos organizados</DialogTitle>
                                        <DialogContent dividers>
                                            <Grid container>
                                                <Grid item md={12} xs={12}>
                                                    <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Actividades</Typography>
                                                </Grid>

                                                <Grid item md={3} xs={2}>
                                                    <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Dia: </Typography>
                                                </Grid>
                                                <Grid item md={8} xs={4}>
                                                    <Typography variant="h6" align="left" >{item.fechaEvento}</Typography>
                                                </Grid>
                                                <Grid item md={3} xs={3}>
                                                    <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Hora: </Typography>
                                                </Grid>
                                                <Grid item md={8} xs={3}>
                                                    <Typography variant="h6" align="left">{item.horaEvento}Hs</Typography>
                                                </Grid>
                                                <Grid item md={12} xs={12}>
                                                    <Typography variant="h6" align="left" >Detalle del evento: {item.detalle}</Typography>
                                                </Grid>
                                                <Grid item md={12} xs={12}>
                                                    <Typography variant="h6" align="right" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                                </Grid>

                                            </Grid>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button variant="outlined" onClick={this.props.onClose}>Cancelar Solicitud</Button>
                                            <Button variant="outlined" onClick={this.props.onClose}>Modificar Solicitud</Button>
                                            <Button variant="outlined" onClick={this.props.onClose}>Cerrar</Button>
                                        </DialogActions>
                                    </Dialog>


                                )
                            else
                                if (item.categoria === "Actividades")
                                    return (
                                        <Dialog open={this.props.open} onClose={this.props.onClose}>
                                            <DialogTitle>Actividades del Hotel</DialogTitle>
                                            <DialogContent dividers>
                                                <Grid container>
                                                    <Grid item md={12} xs={12}>
                                                        <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Actividades</Typography>
                                                    </Grid>

                                                    <Grid item md={3} xs={2}>
                                                        <Typography variant="h6" align="left" style={{ color: "#9e9e9e" }}>Dia: </Typography>
                                                    </Grid>
                                                    <Grid item md={8} xs={4}>
                                                        <Typography variant="h6" align="left" >{item.fechaActividad}</Typography>
                                                    </Grid>
                                                    <Grid item md={12} xs={12}>
                                                        <Typography variant="h6" align="left" >Actividad: {item.actividad}</Typography>
                                                    </Grid>
                                                    <Grid item md={12} xs={12}>
                                                        <Typography variant="h6" align="right" style={{ color: "#ffc107" }}>Estado: pendiente</Typography>
                                                    </Grid>

                                                </Grid>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button variant="outlined" onClick={this.props.onClose}>Cancelar Solicitud</Button>
                                                <Button variant="outlined" onClick={this.props.onClose}>Modificar Solicitud</Button>
                                                <Button variant="outlined" onClick={this.props.onClose}>Cerrar</Button>
                                            </DialogActions>
                                        </Dialog>
                                    )

                    }
        }





    }
}

DialogSolicitados.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DialogSolicitados);
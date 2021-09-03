import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Paper, Typography, Button, Divider, FormControl, FormLabel, FormGroup, FormControlLabel, Switch, Card, CardActionArea } from '@material-ui/core';
import clsx from 'clsx';
import foto from '../Imagenes/logoHotel.png'
import InfoIcon from '@material-ui/icons/Info';
import RenderGeneral from './MiReserva/ReservaRender/RenderGeneral.js';

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 280,
        [theme.breakpoints.down('xs')]: {
            height: 400,
        },
    },
    fixedHeightDatos: {
        height: 400,
        [theme.breakpoints.down('xs')]: {
            height: 380,
        },
    },
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    avisosPaper: {
        marginTop: theme.spacing(2),
        borderLeft: "4px solid #f44336"
    },
    avisosPaperHabilitado: {
        marginTop: theme.spacing(2),
        borderLeft: "4px solid #4caf50"
    },
    cardArea: {
        padding: theme.spacing(1),
    }
})



class General extends Component {

   

    perfil() {
        if (this.props.romantico) {
            return (
                <FormControlLabel
                    control={<Switch color="primary" checked={true} /*onChange={romanticoOpen}*/ name="romantico" />}
                    label="Romantico"
                />
            )
        } else {
            if (this.props.ejecutivo) {
                return (
                    <FormControlLabel
                        control={<Switch color="primary" checked={true} /*onChange={romanticoOpen}*/ name="ejecutivo" />}
                        label="Ejecutivo"
                    />
                )
            } else {
                if (this.props.familia) {
                    return (
                        <FormControlLabel
                            control={<Switch color="primary" checked={true} /*onChange={romanticoOpen}*/ name="familia" />}
                            label="Familia"
                        />
                    )
                } else {
                    if (this.props.preferencias) {
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

    datosCompletados() {
        if (this.props.perfilCompletado) {
            return (
                <Typography align="center" style={{ color: "#4caf50" }} variant="subtitle2">Completado!</Typography>
            )
        } else {
            return (
                <Typography align="center" color="error" variant="subtitle2">Faltan datos por completar</Typography>
            )
        }
    }
    pad(n) {
        return n + 1
    }
    fechaNow() {
        var date = new Date()
        var dia = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var fecha = year + "-" + this.pad(month) + "-" + dia;
        return fecha
    }
    difDias(checkIn) {
        var now = this.fechaNow()
        var aFecha1 = checkIn.split("-");
        var aFecha2 = now.split("-");
        var fFecha1 = Date.UTC(aFecha1[0], aFecha1[1] - 1, aFecha1[2]);
        var fFecha2 = Date.UTC(aFecha2[0], aFecha2[1] - 1, aFecha2[2]);
        var dif = fFecha1 - fFecha2;
        var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
        if (dias <= 2)
            return true
        else
            return false
    }
    habilitarCheckIN(fecha) {
        const { classes } = this.props;
        var habilitar = this.difDias(fecha)
        if (habilitar) {
            return (

                <Card className={classes.avisosPaperHabilitado}>
                    <CardActionArea className={classes.cardArea} onClick={this.props.checkInOpen}>
                        <Grid container justify="center" alignItems="center">
                            <Grid item md={1} xs={2}>
                                <InfoIcon />
                            </Grid>
                            <Grid item md={11} xs={10}>
                                <Typography >Ya puede hacer su Check in para el Hotel Paihuen #1234568 </Typography>
                            </Grid>

                        </Grid>
                    </CardActionArea>
                </Card>

            )
        } else {
            return (
                <Card className={classes.avisosPaper}>
                    <CardActionArea className={classes.cardArea} disabled>
                        <Grid container justify="center" alignItems="center">
                            <Grid item md={1} xs={2}>
                                <InfoIcon />
                            </Grid>
                            <Grid item md={11} xs={10}>
                                <Typography >Recuerde pagar su factura antes del día 10 del mes corriente. </Typography>
                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Card>
            )
        }
    }

    avisoPerfil() {
        const { classes } = this.props;
        if (this.props.romantico || this.props.ejecutivo || this.props.familia || this.props.preferencias) {
            return (
                <Card className={classes.avisosPaperHabilitado} >
                    <CardActionArea className={classes.cardArea} onClick={this.props.perfilOpenPerfil}>
                        <Grid container justify="center" alignItems="center" >
                            <Grid item md={1} xs={2}>
                                <InfoIcon />
                            </Grid>
                            <Grid item md={11} xs={10}>
                                <Typography>Genial!! seleccionaste tu perfil, ahora el hotel sabra que te gusta</Typography>
                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Card>
            )
        } else {
            return (
                <Card className={classes.avisosPaper} >
                    <CardActionArea className={classes.cardArea} onClick={this.props.perfilOpenPerfil}>
                        <Grid container justify="center" alignItems="center" >
                            <Grid item md={1} xs={2}>
                                <InfoIcon />
                            </Grid>
                            <Grid item md={11} xs={10}>
                                <Typography>Podrá seleccionar los servicios y actividades extracurriculares que desee contratar para el ciclo lectivo en su perfil.</Typography>
                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Card>
            )
        }
    }
    avisoDatos() {
        const { classes } = this.props;
        if (this.props.perfilCompletado) {
            return (
                <Card className={classes.avisosPaperHabilitado} >
                    <CardActionArea className={classes.cardArea} onClick={this.props.perfilOpen}>
                        <Grid container justify="center" alignItems="center">
                            <Grid item md={1} xs={2}>
                                <InfoIcon />
                            </Grid>
                            <Grid item md={11} xs={10}>
                                <Typography>Genial!! Tiene todos sus datos completados</Typography>

                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Card>
            )
        } else {
            return (
                <Card className={classes.avisosPaper} >
                    <CardActionArea className={classes.cardArea} onClick={this.props.perfilOpen}>
                        <Grid container justify="center" alignItems="center">
                            <Grid item md={1} xs={2}>
                                <InfoIcon />
                            </Grid>
                            <Grid item md={11} xs={10}>
                                <Typography>Podrá completar sus datos personales en su perfil. </Typography>

                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Card>
            )
        }
    }


    render() {
        const { classes } = this.props;
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        const fixedHeightPaperDatos = clsx(classes.paper, classes.fixedHeightDatos);


        return (
            <Grid container spacing={3}>

                <Grid item xs={12} md={8} lg={9}>
                    <Grid container spacing={3}>

                        <Grid item xs={12} >
                            <Paper className={fixedHeightPaper} elevation={10} >
                                <Grid container direction="row" >
                                    <Grid item md={10} xs={10}>
                                        <Typography component="h2" variant="h6" color="primary" gutterBottom>Facturación actual</Typography>
                                    </Grid>
                                    <Grid item md={2} xs={10}>
                                        <Button color="primary" onClick={this.props.reservasOpen}>administrar</Button>
                                    </Grid>
                                </Grid>
                                <Divider />
                                {this.props.data.map((item, index) =>
                                    <Grid key={index}>
                                        <RenderGeneral
                                            id={item._id}
                                            nombreHotel={item.nombreHotel}
                                            nroReserva={item.numero}
                                            logo={foto}
                                            CheckIn={item.checkIn}
                                            CheckOut={item.checkOut}
                                            huespedes={item.cantHuespedes}
                                            precio={item.precio}
                                            checkInOpen={this.props.checkInOpen}
                                            checkOutOpen={this.props.checkOutOpen}
                                            modo={this.props.modo}
                                        />                                    
                                    </Grid>

                                )}
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper} elevation={10}>
                                <Typography component="h2" variant="h6" color="primary" gutterBottom>Avisos</Typography>
                                <Divider />
                                <Grid container direction="row" >

                                    <Grid item md={12}>
                                        {this.habilitarCheckIN(this.props.CheckIn)}
                                    </Grid>

                                    <Grid item md={12}  >
                                        {this.avisoDatos()}
                                    </Grid>
                                    <Grid item md={12}>
                                        {this.avisoPerfil()}
                                    </Grid>


                                </Grid>
                            </Paper>
                        </Grid>

                    </Grid>
                </Grid>

                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaperDatos} elevation={10}>
                        <Typography component="h2" variant="h6" color="primary" gutterBottom>Mi Perfil</Typography>
                        <Divider />
                        <br />
                        <Typography style={{ fontWeight: "bold" }}>Nombre y apellido: </Typography>
                        <Typography >{this.props.user.displayName}</Typography>
                        <Typography style={{ fontWeight: "bold" }}>Email: </Typography>
                        <Typography >{this.props.user.email}</Typography>
                        {this.datosCompletados()}
                        <Button variant="outlined" onClick={this.props.perfilOpen}>Editar Datos</Button>
                        <br />
                        <Divider />
                        <Typography component="h2" variant="h6" color="primary" gutterBottom>Perfil</Typography>
                        <FormControl component="fieldset" className={classes.formControl}>
                            {/*PERFILES*/}
                            <FormLabel component="legend">Perfil seleccionado</FormLabel>
                            <FormGroup tag="div">
                                {this.perfil()}
                            </FormGroup>
                        </FormControl>

                        <Button variant="outlined" onClick={this.props.perfilOpenPerfil}>Editar </Button>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8} lg={9}>

                </Grid>
            </Grid>
        );
    }
}

General.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(General);
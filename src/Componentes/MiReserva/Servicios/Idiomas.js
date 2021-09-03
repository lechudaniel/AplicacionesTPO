import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Divider, ExpansionPanelActions, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, FormControlLabel, Checkbox, FormLabel } from '@material-ui/core';
import Hora from './Hora'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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

class Idiomas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false,
            especial: false,
            hora: "",
            des1: false,
            des2: false,
            des3: false,
            alm1: false,
            alm2: false,
            alm3: false,
            cen1: false,
            cen2: false,
            cen3: false,
            desKosher: false,
            desVegano: false,
            desTac: false,
            almKosher: false,
            almVegano: false,
            almTac: false,
            cenKosher: false,
            cenVegano: false,
            cenTac: false,
            habitacion: "Seleccionar",
            especiales:"Seleccionar",
        }
    }




    menuOpen = () => {
        this.setState({ menu: true })
    }
    menuClose = () => {
        this.setState({ menu: false })
        this.habitacion()
    }
    especialOpen = () => {
        this.setState({ especial: true })
    }
    especialClose = () => {
        this.setState({ especial: false })
        this.especiales()
    }
    callHora = (x) => {
        this.setState({ hora: x })
    }
    handleChangeCheck = name => event => {
        this.setState({ [name]: event.target.checked });
      
    };

    habitacion() {
        const state = this.state
        if (state.des1)
            this.setState({ habitacion: "Desayuno Americano" })
        else
            if (state.des2)
                this.setState({ habitacion: "Desayuno Porteño" })
            else
                if (state.des3)
                    this.setState({ habitacion: "Desayuno Fit" })
                else
                    if (state.alm1)
                        this.setState({ habitacion: "Almuerzo 1" })
                    else
                        if (state.alm2)
                            this.setState({ habitacion: "Almuerzo 2" })
                        else
                            if (state.alm3)
                                this.setState({ habitacion: "Almuerzo Fit" })
                            else
                                if (state.cen1)
                                    this.setState({ habitacion: "Cena 1" })
                                else
                                    if (state.cen2)
                                        this.setState({ habitacion: "Cena 2" })
                                    else
                                        if (state.cen3)
                                            this.setState({ habitacion: "Cena Fit" })
                                        else
                                            this.setState({ habitacion: "" })
    }
    especiales() {
        const state = this.state
        if (state.desKosher)
            this.setState({ especiales: "Desayuno Kosher" })
        else
            if (state.desVegano)
                this.setState({ especiales: "Desayuno Vegano" })
            else
                if (state.desTac)
                    this.setState({ especiales: "Desayuno Sin Tac" })
                else
                    if (state.almKosher)
                        this.setState({ especiales: "Almuerzo Kosher" })
                    else
                        if (state.almVegano)
                            this.setState({ especiales: "Almuerzo Vegano" })
                        else
                            if (state.almTac)
                                this.setState({ especiales: "Almuerzo Sin Tac" })
                            else
                                if (state.cenKosher)
                                    this.setState({ especiales: "Cena Kosher" })
                                else
                                    if (state.cenVegano)
                                        this.setState({ especiales: "Cena Vegana" })
                                    else
                                        if (state.cenTac)
                                            this.setState({ especiales: "Cena sin Tac" })
                                        else
                                            this.setState({ especiales
                                                : "" })
    }

    solicitarHabitacion() {
        let newData = [
            ...this.props.array,
            {
                servicio: "Idiomas",
                categoria: "Habitacion",
                horario: this.state.hora,
                habitacion: this.state.habitacion
            }
        ]
        this.props.add(newData)
    }
    solicitarEspeciales() {
        let newData = [
            ...this.props.array,
            {
                servicio: "Idiomas",
                categoria: "Especiales",
                horario: this.state.hora,
                especiales: this.state.especiales
            }
        ]
        this.props.add(newData)
    }



    render() {
        const { classes } = this.props;

        return (
            <Grid container>
                <ExpansionPanel className={classes.root}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>Servicio a la Habitacion</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <Hora label={"Horario"} callHora={this.callHora} />
                            </Grid>
                            <Grid item md={3}>
                                <TextField
                                    label="Menu seleccionado"
                                    value={this.state.habitacion}
                                    InputProps={{
                                        readOnly: true
                                    }}
                                />
                            </Grid>
                            <Grid item md={3}>
                                <Button variant="outlined" color="primary" onClick={this.menuOpen}>Seleccionar </Button>
                                <Dialog open={this.state.menu} onClose={this.menuClose}>
                                    <DialogTitle>Seleccionar Menu</DialogTitle>
                                    <DialogContent>
                                        <FormLabel component="legend">Desayuno</FormLabel>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('des1')} checked={this.state.des1} name="des1" />
                                                }
                                                label={
                                                    <Grid>
                                                        <Typography>Desayuno Americano</Typography>
                                                        <Typography variant="body2" style={{ color: "#9e9e9e" }}>Jugo de naranja, cafe, huevos revueltos, tostadas</Typography>
                                                    </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('des2')} checked={this.state.des2} name="des2" />
                                                }
                                                label={
                                                    <Grid>
                                                        <Typography>Desayuno Porteño</Typography>
                                                        <Typography variant="body2" style={{ color: "#9e9e9e" }}>Jugo de naranja, cafe, medialunas</Typography>
                                                    </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('des3')} checked={this.state.des3} name="des3" />
                                                }
                                                label={
                                                    <Grid>
                                                        <Typography>Desayuno fit</Typography>
                                                        <Typography variant="body2" style={{ color: "#9e9e9e" }}>Jugo de naranja, te, ensalada de frutas</Typography>
                                                    </Grid>
                                                } />
                                        </FormControl>
                                        <FormLabel component="legend">Almuerzo</FormLabel>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('alm1')} checked={this.state.alm1} name="alm1" />
                                                }
                                                label={
                                                    <Grid>
                                                        <Typography>Almuerzo 1</Typography>
                                                        <Typography variant="body2" style={{ color: "#9e9e9e" }}>Milanesa con pure con Coquita</Typography>
                                                    </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('alm2')} checked={this.state.alm2} name="alm2" />
                                                }
                                                label={
                                                    <Grid>
                                                        <Typography>Almuerzo 2</Typography>
                                                        <Typography variant="body2" style={{ color: "#9e9e9e" }}>Fideos moñito con manteca y Jugo</Typography>
                                                    </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('alm3')} checked={this.state.alm3} name="alm3" />
                                                }
                                                label={
                                                    <Grid>
                                                        <Typography>Almuerzo fit</Typography>
                                                        <Typography variant="body2" style={{ color: "#9e9e9e" }}>Ensala premium con agua</Typography>
                                                    </Grid>
                                                } />
                                        </FormControl>
                                        <FormLabel component="legend">Cena</FormLabel>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('cen1')} checked={this.state.cen1} name="cen1" />
                                                }
                                                label={
                                                    <Grid>
                                                        <Typography>Cena 1</Typography>
                                                        <Typography variant="body2" style={{ color: "#9e9e9e" }}>Lomo wellington con copa de vino tinto toro viejo</Typography>
                                                    </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('cen2')} checked={this.state.cen2} name="cen2" />
                                                }
                                                label={
                                                    <Grid>
                                                        <Typography>Cena 2</Typography>
                                                        <Typography variant="body2" style={{ color: "#9e9e9e" }}>Sushi premium con uvita blanco</Typography>
                                                    </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('cen3')} checked={this.state.cen3} name="cen3" />
                                                }
                                                label={
                                                    <Grid>
                                                        <Typography>Cena fit</Typography>
                                                        <Typography variant="body2" style={{ color: "#9e9e9e" }}>Salteado de verduras con agua</Typography>
                                                    </Grid>
                                                } />
                                        </FormControl>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button  onClick={this.menuClose}>Cancelar</Button>
                                        <Button onClick={this.menuClose}>Confirmar</Button>
                                    </DialogActions>
                                </Dialog>
                            </Grid>
                        </Grid>

                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>

                        <Button size="small" color="primary" onClick={this.solicitarHabitacion.bind(this)} >
                            Solicitar
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>

                <ExpansionPanel className={classes.root}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography>Comidas especiales</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                        <Grid container spacing={2}>
                            <Grid item md={3}>
                                <Hora label={"Horario"} callHora={this.callHora} />
                            </Grid>
                            <Grid item md={3}>
                                <TextField
                                    label="Menu especial"
                                    value={this.state.especiales}
                                    InputProps={{
                                        readOnly: true
                                    }}
                                />
                            </Grid>
                            <Grid item md={3}>
                                <Button variant="outlined" color="primary" onClick={this.especialOpen}>Seleccionar </Button>
                                <Dialog open={this.state.especial} onClose={this.especialClose}>
                                    <DialogTitle>Seleccionar Menu especial</DialogTitle>
                                    <DialogContent>
                                        <FormLabel component="legend">Desayuno</FormLabel>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('desKosher')} checked={this.state.desKosher} name="desKosher" />
                                                }
                                                label={
                                                    <Grid>
                                                        <Typography>Desayuno Kosher</Typography>
                                                    </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('desVegano')} checked={this.state.desVegano} name="desVegano" />
                                                }
                                                label={
                                                    <Grid>
                                                        <Typography>Desayuno vegano</Typography>

                                                    </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('desTac')} checked={this.state.desTac} name="desTac" />
                                                }
                                                label={
                                                    <Grid>
                                                        <Typography>Desayuno Sin tac</Typography>

                                                    </Grid>
                                                } />
                                        </FormControl>
                                        <FormLabel component="legend">Almuerzo</FormLabel>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('almKosher')} checked={this.state.almKosher} name="almKosher" />
                                                }
                                                label={
                                                    <Grid>
                                                        <Typography>Almuerzo Kosher</Typography>

                                                    </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('almVegano')} checked={this.state.almVegano} name="almVegano" />
                                                }
                                                label={
                                                    <Grid>
                                                        <Typography>Almuerzo vegano</Typography>

                                                    </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('almTac')} checked={this.state.almTac} name="almTac" />
                                                }
                                                label={
                                                    <Grid>
                                                        <Typography>Almuerzo Sin tac</Typography>

                                                    </Grid>
                                                } />
                                        </FormControl>
                                        <FormLabel component="legend">Cena</FormLabel>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('cenKosher')} checked={this.state.cenKosher} name="cenKosher" />
                                                }
                                                label={
                                                    <Grid>
                                                        <Typography>Cena Kosher</Typography>
                                                    </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('cenVegano')} checked={this.state.cenVegano} name="cenVegano" />
                                                }
                                                label={
                                                    <Grid>
                                                        <Typography>Cena vegano</Typography>

                                                    </Grid>
                                                } />
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox color="primary" onChange={this.handleChangeCheck('cenTac')} checked={this.state.cenTac} name="cenTac" />
                                                }
                                                label={
                                                    <Grid>
                                                        <Typography>Cena Sin tac</Typography>

                                                    </Grid>
                                                } />
                                        </FormControl>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={this.especialClose}>Cancelar</Button>
                                        <Button onClick={this.especialClose}>Confirmar</Button>
                                    </DialogActions>
                                </Dialog>
                            </Grid>
                        </Grid>


                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>

                        <Button size="small" color="primary" onClick={this.solicitarEspeciales.bind(this)}>
                            Solicitar
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>

            </Grid>
        )

    }
}

Idiomas.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Idiomas);
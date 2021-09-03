import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Paper, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from '@material-ui/core';

const styles = theme => ({
    main: {
        paddingLeft: theme.spacing(40),
        paddingRight: theme.spacing(40),
    },
    paper: {
        padding: theme.spacing(4),
    },
    formLabel: {
        marginBottom: theme.spacing(2)
    },
    paperTop: {
        borderTop: "8px solid #1565c0",
        padding: theme.spacing(2),
    }
})

class Cuestionario extends Component {

    constructor() {
        super();
        this.state = {
            pregunta1: "",
            pregunta2: "",
            pregunta3: "",
            pregunta4: "",
            pregunta5: "",
            pregunta6: "",
            comentario: "",
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        
    }
    handleChangeComentario = (event) => {
        this.setState({ comentario: event.target.value });
    };


    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.main} spacing={2}>
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.paperTop}>
                        <Typography variant="h4" >Hotel Paihuen</Typography>
                        <Typography align="justify">A continuacion le pedimos que complete el siguiente cuestionario sobre su estadia </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.paper}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend" className={classes.formLabel}>1-¿Como calificaria su estadia en general?</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.pregunta1} onChange={this.handleChange}>
                                <FormControlLabel value="Excelente" name="pregunta1" control={<Radio />} label="Excelente" />
                                <FormControlLabel value="Buena" name="pregunta1" control={<Radio />} label="Buena" />
                                <FormControlLabel value="Normal" name="pregunta1" control={<Radio />} label="Normal" />
                                <FormControlLabel value="Mala" name="pregunta1" control={<Radio />} label="Mala" />
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.paper}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend" className={classes.formLabel}>2-¿Como calificaria el servicio de los empleados del hotel?</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.pregunta2} onChange={this.handleChange}>
                                <FormControlLabel value="Excelente" name="pregunta2" control={<Radio />} label="Excelente" />
                                <FormControlLabel value="Buena" name="pregunta2" control={<Radio />} label="Buena" />
                                <FormControlLabel value="Normal" name="pregunta2" control={<Radio />} label="Normal" />
                                <FormControlLabel value="Mala" name="pregunta2" control={<Radio />} label="Mala" />
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.paper}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend" className={classes.formLabel}>3-¿Como calificaria la limpieza de las habitaciones?</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.pregunta3} onChange={this.handleChange}>
                                <FormControlLabel value="Excelente" name="pregunta3" control={<Radio />} label="Excelente" />
                                <FormControlLabel value="Buena" name="pregunta3" control={<Radio />} label="Buena" />
                                <FormControlLabel value="Normal" name="pregunta3" control={<Radio />} label="Normal" />
                                <FormControlLabel value="Mala" name="pregunta3" control={<Radio />} label="Mala" />
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.paper}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend" className={classes.formLabel}>4-¿ Como calificaria los servicios contratados?</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.pregunta4} onChange={this.handleChange}>
                                <FormControlLabel value="Excelente" name="pregunta4" control={<Radio />} label="Excelente" />
                                <FormControlLabel value="Buena" name="pregunta4" control={<Radio />} label="Buena" />
                                <FormControlLabel value="Normal" name="pregunta4" control={<Radio />} label="Normal" />
                                <FormControlLabel value="Mala" name="pregunta4" control={<Radio />} label="Mala" />
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.paper}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend" className={classes.formLabel}>5-¿Como calificaria el uso de la app en su estadia?</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={this.state.pregunta5} onChange={this.handleChange}>
                                <FormControlLabel value="Excelente" name="pregunta5" control={<Radio />} label="Excelente" />
                                <FormControlLabel value="Buena" name="pregunta5" control={<Radio />} label="Buena" />
                                <FormControlLabel value="Normal" name="pregunta5" control={<Radio />} label="Normal" />
                                <FormControlLabel value="Mala" name="pregunta5" control={<Radio />} label="Mala" />
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.paper}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend" className={classes.formLabel}>6-¿Quiere dejar algun comentario adicional?</FormLabel>
                            <TextField
                                label="Comentario"
                                style={{ margin: 8 }}
                                placeholder="Que buen servico, muy a gusto"
                                fullWidth
                                multiline
                                rows={4}
                                margin="normal"
                                name="comentario"
                                value={this.state.comentario}
                                onChange={this.handleChange}
                            />
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

Cuestionario.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cuestionario);
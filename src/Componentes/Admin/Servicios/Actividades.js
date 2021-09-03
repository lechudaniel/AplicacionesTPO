import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, FormControl, FormLabel, FormControlLabel, Checkbox, TextField } from '@material-ui/core';
import Hora from './Hora'
import Fecha from './Fecha'

const styles = theme => ({
    formControl: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(2),
    },
})

class Actividades extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comedor: true,
            desayuno: true,
            almuerzo: true,
            merienda: true,
            
        }
    }
    comedor() {
        const { classes } = this.props;
        if (this.state.comedor) {
            return (
                <Grid container spacing={2}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormControlLabel control={<Checkbox color="primary" onChange={this.handleChange('desayuno')} checked={this.state.desayuno} name="desayuo" />} label="Desayuno" />
                        <FormControlLabel control={<Checkbox color="primary" onChange={this.handleChange('almuerzo')} checked={this.state.almuerzo} name="almuerzo" />} label="Almuerzo" />
                        <FormControlLabel control={<Checkbox color="primary" onChange={this.handleChange('merienda')} checked={this.state.merienda} name="merienda" />} label="Merienda" />       
                    </FormControl>
                </Grid>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
    transporte() {
        if (this.props.transporte) {
            return (
                <Grid container spacing={2}>
                   
                    <Grid item md={3}>
                        <TextField
                        label="Transporte"
                        />
                    </Grid>
                </Grid>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
    
    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };


    render() {
        const { classes } = this.props;

        return (
            <Grid container>
                <Grid item xs={12} >
                    <FormLabel>Comedor</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.handleChange('comedor')} checked={this.state.comedor} name="comedor" />} label="Elegir tipo de comida" />
                            </FormControl>
                        </Grid>
                        <Grid item md={11}>
                            {this.comedor()}
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <FormLabel component="legend">Transporte</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('transporte')} checked={this.props.eventos} name="transporte" />} label="Transporte" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                            {this.transporte()}
                        </Grid>

                    </Grid>

                </Grid>
              

            </Grid>
        )

    }
}

Actividades.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Actividades);
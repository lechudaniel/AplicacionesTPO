import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, FormControl, FormLabel, FormControlLabel, Checkbox } from '@material-ui/core';
import Hora from './Hora'

const styles = theme => ({
    formControl: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(2),
    },
})

class EscuelaServicios extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    /*
    fútbol() {
        if (this.props.fútbol) {
            return (
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <Hora label={"Desde"} />
                    </Grid>
                    <Grid item md={3}>
                        <Hora label={"Hasta"} />
                    </Grid>
                    
                </Grid>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
    tenis() {
        if (this.props.tenis) {
            return (
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <Hora label={"Desde"} />
                    </Grid>
                    <Grid item md={3}>
                        <Hora label={"Hasta"} />
                    </Grid>
                    
                </Grid>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
    hockey() {
        if (this.props.hockey) {
            return (
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <Hora label={"Desde"} />
                    </Grid>
                    <Grid item md={3}>
                        <Hora label={"Hasta"} />
                    </Grid>
                    <Grid item md={3}>
                        <FormControlLabel control={<Checkbox color="primary" checked={false} name="checkedE" />} label="" />
                    </Grid>
                </Grid>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
    */
  

    render() {
        const { classes } = this.props;

        return (
            <Grid container>
                <Grid item xs={12} >
                    <FormLabel>Fútbol</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('fútbol')} checked={this.props.fútbol} name="fútbol" />} label="Fútbol" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                            
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <FormLabel component="legend">Tenis</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('tenis')} checked={this.props.tenis} name="tenis" />} label="Tenis" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                            
                        </Grid>

                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <FormLabel component="legend">Hockey</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('hockey')} checked={this.props.hockey} name="hockey" />} label="Hockey" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                            
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>
        )

    }
}

EscuelaServicios.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EscuelaServicios);
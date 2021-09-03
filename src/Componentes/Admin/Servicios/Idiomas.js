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

class Idiomas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    inglés() {
        if (this.props.ingles) {
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
    francés() {
        if (this.props.francés) {
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
    portugués() {
        if (this.props.portugués) {
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

   
   

    render() {
        const { classes } = this.props;

        return (
            <Grid container>
                <Grid item xs={12} >
                    <FormLabel component="legend">Inglés</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('inglés')} checked={this.props.inglés} name="inglés" />} label="Inglés" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                            
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <FormLabel component="legend">Portugués</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('portugués')} checked={this.props.portugués} name="portugués" />} label="Portugués" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                           
                        </Grid>

                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <FormLabel component="legend">Francés</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('francés')} checked={this.props.francés} name="frances" />} label="Francés" />
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

Idiomas.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Idiomas);
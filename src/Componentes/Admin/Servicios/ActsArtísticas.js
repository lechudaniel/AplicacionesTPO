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

class ActsArtísticas extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
        }
    }
   

    /*danza() {
        if (this.props.danza) {
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
    teatro() {
        if (this.props.teatro) {
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
    pintura() {
        if (this.props.pintura) {
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
    música() {
        if (this.props.música) {
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

  */

    render() {
        const { classes } = this.props;

        return (
            <Grid container>
                <Grid item xs={12} >
                    <FormLabel>Danza</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('danza')} checked={this.props.danza} name="danza" />} label="Danza" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                            
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <FormLabel component="legend">Teatro</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('teatro')} checked={this.props.teatro} name="teatro" />} label="Teatro" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                            
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <FormLabel component="legend">Pintura</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('pintura')} checked={this.props.pintura} name="pintura" />} label="Pintura" />
                            </FormControl>
                        </Grid>
                        <Grid item md={9}>
                            
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <FormLabel component="legend">Música</FormLabel>
                    <Grid container>
                        <Grid item md={3}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormControlLabel control={<Checkbox color="primary" onChange={this.props.handleChange('música')} checked={this.props.música} name="música" />} label="Música" />
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

ActsArtísticas.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActsArtísticas);
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import clsx from 'clsx';



const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
})

class Ayuda extends Component {
    
    render() {
        const { classes } = this.props;
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        return (
            <Grid container spacing={3}>
            
                <Grid item xs={12} md={8} lg={9} justify="center" alignItems="center">
                    <Paper className={fixedHeightPaper}>
                      <Typography variant="h3">Ayuda</Typography>
                    </Paper>
                </Grid>
               
                
                
            </Grid>
        );
    }
}

Ayuda.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Ayuda);
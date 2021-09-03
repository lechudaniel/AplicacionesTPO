import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import Deposits from './Deposits';
import Orders from './Orders';
import Chart from './Chart'
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

class General extends Component {
    
    render() {
        const { classes } = this.props;
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        return (
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper elevation={10} className={fixedHeightPaper}>
                        <Chart />
                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper elevation={10} className={fixedHeightPaper}>
                        <Deposits 
                             serviciosOpen={this.props.serviciosOpen}
                        />
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper elevation={10} className={classes.paper}>
                        <Orders
                        reservasOpen={this.props.reservasOpen}
                                   
                         />
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

General.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(General);
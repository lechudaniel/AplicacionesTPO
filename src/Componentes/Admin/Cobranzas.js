import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Typography, Grid, Card, CardContent } from '@material-ui/core';
import ExpandResenasHotel from './ExpandResenasHotel';

const styles = theme => ({

})

class Resenas extends Component {
    render() {
        //const { classes } = this.props;
        return (
            <Grid container spacing={2} justify="center" alignItems="center">
                <Grid item xs={12} md={8} lg={9}>
                    <Typography variant="h4">Reseñas</Typography>
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <Card elevation={10}>
                        <CardContent>
                            <ExpandResenasHotel />
                        </CardContent>
                    </Card>

                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <Card elevation={10}>
                        <CardContent>
                            <ExpandResenasHotel />
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>
        );
    }
}

Resenas.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Resenas);
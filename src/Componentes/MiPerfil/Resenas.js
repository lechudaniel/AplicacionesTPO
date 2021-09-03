import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import ExpandResenas from './ExpandResenas';



const styles = theme => ({
 
})

class Resenas extends Component {





    render() {
        //const { classes } = this.props;

        return (
            <Grid container spacing={3} justify="center" alignItems="center">
                <Grid item xs={12} md={8} lg={9}>
                    <Typography variant="h3">Tus Reseñas</Typography>
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <Card elevation={10}>
                        <CardContent>
                            <ExpandResenas />
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
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid, Typography, Divider, IconButton, Paper, Avatar } from '@material-ui/core';







const useStyles = makeStyles(theme => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    izq: {
        borderRight: "1px solid #e0e0e0",
        [theme.breakpoints.down('xs')]: {
            borderRight: "1px solid #ffffff",
        },
    },
    arriba: {

        paddingLeft: theme.spacing(1),
    },
    logo: {
        padding: theme.spacing(1),
        height: 50,
        width: 50,
    },
    paper: {
        padding: theme.spacing(2)
    },
    respuestas:{
        marginTop:theme.spacing(2)
    }


}));


export default function ExpandResenasHotel(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };






    return (
        <Grid>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item md={1} xs={2} className={classes.izq}>
                  <Avatar/>
                </Grid>
                <Grid item md={10} xs={10}>
                    <Grid container justify="center" alignItems="center">
                        <Grid item md={6} className={classes.arriba}>
                            <Typography component="h2" variant="h6" color="primary">Esteban Gueicha #1234567</Typography>
                        </Grid>
                        <Grid item md={6} className={classes.arriba}>
                            <Typography component="h2" variant="h6" color="primary">Calificacion General: Excelente</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={1}>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        aria-expanded={expanded}
                        color="primary"
                        onClick={handleExpandClick}
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Divider />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Grid container alignItems="center" spacing={2} className={classes.respuestas}>
                    <Grid item xs={12}>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="subtitle1" >1-¿Como calificaria su estadia en general?</Typography>
                            <Typography variant="subtitle2" color="primary">Exelente</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography >2-¿Como calificaria el servicio de los empleados del hotel?</Typography>
                            <Typography variant="subtitle2" color="primary">Exelente</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography >3-¿Como calificaria la limpieza de las habitaciones?</Typography>
                            <Typography variant="subtitle2" color="primary">Exelente</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography >4-¿ Como calificaria los servicios contratados?</Typography>
                            <Typography variant="subtitle2" color="primary">Exelente</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography >5-¿Como calificaria el uso de la app en su estadia?</Typography>
                            <Typography variant="subtitle2" color="primary">Exelente</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography >6-¿Quiere dejar algun comentario adicional?</Typography>
                            <Typography variant="subtitle2" color="primary">Muy bueno todo exelente servicio y atenciion volveria de nuevo</Typography>
                        </Paper>                       
                    </Grid>
                </Grid>
            </Collapse>
        </Grid >
    );

}
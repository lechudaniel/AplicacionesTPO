import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, Button, IconButton } from '@material-ui/core';
import FormularioDatosAlumno from './FormularioDatosAlumno'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormularioDatos from './FormularioDatos';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 800,
        [theme.breakpoints.down('xs')]: {
            width: "100%",
        },
    },
    formControl: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

export default function TabsPerfil(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [alumnoSeleccionado, setAlumnoSeleccionado] = React.useState(null);
    const [alumnosModalIsOpen, setAlumnosModalIsOpen] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    const openPreferencias = () => {
        setValue(2);
    };

    //Turnos Menu
    function handleChangeAlumno(e) {
        setAlumnoSeleccionado(e.target.value);
    };

    function handleAlumnosMenuOpen() {
        setAlumnosModalIsOpen(true);
    }

    function handleAlumnosMenuClose() {
        setAlumnosModalIsOpen(false);
    }

    //Views
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label=" Datos Titular" {...a11yProps(0)} />
                    <Tab label="Datos Alumno" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>

                    {/*FORMULARIO*/}
                    <FormularioDatos
                        user={props.user}
                        modo={"Perfil"}
                        perfilCompletado={props.perfilCompletado}
                        callPerfilCompletado={props.callPerfilCompletado}
                        data={props.data}
                    />

                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Grid container >
                    <Grid item xs={12} md={12}>
                                <InputLabel id="demo-mutiple-name-label">Nombre Alumno</InputLabel>
                                <Select
                                fullWidth
                                labelId="demo-mutiple-name-label"
                                id="demo-controlled-open-select"
                                open={ alumnosModalIsOpen }
                                onClose={ handleAlumnosMenuClose }
                                onOpen={ handleAlumnosMenuOpen }
                                value = { alumnoSeleccionado }
                                onChange={ e => handleChangeAlumno(e) }
                                >
                                { props.alumnos.slice(0,2).map((alumno, index) => (
                                    <MenuItem value={index}> { alumno.nombre } { alumno.apellido} </MenuItem>
                                ))}
                                </Select>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                {/*PERFILES*/}
                                <FormLabel component="legend">Actividades extracurriculares</FormLabel>
                                <FormGroup tag="div">
                                    <FormControlLabel
                                        control={<Checkbox color="primary" name="futbol" value="no" />}
                                        label="Fútbol"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox color="primary" name="hockey" value="no"/>}
                                        label="Hockey"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox color="primary" name="natacion" value= "no"/>}
                                        label="Natación"
                                    />
                                    
                                </FormGroup>

                            </FormControl>
                            <Grid container justify="center" alignItems="center">
                                <Button variant="outlined" color="secondary" onClick={props.guardarPerfil} >Guardar</Button>
                            </Grid>
                            <FormControl component="fieldset" className={classes.formControl}>
                                {/*PERFILES*/}
                                <FormLabel component="legend">Idiomas</FormLabel>
                                <FormGroup tag="div">
                                    <FormControlLabel
                                        control={<Checkbox color="primary" name="ingles" value="no" />}
                                        label="Inglés"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox color="primary" name="portugues" value="no"/>}
                                        label="Portugués"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox color="primary" name="frances" value= "no"/>}
                                        label="Francés"
                                    />
                                    
                                </FormGroup>

                            </FormControl>
                            <Grid container justify="center" alignItems="center">
                                <Button variant="outlined" color="secondary" onClick={props.guardarPerfil} >Guardar</Button>
                            </Grid>

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                {/*PERFILES*/}
                                <FormLabel component="legend">Servicios</FormLabel>
                                <FormGroup tag="div">
                                    <FormControlLabel
                                        control={<Checkbox color="primary" name="transporte" value="no" />}
                                        label="Transporte"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox color="primary" name="comedor" value="no"/>}
                                        label="Comedor"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox color="primary" name="vianda" value= "no"/>}
                                        label="Vianda"
                                    />
                                    
                                </FormGroup>

                            </FormControl>
                            <Grid container justify="center" alignItems="center">
                                <Button variant="outlined" color="secondary" onClick={props.guardarPerfil} >Guardar</Button>
                            </Grid>

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormularioDatosAlumno
                            user={props.user}
                            modo={"Perfil"}
                            perfilCompletado={props.perfilCompletado}
                            callPerfilCompletado={props.callPerfilCompletado}
                            data={props.data}
                            />
                        </Grid>
                    </Grid>

                </TabPanel>
            </SwipeableViews>

        </div>
    )
}
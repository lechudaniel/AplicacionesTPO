import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EscuelaServicios from './Servicios/EscuelaServicios';
import Idiomas from './Servicios/Idiomas';
import ActsArtísticas from './Servicios/ActsArtísticas';

import Actividades from './Servicios/Actividades';
import AddIcon from '@material-ui/icons/Add';
import { Zoom, Fab } from '@material-ui/core';

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
    position: 'relative',
    minHeight: 300,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function FullWidthTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const fabs = [
    {
      color: 'primary',
      className: classes.fab,
      icon: <AddIcon />,
      label: 'Add',
    },
    {
      color: 'primary',
      className: classes.fab,
      icon: <AddIcon />,
      label: 'Add',
    },
    {
      color: 'primary',
      className: classes.fab,
      icon: <AddIcon />,
      label: 'Add',
    },
    {
      color: 'primary',
      className: classes.fab,
      icon: <AddIcon />,
      label: 'Add',
    },
  ];
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

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
          <Tab label="Premium" {...a11yProps(0)} />
          <Tab label="Express" {...a11yProps(1)} />
          <Tab label="Normal" {...a11yProps(2)} />
          <Tab label="Economico" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <EscuelaServicios
            velocidad = {props.velocidad}
            tamaño = {props.tamaño}
            fútbol123={props.fútbol}
            tenis={props.tenis}
            hockey={props.hockey}
            restaurante={props.restaurante}
            estacionamiento={props.estacionamiento}
            tintoreria={props.tintoreria}
            handleChange={props.handleChange}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Idiomas
            inglés={props.inglés}
            portugués={props.portugués}
            francés={props.francés}
            servicio={props.servicio}
            limpieza={props.limpieza}
            comidas={props.comidas}
            handleChange={props.handleChange}
          />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <ActsArtísticas
            danza={props.danza}
            teatro={props.teatro}
            pintura={props.pintura}
            música={props.música}

            spa={props.spa}
            gimnasio={props.gimnasio}
            masajes={props.masajes}
            tratamiento={props.tratamiento}
            handleChange={props.handleChange}
          />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Actividades
            botes={props.botes}
            bicicletas={props.bicicletas}
            autos={props.autos}
            motos={props.motos}
            ski={props.ski}
            Buceo={props.Buceo}
            eventos={props.eventos}
            actividades={props.actividades}
            handleChange={props.handleChange}
          />
        </TabPanel>
      </SwipeableViews>
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
          }}
          unmountOnExit
        >
          <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>
      ))}
    </div>
  );
}

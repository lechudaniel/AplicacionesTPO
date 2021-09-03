import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EscuelaServicios from './EscuelaServicios';
import Idiomas from './Idiomas';
import ActsArtísticas from './ActsArtísticas';
import Actividades from './Actividades';
import {  Divider } from '@material-ui/core';

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

  
 

  return (
    <div className={classes.root}>
     
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
          aria-label="full width tabs example"
        >
          <Tab label="Servicios del Hotel" {...a11yProps(0)} />
          <Tab label="Idiomas de la escuela" {...a11yProps(1)} />
          <Tab label="ActsArtísticas" {...a11yProps(2)} />
          <Tab label="Actividades" {...a11yProps(3)} />
        </Tabs>
      <Divider/>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <EscuelaServicios
            restaurante={props.restaurante}
            estacionamiento={props.estacionamiento}
            tintoreria={props.tintoreria}
            handleChange={props.handleChange}
            add={props.add}
            array={props.data}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Idiomas
            servicio={props.servicio}
            limpieza={props.limpieza}
            comidas={props.comidas}
            handleChange={props.handleChange}
            add={props.add}
            array={props.data}
          />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <ActsArtísticas
            spa={props.spa}
            gimnasio={props.gimnasio}
            masajes={props.masajes}
            tratamiento={props.tratamiento}
            handleChange={props.handleChange}
            add={props.add}
            array={props.data}
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
            add={props.add}
            array={props.data}
          />
        </TabPanel>
      </SwipeableViews>
      
    </div>
  );
}

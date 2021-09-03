import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Uno from '../Imagenes/school1.jpg'
import Dos from '../Imagenes/school2.jpg'
import Tres from '../Imagenes/school3.jpg'
import Cuatro from '../Imagenes/school4.jpg'
import Cinco from '../Imagenes/school5.jpg'
import Seis from '../Imagenes/school6.jpg'


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Uno',
    imgPath:
      Uno
  },
  {
    label: 'Dos',
    imgPath:
      Dos,
  },
  {
    label: 'Tres',
    imgPath:
      Tres
  },
  {
    label: 'Cuatro',
    imgPath:
      Cuatro
  },
  {
    label: 'Cinco',
    imgPath:
      Cinco
  },
  {
    label: 'Seis',
    imgPath:
      Seis
  }  
];

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    
  },
  img: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
    </div>
  );
}

export default SwipeableTextMobileStepper;

import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../AnimationJson/30304-back-to-school.json'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
   root: {
      backgroundColor: "#2c699a",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      height: "100%",
      position: "absolute",
      left: 0,
      top:0,
      width: "100%",
      overflow: "hidden",
   },
}));

export default function Index() {
   const classes = useStyles();
   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
         preserveAspectRatio: 'xMidYMid slice'
      },
   }

   return (
      <Grid container justify="center" alignItems="center" className={classes.root} >
         <Lottie
            options={defaultOptions}
            height={400}
            width={400}

         />
      </Grid >
   )
}


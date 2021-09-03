import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SeleccionarFechas from './SeleccionarFechas';
import Review from './ReviewForm';
import { Link } from 'react-router-dom'
//import TarjetaCheta from '../TarjetaCheta/TarjetaCheta';
import { IconButton } from '@material-ui/core';
import RenderAvatar from '../login/RenderAvatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AuthController from '../login/AuthController'
import Tarjetas from '../MiPerfil/Tarjetas';
import SnackError from '../Snacks/SnackError';
import Lottie from 'react-lottie';
import SendEmail from '../../AnimationJson/sendEmail.json'

import Constants from '../../Utils/Constants'
import ReservasAPI from '../../Network/Reserva/ReservasAPI'
import GuestInfo from '../../Models/Guest/GuestInfo'
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorMessageModal from '../Commons/ErrorMessageModal';
import LoadingReserva from '../Commons/LoadingReserva';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const steps = ['Confirme las fechas', 'Pago', 'Ver tu reserva'];
function getStepContent(step, props) {

  switch (step) {
    case 0:
      return <SeleccionarFechas
        CheckIn={props.CheckIn}
        CheckOut={props.CheckOut}
        huespedes={props.huespedes}
        precio={props.precio}
        callHuespedes={props.callHuespedes}
        callCheckIn={props.callCheckIn}
        callCheckOut={props.callCheckOut}
        callHabitacion={props.callHabitacion}
      />;
    case 1:
      return <Tarjetas
        callNumeroTarjeta={props.callNumeroTarjeta}
        callNombreTarjeta={props.callNombreTarjeta}
        callMesTarjeta={props.callMesTarjeta}
        callAñoTarjeta={props.callAñoTarjeta}
        callCodTarjeta={props.callCodTarjeta}
        callVerTarjeta={props.callVerTarjeta}
        callTipoTarjeta={props.callTipoTarjeta}
        openVerfyCard={props.openVerfyCard}
        closeVerfyCard={props.closeVerfyCard}
        verifyCard={props.verifyCard}
        user={props.user}
        modo={"ReservaApi"}
      />;
    case 2:
      return <Review
        CheckIn={props.CheckIn}
        CheckOut={props.CheckOut}
        huespedes={props.huespedes}
        precio={props.precio}
        habitacion={props.habitacion}
        numeroTarjeta={props.numeroTarjeta}
        nombreTarjeta={props.nombreTarjeta}
        mesTarjeta={props.mesTarjeta}
        añoTarjeta={props.añoTarjeta}
        tipoTarjeta={props.tipoTarjeta}
      />;

    default:
      throw new Error('Unknown step');
  }
}

function logueado(classes, props) {

  if (props.user) {
    return (
      <Toolbar>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Hotel {props.id}
        </Typography>
        <IconButton color="inherit" variant="contained"  >
          <RenderAvatar user={props.user} className={classes.small} />
        </IconButton>

        <Typography component="h1" variant="h6" color="inherit" noWrap >
          {props.user.displayName}
        </Typography>

        <IconButton color="inherit" variant="contained" onClick={AuthController.handleLogout}  >
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    )
  } else {
    return (
      <Toolbar>

        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Hotel {props.id}
        </Typography>

      </Toolbar>
    )
  }
}




export default function GuestInfoForm(props) {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [values, setValue] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [errorMessageIsOpen, setErrorMessageIsOpen] = React.useState(false)



  function noches(checkIn, checkOut) {

    var aFecha1 = checkIn.split("-");
    var aFecha2 = checkOut.split("-");
    var fFecha1 = Date.UTC(aFecha1[0], aFecha1[1] - 1, aFecha1[2]);
    var fFecha2 = Date.UTC(aFecha2[0], aFecha2[1] - 1, aFecha2[2]);
    var dif = fFecha2 - fFecha1;
    var dias = Math.floor(dif / (1000 * 60 * 60 * 24));

    return dias
  }
  const handleNext = () => {
    if (activeStep === 1) {
      if (props.verifyCard)
        if (props.codTarjeta === props.verTarjeta) {
          setActiveStep(activeStep + 1);
        }
        else {
          handleError()
        }

      else
        setActiveStep(activeStep + 1);
    }
    else
      if (activeStep === 2) {
        ReservasAPI.postBooking(getBookingDictionary(), handleBookHotel)
        setLoading(true)
        enviarMail(/*Hay poner el numero de reserva aca*/)
        setActiveStep(activeStep + 1);
      }

      else
        setActiveStep(activeStep + 1);

  };
 

  function enviarMail(/*nro */) {
    const email = props.user.email;
    const hotel = props.id;
    const nroReserva = "212121"//nro
    const fechaHoy = props.fechaHoy;
    const checkIn = props.CheckIn;
    const checkOut = props.CheckOut;
    const huespedes = props.huespedes;
    const tipoTarjeta = props.tipoTarjeta;
    const nombre = props.nombreTarjeta;
    const numeroTarjeta = props.numeroTarjeta;
    const tipoHabitacion = props.habitacion;
    const night = noches(props.CheckIn, props.CheckOut);
    const precioNoche = props.precio;
    const total = noches(props.CheckIn, props.CheckOut) * props.precio


    fetch(Constants.SEND_EMAIL_VOUCHER_URL +
      'email=' + email +
      '&hotel=' + hotel +
      '&nroReserva=' + nroReserva +
      '&fechaHoy=' + fechaHoy +
      '&checkIn=' + checkIn +
      '&checkOut=' + checkOut +
      '&huespedes=' + huespedes +
      '&tipoTarjeta=' + tipoTarjeta +
      '&nombre=' + nombre +
      '&numeroTarjeta=' + numeroTarjeta +
      '&tipoHabitacion=' + tipoHabitacion +
      '&noches=' + night +
      '&precioNoche=' + precioNoche +
      '&total=' + total
    )
      .then(responseData => {
        if (responseData.Response !== '') {
          if (responseData.error === '') {
            alert("no Enviado");

          } else {
            console.log("Enviado");
          }
        } else {
          alert("No se pudo mandar");
        }
      });
     
  }
  const continuar = () => {
    //Para guardar en reserva api POST
    
  }
  function getBookingDictionary() {
    let booking = {
      hotel: props.emailHotel,
      nombreHotel:props.id,
      huesped: props.user.email,
      checkIn: props.CheckIn,
      checkOut: props.CheckOut,
      cantHuespedes: props.huespedes,
      precio: props.precio,
      tipoHabitacion: props.habitacion,     
      numeroTarjeta: props.numeroTarjeta,
    };

    return booking;
  }

  function handleBookHotel(booking) {
    setLoading(false);

    if (booking.error !== null) {
      //show error message if needed
      GuestInfo.getInstance().addReserva(getBookingDictionary())
    } else {
      setErrorMessageIsOpen(true);
    }
  }

  function closeErrorModal() {
    setErrorMessageIsOpen(false);
  }

  const handleError = () => {
    setValue(!values)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SendEmail,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
  }

  function showLoaderIfNeeded() {
    if (loading)
      return (
        <div className="loader">
          <CircularProgress disableShrink />;
        </div>
      )
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        {logueado(classes, props)}
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper} elevation={10}>
          <Typography component="h1" variant="h4" align="center">
            Tu Reserva
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (

              <React.Fragment>
                {loading ? (
                  <LoadingReserva />
                ) : (
                    <React.Fragment>
                      <Typography variant="h5" gutterBottom align="center">
                        ¡Gracias por reservar con nosotros!
                    </Typography>
                      <Lottie
                        options={defaultOptions}
                        height={150}
                        width={150}
                      />
                      <div>
                        {showLoaderIfNeeded()}
                        <ErrorMessageModal title={'Algo salió mal'} errorMessage={"Hubo un error. Prueba de nuevo"} isOpen={errorMessageIsOpen} closeErrorModal={closeErrorModal.bind(this)} />
                      </div>
                      <Typography variant="subtitle1" align="justify">
                        Tu numero de reserva es #2001539. Te hemos enviado un mail a {props.user.email} con tu vocher, si desea puede editar sus preferencias y realizar su Check-In
                    </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={continuar}
                        className={classes.button}
                        component={Link}
                        to={{
                          pathname: `/ReservaOk`,
                          state: {
                            id: props.id,
                            CheckIn: props.CheckIn,
                            CheckOut: props.CheckOut,
                            huespedes: props.huespedes,
                            precio: props.precio,
                          }
                        }}>
                        Continuar
                       </Button>
                    </React.Fragment>
                  )}
              </React.Fragment>

            ) : (
                <React.Fragment>
                  {getStepContent(activeStep, props)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Atras
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
          </React.Fragment>
        </Paper>

      </main>
      <SnackError openSnack={values} closeSnack={handleError} mensaje="Codigo de verificacion Incorrecto" />
    </React.Fragment>
  );
}
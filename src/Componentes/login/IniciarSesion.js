import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import LogoGoogle from './icono/logoGoogle.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Dialog } from '@material-ui/core';
import AuthController from './AuthController';
import CambiarPass from './RecuperoPass';
import Registro from './Registro';



const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {

    marginBottom: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  botonicono: {
    margin: theme.spacing(1, 0, 1),
    minHeight: theme.spacing(5)
  },
  icono: {
    margin: theme.spacing(1),
    width: '5%',
    height: '5%',
  },
  separador: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  lineas: {
    height: "3px",
    backgroundColor: "black"
  }

});

class IniciarSesion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      correo: '',
      contra: '',
      showPassword: false,
      openContra: false,
      openRegistro: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginCorreo = this.loginCorreo.bind(this);
  }



  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChangeContra = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));

  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.loginCorreo()
    }
  }

  loginCorreo() {
    const Correo = this.state.correo;
    const Contrasena = this.state.contra;
    let isHotel = this.props.modoHotel != null ;
    AuthController.handleIniciar(Correo, Contrasena, isHotel);
  }

  handleOpenContra = () => {
    this.setState({ openContra: true });

  }
  handleCloseContra = () => {
    this.setState({ openContra: false });
  }

  handleOpenRegistro = () => {
    this.props.callInicio(false)
  }
  handleOpenHotel = () => {
    this.props.callHotel(true)
  }

  handleCloseRegistro = () => {
    this.setState({ openRegistro: false });
  }

  modoHotel() {
    const { classes } = this.props;

    if (this.props.modoHotel) {
      return (
        <div></div>
      )
    } else {
      return (
        <Grid>
          <Grid container direction="row" justify="center" alignItems="center" className={classes.separador}>
            <Grid item xs={5}>
              <hr className={classes.lineas} />
            </Grid>
            <Grid item xs={2}>
              <Typography align="center">O sino</Typography>
            </Grid>
            <Grid item xs={5}>
              <hr className={classes.lineas} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <Button
                fullWidth
                variant="contained"
                className={classes.botonicono}
                onClick={AuthController.handleAuthGoogle}>
                <img src={LogoGoogle} alt="LogoGoogle" className={classes.icono} />
                Ingresá con Google
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.botonicono}
                onClick={AuthController.handleAuthFace}>
                <FacebookIcon fontSize="large" />
                Ingresá con Facebook
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.botonicono}
                onClick={this.handleOpenHotel}>

                ¿Sos Cliente?
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )
    }

  }
  titulo() {
    if (this.props.modoHotel) {
      return (
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
      )
    } else {
      return (
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
      )
    }
  }





  render() {
    const { classes } = this.props;
    const openContra = this.state.openContra;
    const openRegistro = this.state.openRegistro;

    return (
      <Container component="main" maxWidth="xs" >
        <CssBaseline />

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          {this.titulo()}
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Correo Electronico"
              name="correo"
              type="email"
              autoComplete="email"
              autoFocus
              value={this.state.correo}
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="contra"
              label="Contraseña"
              type={this.state.showPassword ? 'text' : 'password'}
              onKeyPress={this.handleKeyPress}
              autoComplete="current-password"
              value={this.state.contra}
              onChange={this.handleChangeContra('contra')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                    >
                      {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.loginCorreo}
            >
              Iniciar Sesión
          </Button>
            <Grid container>
              <Grid item xs>

                {/*    Cambiar contraseña             */}

                <Link href="#" onClick={this.handleOpenContra} variant="body2">
                  Olvidaste la contraseña?
              </Link>
                <Dialog open={openContra} onClose={this.handleCloseContra} >
                  <CambiarPass closePass={this.handleCloseContra.bind()} />
                </Dialog>
              </Grid>
              <Grid item >
                <Link href="#" onClick={this.handleOpenRegistro} variant="body2">
                  No tenes cuenta? Registrate
              </Link>

              </Grid>

              <Dialog open={openRegistro} onClose={this.handleCloseRegistro}>
                <Registro closeRegistro={this.handleCloseRegistro.bind()} />
              </Dialog>

            </Grid>
            {this.modoHotel()}
          </form>
        </div>


      </Container>
    );
  }
}

IniciarSesion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IniciarSesion);

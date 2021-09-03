import React from 'react';
import { withStyles, DialogContent, DialogActions, Button, Dialog, DialogTitle, DialogContentText } from '@material-ui/core';
import AuthController from './AuthController';
import IniciarSesion from './IniciarSesion'
import Registro from './Registro';

const styles = theme => ({

});

class DialogLogin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      correo: '',
      inicio: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.cambiar = this.cambiar.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  cambiar() {
    const Correo = this.state.correo;
    AuthController.handleRecupero(Correo)
    this.handleClose();
  }

  handleClose = () => {
    this.props.onClose();
  }

  callbackInicio = (x) => {
    this.setState({ inicio: x })
  }

  login() {
    if (this.state.inicio === true) {
      return (
        <IniciarSesion inicio={this.callbackInicio} />
      )
    }
    else {
      return (
        <Registro inicio={this.callbackInicio} verificar={this.props.verificar} />
      )
    }
  }


  render() {
    return (
      <div>
        {this.login()}
        <Dialog open={this.props.open} onClose={this.props.onClose} >
          <DialogTitle >{"Completar reserva"}</DialogTitle>
          <DialogContent>
            <DialogContentText >
              Por favor Inicie sesion para poder completar su Reserva
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={this.props.openVerificar} onClose={this.props.onCloseVerificar} >
          <DialogTitle >{"Verificar correo electronico"}</DialogTitle>
          <DialogContent>
            <DialogContentText >
              Por favor verificar su correo electronico para poder iniciar sesion. Si no aparece verifique su casilla de spam.
                         </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onCloseVerificar} color="primary">
              Cerrar
                        </Button>

          </DialogActions>
        </Dialog>

      </div>
    )
  }
}

export default withStyles(styles)(DialogLogin);
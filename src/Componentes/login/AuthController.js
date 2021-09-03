import { Component } from 'react';

const firebase = require("firebase/app");
require("firebase/auth");


class AuthController extends Component {


  handleAuthGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().languageCode = 'es_ES';
    firebase.auth().signInWithPopup(provider)
      .then(result =>
        console.log(`${result.user.email} ha iniciado sesion`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleAuthFace() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().languageCode = 'es_ES';
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesion`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout() {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha cerrado sesion`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleSignUp() {

  }

  handleIniciar(correo, contrasena) {
    firebase.auth().languageCode = 'es_ES';
    firebase.auth().signInWithEmailAndPassword(correo, contrasena)
      .then(result =>
        console.log(`${result.user.email} ha iniciado sesion`))
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
          alert(errorMessage);
        } else {
          alert('Contrasena Incorrecta o Usuario inexistente');
        }
        console.log(error);
      });
  }

  // handleRecupero(correo) {
  //   firebase.auth().languageCode = 'es_ES';
  //   firebase.auth().sendPasswordResetEmail(correo)
  //     .then(result => console.log(`${correo} Se ha enviado el mail`))
  //     .then(function () {
  //       alert('Se ha enviado el mail a ' + correo + ', ingese para recuperar su contraseña')
  //     })
  //     .catch(function (error) {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       if (errorCode === 'auth/user-not-found') {
  //         alert(errorMessage);
  //       } else {
  //         alert('Correo electronico no encontrado');
  //       }
  //       console.log(error);
  //     });
  // }


}

export default new AuthController();
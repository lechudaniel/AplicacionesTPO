import {Component} from 'react';
import Constants from '../../Utils/Constants';
import GuestInfo from './../../Models/Guest/GuestInfo';

class GuestAPI extends Component {

    loginUser(email, password,handleLogin)
    {
      let url =  Constants.BASE_URL + '/loginUser';
        fetch(url,{
          method: 'POST', 
          headers:{ 'Content-Type': 'application/json'},
          body: JSON.stringify({'mail': email, 'password': password})
      })
       .then ((response) => {
            console.log("response",response);
            return response.json();
        })
        .then (responseData => {
                handleLogin(responseData);
        });
    }

    signUp(userName, email, password,handleSignUpOnClick) {
        let url =  Constants.BASE_URL + '/signUpGuest';
       let  body=JSON.stringify({ 'name':userName,'mail': email, 'password': password });
        console.log("request", body);
        fetch(url,{
          method: 'PUT', 
          headers:{ 'Content-Type': 'application/json'},
          body: body
      })
       .then ((response) => {
            console.log("response",response);
            return response.json();
        })
        .then (responseData => {
          handleSignUpOnClick(responseData);
        });
      }

    postGuestInfo(handlePostGuestInfo) {
      let url =  Constants.BASE_URL + '/api/v1.0/usuarios';
      let guestData = GuestInfo.getInstance().toJson();
        fetch(url,{
          method: 'PUT', 
          headers:{ 'Content-Type': 'application/json'},
          body: JSON.stringify( guestData )
      })
       .then ((response) => {
            console.log("response",response);
            return response.json();
        })
        .then (responseData => {
          handlePostGuestInfo(responseData);
        });
    }

    getGuestInfo(email, handleGetGuestInfo)
    {
        let url =  Constants.BASE_URL + '/api/v1.0/usuarios?email=' + email;
        fetch(url,{
          method: 'GET', 
          headers:{ 'Content-Type': 'application/json'}
      })
        .then ((response) => {
            console.log("response",response);
            if(response.headers.status !== 404) {
              return response.json();
            } else {
              return null;
            }
        })
        .then (responseData => {
          handleGetGuestInfo(responseData);
        });
    }
}

export default new GuestAPI();
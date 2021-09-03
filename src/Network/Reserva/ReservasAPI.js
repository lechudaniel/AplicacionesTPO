import {Component} from 'react';
import Constants from '../../Utils/Constants';
//import GuestInfo from './../../Models/Guest/GuestInfo';

class ReservasAPI extends Component {

    postBooking(booking,handleBookHotel) {
      let url =  Constants.BASE_URL + '/api/v1.0/reservas';
        fetch(url,{
          method: 'POST', 
          headers:{ 'Content-Type': 'application/json'},
          body: JSON.stringify( booking )
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
            handleBookHotel(responseData);
        });
    }

    getBookingInfo(bookingID, handleGetBooking)
    {
        let url =  Constants.BASE_URL + '/api/v1.0/reservas/' + bookingID;
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
            handleGetBooking(responseData);
        });
    }
}

export default new ReservasAPI();
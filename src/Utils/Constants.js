import {Component} from 'react';

class Constants extends Component {
    BASE_URL = 'https://uade-2020-seminario1-grupo9.herokuapp.com';
    SEND_EMAIL_VOUCHER_URL = 'https://us-central1-commudus.cloudfunctions.net/sendMailVocucher?';

    UserTypes = {
      guest : {id: 0, description: "Guest"}, 
      hotel : {id: 1, description: 'Hotel'}, 
    }    
}
export default new Constants();
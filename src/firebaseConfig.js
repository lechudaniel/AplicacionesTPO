//import firebase from 'firebase/app';
import 'firebase/auth';    
import 'firebase/storage';     // for storage
//import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
//import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions  

import * as firebase from 'firebase'


firebase.initializeApp({
    apiKey: "AIzaSyA40ecBGdRCUOvWFrtWCKM-KX8qyPSe42w",
    authDomain: "commudus.firebaseapp.com",
    databaseURL: "https://commudus.firebaseio.com",
    projectId: "commudus",
    storageBucket: "commudus.appspot.com",
    messagingSenderId: "947487858331",
    appId: "1:947487858331:web:c842d231096ebd32d7703e",
    measurementId: "G-345QVEQHYD"
});

firebase.analytics();

export default firebase;

 import firebase from 'firebase';
 
 var firebaseConfig = {
    apiKey: "AIzaSyC0ClqiyTgWKmbsBVEBcE_wRSPfgQKv29Q",
    authDomain: "multiplex-booking.firebaseapp.com",
    projectId: "multiplex-booking",
    storageBucket: "multiplex-booking.appspot.com",
    messagingSenderId: "725781854246",
    appId: "1:725781854246:web:6392dfc65a57c7449a0ee7",
    measurementId: "G-DM3V196Q4H"
  };
  // Initialize Firebase
   var fire = firebase.initializeApp(firebaseConfig);

   export default fire;
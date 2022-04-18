 import firebase from 'firebase';
 
 var firebaseConfig = {
  apiKey: "AIzaSyBaFBId6GKvIkh7NJuX7oIu57XzPv9Lj4s",
  authDomain: "multiplex-ticket-booking.firebaseapp.com",
  projectId: "multiplex-ticket-booking",
  storageBucket: "multiplex-ticket-booking.appspot.com",
  messagingSenderId: "353021408587",
  appId: "1:353021408587:web:1ec5d63e43d9598c2de4ce",
  measurementId: "G-D400BLJC14"
  };
  // Initialize Firebase
   var fire = firebase.initializeApp(firebaseConfig);

   export default fire;
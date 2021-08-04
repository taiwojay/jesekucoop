import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA6rOiXMLrHLHhpCaZS4FCIjAuWDXMlth4",
    authDomain: "jeseku-coop.firebaseapp.com",
    projectId: "jeseku-coop",
    storageBucket: "jeseku-coop.appspot.com",
    messagingSenderId: "257894663269",
    appId: "1:257894663269:web:4403fd733b55ad0d7c728c",
    measurementId: "G-TRJH63GLN8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase
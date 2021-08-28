import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDpAhPpl2JG4mNRC-7fU3TZVaVJJR32s0w",
    authDomain: "jeseku-422cd.firebaseapp.com",
    projectId: "jeseku-422cd",
    storageBucket: "jeseku-422cd.appspot.com",
    messagingSenderId: "963125035061",
    appId: "1:963125035061:web:899d9eaecd42c9ab29317c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase
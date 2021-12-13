import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB63AFlNJPc-smUMF2igC1-3O5pL9CUKtU",
    authDomain: "games-play-c798c.firebaseapp.com",
    projectId: "games-play-c798c",
    storageBucket: "games-play-c798c.appspot.com",
    messagingSenderId: "117755034408",
    appId: "1:117755034408:web:5fd219eafd45932e45ae1d"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;
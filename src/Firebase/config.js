import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBufyxvl4h3DmM3jEwp-PDT1PUbZ7VahV8",
    authDomain: "olxapp-3f40b.firebaseapp.com",
    projectId: "olxapp-3f40b",
    storageBucket: "olxapp-3f40b.appspot.com",
    messagingSenderId: "397595919665",
    appId: "1:397595919665:web:f8db5027762a03ac199c10",
    measurementId: "G-J0ELX5SMSG"
  };

  export default firebase.initializeApp(firebaseConfig)

  
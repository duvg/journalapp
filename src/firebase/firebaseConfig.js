import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCbuzSmbNw-xLJ0T58WR0oyvzBve2_U27s",
    authDomain: "journal-app-ffef8.firebaseapp.com",
    projectId: "journal-app-ffef8",
    storageBucket: "journal-app-ffef8.appspot.com",
    messagingSenderId: "1060551832325",
    appId: "1:1060551832325:web:20ae07ba7fc0bc3eba7d6c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
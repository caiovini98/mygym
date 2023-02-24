import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyA3TXuicDpiTNKNAVeDdanuo2osKgHOVrg',
  authDomain: 'mygym-20318.firebaseapp.com',
  projectId: 'mygym-20318',
  storageBucket: 'mygym-20318.appspot.com',
  messagingSenderId: '364767007357',
  appId: '1:364767007357:web:dd3fbe6837aad52f2f1714',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

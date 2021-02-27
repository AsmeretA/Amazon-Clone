// For Firebase JS SDK v7.20.0 and later, measurementId is optional

 import firebase from 'firebase';
// const firebaseConfig = {
//   apiKey: 'AIzaSyDHxsv13wKmUbgxlloPB0RgvqeI1PqxjlA',
//   authDomain: 'aug-bc35b.firebaseapp.com',
//   projectId: 'aug-bc35b',
//   storageBucket: 'aug-bc35b.appspot.com',
//   messagingSenderId: '616154326769',
//   appId: '1:616154326769:web:3c81c98e82419c3236eb50',
//   measurementId: 'G-TGYL74DGL3',
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// export { db, auth };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY7dxcTXR3TNaIHyywUTtqjT6uzjIZnR4",
  authDomain: "e-clone-asmi.firebaseapp.com",
  projectId: "e-clone-asmi",
  storageBucket: "e-clone-asmi.appspot.com",
  messagingSenderId: "31152513352",
  appId: "1:31152513352:web:d15f8da3f24221c0c1537d",
  measurementId: "G-5KWNQMZCKW"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
export { db, auth };
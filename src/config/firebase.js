// import firebase from "firebase/compat/app";
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getAuth } from 'firebase/auth'

// // Follow this pattern to import other Firebase services
// // import { } from 'firebase/<service>';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyB2z5JVzPW1twthbHHsGBJ5AMCOqb_AODc",
//     authDomain: "school-system-3e3cb.firebaseapp.com",
//     projectId: "school-system-3e3cb",
//     storageBucket: "school-system-3e3cb.appspot.com",
//     messagingSenderId: "835409098108",
//     appId: "1:835409098108:web:10b47eb12462370d2de0f9"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// // const auth = getAuth(app);
// const auth = firebase.auth();


// export { app, db, auth }


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { collection, getDocs } from 'firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyD-iIVQ9i6TKFsPOAhziuhzJ41wGnF7yPA",
  authDomain: "seniordatagraph.firebaseapp.com",
  projectId: "seniordatagraph",
  storageBucket: "seniordatagraph.appspot.com",
  messagingSenderId: "954751699967",
  appId: "1:954751699967:web:18feba57095cfdbb0635ca"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

// sudo npm install -g firebase-tools




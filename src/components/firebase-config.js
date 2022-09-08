import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore}  from "firebase/firestore";
import { getStorage } from "firebase/storage";


//require("firebase/auth")
require("firebase/firestore")
require('firebase/storage')


const firebaseConfig = {

    apiKey: "AIzaSyD9qMRFjFb1kYz3iA4atrfiTETicXkDFIs",

    authDomain: "generateur-cv-df081.firebaseapp.com",
  
    projectId: "generateur-cv-df081",
  
    storageBucket: "generateur-cv-df081.appspot.com",
  
    messagingSenderId: "313026097515",
  
    appId: "1:313026097515:web:6018b9155e938cf9ae5c2e",
  
    measurementId: "G-M979MQW5TY"
  };

  const app = initializeApp(firebaseConfig);
  
  
  export const auth = getAuth(app) ; 


  
  export const db = getFirestore(app); 

  export const storage = getStorage(app);

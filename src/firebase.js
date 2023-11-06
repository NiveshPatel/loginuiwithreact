
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAJB8BtETLd6TlSgWIfuf_gHGVcT8awfw8",
  authDomain: "commercial787-db315.firebaseapp.com",
  projectId: "commercial787-db315",
  storageBucket: "commercial787-db315.appspot.com",
  messagingSenderId: "880870537395",
  appId: "1:880870537395:web:5c83e9b0acda85c24a98c6",
  measurementId: "G-4H17WZ03YY"
};
// added firebase again 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider()
export {app,auth,provider}
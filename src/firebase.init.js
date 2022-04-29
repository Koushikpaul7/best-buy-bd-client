// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUP6BHYJNJ27-viWBUExTBZ3m8WRPb2fE",
  authDomain: "best-buy-bd.firebaseapp.com",
  projectId: "best-buy-bd",
  storageBucket: "best-buy-bd.appspot.com",
  messagingSenderId: "597504377853",
  appId: "1:597504377853:web:b95571e44128b11ae38f94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth;
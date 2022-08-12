import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAh4fdb954ZB9DyHQKK9wzv5F726sSPlu0",
    authDomain: "music-app-fd177.firebaseapp.com",
    projectId: "music-app-fd177",
    storageBucket: "music-app-fd177.appspot.com",
    messagingSenderId: "615459071894",
    appId: "1:615459071894:web:021db78c862116fa4a5fb7",
    measurementId: "G-N0E3JQD96K"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
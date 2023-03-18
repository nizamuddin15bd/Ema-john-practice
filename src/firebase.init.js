// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXlq8GfbURjfbDoLwiICpHMamzyISPtX0",
    authDomain: "ema-john-simple-635c6.firebaseapp.com",
    projectId: "ema-john-simple-635c6",
    storageBucket: "ema-john-simple-635c6.appspot.com",
    messagingSenderId: "285698351682",
    appId: "1:285698351682:web:b61a27079014aa4a1243db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
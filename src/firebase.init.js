// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBrJMu4HtP32V0IU29GcKurmERklMH-jyo",
    authDomain: "bike-station-portal.firebaseapp.com",
    projectId: "bike-station-portal",
    storageBucket: "bike-station-portal.appspot.com",
    messagingSenderId: "766719674537",
    appId: "1:766719674537:web:52a8e68e104ca590b9c1b8",
    measurementId: "G-JLBP2WJ14B"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
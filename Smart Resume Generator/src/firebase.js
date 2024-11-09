// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "resumegen-ced3a.firebaseapp.com",
    projectId: "resumegen-ced3a",
    storageBucket: "resumegen-ced3a.firebasestorage.app",
    messagingSenderId: "815034375767",
    appId: "1:815034375767:web:38dd0ef008ff9f6a39cd12",
    measurementId: "G-DCJEWQ54GF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);``
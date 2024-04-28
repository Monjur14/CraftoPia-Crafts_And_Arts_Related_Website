// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7-oOHXetrnBuCKWsVD2HZznvP09nxNGg",
  authDomain: "assignment10-a.firebaseapp.com",
  projectId: "assignment10-a",
  storageBucket: "assignment10-a.appspot.com",
  messagingSenderId: "952375784594",
  appId: "1:952375784594:web:6b9efff5d37999cff3224b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
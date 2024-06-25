// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdrCqPE-8BhPiKbBcXkpo6z7gpIfiwDAI",
  authDomain: "craftopia-m.firebaseapp.com",
  projectId: "craftopia-m",
  storageBucket: "craftopia-m.appspot.com",
  messagingSenderId: "90480518395",
  appId: "1:90480518395:web:d42229d6af2c8eab8ffc5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
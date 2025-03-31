// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTOkUKqkWhg0STr_oyDGVx78Nq2bId7eo",
  authDomain: "login-c95c6.firebaseapp.com",
  projectId: "login-c95c6",
  storageBucket: "login-c95c6.firebasestorage.app",
  messagingSenderId: "572854644878",
  appId: "1:572854644878:web:25ff6b013888db1f6119df"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase
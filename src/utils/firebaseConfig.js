// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwdS5qHaxzBYVQdNRRS6zev8NeB9TfCeo",
  authDomain: "quizyworld-efeb0.firebaseapp.com",
  projectId: "quizyworld-efeb0",
  storageBucket: "quizyworld-efeb0.appspot.com",
  messagingSenderId: "692390793863",
  appId: "1:692390793863:web:aa84bfd8001420bbd65e22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbyWhV--UFJIeYIPph8f_Q1HQd1yWg5_g",
  authDomain: "realtor-clone-react-8539e.firebaseapp.com",
  projectId: "realtor-clone-react-8539e",
  storageBucket: "realtor-clone-react-8539e.appspot.com",
  messagingSenderId: "898932325636",
  appId: "1:898932325636:web:e4036031a4b10fea82e451"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
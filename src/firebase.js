// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ4_aLwFcGeX8-1DoAkw_DCdHYnA7M4q4",
  authDomain: "chatting-app-9ba60.firebaseapp.com",
  projectId: "chatting-app-9ba60",
  storageBucket: "chatting-app-9ba60.appspot.com",
  messagingSenderId: "1031706043900",
  appId: "1:1031706043900:web:616c545965991c40fafe79",
  databaseURL : "https://chatting-app-9ba60-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
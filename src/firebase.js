// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqMK3PjKDBUCre9hTXEGXQ-GuNds87vdQ",
  authDomain: "auth-yt-f8de6.firebaseapp.com",
  projectId: "auth-yt-f8de6",
  storageBucket: "auth-yt-f8de6.appspot.com",
  messagingSenderId: "547149297435",
  appId: "1:547149297435:web:9c6f03e80e684ad78e45be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

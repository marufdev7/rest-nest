// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvZ8dBUVR05tpCn86zWYbyGIfqtGfzWWI",
  authDomain: "rest-nest.firebaseapp.com",
  projectId: "rest-nest",
  storageBucket: "rest-nest.appspot.com",
  messagingSenderId: "832395196902",
  appId: "1:832395196902:web:baa6b986822f1f64cdfe27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
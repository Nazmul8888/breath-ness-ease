// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkezoUNC1YZKjm-fDc2Qqkg7mZ8um26Yo",
  authDomain: "breath-ness-ease.firebaseapp.com",
  projectId: "breath-ness-ease",
  storageBucket: "breath-ness-ease.appspot.com",
  messagingSenderId: "412089873515",
  appId: "1:412089873515:web:f0721346f0c025a3bd6d2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxB9nItW53gW6JLGEjxiTDXVe2nOls18I",
  authDomain: "slab-68fe0.firebaseapp.com",
  projectId: "slab-68fe0",
  storageBucket: "slab-68fe0.appspot.com",
  messagingSenderId: "547807311017",
  appId: "1:547807311017:web:6e57c77ef5ab47a37325b8",
  measurementId: "G-3JZHJV9F3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
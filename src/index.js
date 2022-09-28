import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


// FIREBASE --------------------------------
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDUBzGVo2-JfuMGOEpcvJQj-mq5SfMYmOg",
  authDomain: "ecommerce-ebb96.firebaseapp.com",
  projectId: "ecommerce-ebb96",
  storageBucket: "ecommerce-ebb96.appspot.com",
  messagingSenderId: "847203767967",
  appId: "1:847203767967:web:139e93e9b721bd6895f4aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

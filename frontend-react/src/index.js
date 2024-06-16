import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDy8ypLJjslIPUQECt6ILtE7YKTK6lBYPg",
  authDomain: "kent-app-9a936.firebaseapp.com",
  projectId: "kent-app-9a936",
  storageBucket: "kent-app-9a936.appspot.com",
  messagingSenderId: "908810828292",
  appId: "1:908810828292:web:da6ef622a8be2239c79351",
  measurementId: "G-GCNZ9M75QE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

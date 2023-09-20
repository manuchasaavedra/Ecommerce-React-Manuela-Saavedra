import React from 'react';
import ReactDOM from 'react-dom/client';
import {initializeApp} from 'firebase/app';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";


const firebaseConfig = {
  apiKey: "AIzaSyAVZivoFF2_1MeZGY75X5anwFzlBBTSqj4",
  authDomain: "ecommerce-indolfo-almacen.firebaseapp.com",
  projectId: "ecommerce-indolfo-almacen",
  storageBucket: "ecommerce-indolfo-almacen.appspot.com",
  messagingSenderId: "565482624878",
  appId: "1:565482624878:web:5b8ac2d289439f4202937f",
  measurementId: "G-0S69RVXTH6"
};

initializeApp (firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

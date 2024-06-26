import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Stars from './Stars'
import reportWebVitals from './reportWebVitals';

const root1 = ReactDOM.createRoot(document.getElementById('header'));
root1.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root2 = ReactDOM.createRoot(document.getElementById('dynStars'));
root2.render(
  <React.StrictMode>
    <Stars />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './Navigation';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewStore from './components/ViewStore';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/viewstore" element={<ViewStore />}/>
        
      </Routes>
    
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

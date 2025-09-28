import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 

// 1. IMPORT YOUR NEW COMPONENT (App.jsx is what we wrote)
import App from './App'; 

// If you have a separate component for the main structure, import it instead of App, 
// but since we named the component 'App' in the last step, let's use that.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 2. RENDER THE CORRECT COMPONENT HERE */}
    <App /> 
  </React.StrictMode>
);

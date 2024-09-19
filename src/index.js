// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure this is present if you have global styles
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Render the App component wrapped in Router into the root element
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

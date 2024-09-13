// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login'; // Create this file for the login page
import FileStorage from './pages/FileStorage'; // Create this file for the file storage page

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/file-storage" element={<FileStorage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


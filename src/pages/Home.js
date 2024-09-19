// src/pages/Home.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <main className="container my-4">
      <div className="text-center mb-4">
        <h2>Welcome to Project Cache</h2>
        <p className="lead">Your cloud-based collaboration platform.</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3>Features</h3>
          <ul>
            <li>Secure File Storage</li>
            <li>Real-time Collaboration</li>
            <li>Easy File Sharing</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h3>Get Started</h3>
          <p>Sign up or log in to start using Project Cache. Manage your files and collaborate with your team efficiently.</p>
        </div>
      </div>
    </main>
  );
};

export default Home;

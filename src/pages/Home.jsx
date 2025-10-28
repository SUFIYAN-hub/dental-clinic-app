import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/styles/Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>🦷 Welcome to DentalCare Clinic</h1>
        <p>Your smile is our priority. Get the best dental care with experienced professionals.</p>
        <Link to="/appointment">
          <button className="hero-btn">Book Appointment</button>
        </Link>
      </section>

      <section className="features">
        <div className="feature-card">
          <h2>😊</h2>
          <h3>Expert Dentists</h3>
          <p>Highly qualified professionals with years of experience</p>
        </div>
        <div className="feature-card">
          <h2>⚡</h2>
          <h3>Modern Equipment</h3>
          <p>Latest technology for painless treatment</p>
        </div>
        <div className="feature-card">
          <h2>💰</h2>
          <h3>Affordable Pricing</h3>
          <p>Quality dental care at reasonable prices</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
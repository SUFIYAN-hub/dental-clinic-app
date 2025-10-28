import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/styles/Pricing.css';

function Pricing() {
  return (
    <div className="pricing">
      <h1>Affordable Pricing Plans</h1>
      <p style={{textAlign: 'center', color: '#666', fontSize: '1.1rem'}}>
        Choose the plan that suits your dental care needs
      </p>

      <div className="pricing-cards">
        <div className="pricing-card">
          <h2>Basic Care</h2>
          <div className="price">$99 <span>/ visit</span></div>
          <ul className="features-list">
            <li>Dental Examination</li>
            <li>Teeth Cleaning</li>
            <li>X-Ray (if needed)</li>
            <li>Consultation</li>
            <li>Basic Treatment Plan</li>
          </ul>
          <Link to="/appointment">
            <button className="pricing-btn">Book Now</button>
          </Link>
        </div>

        <div className="pricing-card featured">
          <h2>Premium Care</h2>
          <div className="price">$299 <span>/ month</span></div>
          <ul className="features-list">
            <li>All Basic Care Features</li>
            <li>Teeth Whitening (1 session)</li>
            <li>Priority Appointments</li>
            <li>2 Cleanings per month</li>
            <li>20% off on treatments</li>
            <li>24/7 Emergency Support</li>
          </ul>
          <Link to="/appointment">
            <button className="pricing-btn">Most Popular</button>
          </Link>
        </div>

        <div className="pricing-card">
          <h2>Family Plan</h2>
          <div className="price">$499 <span>/ month</span></div>
          <ul className="features-list">
            <li>Up to 4 Family Members</li>
            <li>All Premium Features</li>
            <li>Orthodontic Consultation</li>
            <li>Kids Dental Care</li>
            <li>30% off on all treatments</li>
            <li>Free Annual Check-ups</li>
          </ul>
          <Link to="/appointment">
            <button className="pricing-btn">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
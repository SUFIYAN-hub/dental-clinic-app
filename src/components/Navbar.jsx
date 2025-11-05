import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/styles/Navbar.css'

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/team">Team</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/testimonials">Testimonials</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/services">Services</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/appointment">Appointment</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
import React from 'react';
import '../../src/styles/About.css';

function About() {
  return (
    <div className="about">
      <h1>About DentalCare Clinic</h1>
      
      <div className="about-content">
        <div className="about-section">
          <h2>🏥 Our Clinic</h2>
          <p>
            DentalCare Clinic has been serving the community for over 15 years. 
            We provide comprehensive dental care with state-of-the-art technology 
            and a patient-centered approach. Our modern facility ensures comfort 
            and safety for all our patients.
          </p>
        </div>

        <div className="about-section">
          <h2>🎯 Our Mission</h2>
          <p>
            To provide exceptional dental care that improves the oral health 
            and overall well-being of our patients. We are committed to creating 
            beautiful, healthy smiles through personalized treatment plans and 
            compassionate care.
          </p>
        </div>

        <div className="about-section">
          <h2>⭐ Why Choose Us</h2>
          <p>
            Experienced team of dentists, latest dental technology, flexible 
            appointment scheduling, affordable pricing plans, emergency dental 
            services, and a comfortable, anxiety-free environment for all patients.
          </p>
        </div>
      </div>

      <h2 style={{textAlign: 'center', marginTop: '4rem', color: '#667eea'}}>
        Meet Our Expert Dentists
      </h2>
      
      <div className="doctors">
        <div className="doctor-card">
          <div style={{fontSize: '4rem'}}>👨‍⚕️</div>
          <h3>Dr. John Smith</h3>
          <p>Chief Dentist</p>
          <p>15+ years experience</p>
        </div>

        <div className="doctor-card">
          <div style={{fontSize: '4rem'}}>👩‍⚕️</div>
          <h3>Dr. Sarah Johnson</h3>
          <p>Orthodontist</p>
          <p>10+ years experience</p>
        </div>

        <div className="doctor-card">
          <div style={{fontSize: '4rem'}}>👨‍⚕️</div>
          <h3>Dr. Michael Brown</h3>
          <p>Pediatric Dentist</p>
          <p>12+ years experience</p>
        </div>
      </div>
    </div>
  );
}

export default About;
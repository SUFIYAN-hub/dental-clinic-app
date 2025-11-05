import React from 'react';
import '../../src/styles/Team.css';
import { doctorsData } from '../data/doctors';
import { Link } from 'react-router-dom';

function Team() {
  return (
    <div className="team-page">
      <div className="team-header">
        <h1>Our Expert Dental Team</h1>
        <p>Meet the professionals who make your smile shine</p>
      </div>

      <div className="team-container">
        {doctorsData.map((doctor) => (
          <div key={doctor.id} className="team-member">
            <div className="member-image-container">
              <img src={doctor.image} alt={doctor.name} className="member-image" />
              <div className="member-overlay">
                <Link to="/appointment">
                  <button className="quick-book-btn">Book Appointment</button>
                </Link>
              </div>
            </div>
            
            <div className="member-content">
              <h2>{doctor.name}</h2>
              <p className="member-specialty">{doctor.specialty}</p>
              
              <div className="member-info-grid">
                <div className="info-item">
                  <span className="info-icon">⭐</span>
                  <div>
                    <strong>Experience</strong>
                    <p>{doctor.experience}</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <span className="info-icon">🎓</span>
                  <div>
                    <strong>Education</strong>
                    <p>{doctor.education}</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <span className="info-icon">📅</span>
                  <div>
                    <strong>Availability</strong>
                    <p>{doctor.availability}</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div>
                    <strong>Contact</strong>
                    <p>{doctor.phone}</p>
                  </div>
                </div>
              </div>
              
              <p className="member-description">{doctor.description}</p>
              
              <div className="member-specializations">
                <h4>Specializations:</h4>
                <div className="spec-tags">
                  {doctor.id === 1 && (
                    <>
                      <span>Dental Implants</span>
                      <span>Cosmetic Dentistry</span>
                      <span>Full Mouth Restoration</span>
                    </>
                  )}
                  {doctor.id === 2 && (
                    <>
                      <span>Braces</span>
                      <span>Clear Aligners</span>
                      <span>Jaw Alignment</span>
                    </>
                  )}
                  {doctor.id === 3 && (
                    <>
                      <span>Child Dentistry</span>
                      <span>Preventive Care</span>
                      <span>Sedation Dentistry</span>
                    </>
                  )}
                  {doctor.id === 4 && (
                    <>
                      <span>Teeth Whitening</span>
                      <span>Veneers</span>
                      <span>Smile Makeover</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="team-cta">
        <h2>Ready to Meet Our Team?</h2>
        <p>Schedule your appointment today and experience world-class dental care</p>
        <Link to="/appointment">
          <button className="cta-button">Book Your Appointment</button>
        </Link>
      </div>
    </div>
  );
}

export default Team;
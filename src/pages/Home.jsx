// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../../src/styles/Home.css';

// function Home() {
//   return (
//     <div className="home">
//       <section className="hero">
//         <h1>🦷 Welcome to DentalCare Clinic</h1>
//         <p>Your smile is our priority. Get the best dental care with experienced professionals.</p>
//         <Link to="/appointment">
//           <button className="hero-btn">Book Appointment</button>
//         </Link>
//       </section>

//       <section className="features">
//         <div className="feature-card">
//           <h2>😊</h2>
//           <h3>Expert Dentists</h3>
//           <p>Highly qualified professionals with years of experience</p>
//         </div>
//         <div className="feature-card">
//           <h2>⚡</h2>
//           <h3>Modern Equipment</h3>
//           <p>Latest technology for painless treatment</p>
//         </div>
//         <div className="feature-card">
//           <h2>💰</h2>
//           <h3>Affordable Pricing</h3>
//           <p>Quality dental care at reasonable prices</p>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/styles/Home.css';
import { doctorsData } from '../data/doctors';


function Home() {
  const testimonials = [
    {
      text: "Best dental experience ever! Dr. Smith transformed my smile completely.",
      author: "Jessica Williams",
      role: "Patient since 2022"
    },
    {
      text: "Professional staff and pain-free treatment. Highly recommended!",
      author: "Michael Chen",
      role: "Patient since 2021"
    },
    {
      text: "My kids love coming here! Dr. Brown makes them feel comfortable.",
      author: "Sarah Anderson",
      role: "Parent"
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>🦷 Welcome to DentalCare Clinic</h1>
          <p>Your smile is our priority. Get the best dental care with experienced professionals using state-of-the-art technology.</p>
          <Link to="/appointment">
            <button className="hero-btn">Book Appointment Now</button>
          </Link>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-box">
            <div className="stat-number">15,000+</div>
            <div className="stat-label">Happy Patients</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">98%</div>
            <div className="stat-label">Success Rate</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Emergency Care</div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="doctors-section">
        <h2 className="section-title">Meet Our Expert Dentists</h2>
        <p className="section-subtitle">Experienced professionals dedicated to your dental health</p>
        
        <div className="doctors-grid">
          {doctorsData.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <img src={doctor.image} alt={doctor.name} className="doctor-image" />
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p className="doctor-specialty">{doctor.specialty}</p>
                <p className="doctor-experience">⭐ {doctor.experience}</p>
                <p className="doctor-description">{doctor.description}</p>
                
                <div className="doctor-details">
                  <div className="doctor-detail-item">
                    <strong>🎓</strong> {doctor.education}
                  </div>
                  <div className="doctor-detail-item">
                    <strong>📅</strong> {doctor.availability}
                  </div>
                  <div className="doctor-detail-item">
                    <strong>📞</strong> {doctor.phone}
                  </div>
                </div>
                
                <Link to="/appointment">
                  <button className="book-doctor-btn">Book with {doctor.name.split(' ')[1]}</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="testimonials-preview">
        <div className="testimonials-container">
          <h2 className="section-title" style={{color: 'white'}}>What Our Patients Say</h2>
          <p className="section-subtitle" style={{color: 'rgba(255,255,255,0.9)'}}>
            Real experiences from real people
          </p>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">{testimonial.author}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h2>😊</h2>
          <h3>Expert Dentists</h3>
          <p>Highly qualified professionals with years of experience and advanced training</p>
        </div>
        <div className="feature-card">
          <h2>⚡</h2>
          <h3>Modern Equipment</h3>
          <p>Latest technology for painless and efficient dental treatment</p>
        </div>
        <div className="feature-card">
          <h2>💰</h2>
          <h3>Affordable Pricing</h3>
          <p>Quality dental care at reasonable prices with flexible payment plans</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
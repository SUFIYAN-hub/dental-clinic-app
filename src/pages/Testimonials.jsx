import React, { useState } from 'react';
import '../../src/styles/Testimonials.css';
import { Link } from 'react-router-dom';

function Testimonials() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    treatment: '',
    review: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Jessica Williams",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      treatment: "Dental Implants",
      rating: 5,
      date: "2 weeks ago",
      review: "Best dental experience ever! Dr. Smith transformed my smile completely. The staff was incredibly professional and made me feel comfortable throughout the entire process. Highly recommend!"
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      treatment: "Teeth Whitening",
      rating: 5,
      date: "1 month ago",
      review: "Professional staff and pain-free treatment. My teeth are now 3 shades whiter! The results exceeded my expectations. Thank you DentalCare team!"
    },
    {
      id: 3,
      name: "Sarah Anderson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      treatment: "Pediatric Dentistry",
      rating: 5,
      date: "3 weeks ago",
      review: "My kids love coming here! Dr. Brown is amazing with children. He makes them feel comfortable and even excited about dental visits. The waiting area has toys and games which is a huge plus!"
    },
    {
      id: 4,
      name: "Robert Johnson",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      treatment: "Root Canal",
      rating: 5,
      date: "1 week ago",
      review: "I was terrified of getting a root canal, but the team here made it completely painless. The modern equipment and caring staff made all the difference. Best dental clinic in town!"
    },
    {
      id: 5,
      name: "Emily Rodriguez",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      treatment: "Orthodontics",
      rating: 5,
      date: "2 months ago",
      review: "Dr. Johnson is the best orthodontist! My braces journey has been smooth and the results are incredible. The staff is always friendly and appointments are always on time."
    },
    {
      id: 6,
      name: "David Park",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
      treatment: "Teeth Cleaning",
      rating: 5,
      date: "5 days ago",
      review: "Regular cleanings here have improved my oral health significantly. The hygienists are thorough and gentle. Great service at affordable prices!"
    },
    {
      id: 7,
      name: "Lisa Thompson",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
      treatment: "Cosmetic Dentistry",
      rating: 5,
      date: "3 weeks ago",
      review: "Dr. Davis gave me the smile I always dreamed of! The veneers look so natural and the whole process was explained clearly. I couldn't be happier with the results!"
    },
    {
      id: 8,
      name: "James Wilson",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      treatment: "Emergency Care",
      rating: 5,
      date: "4 days ago",
      review: "Had a dental emergency late at night and they accommodated me immediately. Professional, caring, and efficient service. Thank you for being there when I needed you!"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.treatment && formData.review && rating > 0) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', treatment: '', review: '' });
        setRating(0);
        setSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="testimonials-page">
      <div className="testimonials-header">
        <h1>Patient Testimonials</h1>
        <p>Real stories from real patients who trust us with their smiles</p>
      </div>

      <div className="testimonials-stats">
        <div className="stat-card">
          <div className="stat-number">15,000+</div>
          <div className="stat-label">Happy Patients</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">4.9/5</div>
          <div className="stat-label">Average Rating</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">98%</div>
          <div className="stat-label">Satisfaction Rate</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">2,500+</div>
          <div className="stat-label">Five Star Reviews</div>
        </div>
      </div>

      <div className="testimonials-container">
        <h2 className="section-title">What Our Patients Say</h2>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header-content">
                <img src={testimonial.image} alt={testimonial.name} className="patient-image" />
                <div className="patient-info">
                  <h3>{testimonial.name}</h3>
                  <p className="treatment-type">{testimonial.treatment}</p>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.review}"</p>
              <p className="testimonial-date">{testimonial.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="review-form-section">
        <h2 className="section-title">Share Your Experience</h2>
        <p className="form-subtitle">Help others by sharing your dental care experience with us</p>
        
        {submitted && (
          <div className="success-message">
            ✓ Thank you for your review! We appreciate your feedback.
          </div>
        )}

        <form className="review-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Treatment Received *</label>
              <select
                name="treatment"
                value={formData.treatment}
                onChange={handleChange}
                required
              >
                <option value="">Select treatment</option>
                <option value="Teeth Cleaning">Teeth Cleaning</option>
                <option value="Teeth Whitening">Teeth Whitening</option>
                <option value="Dental Filling">Dental Filling</option>
                <option value="Root Canal">Root Canal</option>
                <option value="Dental Implants">Dental Implants</option>
                <option value="Orthodontics">Orthodontics</option>
                <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                <option value="Emergency Care">Emergency Care</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Rating *</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star-input ${star <= (hoverRating || rating) ? 'active' : ''}`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                >
                  ⭐
                </span>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Your Review *</label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleChange}
              placeholder="Tell us about your experience..."
              rows="5"
              required
            />
          </div>

          <button type="submit" className="submit-review-btn">
            Submit Review
          </button>
        </form>
      </div>

      <div className="testimonials-cta">
        <h2>Ready to Experience It Yourself?</h2>
        <p>Join thousands of satisfied patients and get the smile you deserve</p>
        <Link to="/appointment">
          <button className="book-cta-btn">Book Your Appointment</button>
        </Link>
      </div>
    </div>
  );
}

export default Testimonials;
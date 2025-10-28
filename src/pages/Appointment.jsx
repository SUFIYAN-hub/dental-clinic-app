import React, { useState } from 'react';
import '../../src/styles/Appointment.css';

function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) {
  tempErrors.name = 'Name is required';
} else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
  tempErrors.name = 'Name can only contain letters and spaces';
}

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = 'Phone must be 10 digits';
    }

    if (!formData.date) {
      tempErrors.date = 'Date is required';
    }

    if (!formData.time) {
      tempErrors.time = 'Time is required';
    }

    if (!formData.service) {
      tempErrors.service = 'Please select a service';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      setSubmitted(true);
      console.log('Form submitted:', formData);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          service: '',
          message: ''
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="appointment">
      <h1>Book an Appointment</h1>
      <p>Schedule your visit with our expert dentists</p>

      {submitted && (
        <div className="success-message">
          ✓ Appointment booked successfully! We'll contact you soon.
        </div>
      )}

      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="10 digit phone number"
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>

        <div className="form-group">
          <label>Preferred Date *</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <div className="error">{errors.date}</div>}
        </div>

        <div className="form-group">
          <label>Preferred Time *</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
          {errors.time && <div className="error">{errors.time}</div>}
        </div>

        <div className="form-group">
          <label>Select Service *</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Choose a service</option>
            <option value="cleaning">Teeth Cleaning</option>
            <option value="whitening">Teeth Whitening</option>
            <option value="filling">Dental Filling</option>
            <option value="crown">Crown & Bridge</option>
            <option value="root-canal">Root Canal</option>
            <option value="implant">Dental Implant</option>
            <option value="orthodontics">Orthodontics</option>
            <option value="emergency">Emergency Care</option>
          </select>
          {errors.service && <div className="error">{errors.service}</div>}
        </div>

        <div className="form-group">
          <label>Additional Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Any special requirements or concerns..."
          />
        </div>

        <button type="submit" className="submit-btn">
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default Appointment;
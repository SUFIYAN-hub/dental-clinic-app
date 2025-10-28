import React from 'react';
import '../../src/styles/Services.css';

function Services() {
  const services = [
    {
      icon: '🦷',
      title: 'Teeth Cleaning',
      description: 'Professional dental cleaning to remove plaque and tartar buildup.',
      price: 'Starting at $80'
    },
    {
      icon: '✨',
      title: 'Teeth Whitening',
      description: 'Brighten your smile with our advanced whitening treatments.',
      price: 'Starting at $300'
    },
    {
      icon: '🔧',
      title: 'Dental Fillings',
      description: 'Repair cavities with durable, tooth-colored filling materials.',
      price: 'Starting at $150'
    },
    {
      icon: '👑',
      title: 'Crowns & Bridges',
      description: 'Restore damaged teeth with custom-made crowns and bridges.',
      price: 'Starting at $800'
    },
    {
      icon: '🦴',
      title: 'Root Canal',
      description: 'Save infected teeth with painless root canal therapy.',
      price: 'Starting at $500'
    },
    {
      icon: '😁',
      title: 'Dental Implants',
      description: 'Permanent solution for missing teeth with natural-looking implants.',
      price: 'Starting at $2000'
    },
    {
      icon: '🎯',
      title: 'Orthodontics',
      description: 'Straighten teeth with braces or clear aligners.',
      price: 'Starting at $3000'
    },
    {
      icon: '🚑',
      title: 'Emergency Care',
      description: '24/7 emergency dental services for urgent situations.',
      price: 'Varies'
    }
  ];

  return (
    <div className="services">
      <h1>Our Dental Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-price">{service.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
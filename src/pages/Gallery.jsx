import React, { useState } from 'react';
import '../../src/styles/Gallery.css';

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800',
      category: 'clinic',
      title: 'Modern Reception Area',
      description: 'Comfortable waiting area for our patients'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800',
      category: 'clinic',
      title: 'Treatment Room',
      description: 'State-of-the-art dental equipment'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800',
      category: 'treatment',
      title: 'Dental Checkup',
      description: 'Professional dental examination'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800',
      category: 'treatment',
      title: 'Teeth Cleaning',
      description: 'Professional cleaning service'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800',
      category: 'equipment',
      title: 'Advanced Technology',
      description: 'Latest dental technology'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1629909615957-be38f5a17f77?w=800',
      category: 'equipment',
      title: 'Digital X-Ray',
      description: 'Modern diagnostic equipment'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800',
      category: 'team',
      title: 'Our Dental Team',
      description: 'Experienced professionals at work'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800',
      category: 'team',
      title: 'Caring Staff',
      description: 'Dedicated to patient care'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1622253694242-abeb37a33e97?w=800',
      category: 'patients',
      title: 'Happy Patients',
      description: 'Satisfied with our service'
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1606811951828-7a5a58e0e2d7?w=800',
      category: 'patients',
      title: 'Smile Transformation',
      description: 'Beautiful results'
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1629909615184-74f5ba33b2f3?w=800',
      category: 'clinic',
      title: 'Consultation Room',
      description: 'Private consultation space'
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800',
      category: 'treatment',
      title: 'Cosmetic Dentistry',
      description: 'Expert cosmetic procedures'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', icon: '🏥' },
    { id: 'clinic', name: 'Clinic', icon: '🏢' },
    { id: 'treatment', name: 'Treatments', icon: '🦷' },
    { id: 'equipment', name: 'Equipment', icon: '⚕️' },
    { id: 'team', name: 'Our Team', icon: '👨‍⚕️' },
    { id: 'patients', name: 'Happy Patients', icon: '😊' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Our Gallery</h1>
        <p>Take a virtual tour of our state-of-the-art dental clinic</p>
      </div>

      <div className="gallery-container">
        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="filter-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map(image => (
            <div key={image.id} className="gallery-item">
              <img src={image.url} alt={image.title} />
              <div className="gallery-item-overlay">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-cta">
        <h2>Impressed by What You See?</h2>
        <p>Experience our world-class facilities in person</p>
        <a href="/appointment">
          <button className="visit-btn">Schedule Your Visit</button>
        </a>
      </div>
    </div>
  );
}

export default Gallery;
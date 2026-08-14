import React from 'react';
import modernGlassFacade from '../assets/modern_glass_facade.png';
import luxuryDoors from '../assets/luxury_doors.png';
import sleekWindows from '../assets/sleek_windows.png';

export default function Gallery() {
  const images = [
    { src: modernGlassFacade, alt: 'Modern Glass Facade', title: 'Premium Glass Facade' },
    { src: luxuryDoors, alt: 'Luxury Sliding Doors', title: 'Interior Luxury Doors' },
    { src: sleekWindows, alt: 'Sleek Commercial Windows', title: 'Sleek Office Windows' },
  ];

  return (
    <div className="page-transition" style={{ minHeight: '80vh', padding: '6rem 1rem' }}>
      <section className="container animate-fade-in" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Our Gallery</h2>
        <p style={{ marginBottom: '4rem', fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>
          Explore our premium architectural designs and cutting-edge aluminum installations.
        </p>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-item animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="gallery-img-wrapper">
                <img src={img.src} alt={img.alt} className="gallery-img" />
              </div>
              <div className="gallery-overlay">
                <h3>{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

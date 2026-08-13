import React, { useEffect, useRef } from 'react';

export default function Services() {
  const services = [
    {
      title: 'Architectural Glazing',
      desc: 'State-of-the-art structural glazing systems designed for aesthetics, performance, and durability.',
      icon: '🏢'
    },
    {
      title: 'Aluminium Facades',
      desc: 'Custom curtain walling and facade engineering that brings visionary architecture to life.',
      icon: '🏗️'
    },
    {
      title: 'Premium Windows & Doors',
      desc: 'High-grade aluminium profiles offering superior thermal efficiency and sleek sightlines.',
      icon: '🚪'
    }
  ];

  const observerRef = useRef(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.service-card-reveal');
    cards.forEach(card => observerRef.current.observe(card));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <div className="page-transition">
      <section className="services container animate-fade-in" style={{ padding: '6rem 1rem' }}>
        <div className="services-header">
          <h2 style={{ fontSize: '3rem' }}>Our Expertise</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>Delivering excellence in metal fabrication for over two decades.</p>
        </div>
        <div className="services-grid" style={{ marginTop: '4rem' }}>
          {services.map((srv, idx) => (
            <div key={idx} className="service-card service-card-reveal" style={{ transitionDelay: `${idx * 0.15}s` }}>
              <div className="service-icon">{srv.icon}</div>
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

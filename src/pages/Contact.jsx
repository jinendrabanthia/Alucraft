import React from 'react';

export default function Contact() {
  return (
    <div className="page-transition" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <section className="container animate-fade-in" style={{ textAlign: 'center', padding: '6rem 1rem' }}>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Ready to Build?</h2>
        <p style={{ marginBottom: '3rem', fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>
          Contact our engineering team to discuss your next project. We are ready to help you bring your vision to life.
        </p>
        <a href="mailto:contact@alucraft.example.com" className="btn" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
          Send us an Email
        </a>
      </section>
    </div>
  );
}

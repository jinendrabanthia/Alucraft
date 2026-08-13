import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-transition">
      <header className="hero">
        <div className="container animate-fade-in">
          <h1>Precision Aluminium Engineering</h1>
          <p>
            We design, manufacture, and install high-quality architectural glazing, 
            facades, and aluminium profiles for modern commercial and residential spaces.
          </p>
          <Link to="/contact" className="btn">Get a Quote</Link>
        </div>
      </header>
    </div>
  );
}

import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './index.css';
import './App.css';

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);
  const lastY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      if (y > lastY.current && y > 100) setHidden(true);
      else setHidden(false);
      setCompact(y > 60);
      lastY.current = y;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar animate-fade-in ${hidden ? 'nav-hidden' : ''} ${compact ? 'nav-compact' : ''}`}>
      <Link to="/" className="nav-brand" style={{ textDecoration: 'none' }}>ALUCRAFT</Link>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "active-link" : ""}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink>
        </div>
        <div className="nav-cta">
          <Link to="/contact" className="btn" style={{ textDecoration: 'none' }}>Get a Quote</Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="footer" style={{ padding: '2rem', textAlign: 'center', marginTop: 'auto' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>&copy; {new Date().getFullYear()} Alucraft. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { VscHome, VscArchive, VscFileMedia, VscMail, VscStarFull } from 'react-icons/vsc';
import Dock from './components/Dock';
import Home from './pages/Home';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import './index.css';
import './App.css';

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [compact, setCompact] = useState(false);
  const lastY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const navigate = useNavigate();

  const dockItems = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => navigate('/') },
    { icon: <VscArchive size={18} />, label: 'Services', onClick: () => navigate('/services') },
    { icon: <VscStarFull size={18} />, label: 'Reviews', onClick: () => navigate('/reviews') },
    { icon: <VscFileMedia size={18} />, label: 'Gallery', onClick: () => navigate('/gallery') },
    { icon: <VscMail size={18} />, label: 'Contact', onClick: () => navigate('/contact') },
  ];

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
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
        <Link to="/" className="nav-brand" style={{ textDecoration: 'none' }}>ALUCRAFT</Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Dock 
          items={dockItems}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
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
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/gallery" element={<Gallery />} />
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

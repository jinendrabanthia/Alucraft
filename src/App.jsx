import './index.css'
import './App.css'

function Navbar() {
  return (
    <nav className="navbar animate-fade-in">
      <div className="nav-brand">ALUCRAFT</div>
      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero">
      <div className="container animate-fade-in">
        <h1>Precision Aluminum Engineering</h1>
        <p>
          We design, manufacture, and install high-quality architectural glazing, 
          facades, and aluminum profiles for modern commercial and residential spaces.
        </p>
        <a href="#contact" className="btn">Get a Quote</a>
      </div>
    </header>
  );
}

function Services() {
  const services = [
    {
      title: 'Architectural Glazing',
      desc: 'State-of-the-art structural glazing systems designed for aesthetics, performance, and durability.',
      icon: '🏢'
    },
    {
      title: 'Aluminum Facades',
      desc: 'Custom curtain walling and facade engineering that brings visionary architecture to life.',
      icon: '🏗️'
    },
    {
      title: 'Premium Windows & Doors',
      desc: 'High-grade aluminum profiles offering superior thermal efficiency and sleek sightlines.',
      icon: '🚪'
    }
  ];

  return (
    <section id="services" className="services container animate-fade-in">
      <div className="services-header">
        <h2>Our Expertise</h2>
        <p>Delivering excellence in metal fabrication for over two decades.</p>
      </div>
      <div className="services-grid">
        {services.map((srv, idx) => (
          <div key={idx} className="service-card">
            <div className="service-icon">{srv.icon}</div>
            <h3>{srv.title}</h3>
            <p>{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <h2>Ready to Build?</h2>
        <p style={{ marginBottom: '2rem' }}>Contact our engineering team to discuss your next project.</p>
        <a href="mailto:contact@alucraft.example.com" className="btn">Contact Us</a>
        <p style={{ marginTop: '3rem', fontSize: '0.875rem' }}>&copy; {new Date().getFullYear()} Alucraft. All rights reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Services />
      </main>
      <Footer />
    </>
  )
}

export default App

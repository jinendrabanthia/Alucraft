import React from 'react';
import { FaStar } from 'react-icons/fa';
import Beams from '../components/Beams';

export default function Reviews() {
  const reviews = [
    { name: 'Aisha Rahman', role: 'Commercial Developer', quote: 'Exceptional craftsmanship and a smooth process from design to installation. The final result felt premium and completely aligned with the brief.' },
    { name: 'Daniel Brooks', role: 'Architect', quote: 'Their glazing solution transformed the entire building with precision, elegance, and a level of detail that really elevated the design.' },
    { name: 'Maya Thompson', role: 'Property Manager', quote: 'Professional, reliable, and beautifully executed. Every detail felt premium and the quality was outstanding from start to finish.' },
    { name: 'Omar El-Sayed', role: 'Interior Consultant', quote: 'High-quality aluminium work that combined performance and beautiful finishing. The result felt refined, durable, and exceptionally well made.' },
    { name: 'Sophie Martin', role: 'Project Director', quote: 'The team stayed organized, responsive, and incredibly detail-focused throughout the project. Their execution gave us real confidence at every stage.' },
    { name: 'Nathan Cole', role: 'Facade Engineer', quote: 'Strong technical knowledge and craftsmanship that really shows in the final build. The installation quality was superb and consistent.' },
    { name: 'Priya Nair', role: 'Luxury Homeowner', quote: 'Our home looks stunning and feels more comfortable thanks to the new glazing system. The finish and detailing were exceptional.' },
    { name: 'Ethan Wallace', role: 'Construction Manager', quote: 'A dependable team that delivered quality work on time and without compromise. The standards they maintained were excellent throughout.' },
    { name: 'Lina Haddad', role: 'Hospitality Designer', quote: 'Elegant results that elevated the overall project while meeting practical goals. The finish and performance were both exactly what we wanted.' },
  ];

  const floatingRows = [
    reviews.slice(0, 3),
    reviews.slice(3, 6),
    reviews.slice(6, 9),
  ];

  return (
    <div className="page-transition" style={{ position: 'relative', overflow: 'hidden', background: '#05070b', minHeight: '100vh' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: 0.9,
        }}
      >
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={15}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>
      </div>

      <section className="container" style={{ position: 'relative', zIndex: 1, padding: '2.5rem 1rem 4rem' }}>
        <div style={{
          background: 'rgba(20, 24, 31, 0.92)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '28px',
          padding: '1.4rem 1rem 1rem',
          overflow: 'hidden',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 30px 50px rgba(0,0,0,0.22)',
        }}>
          {floatingRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              style={{
                display: 'flex',
                overflow: 'hidden',
                marginBottom: rowIndex < floatingRows.length - 1 ? '1rem' : 0,
                maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
                WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  gap: '1rem',
                  minWidth: 'max-content',
                  animation: `floatLeftToRight ${24 + rowIndex * 7}s linear infinite`,
                }}
              >
                {[...row, ...row].map((review, index) => (
                  <div
                    key={`${rowIndex}-${review.name}-${index}`}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      width: '290px',
                      minHeight: '180px',
                      padding: '1rem 1.1rem 0.9rem',
                      borderRadius: '20px',
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
                      border: '1px solid rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                      color: '#fff',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '0.2rem', color: '#f5b700', marginBottom: '0.5rem' }}>
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <FaStar key={starIndex} size={13} />
                      ))}
                    </div>

                    <p style={{ margin: 0, fontSize: '0.96rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.82)' }}>
                      “{review.quote}”
                    </p>

                    <div style={{ marginTop: '1rem' }}>
                      <div style={{ fontWeight: 600, fontSize: '0.98rem', color: '#fff' }}>{review.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.65)', marginTop: '0.15rem' }}>{review.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2.5rem', color: '#fff' }}>
          <h2 style={{ fontSize: '4rem', lineHeight: 1.08, letterSpacing: '-0.05em', margin: 0 }}>
            AluCraft
          </h2>
        </div>
      </section>
    </div>
  );
}

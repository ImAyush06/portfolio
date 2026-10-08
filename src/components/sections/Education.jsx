import React from 'react';
import { School, Calendar, Award, Code2, Database, Cpu, Globe, ArrowUpRight, GraduationCap } from 'lucide-react';
import { SectionShell } from '@/components/layout/SectionShell';
import { education } from '@/data/education';

export function Education() {
  const focusAreas = [
    { name: 'Data Structures & Algorithms', icon: <Code2 className="w-3.5 h-3.5" style={{ color: 'var(--cyan)' }} /> },
    { name: 'Full Stack Web Development', icon: <Globe className="w-3.5 h-3.5" style={{ color: 'var(--cyan)' }} /> },
    { name: 'Database Management Systems', icon: <Database className="w-3.5 h-3.5" style={{ color: 'var(--cyan)' }} /> },
    { name: 'Operating Systems & Networks', icon: <Cpu className="w-3.5 h-3.5" style={{ color: 'var(--cyan)' }} /> },
  ];

  return (
    <SectionShell id="education" label="EDUCATION">
      <div style={{ maxWidth: '100%' }}>
        
        {/* Main Education Showcase Card */}
        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            padding: 'clamp(20px, 3.5vw, 36px)',
            boxShadow: '0 16px 40px -16px rgba(0, 0, 0, 0.65)',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(24px, 3vw, 36px)',
          }}
          className="edu-card-grid"
        >
          {/* Left Column: Academic Credentials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Academic Duration Tag */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  padding: '3px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.04em',
                }}
              >
                <Calendar className="w-3 h-3 text-cyan" style={{ color: 'var(--cyan)' }} />
                <span>{education.duration}</span>
              </span>
            </div>

            {/* Degree Title */}
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem, 2.4vw, 2rem)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  margin: '0 0 6px',
                }}
              >
                B.Tech — Computer Science and Engineering
              </h3>

              {/* Working Clickable University */}
              <a
                href="https://www.lpu.in/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--cyan)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'color 0.2s ease',
                }}
                className="edu-univ-link"
              >
                <span>Lovely Professional University</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Brief Description */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                margin: 0,
                maxWidth: '680px',
              }}
            >
              Specializing in software engineering, core algorithms, database systems, web development, and computer architecture.
            </p>

            {/* Core Focus Areas Pills */}
            <div style={{ paddingTop: '8px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  color: 'var(--muted)',
                  display: 'block',
                  marginBottom: '10px',
                  textTransform: 'uppercase',
                }}
              >
                CORE FOCUS AREAS //
              </span>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {focusAreas.map((area) => (
                  <div
                    key={area.name}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '5px 12px',
                      borderRadius: 'var(--radius-xs)',
                      background: 'var(--surface)',
                      border: '1px solid var(--line)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {area.icon}
                    <span>{area.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: "Current Pursuit" Status Box with prominent circular blended LPU Logo */}
          <div className="edu-status-column">
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                borderRadius: 'var(--radius-sm)',
                padding: '28px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '14px',
                height: '100%',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 24px -6px rgba(0, 0, 0, 0.5)',
              }}
              className="edu-status-box"
            >
              {/* Full Box Circular LPU Logo Blend Layer */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none',
                  zIndex: 0,
                  overflow: 'hidden',
                }}
                aria-hidden="true"
              >
                {/* Circular glow background */}
                <div
                  style={{
                    position: 'absolute',
                    width: '240px',
                    height: '240px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(236, 124, 35, 0.22) 0%, rgba(56, 189, 248, 0.12) 50%, transparent 75%)',
                    filter: 'blur(16px)',
                  }}
                />

                {/* Circular emblem that spans the whole box and blends */}
                <div
                  style={{
                    position: 'relative',
                    width: '210px',
                    height: '210px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(16, 29, 50, 0.3) 60%, transparent 100%)',
                    boxShadow: 'inset 0 0 24px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  <img
                    src="/lpu-logo.svg"
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      opacity: 0.42,
                      filter: 'drop-shadow(0 0 16px rgba(236, 124, 35, 0.35)) drop-shadow(0 0 24px rgba(56, 189, 248, 0.2))',
                      transition: 'transform 0.4s ease, opacity 0.4s ease',
                    }}
                    className="edu-lpu-watermark"
                  />
                </div>

                {/* Gradient blend across the whole box to smoothly fuse into the container edges */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at center, rgba(16, 29, 50, 0.15) 0%, rgba(16, 29, 50, 0.55) 70%, var(--surface) 100%)',
                    pointerEvents: 'none',
                  }}
                />
              </div>

              {/* Foreground Content */}
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(8, 14, 28, 0.85)',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
                }}
              >
                <GraduationCap className="w-5 h-5" style={{ color: 'var(--cyan)' }} />
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: 'var(--cyan)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '4px',
                  }}
                >
                  Current Pursuit
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    display: 'block',
                    letterSpacing: '-0.01em',
                  }}
                >
                  B.Tech — CSE
                </span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(6, 14, 26, 0.85)',
                  border: '1px solid rgba(52, 211, 153, 0.35)',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: 'var(--emerald)',
                  fontWeight: 600,
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
                }}
              >
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--emerald)', boxShadow: '0 0 6px var(--emerald)' }} />
                <span>Enrolled &amp; Active</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .edu-card-grid {
            grid-template-columns: 1fr 240px !important;
          }
        }

        .edu-status-box:hover .edu-lpu-watermark {
          opacity: 0.65 !important;
          transform: scale(1.08) !important;
        }

        .edu-univ-link:hover {
          color: #FFFFFF !important;
        }
      `}</style>
    </SectionShell>
  );
}

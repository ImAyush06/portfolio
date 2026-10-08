import React from 'react';
import { 
  School, 
  Globe, 
  Eye, 
  CheckCircle2, 
  Award,
  Sparkles
} from 'lucide-react';
import { SectionShell } from '@/components/layout/SectionShell';
import { experience } from '@/data/experience';

export function Experience() {
  if (!experience || experience.length === 0) return null;

  const item = experience[0]; // Summer Training 2026

  return (
    <SectionShell
      id="experience"
      label="SUMMER TRAINING"
    >
      <div style={{ maxWidth: '1060px', width: '100%' }}>
        
        {/* Seamless Merged Summer Training Card */}
        <div
          className="summer-training-merged-card"
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            padding: 'clamp(20px, 3vw, 32px)',
            boxShadow: '0 16px 40px -16px rgba(0, 0, 0, 0.7)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top Integrated Header Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              paddingBottom: '16px',
              borderBottom: '1px solid var(--line)',
              marginBottom: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#38BDF8',
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.28)',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-xs)',
                  letterSpacing: '0.04em',
                }}
              >
                <Award className="w-3.5 h-3.5" style={{ color: '#38BDF8' }} />
                <span>SUMMER TRAINING</span>
              </span>

              <a
                href="https://www.lpu.in/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-xs)',
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  transition: 'all 0.2s ease',
                }}
                className="training-link-hover"
              >
                <School className="w-3.5 h-3.5" style={{ color: '#38BDF8' }} />
                <span>{item.organization}</span>
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.04em',
                }}
              >
                {item.duration}
              </span>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#10B981',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.28)',
                  padding: '3px 9px',
                  borderRadius: 'var(--radius-xs)',
                  letterSpacing: '0.04em',
                }}
              >
                GRADE 'A' MERIT
              </span>
            </div>
          </div>

          {/* Unified Two-Column Layout */}
          <div className="training-merged-grid">
            
            {/* Left Side: Course Details & Merged Curriculum */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.35rem, 2vw, 1.8rem)',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    letterSpacing: '-0.025em',
                    lineHeight: 1.25,
                    margin: '0 0 8px',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    margin: '0 0 16px',
                  }}
                >
                  {item.department} &middot; {item.school}
                </p>


                {/* Seamlessly Integrated Curriculum Highlights */}
                <div style={{ marginBottom: '20px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: '#38BDF8',
                      letterSpacing: '0.08em',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '10px',
                    }}
                  >
                    CURRICULUM IMMERSION &amp; ACHIEVEMENTS:
                  </span>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {item.highlights.map((point, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary" style={{ color: '#38BDF8', marginTop: '2px', flexShrink: 0 }} />
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
                {item.skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-xs)',
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-secondary)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side: High-Res Certificate Preview & Dual Actions */}
            <div className="training-right-column">
              
              {/* Certificate Image Frame */}
              <a
                href={item.image}
                target="_blank"
                rel="noopener noreferrer"
                title="Click to view full original certificate in high resolution"
                style={{
                  display: 'block',
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/11',
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-xs)',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  boxShadow: '0 12px 28px -8px rgba(0, 0, 0, 0.75)',
                  textDecoration: 'none',
                  marginBottom: '12px',
                }}
                className="training-cert-frame"
              >
                <img
                  src={item.image}
                  alt="Summer Training Certificate of Merit"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                    transition: 'transform 0.3s ease',
                  }}
                  className="training-cert-zoom"
                />

                {/* Verified Ribbon */}
                <div
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    background: 'rgba(8, 13, 26, 0.88)',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 5px #10B981' }} />
                  <span>OFFICIAL MERIT</span>
                </div>

                {/* Hover Reveal */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(8, 13, 26, 0.85)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    opacity: 0,
                    transition: 'opacity 0.2s ease',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 600,
                    textAlign: 'center',
                  }}
                  className="training-hover-overlay"
                >
                  <Eye className="w-5 h-5" style={{ color: '#38BDF8' }} />
                  <span>VIEW ORIGINAL CERTIFICATE</span>
                </div>
              </a>

              {/* Dual Direct Buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px' }}>
                <a
                  href={item.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '5px',
                    padding: '8px 12px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    fontWeight: 600,
                    borderRadius: 'var(--radius-xs)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  className="training-btn-view"
                >
                  <Eye className="w-3.5 h-3.5" style={{ color: '#38BDF8' }} />
                  <span>VIEW CERTIFICATE</span>
                </a>

                <a
                  href={item.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '5px',
                    padding: '8px 12px',
                    background: 'linear-gradient(135deg, #1D4ED8 0%, #0284C7 100%)',
                    border: '1px solid #38BDF8',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    fontWeight: 700,
                    borderRadius: 'var(--radius-xs)',
                    textDecoration: 'none',
                    boxShadow: '0 2px 10px rgba(56, 189, 248, 0.25)',
                    transition: 'all 0.2s ease',
                  }}
                  className="training-btn-portal"
                >
                  <Globe className="w-3.5 h-3.5" style={{ color: '#FFFFFF' }} />
                  <span>LPU PORTAL</span>
                </a>
              </div>

              {/* Clean Description directly underneath */}
              <div
                style={{
                  background: 'rgba(56, 189, 248, 0.04)',
                  border: '1px solid rgba(56, 189, 248, 0.16)',
                  borderRadius: 'var(--radius-xs)',
                  padding: '10px 14px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    color: '#38BDF8',
                    letterSpacing: '0.08em',
                    fontWeight: 700,
                    display: 'block',
                    marginBottom: '4px',
                    textTransform: 'uppercase',
                  }}
                >
                  VERIFIED TRAINING FOCUS:
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    lineHeight: 1.55,
                    color: 'var(--text-secondary)',
                    margin: 0,
                  }}
                >
                  {item.summary}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      <style>{`
        .summer-training-merged-card:hover {
          border-color: rgba(56, 189, 248, 0.35) !important;
          box-shadow: 0 20px 48px -14px rgba(56, 189, 248, 0.15), 0 24px 56px -16px rgba(0, 0, 0, 0.8) !important;
        }

        .training-merged-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 860px) {
          .training-merged-grid {
            grid-template-columns: 1.25fr 1fr;
            align-items: start;
          }
        }

        .training-cert-frame:hover .training-cert-zoom {
          transform: scale(1.03);
        }

        .training-cert-frame:hover .training-hover-overlay {
          opacity: 1 !important;
        }

        .training-link-hover:hover {
          border-color: #38BDF8 !important;
        }

        .training-btn-view:hover {
          background: rgba(255, 255, 255, 0.12) !important;
          border-color: rgba(255, 255, 255, 0.35) !important;
        }

        .training-btn-portal:hover {
          background: linear-gradient(135deg, #2563EB 0%, #0284C7 100%) !important;
          box-shadow: 0 4px 16px rgba(56, 189, 248, 0.4) !important;
          transform: translateY(-1px);
        }
      `}</style>
    </SectionShell>
  );
}

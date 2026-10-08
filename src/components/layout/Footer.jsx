import React from 'react';
import { ArrowUp, ArrowRight } from 'lucide-react';
import { site } from '@/data/site';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResumeClick = (e) => {
    if (site.resume) {
      window.open(site.resume, '_blank');
      return;
    }
    e.preventDefault();
    const subject = encodeURIComponent("Resume Request — Ayush Kumar");
    const body = encodeURIComponent(
      "Hi Ayush,\n\nI reviewed your portfolio and would like to request a copy of your resume for consideration.\n\nBest regards,"
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        background: 'var(--bg-0)',
        padding: 'clamp(44px, 6vw, 68px) 0 32px',
        position: 'relative',
        zIndex: 3,
      }}
    >
      <div className="container-shell">
        {/* Main Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: '24px',
            paddingBottom: '32px',
            borderBottom: '1px solid var(--line)',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '18px',
                color: 'var(--ivory)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                display: 'block',
              }}
            >
              AYUSH KUMAR
            </span>
            <div style={{ marginTop: '6px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--coral)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'block',
                  fontWeight: 600,
                }}
              >
                FULL STACK WEB DEVELOPER
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--muted)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginTop: '2px',
                }}
              >
                COMPUTER SCIENCE ENGINEERING STUDENT
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            {site.github && (
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.06em',
                  textDecoration: 'none',
                  color: 'var(--teal)',
                  transition: 'color 0.2s ease',
                }}
                className="footer-link-hover"
              >
                GITHUB ↗
              </a>
            )}
            {site.linkedin && (
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.06em',
                  textDecoration: 'none',
                  color: 'var(--teal)',
                  transition: 'color 0.2s ease',
                }}
                className="footer-link-hover"
              >
                LINKEDIN ↗
              </a>
            )}
            <a
              href={`mailto:${site.email}`}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.06em',
                textDecoration: 'none',
                color: 'var(--teal)',
                transition: 'color 0.2s ease',
              }}
              className="footer-link-hover"
            >
              EMAIL ↗
            </a>

            <a
              href={site.resume || `mailto:${site.email}?subject=Resume%20Request%20%E2%80%94%20Ayush%20Kumar&body=Hi%20Ayush,%0A%0AI%20would%20like%20to%20request%20a%20copy%20of%20your%20resume.%0A%0AThank%20you!`}
              onClick={handleResumeClick}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.06em',
                textDecoration: 'none',
                color: 'var(--teal)',
                transition: 'color 0.2s ease',
                cursor: 'pointer',
              }}
              className="footer-link-hover"
            >
              RESUME ↗
            </a>
          </div>
        </div>

        {/* Bottom Sub-row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '20px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--muted)' }}>
            © Ayush Kumar. All rights reserved.
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--ivory)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              transition: 'color 0.2s ease',
            }}
            className="footer-top-btn"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" style={{ color: 'var(--coral)' }} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-link-hover:hover {
          color: var(--coral) !important;
        }
        .footer-top-btn:hover {
          color: var(--coral) !important;
        }
      `}</style>
    </footer>
  );
}

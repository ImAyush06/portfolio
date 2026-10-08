import React from 'react';
import { ArrowUp } from 'lucide-react';
import { site } from '@/data/site';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="editorial-footer">
      <div className="container-shell">
        <div className="footer-content-row">
          
          {/* Identity & Role */}
          <div className="footer-brand-col">
            <span className="footer-name">AYUSH KUMAR</span>
            <span className="footer-role">FULL STACK WEB DEVELOPER</span>
          </div>

          {/* Simple Text Links */}
          <div className="footer-links-col">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-nav-link"
            >
              GitHub &rarr;
            </a>

            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-nav-link"
            >
              LinkedIn &rarr;
            </a>

            <a
              href={`mailto:${site.email}`}
              className="footer-nav-link"
            >
              Email &rarr;
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="footer-top-btn"
              aria-label="Scroll back to top of page"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Copyright Year */}
          <div className="footer-copy-col">
            <span className="footer-copy">&copy; 2026 AYUSH KUMAR</span>
          </div>

        </div>
      </div>

      <style>{`
        .editorial-footer {
          border-top: 1px solid var(--border);
          background: var(--bg-0);
          padding: clamp(36px, 5vh, 48px) 0 32px;
          position: relative;
          z-index: 3;
        }

        .footer-content-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .footer-name {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
        }

        .footer-role {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 600;
        }

        .footer-links-col {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .footer-nav-link {
          font-family: var(--font-mono);
          font-size: 11.5px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .footer-nav-link:hover {
          color: var(--accent);
        }

        .footer-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: none;
          border: none;
          padding: 0;
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.08em;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          transition: color 0.15s ease;
        }

        .footer-top-btn:hover {
          color: var(--text-primary);
        }

        .footer-copy-col {
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--text-secondary);
        }
      `}</style>
    </footer>
  );
}

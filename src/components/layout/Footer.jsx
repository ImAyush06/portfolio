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
            <span className="footer-role">Computer Science Engineering Student &middot; Full Stack Developer</span>
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
              aria-label="Scroll to top of page"
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
          padding: clamp(32px, 4.5vh, 44px) 0 28px;
          position: relative;
          z-index: 3;
        }

        .footer-content-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 18px;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .footer-name {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 13.5px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          text-transform: uppercase;
        }

        .footer-role {
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--text-secondary);
        }

        .footer-links-col {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .footer-nav-link {
          font-family: var(--font-mono);
          font-size: 11px;
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
          gap: 4px;
          background: none;
          border: none;
          padding: 0;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.08em;
          font-weight: 700;
          color: var(--text-secondary);
          cursor: pointer;
          transition: color 0.15s ease;
        }

        .footer-top-btn:hover {
          color: var(--text-primary);
        }

        .footer-copy-col {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-muted);
        }
      `}</style>
    </footer>
  );
}

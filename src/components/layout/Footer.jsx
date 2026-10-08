import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { site } from '@/data/site';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';

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

          {/* Rounded Social Icon Buttons like previous format */}
          <div className="footer-social-row">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-circle-btn"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-circle-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${site.email}`}
              className="footer-circle-btn"
              title="Email Ayush"
              aria-label="Email Ayush"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="footer-top-btn"
              aria-label="Scroll to top of page"
            >
              <span>TOP</span>
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
          padding: clamp(28px, 4vh, 38px) 0 24px;
          position: relative;
          z-index: 3;
        }

        .footer-content-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .footer-name {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          text-transform: uppercase;
        }

        .footer-role {
          font-family: var(--font-body);
          font-size: 12.5px;
          color: var(--text-secondary);
        }

        .footer-social-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-circle-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text-primary);
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .footer-circle-btn:hover {
          background: var(--accent);
          border-color: var(--accent);
          color: #FFFFFF;
          transform: translateY(-2px);
        }

        .footer-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 6px 12px;
          border-radius: var(--radius-xs);
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.08em;
          font-weight: 700;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.15s ease;
          margin-left: 6px;
        }

        .footer-top-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent);
          background: var(--accent-light);
        }

        .footer-copy-col {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
        }
      `}</style>
    </footer>
  );
}

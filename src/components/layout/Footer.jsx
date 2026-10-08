import React from 'react';
import { Mail } from 'lucide-react';
import { site } from '@/data/site';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';

export function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="container-shell">
        <div className="footer-content-row">
          
          {/* Left: Identity & Role */}
          <div className="footer-brand-col">
            <span className="footer-name">AYUSH KUMAR</span>
            <span className="footer-role">Computer Science Engineering Student &middot; Full Stack Developer</span>
          </div>

          {/* Right: Contact Icons & All Rights Reserved (Top icon removed) */}
          <div className="footer-right-col">
            <div className="footer-social-row">
              <a
                href={`mailto:${site.email}`}
                className="footer-circle-btn"
                title="Email Ayush"
                aria-label="Email Ayush"
              >
                <Mail className="w-4 h-4" />
              </a>

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
            </div>

            <div className="footer-copy-text">
              &copy; {new Date().getFullYear()} AYUSH KUMAR &middot; ALL RIGHTS RESERVED
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .editorial-footer {
          border-top: 1px solid var(--border);
          background: var(--bg-0);
          padding: clamp(28px, 4vh, 36px) 0;
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
          gap: 3px;
        }

        .footer-name {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 14.5px;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          text-transform: uppercase;
        }

        .footer-role {
          font-family: var(--font-body);
          font-size: 12.5px;
          color: var(--text-secondary);
        }

        .footer-right-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        @media (min-width: 768px) {
          .footer-right-col {
            align-items: flex-end;
          }
        }

        .footer-social-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-circle-btn {
          width: 38px;
          height: 38px;
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
          box-shadow: 0 4px 10px rgba(104, 122, 69, 0.2);
        }

        .footer-copy-text {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.04em;
          color: var(--text-muted);
          font-weight: 500;
        }
      `}</style>
    </footer>
  );
}

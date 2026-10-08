import React from 'react';
import { ArrowRight, ArrowUpRight, Code2, Terminal, Layers, Database } from 'lucide-react';
import { site } from '@/data/site';

export function Hero() {
  const verifiedTechs = [
    { name: 'React.js', role: 'Frontend' },
    { name: 'Java', role: 'Backend' },
    { name: 'Spring Boot', role: 'Services' },
    { name: 'MongoDB', role: 'Database' },
    { name: 'C++', role: 'Systems & DSA' },
  ];

  return (
    <section
      id="hero"
      aria-label="Introduction & Technical Overview"
      className="hero-section"
    >
      <div className="container-shell">
        
        {/* Asymmetric 7 / 5 Editorial Grid */}
        <div className="hero-editorial-grid">
          
          {/* =========================================================
              LEFT COLUMN (7 COLS): Identity, Typography, Human Copy, CTAs
              ========================================================= */}
          <div className="hero-left-col">
            
            {/* Top Editorial Kicker */}
            <div className="hero-kicker-bar">
              <span className="hero-kicker-text">PORTFOLIO / 2026</span>
              <span className="hero-kicker-sep" aria-hidden="true">/</span>
              <span className="hero-kicker-sub">FULL STACK ENGINEERING</span>
            </div>

            {/* Giant Architectural Name Typography */}
            <h1 className="hero-main-title">
              <span className="hero-name-line">AYUSH</span>
              <span className="hero-name-line hero-name-accent">KUMAR</span>
            </h1>

            {/* Clean Professional Title & University */}
            <div className="hero-role-wrapper">
              <p className="hero-role-title">
                FULL STACK WEB DEVELOPER <span className="hero-amp">&amp;</span> COMPUTER SCIENCE ENGINEERING STUDENT
              </p>
              <p className="hero-role-sub">
                B.Tech CSE &middot; Lovely Professional University &middot; Punjab, India
              </p>
            </div>

            {/* Verified Human Introduction (Preserved Content) */}
            <div className="hero-intro-prose">
              <p>
                I build practical web applications and software systems using modern frontend, backend, and database technologies.
              </p>
              <p>
                I enjoy solving problems with code, exploring computer science fundamentals, and turning ideas into usable software products.
              </p>
            </div>

            {/* Editorial CTAs */}
            <div className="hero-actions-row">
              <a href="#projects" className="hero-btn-primary" id="hero-btn-projects">
                <span>VIEW PROJECTS</span>
                <span className="hero-btn-arrow">&rarr;</span>
              </a>

              <a href="#contact" className="hero-link-secondary" id="hero-btn-contact">
                <span>CONTACT ME</span>
                <span className="hero-link-arrow">&rarr;</span>
              </a>
            </div>

            {/* Minimal Editorial Footnote */}
            <div className="hero-tech-strip">
              <span className="hero-tech-label">CORE TOOLKIT</span>
              <div className="hero-tech-items">
                {verifiedTechs.map((t, idx) => (
                  <span key={t.name} className="hero-tech-item">
                    <strong>{t.name}</strong>
                    {idx < verifiedTechs.length - 1 && <span className="hero-tech-bullet">&middot;</span>}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* =========================================================
              RIGHT COLUMN (5 COLS): Typographic Monogram & Spec Sheet
              ========================================================= */}
          <div className="hero-right-col">
            <div className="hero-spec-sheet">
              
              {/* Header Spec Tag */}
              <div className="hero-spec-header">
                <span className="hero-spec-badge">INDEX // 00</span>
                <span className="hero-spec-status">
                  <span className="hero-status-pulse" />
                  AVAILABLE FOR ROLES
                </span>
              </div>

              {/* Large Typographic AK Design Mark */}
              <div className="hero-monogram-area" aria-hidden="true">
                <div className="hero-monogram-text">AK</div>
                <div className="hero-monogram-line" />
              </div>

              {/* Editorial Spec Details */}
              <div className="hero-spec-details">
                <div className="hero-spec-row">
                  <span className="hero-spec-term">FOCUS</span>
                  <span className="hero-spec-desc">Full Stack Web &amp; Core Systems</span>
                </div>
                <div className="hero-spec-row">
                  <span className="hero-spec-term">STACK</span>
                  <span className="hero-spec-desc">React &middot; Java &middot; Spring Boot &middot; MongoDB</span>
                </div>
                <div className="hero-spec-row">
                  <span className="hero-spec-term">FOUNDATION</span>
                  <span className="hero-spec-desc">C++ &middot; DSA &middot; DBMS &middot; REST APIs</span>
                </div>
                <div className="hero-spec-row">
                  <span className="hero-spec-term">LOCATION</span>
                  <span className="hero-spec-desc">Phagwara, Punjab, India</span>
                </div>
              </div>

              {/* Spec Footer with Quick Links */}
              <div className="hero-spec-footer">
                <a
                  href={site.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-spec-link"
                >
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-spec-link"
                >
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="hero-spec-link"
                >
                  <span>EMAIL</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        .hero-section {
          padding-top: clamp(88px, 11vh, 128px);
          padding-bottom: clamp(48px, 7vh, 80px);
          position: relative;
          z-index: 2;
        }

        .hero-editorial-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(36px, 5vw, 64px);
          align-items: center;
        }

        @media (min-width: 992px) {
          .hero-editorial-grid {
            grid-template-columns: 1.35fr 0.95fr;
          }
        }

        /* Left Column */
        .hero-left-col {
          display: flex;
          flex-direction: column;
        }

        .hero-kicker-bar {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 11.5px;
          letter-spacing: 0.12em;
          color: var(--accent);
          font-weight: 600;
          margin-bottom: clamp(14px, 2vh, 20px);
          text-transform: uppercase;
        }

        .hero-kicker-sep {
          color: var(--border);
        }

        .hero-kicker-sub {
          color: var(--text-secondary);
        }

        .hero-main-title {
          font-family: var(--font-display);
          font-size: clamp(3.2rem, 8vw, 6.4rem);
          font-weight: 800;
          line-height: 0.94;
          letter-spacing: -0.04em;
          color: var(--text-primary);
          margin: 0 0 clamp(20px, 2.5vh, 28px);
          display: flex;
          flex-direction: column;
        }

        .hero-name-accent {
          color: var(--text-primary);
          position: relative;
        }

        .hero-role-wrapper {
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 22px;
        }

        .hero-role-title {
          font-family: var(--font-mono);
          font-size: clamp(13px, 1.15vw, 15px);
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--text-primary);
          line-height: 1.45;
          margin: 0 0 6px;
        }

        .hero-amp {
          color: var(--accent);
          font-weight: 700;
        }

        .hero-role-sub {
          font-family: var(--font-body);
          font-size: 13.5px;
          color: var(--text-secondary);
          margin: 0;
        }

        .hero-intro-prose {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: clamp(24px, 3vh, 32px);
          max-width: 58ch;
        }

        .hero-intro-prose p {
          font-family: var(--font-body);
          font-size: clamp(14.5px, 1.1vw, 16px);
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
        }

        .hero-actions-row {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: clamp(28px, 4vh, 40px);
        }

        /* Primary Sage Green Editorial Button */
        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--accent);
          color: #FFFFFF;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          padding: 13px 24px;
          border-radius: var(--radius-sm);
          text-decoration: none;
          transition: all 0.2s ease;
          border: 1px solid var(--accent);
          box-shadow: 0 2px 8px rgba(94, 127, 104, 0.25);
        }

        .hero-btn-primary:hover {
          background: var(--accent-hover);
          border-color: var(--accent-hover);
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(94, 127, 104, 0.35);
        }

        .hero-btn-arrow {
          font-size: 14px;
          transition: transform 0.2s ease;
        }

        .hero-btn-primary:hover .hero-btn-arrow {
          transform: translateX(3px);
        }

        /* Secondary Editorial Underlined Link */
        .hero-link-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          text-decoration: none;
          border-bottom: 1.5px solid var(--text-primary);
          padding-bottom: 2px;
          transition: all 0.2s ease;
        }

        .hero-link-secondary:hover {
          color: var(--accent);
          border-bottom-color: var(--accent);
        }

        .hero-link-arrow {
          font-size: 14px;
          transition: transform 0.2s ease;
        }

        .hero-link-secondary:hover .hero-link-arrow {
          transform: translateX(3px);
        }

        .hero-tech-strip {
          display: flex;
          align-items: baseline;
          gap: 14px;
          flex-wrap: wrap;
          padding-top: 18px;
          border-top: 1px solid var(--border);
        }

        .hero-tech-label {
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.12em;
          color: var(--accent);
          font-weight: 700;
        }

        .hero-tech-items {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--text-secondary);
        }

        .hero-tech-item strong {
          color: var(--text-primary);
          font-weight: 500;
        }

        .hero-tech-bullet {
          color: var(--border);
          margin-left: 8px;
        }

        /* Right Column: Spec Sheet */
        .hero-spec-sheet {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: clamp(24px, 3.5vw, 36px);
          position: relative;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }

        .hero-spec-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 24px;
        }

        .hero-spec-badge {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--accent);
        }

        .hero-spec-status {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: var(--font-mono);
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: var(--accent);
          background: var(--accent-soft);
          padding: 3px 9px;
          border-radius: var(--radius-xs);
        }

        .hero-status-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
        }

        .hero-monogram-area {
          padding: 20px 0 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .hero-monogram-text {
          font-family: var(--font-display);
          font-size: clamp(4.5rem, 9vw, 6.8rem);
          font-weight: 800;
          letter-spacing: -0.06em;
          color: var(--text-primary);
          opacity: 0.14;
          line-height: 0.85;
          user-select: none;
        }

        .hero-monogram-line {
          width: 48px;
          height: 2px;
          background: var(--accent);
          margin-top: 14px;
        }

        .hero-spec-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 18px 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .hero-spec-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
          font-size: 12.5px;
        }

        .hero-spec-term {
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          font-weight: 600;
          flex-shrink: 0;
        }

        .hero-spec-desc {
          font-family: var(--font-body);
          color: var(--text-primary);
          text-align: right;
          font-weight: 500;
        }

        .hero-spec-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 18px;
        }

        .hero-spec-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .hero-spec-link:hover {
          color: var(--accent);
        }
      `}</style>
    </section>
  );
}

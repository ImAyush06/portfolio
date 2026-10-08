import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { site } from '@/data/site';

export function Hero() {
  const verifiedTechs = [
    { name: 'React.js', role: 'Frontend' },
    { name: 'Java', role: 'Backend' },
    { name: 'Spring Boot', role: 'Services' },
    { name: 'MongoDB', role: 'Database' },
    { name: 'C++', role: 'Systems & DSA' },
  ];

  const buildFocusAreas = [
    {
      num: '01',
      title: 'BUILD',
      items: ['Frontend experiences', 'Backend services', 'Database-driven applications'],
    },
    {
      num: '02',
      title: 'SOLVE',
      items: ['Problem solving', 'Data structures', 'Algorithmic thinking'],
    },
    {
      num: '03',
      title: 'IMPROVE',
      items: ['Clean code', 'Better UX', 'Continuous learning'],
    },
  ];

  return (
    <section
      id="hero"
      aria-label="Introduction & Engineering Overview"
      className="hero-editorial-section"
    >
      <div className="container-shell">
        
        {/* Asymmetric 12-Column Grid (~7 cols / ~5 cols) */}
        <div className="hero-editorial-grid">
          
          {/* =========================================================
              LEFT COLUMN: Identity, Typography, Human Copy, Actions
              ========================================================= */}
          <div className="hero-identity-col">
            
            {/* Small Top Editorial Label */}
            <div className="hero-kicker-strip">
              <span className="hero-kicker-dot" />
              <span className="hero-kicker-title">COMPUTER SCIENCE &middot; FULL STACK DEVELOPMENT</span>
            </div>

            {/* Giant Asymmetric Architectural Typography */}
            <h1 className="hero-title-group">
              <span className="hero-name-first">AYUSH</span>
              <span className="hero-name-second">KUMAR</span>
            </h1>

            {/* Professional Title & Academic Credential */}
            <div className="hero-role-block">
              <p className="hero-role-headline">
                COMPUTER SCIENCE ENGINEERING STUDENT <span className="hero-role-amp">&amp;</span> FULL STACK DEVELOPER
              </p>
              <p className="hero-role-location">
                B.Tech CSE &middot; Lovely Professional University &middot; Punjab, India
              </p>
            </div>

            {/* Human Introduction (Preserved Verified Content) */}
            <div className="hero-narrative-block">
              <p>
                I build practical web applications and software systems using modern frontend, backend, and database technologies.
              </p>
              <p>
                Focused on writing clean code, applying computer science fundamentals, and turning complex ideas into reliable software products.
              </p>
            </div>

            {/* Editorial Minimal Buttons */}
            <div className="hero-actions-group">
              <a href="#projects" className="btn-editorial-primary" id="hero-btn-work">
                <span>VIEW WORK</span>
                <span className="btn-arrow">&rarr;</span>
              </a>

              <a href="#contact" className="btn-editorial-secondary" id="hero-btn-contact">
                <span>CONTACT ME</span>
                <span className="btn-arrow">&rarr;</span>
              </a>
            </div>

            {/* Core Toolkit Line */}
            <div className="hero-toolkit-bar">
              <span className="hero-toolkit-heading">CORE TOOLKIT:</span>
              <div className="hero-toolkit-items">
                {verifiedTechs.map((tech, idx) => (
                  <span key={tech.name} className="hero-toolkit-entry">
                    <strong>{tech.name}</strong>
                    {idx < verifiedTechs.length - 1 && <span className="hero-toolkit-dot">&middot;</span>}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* =========================================================
              RIGHT COLUMN: Editorial "WHAT I BUILD" Focus Profile Sheet
              ========================================================= */}
          <div className="hero-blueprint-col">
            <div className="hero-build-panel">
              
              {/* Top Header */}
              <div className="build-panel-header">
                <span className="build-panel-kicker">WHAT I BUILD</span>
                <div className="build-panel-badge">
                  <span className="build-panel-dot" />
                  <span>FOCUS</span>
                </div>
              </div>

              {/* Strong Statement */}
              <div className="build-panel-headline-block">
                <h2 className="build-panel-headline">
                  BUILDING PRACTICAL<br />WEB EXPERIENCES.
                </h2>
                <p className="build-panel-subline">
                  Practical digital products, web applications, and software systems.
                </p>
              </div>

              {/* Three Structured Rows Separated by Thin Rules */}
              <div className="build-panel-rows">
                {buildFocusAreas.map((area) => (
                  <div key={area.num} className="build-row">
                    <div className="build-row-indicator" aria-hidden="true" />
                    <div className="build-row-content">
                      <div className="build-row-meta">
                        <span className="build-row-num">{area.num}</span>
                        <h3 className="build-row-title">{area.title}</h3>
                      </div>
                      <div className="build-row-desc">
                        {area.items.map((item, idx) => (
                          <span key={item} className="build-row-desc-item">
                            {item}
                            {idx < area.items.length - 1 && (
                              <span className="build-row-desc-sep">&middot;</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Editorial Flow */}
              <div className="build-panel-footer">
                <span className="build-flow-step">BUILD</span>
                <span className="build-flow-arrow">&rarr;</span>
                <span className="build-flow-step">SOLVE</span>
                <span className="build-flow-arrow">&rarr;</span>
                <span className="build-flow-step">IMPROVE</span>
              </div>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        .hero-editorial-section {
          padding-top: clamp(84px, 11vh, 120px);
          padding-bottom: clamp(48px, 7vh, 76px);
          position: relative;
          z-index: 2;
        }

        .hero-editorial-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(36px, 5vw, 60px);
          align-items: center;
        }

        @media (min-width: 992px) {
          .hero-editorial-grid {
            grid-template-columns: 1.25fr 1fr;
          }
        }

        /* Left Identity Column */
        .hero-identity-col {
          display: flex;
          flex-direction: column;
        }

        .hero-kicker-strip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--accent); /* Olive */
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: clamp(14px, 2vh, 20px);
        }

        .hero-kicker-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
        }

        .hero-kicker-year {
          color: var(--text-muted);
          margin-left: 4px;
        }

        .hero-title-group {
          font-family: var(--font-display);
          font-size: clamp(3.4rem, 8.5vw, 6.4rem);
          font-weight: 800;
          line-height: 0.92;
          letter-spacing: -0.04em;
          color: var(--text-primary);
          margin: 0 0 clamp(18px, 2.5vh, 26px);
          display: flex;
          flex-direction: column;
        }

        .hero-name-second {
          color: var(--text-primary);
        }

        .hero-role-block {
          padding-bottom: 18px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 20px;
        }

        .hero-role-headline {
          font-family: var(--font-mono);
          font-size: clamp(12.5px, 1.1vw, 14.5px);
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--text-primary);
          line-height: 1.45;
          margin: 0 0 5px;
        }

        .hero-role-amp {
          color: var(--accent);
        }

        .hero-role-location {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--text-secondary);
          margin: 0;
        }

        .hero-narrative-block {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: clamp(24px, 3vh, 32px);
          max-width: 58ch;
        }

        .hero-narrative-block p {
          font-family: var(--font-body);
          font-size: clamp(14.5px, 1.1vw, 15.5px);
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
        }

        .hero-actions-group {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: clamp(28px, 3.5vh, 38px);
        }

        .hero-toolkit-bar {
          display: flex;
          align-items: baseline;
          gap: 12px;
          flex-wrap: wrap;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }

        .hero-toolkit-heading {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.12em;
          color: var(--accent);
          font-weight: 700;
        }

        .hero-toolkit-items {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
          font-family: var(--font-body);
          font-size: 12.5px;
          color: var(--text-secondary);
        }

        .hero-toolkit-entry strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .hero-toolkit-dot {
          color: var(--border-strong);
          margin-left: 6px;
        }

        /* Right "WHAT I BUILD" Editorial Panel */
        .hero-build-panel {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: clamp(22px, 3vw, 30px);
          position: relative;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
        }

        .build-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 16px;
        }

        .build-panel-kicker {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--text-primary);
          text-transform: uppercase;
        }

        .build-panel-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.08em;
          font-weight: 700;
          color: var(--accent);
          background: var(--accent-light);
          padding: 2.5px 8px;
          border-radius: var(--radius-xs);
        }

        .build-panel-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
        }

        .build-panel-headline-block {
          margin-bottom: 18px;
        }

        .build-panel-headline {
          font-family: var(--font-display);
          font-size: clamp(1.22rem, 1.7vw, 1.45rem);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin: 0 0 6px;
        }

        .build-panel-subline {
          font-family: var(--font-body);
          font-size: 13px;
          line-height: 1.5;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Continuous Editorial Rows (Separated by thin rules, NOT individual cards) */
        .build-panel-rows {
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          margin-bottom: 14px;
        }

        .build-row {
          position: relative;
          padding: 13px 14px;
          border-bottom: 1px solid var(--border);
          transition: background-color 0.18s ease;
          overflow: hidden;
        }

        .build-row:last-child {
          border-bottom: none;
        }

        .build-row-indicator {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: transparent;
          transition: background-color 0.18s ease;
        }

        .build-row-content {
          transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .build-row:hover {
          background: rgba(85, 107, 47, 0.04);
        }

        .build-row:hover .build-row-indicator {
          background: var(--accent);
        }

        .build-row:hover .build-row-content {
          transform: translateX(3px);
        }

        .build-row:hover .build-row-title {
          color: var(--accent);
        }

        .build-row-meta {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 4px;
        }

        .build-row-num {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.05em;
        }

        .build-row-title {
          font-family: var(--font-display);
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0;
          text-transform: uppercase;
          transition: color 0.18s ease;
        }

        .build-row-desc {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 3px 6px;
          font-family: var(--font-body);
          font-size: 12.5px;
          line-height: 1.45;
          color: var(--text-secondary);
          padding-left: 21px;
        }

        .build-row-desc-sep {
          color: var(--border-strong);
        }

        .build-panel-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 4px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }

        .build-flow-step {
          transition: color 0.18s ease;
        }

        .build-panel-footer:hover .build-flow-step {
          color: var(--text-primary);
        }

        .build-flow-arrow {
          color: var(--accent);
          font-size: 12px;
        }
      `}</style>
    </section>
  );
}

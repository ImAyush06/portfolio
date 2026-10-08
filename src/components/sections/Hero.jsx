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

  const blueprintNodes = [
    {
      num: '01',
      phase: 'FRONTEND INTERFACES',
      stack: 'React.js · JavaScript · Responsive DOM',
      sub: 'Fluid client interactions & modular components',
    },
    {
      num: '02',
      phase: 'BACKEND SERVICES',
      stack: 'Java · Spring Boot · REST APIs',
      sub: 'Decoupled services & transactional endpoints',
    },
    {
      num: '03',
      phase: 'DATA & PERSISTENCE',
      stack: 'MongoDB · Relational DBMS · SQL',
      sub: 'Structured schemas & database queries',
    },
    {
      num: '04',
      phase: 'SYSTEMS & ALGORITHMS',
      stack: 'C++ · Data Structures · Complexity Analysis',
      sub: 'Algorithmic logic & computational foundations',
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
              <span className="hero-kicker-title">COMPUTER SCIENCE / FULL STACK DEVELOPMENT</span>
              <span className="hero-kicker-year">2026</span>
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
                I enjoy solving problems with code, exploring computer science fundamentals, and turning ideas into usable software products.
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
              RIGHT COLUMN: Editorial "Developer Workspace" Blueprint Panel
              ========================================================= */}
          <div className="hero-blueprint-col">
            <div className="hero-blueprint-panel">
              
              {/* Blueprint Header */}
              <div className="blueprint-header">
                <div className="blueprint-header-left">
                  <span className="blueprint-header-tag">DEVELOPER WORKSPACE</span>
                  <span className="blueprint-sep">/</span>
                  <span className="blueprint-id">SPEC // 01</span>
                </div>
                <div className="blueprint-status">
                  <span className="blueprint-status-indicator" />
                  <span>ACTIVE ENGINEERING</span>
                </div>
              </div>

              {/* Blueprint Subtitle */}
              <p className="blueprint-caption">
                Architectural discipline overview across user interfaces, application servers, persistence, and algorithmic foundations.
              </p>

              {/* Connected Engineering Blueprint Nodes */}
              <div className="blueprint-nodes-container">
                {blueprintNodes.map((node, idx) => (
                  <div key={node.num} className="blueprint-node-item">
                    <div className="blueprint-node-top">
                      <span className="blueprint-node-num">{node.num}</span>
                      <span className="blueprint-node-connector" />
                      <h4 className="blueprint-node-phase">{node.phase}</h4>
                    </div>
                    <div className="blueprint-node-details">
                      <span className="blueprint-node-stack">{node.stack}</span>
                      <span className="blueprint-node-sub">{node.sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Blueprint Footer Links */}
              <div className="blueprint-footer">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blueprint-footer-link"
                >
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blueprint-footer-link"
                >
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="blueprint-footer-link"
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

        /* Right Blueprint Panel */
        .hero-blueprint-panel {
          background: var(--surface); /* Paper-like #F2EFE7 */
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: clamp(20px, 3vw, 32px);
          position: relative;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
        }

        .blueprint-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 14px;
          flex-wrap: wrap;
          gap: 8px;
        }

        .blueprint-header-left {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-primary);
        }

        .blueprint-sep {
          color: var(--border-strong);
        }

        .blueprint-id {
          color: var(--accent);
        }

        .blueprint-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.06em;
          font-weight: 700;
          color: var(--accent);
          background: var(--accent-light);
          padding: 2px 8px;
          border-radius: var(--radius-xs);
        }

        .blueprint-status-indicator {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
        }

        .blueprint-caption {
          font-family: var(--font-body);
          font-size: 12.5px;
          line-height: 1.5;
          color: var(--text-secondary);
          margin: 0 0 18px;
        }

        .blueprint-nodes-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 14px 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .blueprint-node-item {
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding: 8px 12px;
          background: var(--bg-0);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          transition: background-color 0.15s ease, border-color 0.15s ease;
        }

        .blueprint-node-item:hover {
          background: var(--accent-light);
          border-color: var(--accent);
        }

        .blueprint-node-top {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .blueprint-node-num {
          font-family: var(--font-mono);
          font-size: 10.5px;
          font-weight: 700;
          color: var(--accent);
        }

        .blueprint-node-connector {
          width: 8px;
          height: 1px;
          background: var(--border-strong);
        }

        .blueprint-node-phase {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin: 0;
          text-transform: uppercase;
        }

        .blueprint-node-details {
          display: flex;
          flex-direction: column;
          gap: 1px;
          padding-left: 20px;
        }

        .blueprint-node-stack {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .blueprint-node-sub {
          font-family: var(--font-body);
          font-size: 11px;
          color: var(--text-secondary);
        }

        .blueprint-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
        }

        .blueprint-footer-link {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-family: var(--font-mono);
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .blueprint-footer-link:hover {
          color: var(--accent);
        }
      `}</style>
    </section>
  );
}

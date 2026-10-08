import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Hero() {
  const [activeTab, setActiveTab] = useState('frontend');

  // Verified technologies per user specification
  const tabData = {
    frontend: {
      id: 'frontend',
      label: 'FRONTEND',
      summary: 'Responsive interfaces & modern UI engineering',
      technologies: [
        { name: 'React.js', tag: 'Core Library' },
        { name: 'JavaScript', tag: 'ES6+ / Modern' },
        { name: 'HTML5', tag: 'Semantic Web' },
        { name: 'CSS3', tag: 'Responsive Design' },
      ],
      activePipelineNode: 'FRONTEND',
    },
    backend: {
      id: 'backend',
      label: 'BACKEND',
      summary: 'Robust application services & REST APIs',
      technologies: [
        { name: 'Java', tag: 'Enterprise OOP' },
        { name: 'Spring Boot', tag: 'Microservices & MVC' },
        { name: 'Flask', tag: 'Python Services' },
        { name: 'REST APIs', tag: 'Contract Design' },
      ],
      activePipelineNode: 'BACKEND',
    },
    systems: {
      id: 'systems',
      label: 'SYSTEMS',
      summary: 'Computer science fundamentals & algorithms',
      technologies: [
        { name: 'C++', tag: 'System Level / C++17' },
        { name: 'DSA', tag: 'Algorithms & Structures' },
        { name: 'Operating Systems', tag: 'Memory & Concurrency' },
        { name: 'WebAssembly', tag: 'High-Performance Web' },
      ],
      activePipelineNode: 'BUILD',
    },
  };

  const currentTab = tabData[activeTab];

  // Minimal pipeline nodes per requirement 9
  const pipelineNodes = [
    { id: 'BUILD', label: 'BUILD' },
    { id: 'FRONTEND', label: 'FRONTEND' },
    { id: 'API', label: 'API' },
    { id: 'BACKEND', label: 'BACKEND' },
    { id: 'DATABASE', label: 'DATABASE' },
  ];

  return (
    <section
      id="hero"
      aria-label="Introduction & Technical Overview"
      className="hero-section"
    >
      <div className="container-shell">
        
        {/* Two-Column Asymmetric Layout: ~55% Left / ~45% Right */}
        <div className="hero-layout-grid">
          
          {/* =========================================================
              LEFT COLUMN: Identity, Role, Human Copy, Actions, Socials
              ========================================================= */}
          <div className="hero-left-column">
            


            {/* Main Heading: Large Typography AYUSH (warm white) KUMAR (subtle blue accent/outline) */}
            <h1 className="hero-title">
              <span className="hero-name-first">AYUSH</span>
              <span className="hero-name-last">KUMAR</span>
            </h1>

            {/* Professional Title: Immediately Readable */}
            <div className="hero-role-block">
              <div className="hero-role-heading">
                <span>FULL STACK WEB DEVELOPER</span>
                <span className="hero-role-amp" aria-hidden="true">&amp;</span>
                <span>COMPUTER SCIENCE ENGINEERING STUDENT</span>
              </div>
              <p className="hero-education-sub">
                B.Tech CSE &middot; Lovely Professional University
              </p>
            </div>

            {/* Simple, Human Description (No AI buzzwords, max 2-3 lines) */}
            <div className="hero-description-block">
              <p className="hero-description-lead">
                I build practical web applications and software systems using modern frontend, backend and database technologies.
              </p>
              <p className="hero-description-sub">
                I enjoy solving problems with code, learning new technologies, and turning ideas into useful products.
              </p>
            </div>

            {/* Primary Action Buttons: Clear, accessible, arrow hover transition */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn-hero-primary" id="hero-btn-projects">
                <span>VIEW MY PROJECTS</span>
                <ArrowRight className="w-3.5 h-3.5 hero-arrow" aria-hidden="true" />
              </a>

              <a href="#contact" className="btn-hero-secondary" id="hero-btn-contact">
                <span>CONTACT ME</span>
                <ArrowRight className="w-3.5 h-3.5 hero-arrow" aria-hidden="true" />
              </a>
            </div>

            {/* Small Profile / Trust Line */}
            <div className="hero-trust-bar">
              <div className="hero-trust-item">
                <span className="hero-trust-label">BUILDING WITH</span>
                <span className="hero-trust-val">React &middot; Java &middot; Spring Boot &middot; C++ &middot; MongoDB</span>
              </div>
            </div>

          </div>

          {/* =========================================================
              RIGHT COLUMN: Interactive Technical Profile Panel
              ========================================================= */}
          <div className="hero-right-column">
            <div className="tech-profile-card">
              
              {/* Card Header: WHAT I WORK WITH */}
              <div className="tech-card-header">
                <div className="tech-header-left">
                  <span className="tech-status-dot" aria-hidden="true" />
                  <h2 className="tech-header-title">WHAT I WORK WITH</h2>
                </div>
                <span className="tech-header-tag">TECHNICAL PROFILE</span>
              </div>

              {/* Interactive Tabs: FRONTEND / BACKEND / SYSTEMS */}
              <div className="tech-tabs-bar" role="tablist" aria-label="Technology focus areas">
                {Object.keys(tabData).map((tabKey) => {
                  const tab = tabData[tabKey];
                  const isSelected = activeTab === tabKey;
                  return (
                    <button
                      key={tab.id}
                      role="tab"
                      id={`tab-${tab.id}`}
                      aria-controls={`panel-${tab.id}`}
                      aria-selected={isSelected}
                      tabIndex={isSelected ? 0 : -1}
                      onClick={() => setActiveTab(tabKey)}
                      className={`tech-tab-btn ${isSelected ? 'active' : ''}`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab Panel: Verified Technologies */}
              <div
                id={`panel-${currentTab.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${currentTab.id}`}
                className="tech-panel-content"
              >
                <p className="tech-panel-summary">
                  {currentTab.summary}
                </p>

                <div className="tech-grid">
                  {currentTab.technologies.map((tech) => (
                    <div key={tech.name} className="tech-grid-card">
                      <div className="tech-card-top">
                        <span className="tech-card-name">{tech.name}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 tech-card-check" aria-hidden="true" />
                      </div>
                      <span className="tech-card-sub">{tech.tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimal Clean Technical Visualization: Pipeline Flow */}
              <div className="tech-pipeline-section" aria-label="System Architecture Flow">
                <span className="tech-pipeline-caption">ARCHITECTURE PIPELINE</span>
                <div className="tech-pipeline-flow">
                  {pipelineNodes.map((node, index) => {
                    const isActive = currentTab.activePipelineNode === node.id;
                    const isLast = index === pipelineNodes.length - 1;
                    return (
                      <React.Fragment key={node.id}>
                        <div className={`pipeline-node ${isActive ? 'active-node' : ''}`}>
                          <span className="node-dot" />
                          <span className="node-text">{node.label}</span>
                        </div>
                        {!isLast && (
                          <div className="pipeline-connector">
                            <span className="connector-line" />
                            <span className="connector-arrow">→</span>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* Bottom: Current Focus Area */}
              <div className="tech-focus-area">
                <span className="tech-focus-title">CURRENT FOCUS</span>
                <ul className="tech-focus-list">
                  <li>Full Stack Development</li>
                  <li>Data Structures &amp; Algorithms</li>
                  <li>Backend Development</li>
                  <li>Interactive Web Applications</li>
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Hero Component Scoped CSS */}
      <style>{`
        .hero-section {
          padding-top: clamp(88px, 12vh, 120px);
          padding-bottom: clamp(32px, 5vh, 48px);
          position: relative;
          z-index: 2;
        }

        .hero-layout-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(32px, 5vw, 56px);
          align-items: flex-start;
          margin-bottom: clamp(48px, 7vh, 72px);
        }

        @media (min-width: 992px) {
          .hero-layout-grid {
            grid-template-columns: 1.15fr 0.95fr;
            align-items: center;
          }
        }

        /* Top Meta Label */
        .hero-top-meta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }

        .hero-meta-badge {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--blue);
          padding: 3px 10px;
          background: rgba(46, 168, 255, 0.1);
          border: 1px solid rgba(46, 168, 255, 0.25);
          border-radius: var(--radius-xs);
        }

        .hero-meta-divider {
          color: var(--text-muted);
          font-size: 12px;
        }

        .hero-location-wrap {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: var(--text-secondary);
        }

        .hero-pin-icon {
          color: var(--blue);
        }

        /* Large Heading */
        .hero-title {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(3.2rem, 7vw, 5.6rem);
          line-height: 0.92;
          letter-spacing: -0.04em;
          margin: 0 0 20px 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .hero-name-first {
          color: #F4F7FB;
          letter-spacing: -0.04em;
        }

        .hero-name-last {
          background: linear-gradient(135deg, rgba(244, 247, 251, 0.9) 0%, #55D6FF 45%, #2EA8FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 1px rgba(85, 214, 255, 0.4);
          filter: drop-shadow(0 0 24px rgba(46, 168, 255, 0.25));
          transition: all 0.3s ease;
        }

        .hero-name-last:hover {
          filter: drop-shadow(0 0 32px rgba(85, 214, 255, 0.45));
        }

        /* Role & Title Block */
        .hero-role-block {
          margin-bottom: 20px;
        }

        .hero-role-heading {
          font-family: var(--font-display);
          font-size: clamp(15px, 1.4vw, 18px);
          font-weight: 700;
          letter-spacing: 0.03em;
          color: var(--text-primary);
          line-height: 1.4;
          margin-bottom: 6px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px 8px;
        }

        .hero-role-amp {
          color: var(--blue);
          font-weight: 600;
        }

        .hero-education-sub {
          font-family: var(--font-mono);
          font-size: clamp(11.5px, 0.95vw, 12.5px);
          color: var(--text-secondary);
          letter-spacing: 0.04em;
          margin: 0;
        }

        /* Human Description */
        .hero-description-block {
          max-width: 530px;
          margin-bottom: 26px;
        }

        .hero-description-lead {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.1vw, 15.5px);
          line-height: 1.6;
          color: var(--text-primary);
          margin: 0 0 8px 0;
        }

        .hero-description-sub {
          font-family: var(--font-body);
          font-size: clamp(13px, 0.95vw, 14px);
          line-height: 1.55;
          color: var(--text-secondary);
          margin: 0;
        }

        /* CTA Buttons */
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }

        /* Clean Socials Row */
        .hero-social-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 20px;
          padding-top: 6px;
        }

        .hero-social-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
          font-family: var(--font-mono);
          font-size: 11.5px;
          font-weight: 600;
          color: var(--text-secondary);
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: all 0.2s ease;
          padding: 4px 0;
          border-bottom: 1px solid transparent;
        }

        .hero-social-icon {
          color: var(--blue);
          transition: transform 0.2s ease;
        }

        .hero-social-item:hover {
          color: #FFFFFF;
          border-bottom-color: var(--blue);
        }

        .hero-social-item:hover .hero-social-icon {
          transform: translateY(-1px);
        }

        /* Trust / Profile Line */
        .hero-trust-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          padding-top: 14px;
          border-top: 1px solid var(--border);
          font-family: var(--font-mono);
          font-size: 11px;
        }

        .hero-trust-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .hero-trust-label {
          color: var(--text-muted);
          font-weight: 700;
          letter-spacing: 0.06em;
          font-size: 10px;
        }

        .hero-trust-val {
          color: var(--text-secondary);
          font-weight: 500;
          word-break: break-word;
        }

        .hero-trust-dot {
          color: var(--border);
        }

        /* =========================================================
           RIGHT COLUMN: Technical Profile Card
           ========================================================= */
        .tech-profile-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: clamp(16px, 2.5vw, 24px);
          box-shadow: 0 20px 48px -16px rgba(0, 0, 0, 0.7);
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .tech-profile-card:hover {
          border-color: rgba(100, 170, 255, 0.28);
          box-shadow: 0 24px 54px -16px rgba(0, 0, 0, 0.85);
        }

        .tech-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 14px;
        }

        .tech-header-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .tech-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--blue);
          box-shadow: 0 0 8px var(--blue);
        }

        .tech-header-title {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          margin: 0;
        }

        .tech-header-tag {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-muted);
          letter-spacing: 0.06em;
        }

        /* Tabs Bar */
        .tech-tabs-bar {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          margin-bottom: 14px;
        }

        .tech-tab-btn {
          font-family: var(--font-mono);
          font-size: clamp(9.5px, 2.2vw, 11px);
          font-weight: 700;
          letter-spacing: 0.04em;
          padding: 8px clamp(4px, 1.2vw, 10px);
          border-radius: var(--radius-xs);
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: center;
          white-space: nowrap;
        }

        .tech-tab-btn:hover {
          color: #FFFFFF;
          border-color: rgba(46, 168, 255, 0.4);
          background: var(--surface-raised);
        }

        .tech-tab-btn.active {
          background: linear-gradient(135deg, #1769D1 0%, #2EA8FF 100%);
          color: #FFFFFF;
          border-color: #55D6FF;
          box-shadow: 0 2px 14px rgba(46, 168, 255, 0.35);
        }

        /* Panel Content */
        .tech-panel-content {
          margin-bottom: 16px;
          animation: techFadeIn 0.25s ease-out;
        }

        @keyframes techFadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .tech-panel-summary {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
          margin: 0 0 10px 0;
          letter-spacing: 0.02em;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        .tech-grid-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 9px 12px;
          transition: all 0.2s ease;
        }

        .tech-grid-card:hover {
          border-color: rgba(46, 168, 255, 0.45);
          background: var(--surface-raised);
          transform: translateY(-1px);
        }

        .tech-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2px;
        }

        .tech-card-name {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 13px;
          color: var(--text-primary);
        }

        .tech-card-check {
          color: var(--blue);
        }

        .tech-card-sub {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-secondary);
          display: block;
        }

        /* Minimal Technical Visualization Flow */
        .tech-pipeline-section {
          background: rgba(7, 16, 31, 0.6);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 10px 12px;
          margin-bottom: 14px;
        }

        .tech-pipeline-caption {
          font-family: var(--font-mono);
          font-size: 9.5px;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 8px;
        }

        .tech-pipeline-flow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4px;
          overflow-x: auto;
          padding-bottom: 2px;
        }

        .pipeline-node {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .pipeline-node.active-node {
          border-color: var(--blue);
          background: rgba(46, 168, 255, 0.12);
        }

        .node-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--text-muted);
          transition: background 0.2s ease;
        }

        .pipeline-node.active-node .node-dot {
          background: var(--blue);
          box-shadow: 0 0 6px var(--blue);
        }

        .node-text {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--text-secondary);
        }

        .pipeline-node.active-node .node-text {
          color: #FFFFFF;
        }

        .pipeline-connector {
          display: flex;
          align-items: center;
          color: rgba(100, 170, 255, 0.4);
          font-size: 10px;
          flex-shrink: 0;
        }

        .connector-line {
          width: 4px;
          height: 1px;
          background: rgba(100, 170, 255, 0.3);
          display: inline-block;
        }

        .connector-arrow {
          font-size: 10px;
          color: var(--blue);
          margin-left: -2px;
        }

        /* Current Focus Section */
        .tech-focus-area {
          padding-top: 10px;
          border-top: 1px solid var(--border);
        }

        .tech-focus-title {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 6px;
        }

        .tech-focus-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 4px 10px;
        }

        .tech-focus-list li {
          font-family: var(--font-body);
          font-size: 11.5px;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .tech-focus-list li::before {
          content: '•';
          color: var(--blue);
          font-size: 13px;
          line-height: 1;
        }

        /* =========================================================
           BELOW-THE-FOLD TRANSITION (Requirement 19)
           ========================================================= */
        .hero-transition-banner {
          margin-top: clamp(28px, 4vh, 48px);
          padding-top: clamp(16px, 2.5vh, 24px);
        }

        .hero-transition-rule {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
        }

        .hero-transition-label {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--blue);
          flex-shrink: 0;
        }

        .hero-transition-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, var(--border) 0%, rgba(100, 170, 255, 0.05) 100%);
        }

        .hero-transition-quote {
          font-family: var(--font-display);
          font-size: clamp(1.15rem, 1.8vw, 1.45rem);
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: -0.015em;
          color: var(--text-primary);
          margin: 0;
          max-width: 820px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 640px) {
          .hero-cta-group {
            flex-direction: column;
            align-items: stretch;
          }

          .hero-cta-group a {
            justify-content: center;
          }

          .tech-grid {
            grid-template-columns: 1fr;
          }

          .tech-focus-list {
            grid-template-columns: 1fr;
          }

          .hero-trust-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }

          .hero-trust-dot {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

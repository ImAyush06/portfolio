import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Cpu, 
  Wrench, 
  ArrowRight,
  Sparkles,
  Layers,
  Globe,
  Terminal,
  GitBranch,
  CheckCircle2
} from 'lucide-react';
import { skillCategories } from '@/data/skills';
import { GithubIcon } from '@/components/ui/BrandIcons';

export function Skills() {
  const [activeCategoryId, setActiveCategoryId] = useState('frontend');

  const activeCategory = skillCategories.find((c) => c.id === activeCategoryId) || skillCategories[0];

  // Helper to get curated icon per technology
  const getTechIcon = (name) => {
    switch (name) {
      case 'React.js':
      case 'Next.js':
        return <Code2 className="w-3.5 h-3.5" />;
      case 'JavaScript':
      case 'HTML5':
      case 'CSS3':
      case 'Bootstrap':
      case 'Tailwind CSS':
        return <Globe className="w-3.5 h-3.5" />;
      case 'Java':
      case 'Spring Boot':
      case 'Flask':
      case 'REST APIs':
        return <Server className="w-3.5 h-3.5" />;
      case 'MongoDB':
      case 'SQL':
      case 'DBMS':
        return <Database className="w-3.5 h-3.5" />;
      case 'C++':
      case 'C':
      case 'Data Structures & Algorithms':
        return <Cpu className="w-3.5 h-3.5" />;
      case 'Python':
      case 'PHP':
      case 'Operating Systems':
        return <Terminal className="w-3.5 h-3.5" />;
      case 'Git':
        return <GitBranch className="w-3.5 h-3.5" />;
      case 'GitHub':
        return <GithubIcon className="w-3.5 h-3.5" />;
      case 'VS Code':
      case 'Postman':
      case 'Jira':
        return <Wrench className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  // Curated category icons
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'frontend':
        return <Globe className="w-4 h-4" />;
      case 'backend':
        return <Server className="w-4 h-4" />;
      case 'database':
        return <Database className="w-4 h-4" />;
      case 'programming':
        return <Cpu className="w-4 h-4" />;
      case 'tools':
        return <Wrench className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const currentlyBuilding = ['React', 'Java', 'Spring Boot', 'MongoDB', 'C++'];

  return (
    <section id="skills" aria-label="Skills & Technologies" className="skills-editorial-section">
      <div className="container-shell">
        
        {/* Main 2-Column Asymmetric Layout: ~35% Left / ~65% Right */}
        <div className="skills-main-grid">
          
          {/* =========================================================
              LEFT COLUMN: Section Header, Intro & Category Navigation
              ========================================================= */}
          <div className="skills-nav-column">
            
            {/* Section Tag */}
            <div className="skills-top-badge">
              <span className="skills-badge-dot" aria-hidden="true" />
              <span className="skills-badge-num">SKILLS</span>
            </div>

            {/* Large Section Heading */}
            <h2 className="skills-main-heading">
              WHAT I WORK WITH
            </h2>

            {/* Short Introduction (max 2 lines) */}
            <p className="skills-lead-intro">
              Technologies and tools I use to build web applications, backend services and software projects.
            </p>

            {/* Desktop Vertical Category Navigation */}
            <div className="skills-cat-list" role="tablist" aria-label="Skill Categories">
              {skillCategories.map((cat) => {
                const isActive = activeCategoryId === cat.id;
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    id={`skill-tab-${cat.id}`}
                    aria-selected={isActive}
                    aria-controls={`skill-panel-${cat.id}`}
                    onClick={() => setActiveCategoryId(cat.id)}
                    className={`skills-cat-btn ${isActive ? 'active' : ''}`}
                  >
                    <span className="skills-cat-icon">{getCategoryIcon(cat.id)}</span>
                    <span className="skills-cat-label">{cat.label}</span>
                    <span className="skills-cat-count">{cat.items.length}</span>
                    <span className="skills-active-bar" aria-hidden="true" />
                  </button>
                );
              })}
            </div>

          </div>

          {/* =========================================================
              RIGHT COLUMN: Selected Category Details & Minimal Flow
              ========================================================= */}
          <div className="skills-content-column">
            
            {/* Category Header Bar */}
            <div className="skills-panel-header">
              <div className="skills-panel-meta">
                <h3 className="skills-panel-title">{activeCategory.title}</h3>
              </div>
              <span className="skills-panel-pill">
                {activeCategory.items.length} TECHNOLOGIES
              </span>
            </div>

            <p className="skills-panel-desc">
              {activeCategory.description}
            </p>

            {/* Technology Items Row List (No giant cards!) */}
            <div 
              id={`skill-panel-${activeCategory.id}`}
              role="tabpanel"
              aria-labelledby={`skill-tab-${activeCategory.id}`}
              className="skills-items-list"
            >
              {activeCategory.items.map((tech) => (
                <div key={tech.name} className="skills-item-row">
                  <div className="skills-item-left">
                    <span className="skills-item-icon" aria-hidden="true">
                      {getTechIcon(tech.name)}
                    </span>
                    <div className="skills-item-info">
                      <span className="skills-item-name">{tech.name}</span>
                      <span className="skills-item-cat">{tech.category}</span>
                    </div>
                  </div>

                  <div className="skills-item-right">
                    <span className="skills-item-status">{tech.status}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Minimal Skill Architecture Visualization (Requirement 12) */}
            <div className="skills-pipeline-box" aria-label="Application Architecture Flow">
              <span className="skills-pipeline-caption">APPLICATION ARCHITECTURE FLOW</span>
              
              <div className="skills-pipeline-track">
                <div className="skills-pipe-node">
                  <span className="pipe-dot" />
                  <span className="pipe-label">WEB</span>
                </div>
                <span className="pipe-arrow">→</span>
                <div className="skills-pipe-node">
                  <span className="pipe-dot" />
                  <span className="pipe-label">FRONTEND</span>
                </div>
                <span className="pipe-arrow">→</span>
                <div className="skills-pipe-node">
                  <span className="pipe-dot" />
                  <span className="pipe-label">API / BACKEND</span>
                </div>
                <span className="pipe-arrow">→</span>
                <div className="skills-pipe-node">
                  <span className="pipe-dot" />
                  <span className="pipe-label">DATA</span>
                </div>
              </div>

              <div className="skills-pipeline-techs">
                <span>React</span>
                <span className="pipe-sub-dot">·</span>
                <span>JavaScript</span>
                <span className="pipe-sub-dot">·</span>
                <span>Spring Boot</span>
                <span className="pipe-sub-dot">·</span>
                <span>MongoDB</span>
              </div>
            </div>

            {/* Currently Building With Area (Requirement 11) */}
            <div className="skills-building-area">
              <span className="skills-building-title">CURRENTLY BUILDING WITH</span>
              <div className="skills-building-tags">
                {currentlyBuilding.map((tech) => (
                  <span key={tech} className="skills-building-chip">
                    <span className="building-dot" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* =========================================================
            BOTTOM TRANSITION: Natural Flow Into Projects (Requirement 24)
            ========================================================= */}
        <div className="skills-bottom-transition">
          <div className="skills-transition-rule">
            <a href="#projects" className="skills-transition-link">
              <span>SELECTED WORK</span>
              <ArrowRight className="w-3.5 h-3.5 transition-arrow" aria-hidden="true" />
            </a>
            <div className="skills-transition-line" />
            <span className="skills-next-tag">PROJECTS</span>
          </div>
        </div>

      </div>

      {/* Scoped CSS for Redesigned Skills Section */}
      <style>{`
        .skills-editorial-section {
          padding-top: clamp(48px, 7vh, 72px);
          padding-bottom: clamp(40px, 6vh, 60px);
          position: relative;
          z-index: 2;
          border-bottom: 1px solid var(--line);
        }

        .skills-main-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(32px, 5vw, 64px);
          align-items: start;
        }

        @media (min-width: 960px) {
          .skills-main-grid {
            grid-template-columns: 0.85fr 1.35fr;
            gap: clamp(40px, 5.5vw, 72px);
          }
        }

        /* LEFT COLUMN */
        .skills-nav-column {
          display: flex;
          flex-direction: column;
        }

        .skills-top-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .skills-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--blue);
          box-shadow: 0 0 10px rgba(46, 168, 255, 0.7);
        }

        .skills-badge-num {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: var(--blue);
          text-transform: uppercase;
        }

        .skills-main-heading {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          line-height: 1.1;
          margin: 0 0 12px 0;
        }

        .skills-lead-intro {
          font-family: var(--font-body);
          font-size: clamp(13.5px, 1.05vw, 15px);
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0 0 28px 0;
          max-width: 440px;
        }

        /* Category Navigation Buttons */
        .skills-cat-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .skills-cat-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: left;
          width: 100%;
        }

        .skills-cat-btn:hover {
          color: #FFFFFF;
          background: var(--surface-raised);
          border-color: rgba(46, 168, 255, 0.35);
          transform: translateX(3px);
        }

        .skills-cat-btn.active {
          color: #FFFFFF;
          background: rgba(46, 168, 255, 0.12);
          border-color: var(--blue);
          box-shadow: 0 4px 20px rgba(46, 168, 255, 0.15);
        }

        .skills-cat-num {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--blue);
          letter-spacing: 0.05em;
        }

        .skills-cat-icon {
          color: var(--text-muted);
          display: flex;
          align-items: center;
          transition: color 0.2s ease;
        }

        .skills-cat-btn.active .skills-cat-icon,
        .skills-cat-btn:hover .skills-cat-icon {
          color: var(--blue);
        }

        .skills-cat-label {
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.04em;
          flex: 1;
        }

        .skills-cat-count {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-muted);
          padding: 2px 7px;
          border-radius: var(--radius-xs);
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid var(--border);
        }

        .skills-cat-btn.active .skills-cat-count {
          color: #FFFFFF;
          border-color: rgba(46, 168, 255, 0.4);
          background: rgba(46, 168, 255, 0.2);
        }

        .skills-active-bar {
          position: absolute;
          left: 0;
          top: 10px;
          bottom: 10px;
          width: 3px;
          background: var(--blue);
          border-radius: 0 2px 2px 0;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .skills-cat-btn.active .skills-active-bar {
          opacity: 1;
        }

        /* RIGHT COLUMN */
        .skills-content-column {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: clamp(20px, 3vw, 32px);
          box-shadow: 0 20px 48px -16px rgba(0, 0, 0, 0.7);
        }

        .skills-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 10px;
          margin-bottom: 8px;
          border-bottom: 1px solid var(--border);
        }

        .skills-panel-meta {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .skills-panel-num {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--blue);
          letter-spacing: 0.06em;
        }

        .skills-panel-title {
          font-family: var(--font-display);
          font-size: clamp(15px, 1.4vw, 18px);
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .skills-panel-pill {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.06em;
        }

        .skills-panel-desc {
          font-family: var(--font-body);
          font-size: 13px;
          line-height: 1.5;
          color: var(--text-secondary);
          margin: 0 0 18px 0;
        }

        /* Technology Rows List */
        .skills-items-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 22px;
        }

        .skills-item-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .skills-item-row:hover {
          background: rgba(46, 168, 255, 0.08);
          border-color: rgba(46, 168, 255, 0.35);
          transform: translateX(4px);
        }

        .skills-item-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .skills-item-icon {
          width: 28px;
          height: 28px;
          border-radius: var(--radius-xs);
          background: rgba(46, 168, 255, 0.08);
          border: 1px solid rgba(46, 168, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue);
          flex-shrink: 0;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .skills-item-row:hover .skills-item-icon {
          transform: scale(1.08);
          background: rgba(46, 168, 255, 0.18);
          color: #55D6FF;
        }

        .skills-item-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .skills-item-name {
          font-family: var(--font-display);
          font-size: 13.5px;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .skills-item-cat {
          font-family: var(--font-body);
          font-size: 11px;
          color: var(--text-secondary);
        }

        .skills-item-right {
          display: flex;
          align-items: center;
        }

        .skills-item-status {
          font-family: var(--font-mono);
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--text-muted);
          padding: 3px 8px;
          border-radius: var(--radius-xs);
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--border);
        }

        .skills-item-row:hover .skills-item-status {
          color: var(--blue);
          border-color: rgba(46, 168, 255, 0.3);
        }

        /* Minimal Architecture Flow Visualization */
        .skills-pipeline-box {
          background: rgba(7, 16, 31, 0.6);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 12px 16px;
          margin-bottom: 16px;
        }

        .skills-pipeline-caption {
          font-family: var(--font-mono);
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          display: block;
          margin-bottom: 10px;
        }

        .skills-pipeline-track {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          margin-bottom: 8px;
          padding-bottom: 2px;
        }

        .skills-pipe-node {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          flex-shrink: 0;
        }

        .pipe-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--blue);
          box-shadow: 0 0 6px var(--blue);
        }

        .pipe-label {
          font-family: var(--font-mono);
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--text-primary);
        }

        .pipe-arrow {
          color: var(--blue);
          font-size: 11px;
          flex-shrink: 0;
        }

        .skills-pipeline-techs {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--text-secondary);
          flex-wrap: wrap;
        }

        .pipe-sub-dot {
          color: var(--border);
        }

        /* Currently Building With Area */
        .skills-building-area {
          padding-top: 14px;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skills-building-title {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .skills-building-tags {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .skills-building-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 9px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          font-family: var(--font-mono);
          font-size: 10.5px;
          font-weight: 600;
          color: var(--text-primary);
          transition: all 0.2s ease;
        }

        .skills-building-chip:hover {
          border-color: var(--blue);
          color: #FFFFFF;
          background: rgba(46, 168, 255, 0.1);
        }

        .building-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--blue);
        }

        /* BOTTOM TRANSITION */
        .skills-bottom-transition {
          margin-top: clamp(28px, 4.5vh, 44px);
        }

        .skills-transition-rule {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .skills-transition-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--blue);
          text-decoration: none;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .transition-arrow {
          transition: transform 0.2s ease;
        }

        .skills-transition-link:hover {
          color: #FFFFFF;
        }

        .skills-transition-link:hover .transition-arrow {
          transform: translateX(4px);
        }

        .skills-transition-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, var(--border) 0%, rgba(100, 170, 255, 0.05) 100%);
        }

        .skills-next-tag {
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--text-muted);
          letter-spacing: 0.1em;
          flex-shrink: 0;
        }

        /* Mobile Breakpoint */
        @media (max-width: 959px) {
          .skills-cat-list {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 6px;
            gap: 6px;
          }

          .skills-cat-btn {
            white-space: nowrap;
            padding: 8px 12px;
            gap: 8px;
            flex-shrink: 0;
            width: auto;
          }

          .skills-cat-btn:hover {
            transform: none;
          }

          .skills-active-bar {
            top: auto;
            bottom: 0;
            left: 12px;
            right: 12px;
            height: 2px;
            width: auto;
            border-radius: 2px 2px 0 0;
          }

          .skills-building-area {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
}

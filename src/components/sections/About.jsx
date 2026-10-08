import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionShell } from '@/components/layout/SectionShell';

export function About() {
  const quickProfile = [
    {
      label: 'DEGREE',
      value: 'B.Tech Computer Science & Engineering',
    },
    {
      label: 'INSTITUTION',
      value: (
        <a
          href="https://www.lpu.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="about-editorial-link"
          aria-label="Lovely Professional University website"
        >
          <span>Lovely Professional University</span>
          <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
        </a>
      ),
    },
    {
      label: 'CORE FOCUS',
      value: 'Full Stack Web Engineering & Scalable Systems',
    },
    {
      label: 'FOUNDATIONS',
      value: 'Data Structures & Algorithms · Web Architecture · Databases',
    },
    {
      label: 'STATUS',
      value: 'Open to Software Engineering Internships & Roles',
    },
  ];

  const focusKeywords = ['FULL STACK', 'DATA STRUCTURES & ALGORITHMS', 'SYSTEMS & APIS', 'WEB PLATFORMS'];

  return (
    <SectionShell id="about" label="ABOUT">
      <div className="about-editorial-container">
        
        {/* Asymmetric 8 / 4 Editorial Grid */}
        <div className="about-grid-layout">
          
          {/* =========================================================
              LEFT COLUMN (8 COLS): Statement, Narrative, Keywords
              ========================================================= */}
          <div className="about-narrative-col">
            
            {/* Primary Editorial Statement */}
            <h3 className="about-statement-headline">
              I’m a Computer Science Engineering student focused on building practical web applications and solving problems with code.
            </h3>

            {/* Verified Narrative Paragraphs */}
            <div className="about-statement-body">
              <p>
                I work across frontend, backend, and core programming, with a focus on building useful software products and mastering modern web standards.
              </p>
              <p>
                My work centers around end-to-end development—from interactive user interfaces built with React to scalable backend services architected with Java and Spring Boot, supported by structured database management and clean algorithmic logic.
              </p>
            </div>

            {/* Editorial Keywords Line */}
            <div className="about-keywords-row">
              <span className="about-keywords-title">PRIMARY DISCIPLINES:</span>
              <div className="about-keywords-list">
                {focusKeywords.map((kw) => (
                  <span key={kw} className="about-keyword-tag">
                    {kw}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* =========================================================
              RIGHT COLUMN (4 COLS): Clean Editorial Fact Sheet
              ========================================================= */}
          <div className="about-fact-col">
            <div className="about-fact-sheet">
              <div className="about-fact-header">
                <span className="about-fact-badge">PROFILE SUMMARY</span>
                <span className="about-fact-code">2024 &mdash; 2028</span>
              </div>

              <div className="about-fact-list">
                {quickProfile.map((item) => (
                  <div key={item.label} className="about-fact-row">
                    <span className="about-fact-label">{item.label}</span>
                    <div className="about-fact-value">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .about-editorial-container {
          width: 100%;
        }

        .about-grid-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(32px, 5vw, 56px);
          align-items: flex-start;
        }

        @media (min-width: 992px) {
          .about-grid-layout {
            grid-template-columns: 1.4fr 0.85fr;
          }
        }

        /* Left Narrative */
        .about-statement-headline {
          font-family: var(--font-display);
          font-size: clamp(1.45rem, 2.3vw, 2.15rem);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.025em;
          color: var(--text-primary);
          margin: 0 0 clamp(18px, 2.5vh, 24px);
        }

        .about-statement-body {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: clamp(24px, 3vh, 32px);
          max-width: 62ch;
        }

        .about-statement-body p {
          font-family: var(--font-body);
          font-size: clamp(14.5px, 1.1vw, 15.5px);
          line-height: 1.65;
          color: var(--text-secondary);
          margin: 0;
        }

        .about-keywords-row {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }

        .about-keywords-title {
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.12em;
          color: var(--accent);
          font-weight: 700;
        }

        .about-keywords-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .about-keyword-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.05em;
          padding: 4px 10px;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          color: var(--text-primary);
          border-radius: var(--radius-xs);
          font-weight: 500;
        }

        /* Right Fact Sheet */
        .about-fact-sheet {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: clamp(20px, 3vw, 28px);
        }

        .about-fact-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 16px;
        }

        .about-fact-badge {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--accent);
        }

        .about-fact-code {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-secondary);
        }

        .about-fact-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .about-fact-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .about-fact-row:last-child {
          padding-bottom: 0;
          border-bottom: none;
        }

        .about-fact-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .about-fact-value {
          font-family: var(--font-body);
          font-size: 13.5px;
          color: var(--text-primary);
          line-height: 1.45;
          font-weight: 500;
        }

        .about-editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--text-primary);
          text-decoration: underline;
          text-decoration-color: var(--accent);
          text-underline-offset: 3px;
          transition: color 0.15s ease;
        }

        .about-editorial-link:hover {
          color: var(--accent);
        }
      `}</style>
    </SectionShell>
  );
}

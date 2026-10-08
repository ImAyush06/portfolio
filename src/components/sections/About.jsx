import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionShell } from '@/components/layout/SectionShell';

export function About() {
  const specFacts = [
    {
      label: 'ROLE & FOCUS',
      value: 'Full Stack Web Developer · Modern Web Applications & Backend Systems',
    },
    {
      label: 'LOCATION',
      value: 'Phagwara, Punjab, India',
    },
    {
      label: 'EDUCATION',
      value: (
        <span>
          B.Tech CSE &middot;{' '}
          <a
            href="https://www.lpu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-spec-link"
          >
            Lovely Professional University <ArrowUpRight className="w-3.5 h-3.5 inline" />
          </a>
        </span>
      ),
    },
    {
      label: 'JOB INTERESTS',
      value: 'Full Stack Web Development · Responsive UI Design · REST APIs & Microservices · Database Architecture · Scalable Cloud Applications',
    },
    {
      label: 'AVAILABILITY',
      value: 'Software Engineering Roles, Full Stack Developer & Internship Positions',
    },
  ];

  const disciplines = ['FULL STACK WEB DEV', 'REACT & JAVASCRIPT', 'JAVA & SPRING BOOT', 'MONGODB & SQL', 'DATA STRUCTURES & DSA'];

  return (
    <SectionShell id="about" label="ABOUT">
      <div className="about-split-container">
        
        {/* Split Editorial Layout */}
        <div className="about-split-grid">
          
          {/* =========================================================
              LEFT COLUMN: Statement & Disciplines
              ========================================================= */}
          <div className="about-statement-col">
            <span className="about-section-tag">ENGINEERING PROFILE</span>
            
            <h3 className="about-hero-headline">
              Building practical software where clean interface design meets structured server-side systems.
            </h3>

            <p className="about-hero-sub">
              Computer Science Engineering student focused on building practical web applications, solving problems with code, and developing reliable software products.
            </p>

            <div className="about-disciplines-row">
              <span className="about-disciplines-label">PRIMARY DISCIPLINES:</span>
              <div className="about-disciplines-tags">
                {disciplines.map((d) => (
                  <span key={d} className="about-discipline-pill">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Profile Specification Sheet (Thin Dividers)
              ========================================================= */}
          <div className="about-spec-col">
            <div className="about-spec-sheet">
              <div className="about-spec-header">
                <span className="about-spec-title">PROFILE SPECIFICATION</span>
                <span className="about-spec-code">STATUS // READY TO WORK</span>
              </div>

              <div className="about-narrative-paragraph">
                <p>
                  Specializing in end-to-end development across the stack—from high-performance, responsive React interfaces to robust Java and Spring Boot backends with structured database management.
                </p>
              </div>

              <div className="about-spec-table">
                {specFacts.map((fact) => (
                  <div key={fact.label} className="about-spec-row">
                    <span className="about-spec-label">{fact.label}</span>
                    <div className="about-spec-value">{fact.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .about-split-container {
          width: 100%;
        }

        .about-split-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(36px, 5vw, 64px);
          align-items: flex-start;
        }

        @media (min-width: 992px) {
          .about-split-grid {
            grid-template-columns: 1.15fr 1fr;
          }
        }

        /* Left Column */
        .about-statement-col {
          display: flex;
          flex-direction: column;
        }

        .about-section-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--accent);
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .about-hero-headline {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 2.6vw, 2.3rem);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.025em;
          color: var(--text-primary);
          margin: 0 0 clamp(16px, 2.2vh, 22px);
        }

        .about-hero-sub {
          font-family: var(--font-body);
          font-size: clamp(15px, 1.15vw, 16.5px);
          line-height: 1.65;
          color: var(--text-secondary);
          margin: 0 0 clamp(20px, 3vh, 28px);
          max-width: 52ch;
        }

        .about-disciplines-row {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 18px;
          border-top: 1px solid var(--border);
        }

        .about-disciplines-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 700;
        }

        .about-disciplines-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .about-discipline-pill {
          font-family: var(--font-mono);
          font-size: 11.5px;
          padding: 4px 10px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          color: var(--text-primary);
          font-weight: 600;
        }

        /* Right Column */
        .about-spec-col {
          display: flex;
          flex-direction: column;
        }

        .about-spec-sheet {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: clamp(20px, 3vw, 28px);
        }

        .about-spec-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 14px;
        }

        .about-spec-title {
          font-family: var(--font-mono);
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-primary);
        }

        .about-spec-code {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--accent);
          font-weight: 700;
        }

        .about-narrative-paragraph {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 18px;
        }

        .about-narrative-paragraph p {
          font-family: var(--font-body);
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
        }

        .about-spec-table {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--border);
        }

        .about-spec-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 10px 0;
          border-bottom: 1px solid var(--border-subtle);
        }

        .about-spec-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .about-spec-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 700;
        }

        .about-spec-value {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--text-primary);
          font-weight: 600;
          line-height: 1.45;
        }

        .about-spec-link {
          color: var(--text-primary);
          text-decoration: underline;
          text-decoration-color: var(--accent);
          text-underline-offset: 3px;
          transition: color 0.15s ease;
        }

        .about-spec-link:hover {
          color: var(--accent);
        }
      `}</style>
    </SectionShell>
  );
}

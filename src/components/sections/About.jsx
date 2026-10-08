import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionShell } from '@/components/layout/SectionShell';

export function About() {
  const quickProfile = [

    {
      label: 'EDUCATION',
      value: 'B.Tech CSE',
    },
    {
      label: 'UNIVERSITY',
      value: (
        <a
          href="https://www.lpu.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="about-profile-link"
          aria-label="Lovely Professional University website"
        >
          <span>Lovely Professional University</span>
          <ArrowUpRight className="w-3 h-3 about-link-icon" aria-hidden="true" />
        </a>
      ),
    },
    {
      label: 'FOCUS',
      value: 'Full Stack Development',
    },
    {
      label: 'INTERESTS',
      value: 'DSA · Web · Systems · AI',
    },
  ];

  const focusPills = ['FULL STACK', 'DSA', 'WEB DEVELOPMENT'];

  return (
    <SectionShell id="about" label="ABOUT">
      <div className="about-editorial-wrap">
        
        {/* Asymmetric Editorial Layout: 65% Left / 35% Right */}
        <div className="about-layout-grid">
          
          {/* =========================================================
              LEFT COLUMN (65%): Main Statement & Short Introduction
              ========================================================= */}
          <div className="about-narrative-col">
            
            {/* Main Visual Element: Strong, clear, max 2 lines */}
            <h3 className="about-statement-lead">
              I’m a Computer Science Engineering student focused on building practical web applications and solving problems with code.
            </h3>

            {/* Short Introduction: 2 lines max, simple natural English */}
            <p className="about-statement-sub">
              I work across frontend, backend and core programming, with an interest in building useful software and learning new technologies.
            </p>

            {/* Subtle Text Labels (No large cards) */}
            <div className="about-pills-row" aria-label="Core Engineering Disciplines">
              {focusPills.map((pill) => (
                <span key={pill} className="about-pill-item">
                  {pill}
                </span>
              ))}
            </div>

          </div>

          {/* =========================================================
              RIGHT COLUMN (35%): Compact Quick Profile List
              ========================================================= */}
          <div className="about-profile-col">
            <div className="about-profile-list" role="list" aria-label="Quick Profile Details">
              {quickProfile.map((item) => (
                <div key={item.label} className="about-profile-row" role="listitem">
                  <span className="about-profile-label">
                    {item.label}
                  </span>
                  <div className="about-profile-val">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Scoped CSS for Redesigned About Section */}
      <style>{`
        .about-editorial-wrap {
          max-width: 100%;
        }

        .about-layout-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(32px, 5vw, 64px);
          align-items: start;
        }

        @media (min-width: 960px) {
          .about-layout-grid {
            grid-template-columns: 1.45fr 0.85fr;
            gap: clamp(40px, 5.5vw, 72px);
          }
        }

        /* LEFT COLUMN */
        .about-narrative-col {
          display: flex;
          flex-direction: column;
        }

        /* Main Statement: Large, bold, high contrast */
        .about-statement-lead {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 2.3vw, 2.15rem);
          font-weight: 700;
          line-height: 1.32;
          letter-spacing: -0.025em;
          color: var(--text-primary);
          margin: 0 0 18px 0;
          max-width: 720px;
        }

        /* Short Introduction: Smaller, comfortable line height */
        .about-statement-sub {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.1vw, 15.5px);
          line-height: 1.65;
          color: var(--text-secondary);
          margin: 0 0 24px 0;
          max-width: 640px;
        }

        /* Three Small Text Labels */
        .about-pills-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .about-pill-item {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--blue);
          padding: 4px 10px;
          background: rgba(46, 168, 255, 0.08);
          border: 1px solid rgba(100, 170, 255, 0.2);
          border-radius: var(--radius-xs);
          transition: all 0.2s ease;
        }

        .about-pill-item:hover {
          background: rgba(46, 168, 255, 0.16);
          border-color: var(--blue);
          color: #FFFFFF;
        }

        /* RIGHT COLUMN: Quick Profile */
        .about-profile-col {
          display: flex;
          flex-direction: column;
        }

        .about-profile-list {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--border);
        }

        .about-profile-row {
          position: relative;
          padding: 12px 0 12px 0;
          border-bottom: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 3px;
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), padding-left 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Subtle Cyan Indicator & Micro-Interaction on Hover */
        .about-profile-row::before {
          content: '';
          position: absolute;
          left: 0;
          top: 14px;
          bottom: 14px;
          width: 2px;
          background: var(--blue);
          opacity: 0;
          border-radius: 2px;
          transition: opacity 0.2s ease, transform 0.2s ease;
          transform: scaleY(0.4);
        }

        .about-profile-row:hover {
          padding-left: 10px;
        }

        .about-profile-row:hover::before {
          opacity: 1;
          transform: scaleY(1);
        }

        .about-profile-label {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .about-profile-val {
          font-family: var(--font-display);
          font-size: 13.5px;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.4;
          letter-spacing: -0.01em;
        }

        .about-profile-link {
          color: var(--text-primary);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: color 0.2s ease;
        }

        .about-link-icon {
          color: var(--blue);
          transition: transform 0.2s ease;
        }

        .about-profile-link:hover {
          color: var(--blue);
        }

        .about-profile-link:hover .about-link-icon {
          transform: translate(1px, -1px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 640px) {
          .about-statement-lead {
            font-size: 1.3rem;
            line-height: 1.35;
          }

          .about-profile-row {
            padding: 10px 0;
          }
        }
      `}</style>
    </SectionShell>
  );
}

import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { SectionShell } from '@/components/layout/SectionShell';
import { education } from '@/data/education';

export function Education() {
  return (
    <SectionShell id="education" label="EDUCATION">
      <div className="edu-editorial-wrapper">
        
        {/* 3 / 9 Asymmetric Academic Timeline */}
        <div className="edu-timeline-grid">
          
          {/* =========================================================
              LEFT COLUMN (3 COLS): Timeline Period & Academic Status
              ========================================================= */}
          <div className="edu-timeline-left">
            <div className="edu-period-badge">
              <Calendar className="w-3.5 h-3.5" />
              <span>{education.duration}</span>
            </div>
            <span className="edu-status-note">UNDERGRADUATE DEGREE</span>
            <span className="edu-expected-grad">GRADUATION // 2028</span>
          </div>

          {/* Spine indicator for desktop */}
          <div className="edu-timeline-spine">
            <div className="edu-timeline-node" />
            <div className="edu-timeline-line" />
          </div>

          {/* =========================================================
              RIGHT COLUMN (9 COLS): Degree, University, Coursework
              ========================================================= */}
          <div className="edu-timeline-right">
            
            {/* Degree & College Header */}
            <div className="edu-header-block">
              <h3 className="edu-degree-title">
                {education.degree}
              </h3>

              <div className="edu-university-row">
                <a
                  href="https://www.lpu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edu-university-link"
                >
                  <span>{education.college}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="edu-loc-bullet">&middot;</span>
                <span className="edu-location">{education.location}</span>
              </div>
            </div>

            {/* Academic Summary */}
            <p className="edu-narrative">
              Pursuing comprehensive computer science engineering curriculum focusing on systems programming, algorithmic complexity, relational database design, and modern software architectures.
            </p>

            {/* Verified Coursework */}
            <div className="edu-coursework-section">
              <span className="edu-coursework-title">RELEVANT ACADEMIC COURSEWORK:</span>
              <div className="edu-coursework-pills">
                {education.coursework.map((course) => (
                  <span key={course} className="edu-course-pill">
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .edu-editorial-wrapper {
          width: 100%;
        }

        .edu-timeline-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 992px) {
          .edu-timeline-grid {
            grid-template-columns: 240px 32px 1fr;
            gap: 0;
          }
        }

        /* Left Column */
        .edu-timeline-left {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-right: 24px;
        }

        .edu-period-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--accent);
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 4px 10px;
          border-radius: var(--radius-xs);
          width: fit-content;
        }

        .edu-status-note {
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          margin-top: 4px;
          font-weight: 600;
        }

        .edu-expected-grad {
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--accent);
          font-weight: 600;
        }

        /* Spine */
        .edu-timeline-spine {
          display: none;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        @media (min-width: 992px) {
          .edu-timeline-spine {
            display: flex;
          }
        }

        .edu-timeline-node {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--accent);
          border: 2px solid var(--surface);
          box-shadow: 0 0 0 1px var(--accent);
          margin-top: 8px;
          z-index: 2;
        }

        .edu-timeline-line {
          width: 1px;
          flex: 1;
          background: var(--border);
          margin-top: 4px;
        }

        /* Right Column */
        .edu-timeline-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-left: 0;
        }

        @media (min-width: 992px) {
          .edu-timeline-right {
            padding-left: 28px;
          }
        }

        .edu-header-block {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .edu-degree-title {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 2.2vw, 1.9rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          color: var(--text-primary);
          line-height: 1.25;
          margin: 0;
        }

        .edu-university-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          font-size: 13.5px;
        }

        .edu-university-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--text-primary);
          font-weight: 600;
          text-decoration: underline;
          text-decoration-color: var(--accent);
          text-underline-offset: 3px;
          transition: color 0.15s ease;
        }

        .edu-university-link:hover {
          color: var(--accent);
        }

        .edu-loc-bullet {
          color: var(--border);
        }

        .edu-location {
          color: var(--text-secondary);
        }

        .edu-narrative {
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
          max-width: 62ch;
        }

        .edu-coursework-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }

        .edu-coursework-title {
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 700;
        }

        .edu-coursework-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .edu-course-pill {
          font-family: var(--font-mono);
          font-size: 11px;
          padding: 3px 9px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          color: var(--text-primary);
        }
      `}</style>
    </SectionShell>
  );
}

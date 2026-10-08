import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { SectionShell } from '@/components/layout/SectionShell';
import { education } from '@/data/education';

export function Education() {
  return (
    <SectionShell id="education" label="EDUCATION">
      <div className="edu-timeline-container">
        
        {/* Compact Editorial Timeline */}
        <div className="edu-timeline-layout">
          
          {/* Left Pillar: Period & Status */}
          <div className="edu-left-pillar">
            <div className="edu-period-tag">
              <Calendar className="w-3.5 h-3.5" />
              <span>{education.duration}</span>
            </div>
            <span className="edu-status-tag">UNDERGRADUATE DEGREE</span>
          </div>

          {/* Timeline Spine */}
          <div className="edu-spine-col" aria-hidden="true">
            <div className="edu-spine-node" />
            <div className="edu-spine-line" />
          </div>

          {/* Right Pillar: Degree, University, Coursework */}
          <div className="edu-right-pillar">
            
            <div className="edu-degree-header">
              <h3 className="edu-degree-heading">
                {education.degree}
              </h3>

              <div className="edu-institution-line">
                <a
                  href="https://www.lpu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="edu-institution-link"
                >
                  <span>{education.college}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="edu-sep">&middot;</span>
                <span className="edu-location-text">{education.location}</span>
              </div>
            </div>

            <p className="edu-summary-text">
              Pursuing foundational and applied engineering studies with coursework in data structures, systems architecture, object-oriented software design, and database management.
            </p>

            {/* Coursework List */}
            <div className="edu-coursework-block">
              <span className="edu-coursework-label">CORE ACADEMIC COURSEWORK:</span>
              <div className="edu-coursework-tags">
                {education.coursework.map((course) => (
                  <span key={course} className="edu-course-tag">
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .edu-timeline-container {
          width: 100%;
        }

        .edu-timeline-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (min-width: 992px) {
          .edu-timeline-layout {
            grid-template-columns: 220px 32px 1fr;
            gap: 0;
          }
        }

        /* Left Pillar */
        .edu-left-pillar {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-right: 20px;
        }

        .edu-period-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--accent); /* Olive */
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 3px 9px;
          border-radius: var(--radius-xs);
          width: fit-content;
        }

        .edu-status-tag {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          margin-top: 4px;
          font-weight: 700;
        }

        .edu-graduation-target {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--accent);
          font-weight: 600;
        }

        /* Spine */
        .edu-spine-col {
          display: none;
          flex-direction: column;
          align-items: center;
        }

        @media (min-width: 992px) {
          .edu-spine-col {
            display: flex;
          }
        }

        .edu-spine-node {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          border: 2px solid var(--bg-0);
          box-shadow: 0 0 0 1px var(--accent);
          margin-top: 6px;
          z-index: 2;
        }

        .edu-spine-line {
          width: 1px;
          flex: 1;
          background: var(--border);
          margin-top: 4px;
        }

        /* Right Pillar */
        .edu-right-pillar {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding-left: 0;
        }

        @media (min-width: 992px) {
          .edu-right-pillar {
            padding-left: 28px;
          }
        }

        .edu-degree-header {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .edu-degree-heading {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 2.2vw, 1.85rem);
          font-weight: 800;
          letter-spacing: -0.025em;
          color: var(--text-primary);
          line-height: 1.25;
          margin: 0;
        }

        .edu-institution-line {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          font-size: 14px;
        }

        .edu-institution-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--text-primary);
          font-weight: 700;
          text-decoration: underline;
          text-decoration-color: var(--accent);
          text-underline-offset: 3px;
          transition: color 0.15s ease;
        }

        .edu-institution-link:hover {
          color: var(--accent);
        }

        .edu-sep {
          color: var(--border-strong);
        }

        .edu-location-text {
          color: var(--text-secondary);
        }

        .edu-summary-text {
          font-family: var(--font-body);
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
          max-width: 60ch;
        }

        .edu-coursework-block {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-top: 14px;
          border-top: 1px solid var(--border);
        }

        .edu-coursework-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 700;
        }

        .edu-coursework-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .edu-course-tag {
          font-family: var(--font-mono);
          font-size: 10.5px;
          padding: 2px 8px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          color: var(--text-primary);
        }
      `}</style>
    </SectionShell>
  );
}

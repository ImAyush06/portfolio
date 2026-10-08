import React, { useState } from 'react';
import { SectionShell } from '@/components/layout/SectionShell';
import { skillCategories } from '@/data/skills';

export function Skills() {
  const [hoveredRowId, setHoveredRowId] = useState(null);

  return (
    <SectionShell id="skills" label="SKILLS">
      <div className="skills-editorial-wrapper">
        
        {/* 4 / 8 Asymmetric Editorial Layout */}
        <div className="skills-grid-layout">
          
          {/* =========================================================
              LEFT COLUMN (4 COLS): Editorial Introduction & Index Guide
              ========================================================= */}
          <div className="skills-guide-col">
            <div className="skills-guide-sticky">
              <span className="skills-guide-badge">CURATED INVENTORY</span>
              <h3 className="skills-guide-title">
                TECHNICAL CAPABILITIES &amp; CORE STACK
              </h3>
              <p className="skills-guide-intro">
                A verified breakdown of technical proficiencies across frontend interfaces, server-side architecture, databases, and algorithmic foundations.
              </p>

              <div className="skills-summary-box">
                <div className="skills-summary-item">
                  <span className="skills-summary-num">05</span>
                  <span className="skills-summary-label">DISCIPLINES</span>
                </div>
                <div className="skills-summary-item">
                  <span className="skills-summary-num">24+</span>
                  <span className="skills-summary-label">TECHNOLOGIES</span>
                </div>
                <div className="skills-summary-item">
                  <span className="skills-summary-num">100%</span>
                  <span className="skills-summary-label">VERIFIED SKILLS</span>
                </div>
              </div>

              <div className="skills-note-strip">
                <span className="skills-note-bullet">&bull;</span>
                <span>Active focus: End-to-end full stack web applications &amp; robust Java backends.</span>
              </div>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN (8 COLS): Editorial Skill Rows with Warm-Green Hover
              ========================================================= */}
          <div className="skills-index-col">
            <div className="skills-rows-list">
              {skillCategories.map((cat, idx) => {
                const isHovered = hoveredRowId === cat.id;

                return (
                  <div
                    key={cat.id}
                    className={`skills-editorial-row ${isHovered ? 'is-hovered' : ''}`}
                    onMouseEnter={() => setHoveredRowId(cat.id)}
                    onMouseLeave={() => setHoveredRowId(null)}
                  >
                    {/* Row Left: Number & Label */}
                    <div className="skills-row-header">
                      <span className="skills-row-number">{cat.number || `0${idx + 1}`}</span>
                      <h4 className="skills-row-category">{cat.label}</h4>
                    </div>

                    {/* Row Center: Skill Tags and Summary */}
                    <div className="skills-row-content">
                      <p className="skills-row-desc">{cat.description}</p>
                      
                      <div className="skills-items-wrap">
                        {cat.items.map((item) => (
                          <span
                            key={item.name}
                            className={`skills-item-pill ${item.status === 'CORE' ? 'is-core' : ''}`}
                          >
                            <span className="skills-item-name">{item.name}</span>
                            {item.status === 'CORE' && (
                              <span className="skills-core-dot" title="Core competency" />
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .skills-editorial-wrapper {
          width: 100%;
        }

        .skills-grid-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(32px, 5vw, 56px);
          align-items: flex-start;
        }

        @media (min-width: 992px) {
          .skills-grid-layout {
            grid-template-columns: 0.8fr 1.4fr;
          }
        }

        /* Left Guide Column */
        .skills-guide-sticky {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        @media (min-width: 992px) {
          .skills-guide-sticky {
            position: sticky;
            top: 96px;
          }
        }

        .skills-guide-badge {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--accent);
          font-weight: 600;
          text-transform: uppercase;
        }

        .skills-guide-title {
          font-family: var(--font-display);
          font-size: clamp(1.35rem, 2vw, 1.75rem);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin: 0;
        }

        .skills-guide-intro {
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
        }

        .skills-summary-box {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          padding: 16px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          margin-top: 4px;
        }

        .skills-summary-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .skills-summary-num {
          font-family: var(--font-mono);
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .skills-summary-label {
          font-family: var(--font-mono);
          font-size: 9.5px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
        }

        .skills-note-strip {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 12.5px;
          line-height: 1.5;
          color: var(--text-secondary);
          padding-top: 8px;
        }

        .skills-note-bullet {
          color: var(--accent);
          font-size: 16px;
          line-height: 1;
        }

        /* Right Index Column */
        .skills-rows-list {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--border);
        }

        .skills-editorial-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          padding: clamp(20px, 3vw, 28px) clamp(16px, 2vw, 24px);
          border-bottom: 1px solid var(--border);
          background: transparent;
          transition: background-color 0.2s ease, border-color 0.2s ease;
          border-radius: var(--radius-sm);
        }

        @media (min-width: 640px) {
          .skills-editorial-row {
            grid-template-columns: 140px 1fr;
            gap: 24px;
          }
        }

        /* Hover: Subtle Warm-Green Highlight as explicitly requested */
        .skills-editorial-row:hover,
        .skills-editorial-row.is-hovered {
          background-color: var(--accent-soft); /* #E5EBDD subtle warm-green highlight */
          border-color: var(--border-strong);
        }

        .skills-row-header {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .skills-row-number {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--accent);
          font-weight: 700;
        }

        .skills-row-category {
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--text-primary);
          margin: 0;
          text-transform: uppercase;
        }

        .skills-row-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .skills-row-desc {
          font-family: var(--font-body);
          font-size: 13px;
          line-height: 1.5;
          color: var(--text-secondary);
          margin: 0;
        }

        .skills-items-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skills-item-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-primary);
          transition: all 0.15s ease;
        }

        .skills-item-pill.is-core {
          border-color: #B8C2B3;
          background: #FAF8F2;
          font-weight: 600;
        }

        .skills-core-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
        }
      `}</style>
    </SectionShell>
  );
}

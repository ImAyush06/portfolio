import React, { useState } from 'react';
import { SectionShell } from '@/components/layout/SectionShell';
import { skillCategories } from '@/data/skills';

export function Skills() {
  const [hoveredRowId, setHoveredRowId] = useState(null);

  return (
    <SectionShell id="skills" label="SKILLS">
      <div className="skills-editorial-container">
        
        {/* Section Header Strip */}
        <div className="skills-top-bar">
          <div className="skills-top-left">
            <span className="skills-section-kicker">TECHNICAL CAPABILITIES</span>
            <h3 className="skills-section-headline">WHAT I WORK WITH</h3>
          </div>
          <p className="skills-section-intro">
            A comprehensive index of technical skills across frontend user interfaces, backend services, database architectures, and core computer science problem solving.
          </p>
        </div>

        {/* Large Editorial List with Thin Horizontal Rules */}
        <div className="skills-editorial-list" role="list">
          {skillCategories.map((cat, idx) => {
            const isHovered = hoveredRowId === cat.id;

            return (
              <div
                key={cat.id}
                role="listitem"
                className={`skills-list-row ${isHovered ? 'is-active' : ''}`}
                onMouseEnter={() => setHoveredRowId(cat.id)}
                onMouseLeave={() => setHoveredRowId(null)}
              >
                {/* Number & Category Name */}
                <div className="skills-row-meta">
                  <span className="skills-number">{cat.number || `0${idx + 1}`}</span>
                  <div className="skills-title-group">
                    <h4 className="skills-category-title">{cat.label}</h4>
                    <span className="skills-category-subtitle">{cat.title}</span>
                  </div>
                </div>

                {/* Description & Technology Pills */}
                <div className="skills-row-body">
                  <p className="skills-category-desc">{cat.description}</p>
                  
                  <div className="skills-tags-cluster">
                    {cat.items.map((item) => (
                      <span
                        key={item.name}
                        className={`skills-tech-item ${item.status === 'CORE' ? 'is-core' : ''}`}
                      >
                        <span className="skills-tech-name">{item.name}</span>
                        {item.status === 'CORE' && (
                          <span className="skills-core-badge" title="Core Foundation">CORE</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle Indicator Arrow / Rule */}
                <div className="skills-row-indicator" aria-hidden="true">
                  <span>&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .skills-editorial-container {
          width: 100%;
        }

        .skills-top-bar {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: clamp(28px, 4vw, 44px);
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border);
        }

        @media (min-width: 768px) {
          .skills-top-bar {
            grid-template-columns: 1.1fr 1fr;
            align-items: flex-end;
          }
        }

        .skills-section-kicker {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--accent);
          font-weight: 700;
          text-transform: uppercase;
          display: block;
          margin-bottom: 6px;
        }

        .skills-section-headline {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3.2vw, 2.6rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.1;
        }

        .skills-section-intro {
          font-family: var(--font-body);
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Large Editorial Rows */
        .skills-editorial-list {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--border);
        }

        .skills-list-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          padding: clamp(24px, 3.5vw, 32px) clamp(16px, 2vw, 24px);
          border-bottom: 1px solid var(--border);
          background: transparent;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          border-left: 3px solid transparent;
        }

        @media (min-width: 840px) {
          .skills-list-row {
            grid-template-columns: 240px 1fr 32px;
            align-items: flex-start;
          }
        }

        /* Hover Interaction per prompt: reveal subtle accent bg, shift row slightly */
        .skills-list-row:hover,
        .skills-list-row.is-active {
          background-color: var(--surface); /* Paper-like #F2EFE7 */
          border-left-color: var(--accent);  /* Olive accent #687A45 */
          transform: translateX(6px);
        }

        .skills-row-meta {
          display: flex;
          align-items: baseline;
          gap: 14px;
        }

        .skills-number {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.08em;
          flex-shrink: 0;
        }

        .skills-title-group {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .skills-category-title {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: var(--text-primary);
          margin: 0;
          text-transform: uppercase;
        }

        .skills-category-subtitle {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-secondary);
          letter-spacing: 0.04em;
        }

        .skills-row-body {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .skills-category-desc {
          font-family: var(--font-body);
          font-size: 13px;
          line-height: 1.5;
          color: var(--text-secondary);
          margin: 0;
        }

        .skills-tags-cluster {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .skills-tech-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: var(--bg-0);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          font-family: var(--font-mono);
          font-size: 11.5px;
          color: var(--text-primary);
          transition: background-color 0.15s ease, border-color 0.15s ease;
        }

        .skills-tech-item.is-core {
          background: var(--surface-raised);
          border-color: var(--border-strong);
          font-weight: 600;
        }

        .skills-list-row:hover .skills-tech-item {
          background: #FFFFFF;
        }

        .skills-core-badge {
          font-size: 8.5px;
          padding: 1px 4px;
          background: var(--accent-light);
          color: var(--accent);
          border-radius: var(--radius-xs);
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .skills-row-indicator {
          display: none;
          color: var(--accent);
          font-family: var(--font-mono);
          font-size: 18px;
          font-weight: 700;
          align-self: center;
          transition: transform 0.2s ease;
        }

        @media (min-width: 840px) {
          .skills-row-indicator {
            display: block;
          }
        }

        .skills-list-row:hover .skills-row-indicator {
          transform: translateX(4px);
        }
      `}</style>
    </SectionShell>
  );
}

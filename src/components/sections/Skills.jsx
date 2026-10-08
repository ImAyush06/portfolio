import React, { useState } from 'react';
import { SectionShell } from '@/components/layout/SectionShell';
import { skillCategories } from '@/data/skills';

// Official Technology Documentation Links
const techUrlMap = {
  "React.js": "https://react.dev/",
  "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "HTML5": "https://developer.mozilla.org/en-US/docs/Web/HTML",
  "CSS3": "https://developer.mozilla.org/en-US/docs/Web/CSS",
  "Java": "https://dev.java/",
  "Spring Boot": "https://spring.io/projects/spring-boot",
  "MongoDB": "https://www.mongodb.com/",
  "REST APIs": "https://restfulapi.net/",
  "C": "https://en.cppreference.com/w/c",
  "C++": "https://isocpp.org/",
  "Data Structures": "https://en.wikipedia.org/wiki/Data_structure",
  "Algorithms": "https://en.wikipedia.org/wiki/Algorithm",
  "Object-Oriented Programming (OOP)": "https://en.wikipedia.org/wiki/Object-oriented_programming",
  "Linux / Unix": "https://www.kernel.org/",
  "Git & GitHub": "https://git-scm.com/",
  "VS Code": "https://code.visualstudio.com/",
  "Postman": "https://www.postman.com/",
  "AWS (Cloud Foundations)": "https://aws.amazon.com/",
  "PHP": "https://www.php.net/",
  "Relational DBMS": "https://en.wikipedia.org/wiki/Relational_database",
  "SQL": "https://en.wikipedia.org/wiki/SQL",
  "Database Normalization": "https://en.wikipedia.org/wiki/Database_normalization",
  "Indexing & Query Optimization": "https://en.wikipedia.org/wiki/Database_index"
};

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
            Core technical competencies across frontend client interfaces, backend microservices, database architectures, and systems programming.
          </p>
        </div>

        {/* Large Editorial List with Thin Horizontal Rules */}
        <div className="skills-editorial-list" role="list">
          {skillCategories.map((cat) => {
            const isHovered = hoveredRowId === cat.id;

            return (
              <div
                key={cat.id}
                role="listitem"
                className={`skills-list-row ${isHovered ? 'is-active' : ''}`}
                onMouseEnter={() => setHoveredRowId(cat.id)}
                onMouseLeave={() => setHoveredRowId(null)}
              >
                {/* Category Header */}
                <div className="skills-row-meta">
                  <span className="skills-category-bullet">&bull;</span>
                  <div className="skills-title-group">
                    <h4 className="skills-category-title">{cat.label}</h4>
                    <span className="skills-category-subtitle">{cat.title}</span>
                  </div>
                </div>

                {/* Description & Technology Badges */}
                <div className="skills-row-body">
                  <p className="skills-category-desc">{cat.description}</p>
                  
                  <div className="skills-tags-cluster">
                    {cat.items.map((item) => {
                      const url = techUrlMap[item.name];

                      return url ? (
                        <a
                          key={item.name}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`skills-tech-item is-link ${item.status === 'CORE' ? 'is-core' : ''}`}
                          title={`Official documentation for ${item.name}`}
                        >
                          <span className="skills-tech-name">{item.name}</span>
                          {item.status === 'CORE' && (
                            <span className="skills-core-badge">CORE</span>
                          )}
                        </a>
                      ) : (
                        <span
                          key={item.name}
                          className={`skills-tech-item ${item.status === 'CORE' ? 'is-core' : ''}`}
                        >
                          <span className="skills-tech-name">{item.name}</span>
                          {item.status === 'CORE' && (
                            <span className="skills-core-badge">CORE</span>
                          )}
                        </span>
                      );
                    })}
                  </div>
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
          margin-bottom: clamp(24px, 3.5vw, 36px);
          padding-bottom: 16px;
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
          font-size: 14.5px;
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
          gap: 16px;
          padding: clamp(20px, 3vw, 28px) clamp(14px, 2vw, 20px);
          border-bottom: 1px solid var(--border);
          background: transparent;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          border-left: 3px solid transparent;
        }

        @media (min-width: 840px) {
          .skills-list-row {
            grid-template-columns: 220px 1fr 32px;
            align-items: flex-start;
          }
        }

        .skills-list-row:hover,
        .skills-list-row.is-active {
          background-color: var(--surface); /* #F2EFE7 */
          border-left-color: var(--accent);
          transform: translateX(4px);
        }

        .skills-row-meta {
          display: flex;
          align-items: baseline;
          gap: 10px;
        }

        .skills-category-bullet {
          color: var(--accent);
          font-size: 18px;
          line-height: 1;
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
          font-size: 11px;
          color: var(--text-secondary);
          letter-spacing: 0.04em;
        }

        .skills-row-body {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .skills-category-desc {
          font-family: var(--font-body);
          font-size: 13.5px;
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
          gap: 5px;
          padding: 4px 10px;
          background: var(--bg-0);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-primary);
          text-decoration: none;
          transition: all 0.15s ease;
        }

        .skills-tech-item.is-core {
          background: var(--surface-raised);
          border-color: var(--border-strong);
          font-weight: 600;
        }

        .skills-tech-item.is-link:hover {
          background: var(--accent-light);
          border-color: var(--accent);
          color: var(--text-primary);
        }

        .skills-ext-icon {
          color: var(--text-muted);
          opacity: 0.7;
        }

        .skills-core-badge {
          font-size: 9px;
          padding: 1px 5px;
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

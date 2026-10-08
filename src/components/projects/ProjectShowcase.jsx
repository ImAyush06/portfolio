import React from 'react';
import { ProjectVisual } from './ProjectVisual';
import { Button } from '@/components/ui/Button';

export function ProjectShowcase({
  project,
  index,
  activeHoveredSkill = null,
  onOpenDetails = () => {},
  onOpenLightbox = () => {},
}) {
  const isEven = index % 2 === 1; // 0-indexed: index 0 is Project 1 (odd), index 1 is Project 2 (even)
  const projectNumStr = project.order < 10 ? `0${project.order}` : `${project.order}`;

  const usesHoveredSkill =
    activeHoveredSkill &&
    project.technologies &&
    project.technologies.some(
      (tech) => tech.toLowerCase() === activeHoveredSkill.toLowerCase()
    );

  return (
    <article
      id={`project-${project.id}`}
      style={{
        position: 'relative',
        padding: 'clamp(28px, 4vw, 52px) 0',
        borderBottom: '1px solid var(--line)',
        transition: 'background 0.3s ease',
        background: usesHoveredSkill ? 'rgba(200, 241, 105, 0.02)' : 'transparent',
      }}
      className="project-plate"
    >
      {/* Large faint background project index number */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: isEven ? 'auto' : 'clamp(20px, 4vw, 60px)',
          left: isEven ? 'clamp(20px, 4vw, 60px)' : 'auto',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'clamp(5rem, 12vw, 10rem)',
          lineHeight: 1,
          color: 'transparent',
          WebkitTextStroke: usesHoveredSkill ? '1.5px rgba(200, 241, 105, 0.18)' : '1px rgba(244, 240, 232, 0.04)',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 1,
        }}
      >
        {projectNumStr}
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(20px, 3.5vw, 44px)',
          alignItems: 'center',
        }}
        className={`plate-grid ${isEven ? 'plate-reversed' : ''}`}
      >
        {/* Visual Block */}
        <div className="plate-visual">
          <ProjectVisual project={project} onOpenLightbox={onOpenLightbox} />
        </div>

        {/* Text Block */}
        <div className="plate-text" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Metadata Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--accent)',
              }}
            >
              {projectNumStr}
            </span>
            <span style={{ color: 'var(--line-strong)' }}>/</span>
            <span className="mono-meta">
              {project.category || 'FULL STACK'}
            </span>
            {project.year && (
              <>
                <span style={{ color: 'var(--line-strong)' }}>/</span>
                <span className="mono-meta">{project.year}</span>
              </>
            )}
            {usesHoveredSkill && (
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: 'var(--accent)',
                  border: '1px solid var(--accent)',
                  padding: '1px 6px',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                USES {activeHoveredSkill.toUpperCase()}
              </span>
            )}
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3.2vw, 2.6rem)',
                color: 'var(--ivory)',
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
                marginBottom: '6px',
              }}
            >
              {project.title}
            </h3>
            {project.subtitle && (
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--muted)' }}>
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Description (full text, no truncation) */}
          <p style={{ fontSize: '15px', color: 'var(--ivory)', lineHeight: 1.65 }}>
            {project.description}
          </p>

          {/* Key Features / Areas List (2-column compact on desktop) */}
          {project.features && project.features.length > 0 && (
            <div style={{ marginTop: '8px' }}>
              <span className="mono-meta" style={{ display: 'block', fontSize: '11px', marginBottom: '8px' }}>
                KEY SYSTEM CAPABILITIES
              </span>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '6px 16px',
                }}
              >
                {project.features.slice(0, 6).map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '8px',
                      fontSize: '13px',
                      color: 'var(--muted)',
                      lineHeight: 1.4,
                    }}
                  >
                    <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '10px' }}>›</span>
                    <span style={{ color: 'var(--ivory)' }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Tags */}
          {project.technologies && project.technologies.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
              {project.technologies.map((tech) => {
                const isHighlight =
                  activeHoveredSkill &&
                  tech.toLowerCase() === activeHoveredSkill.toLowerCase();

                return (
                  <span
                    key={tech}
                    className="mono-tag"
                    style={{
                      background: isHighlight ? 'var(--accent)' : 'var(--bg-1)',
                      color: isHighlight ? 'var(--accent-ink)' : 'var(--ivory)',
                      borderColor: isHighlight ? 'var(--accent)' : 'var(--line)',
                      fontWeight: isHighlight ? 700 : 500,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          )}

          {/* Action Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '12px' }}>
            {project.liveUrl && (
              <Button href={project.liveUrl} variant="solid" external icon="upRight">
                LIVE DEMO
              </Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} variant="outline" external icon="upRight">
                GITHUB
              </Button>
            )}
            <Button
              onClick={() => onOpenDetails(project)}
              variant={project.liveUrl ? 'ghost' : 'outline'}
              icon="arrow"
            >
              DETAILS
            </Button>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .plate-grid {
            grid-template-columns: 7fr 5fr !important;
          }
          .plate-reversed {
            grid-template-columns: 5fr 7fr !important;
          }
          .plate-reversed .plate-visual {
            order: 2;
          }
          .plate-reversed .plate-text {
            order: 1;
          }
        }
      `}</style>
    </article>
  );
}

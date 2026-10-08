import React from 'react';
import { ArrowUpRight, ArrowRight, ExternalLink } from 'lucide-react';
import { BrowserFrame } from '@/components/ui/BrowserFrame';
import { GithubIcon } from '@/components/ui/BrandIcons';

export function ProjectParallelCard({
  project,
  index,
  activeHoveredSkill = null,
  onOpenDetails = () => {},
  onOpenLightbox = () => {},
}) {
  const usesHoveredSkill =
    activeHoveredSkill &&
    project.technologies &&
    project.technologies.some(
      (tech) => tech.toLowerCase() === activeHoveredSkill.toLowerCase()
    );

  const galleryImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [{ src: project.image, alt: project.imageAlt || project.title, caption: project.title }];

  return (
    <article
      id={`project-${project.id}`}
      style={{
        background: usesHoveredSkill ? 'rgba(255, 255, 255, 0.04)' : 'var(--bg-secondary)',
        border: usesHoveredSkill ? '1px solid rgba(255, 255, 255, 0.25)' : '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        padding: 'clamp(14px, 1.8vw, 20px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '14px',
        transition: 'all 0.25s ease',
        position: 'relative',
      }}
      className="project-parallel-card"
    >
      <div>
        {/* Compact Meta Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            paddingBottom: '10px',
            borderBottom: '1px solid var(--line)',
            marginBottom: '10px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              {project.category}
            </span>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--mint)', boxShadow: '0 0 6px var(--mint)' }} />
                <span>LIVE ON NETLIFY ↗</span>
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.15rem, 1.4vw, 1.35rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            margin: '0 0 6px',
          }}
        >
          {project.title}
        </h3>

        {/* Compact Description (Clamped to 2 lines) */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            lineHeight: 1.5,
            color: 'var(--text-secondary)',
            margin: '0 0 14px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
        </p>

        {/* Large Project Image in BrowserFrame */}
        <div style={{ marginBottom: '14px' }}>
          <BrowserFrame slug={project.id} frame={project.frame !== false}>
            <div
              onClick={() => onOpenDetails(project)}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/9.5',
                maxHeight: '220px',
                cursor: 'pointer',
                overflow: 'hidden',
                background: 'var(--surface)',
              }}
              className="project-frame-clickable group"
            >
              <img
                src={project.image}
                alt={project.imageAlt || project.title}
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.3s ease',
                }}
                className="project-card-img"
              />

              {/* Hover overlay hint */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(12, 13, 17, 0.9) 0%, transparent 60%)',
                  opacity: 0,
                  transition: 'opacity 0.25s ease',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                }}
                className="card-hover-overlay"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: 'var(--mint)',
                    letterSpacing: '0.06em',
                  }}
                >
                  VIEW CASE STUDY →
                </span>
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenLightbox(galleryImages, 0, project.title);
                  }}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--text-primary)',
                    background: 'var(--bg-0)',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid var(--line)',
                  }}
                  className="zoom-btn"
                >
                  EXPAND ↗
                </span>
              </div>
            </div>
          </BrowserFrame>
        </div>

        {/* Technologies List */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
          {project.technologies.slice(0, 6).map((tech, techIdx) => {
            const isHighlight =
              activeHoveredSkill &&
              tech.toLowerCase() === activeHoveredSkill.toLowerCase();
            const isMint = techIdx % 2 === 0;

            return (
              <span
                key={tech}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  padding: '2px 7px',
                  borderRadius: 'var(--radius-xs)',
                  background: isHighlight ? 'rgba(255, 255, 255, 0.12)' : 'var(--surface)',
                  border: isHighlight 
                    ? '1px solid rgba(255, 255, 255, 0.35)' 
                    : '1px solid var(--border)',
                  color: isHighlight ? '#FFFFFF' : 'var(--text-secondary)',
                  letterSpacing: '0.02em',
                  transition: 'all 0.15s ease',
                }}
              >
                {tech}
              </span>
            );
          })}
          {project.technologies.length > 6 && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                padding: '2px 6px',
                color: 'var(--muted)',
              }}
            >
              +{project.technologies.length - 6} more
            </span>
          )}
        </div>
      </div>

      {/* Action Links Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '12px',
          borderTop: '1px solid var(--line)',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 700,
                color: '#0B0C0E',
                background: '#FFFFFF',
                padding: '5px 12px',
                borderRadius: 'var(--radius-xs)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(255, 255, 255, 0.15)',
              }}
              className="proj-live-btn"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>LIVE DEMO</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              className="proj-link-hover"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>

        {/* View Project Button */}
        <button
          onClick={() => onOpenDetails(project)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.04em',
            cursor: 'pointer',
            padding: 0,
            transition: 'color 0.2s ease',
          }}
          className="proj-view-btn"
        >
          <span>CASE STUDY</span>
          <ArrowRight className="w-3.5 h-3.5" style={{ color: '#FFFFFF' }} />
        </button>
      </div>

      <style>{`
        .project-parallel-card:hover {
          border-color: rgba(255, 255, 255, 0.22);
          transform: translateY(-2px);
          box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.65);
        }

        .project-frame-clickable:hover .project-card-img {
          transform: scale(1.02);
        }

        .project-frame-clickable:hover .card-hover-overlay {
          opacity: 1 !important;
        }

        .proj-link-hover:hover {
          color: #FFFFFF !important;
          border-color: rgba(255, 255, 255, 0.25) !important;
        }

        .proj-live-btn:hover {
          background: #E4E4E7 !important;
          transform: translateY(-1px);
        }

        .proj-view-btn:hover {
          color: #FFFFFF !important;
        }
      `}</style>
    </article>
  );
}

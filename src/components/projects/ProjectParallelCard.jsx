import React from 'react';
import { ArrowUpRight, ExternalLink, Maximize2 } from 'lucide-react';
import { BrowserFrame } from '@/components/ui/BrowserFrame';
import { GithubIcon } from '@/components/ui/BrandIcons';

export function ProjectParallelCard({
  project,
  index,
  activeHoveredSkill = null,
  onOpenDetails = () => {},
  onOpenLightbox = () => {},
}) {
  const isReversed = index % 2 === 1;
  const isLargeHero = index === 2; // Project 03 distinct rhythm

  const galleryImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [{ src: project.image, alt: project.imageAlt || project.title, caption: project.title }];

  const handleImageClick = () => {
    onOpenLightbox(galleryImages, 0, project.title);
  };

  return (
    <article
      id={`project-${project.id}`}
      className={`project-editorial-item ${isReversed ? 'is-reversed' : ''} ${isLargeHero ? 'is-hero-layout' : ''}`}
    >
      {/* =========================================================
          MEDIA COLUMN: Prominent Browser Screenshot with Hover Zoom
          ========================================================= */}
      <div className="project-media-col">
        <div
          className="project-screenshot-box"
          onClick={handleImageClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') handleImageClick(); }}
          aria-label={`View full screenshot for ${project.title}`}
        >
          <BrowserFrame slug={project.id} frame={true}>
            <div className="project-image-aspect">
              <img
                src={project.image}
                alt={project.imageAlt || project.title}
                className="project-actual-img"
                loading="lazy"
              />
              <div className="project-image-hover-hint">
                <Maximize2 className="w-4 h-4" />
                <span>EXPAND SCREENSHOT</span>
              </div>
            </div>
          </BrowserFrame>
        </div>
      </div>

      {/* =========================================================
          CONTENT COLUMN: Title, Meta, Description, Tech, Links
          ========================================================= */}
      <div className="project-content-col">
        
        {/* Project Meta Bar */}
        <div className="project-meta-bar">
          <span className="project-number">PROJECT 0{index + 1}</span>
          <span className="project-meta-sep">/</span>
          <span className="project-category">{project.category}</span>
          {project.year && (
            <>
              <span className="project-meta-sep">/</span>
              <span className="project-year">{project.year}</span>
            </>
          )}
        </div>

        {/* Project Title */}
        <h3 className="project-title">
          {project.title}
        </h3>

        {/* Verified Subtitle */}
        {project.subtitle && (
          <p className="project-subtitle">
            {project.subtitle}
          </p>
        )}

        {/* Verified Description */}
        <p className="project-description">
          {project.description}
        </p>

        {/* Key Features / Highlights */}
        {project.features && project.features.length > 0 && (
          <div className="project-highlights-list">
            {project.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="project-highlight-line">
                <span className="project-highlight-bullet">&rarr;</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Technologies List */}
        <div className="project-tech-row">
          <span className="project-tech-heading">STACK:</span>
          <div className="project-tech-tags">
            {project.technologies.map((tech) => (
              <span key={tech} className="project-tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="project-actions-row">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn-primary"
            >
              <span>LIVE DEMO</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn-secondary"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>SOURCE CODE</span>
            </a>
          )}

          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="project-btn-details"
          >
            <span>VIEW CASE STUDY &rarr;</span>
          </button>
        </div>

      </div>

      <style>{`
        .project-editorial-item {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(28px, 4vw, 48px);
          align-items: center;
          padding: clamp(32px, 5vw, 56px) 0;
          border-bottom: 1px solid var(--border);
        }

        .project-editorial-item:last-child {
          border-bottom: none;
        }

        @media (min-width: 992px) {
          .project-editorial-item {
            grid-template-columns: 1.15fr 0.95fr;
          }

          .project-editorial-item.is-reversed {
            grid-template-columns: 0.95fr 1.15fr;
          }

          .project-editorial-item.is-reversed .project-media-col {
            order: 2;
          }

          .project-editorial-item.is-reversed .project-content-col {
            order: 1;
          }
        }

        /* Media Column */
        .project-screenshot-box {
          cursor: zoom-in;
          position: relative;
          transition: transform 0.25s ease;
        }

        .project-screenshot-box:hover {
          transform: translateY(-2px);
        }

        .project-image-aspect {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #EEECE5;
        }

        .project-actual-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
          transition: transform 0.35s ease;
        }

        .project-screenshot-box:hover .project-actual-img {
          transform: scale(1.02);
        }

        .project-image-hover-hint {
          position: absolute;
          inset: 0;
          background: rgba(32, 35, 31, 0.4);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #FFFFFF;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          font-weight: 600;
          transition: opacity 0.2s ease;
        }

        .project-screenshot-box:hover .project-image-hover-hint {
          opacity: 1;
        }

        /* Content Column */
        .project-content-col {
          display: flex;
          flex-direction: column;
        }

        .project-meta-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          margin-bottom: 12px;
          flex-wrap: wrap;
        }

        .project-number {
          color: var(--accent);
          font-weight: 700;
        }

        .project-meta-sep {
          color: var(--border);
        }

        .project-category {
          color: var(--text-primary);
          font-weight: 600;
          text-transform: uppercase;
        }

        .project-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 2.4vw, 2.3rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          color: var(--text-primary);
          line-height: 1.15;
          margin: 0 0 6px;
        }

        .project-subtitle {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--accent);
          margin: 0 0 14px;
          font-weight: 500;
        }

        .project-description {
          font-family: var(--font-body);
          font-size: 14.5px;
          line-height: 1.65;
          color: var(--text-secondary);
          margin: 0 0 18px;
          max-width: 58ch;
        }

        .project-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 20px;
          padding: 12px 16px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
        }

        .project-highlight-line {
          display: flex;
          align-items: baseline;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--text-primary);
          line-height: 1.45;
        }

        .project-highlight-bullet {
          color: var(--accent);
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
        }

        .project-tech-row {
          display: flex;
          align-items: baseline;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .project-tech-heading {
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 700;
        }

        .project-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .project-tech-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          padding: 3px 9px;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          color: var(--text-primary);
          border-radius: var(--radius-xs);
          font-weight: 500;
        }

        .project-actions-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .project-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 16px;
          background: var(--accent);
          color: #FFFFFF;
          border: 1px solid var(--accent);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-decoration: none;
          transition: all 0.15s ease;
        }

        .project-btn-primary:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
        }

        .project-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 16px;
          background: var(--surface);
          color: var(--text-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-decoration: none;
          transition: all 0.15s ease;
        }

        .project-btn-secondary:hover {
          background: var(--bg-secondary);
          transform: translateY(-1px);
        }

        .project-btn-details {
          background: none;
          border: none;
          font-family: var(--font-mono);
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          cursor: pointer;
          padding: 8px 10px;
          text-decoration: underline;
          text-decoration-color: var(--accent);
          text-underline-offset: 4px;
          transition: color 0.15s ease;
        }

        .project-btn-details:hover {
          color: var(--accent);
        }
      `}</style>
    </article>
  );
}

import React from 'react';
import { ArrowUpRight, ExternalLink, Maximize2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';

export function ProjectParallelCard({
  project,
  index,
  activeHoveredSkill = null,
  onOpenDetails = () => {},
  onOpenLightbox = () => {},
}) {
  const isReversed = index % 2 === 1;

  const galleryImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [{ src: project.image, alt: project.imageAlt || project.title, caption: project.title }];

  const handleImageClick = () => {
    onOpenLightbox(galleryImages, 0, project.title);
  };

  return (
    <article
      id={`project-${project.id}`}
      className={`featured-case-study ${isReversed ? 'is-reversed' : ''}`}
    >
      {/* =========================================================
          MEDIA COLUMN: Large Real Project Screenshot in Paper Frame
          ========================================================= */}
      <div className="case-study-media-col">
        <div
          className="case-study-frame"
          onClick={handleImageClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') handleImageClick(); }}
          aria-label={`Enlarge screenshot for ${project.title}`}
        >
          {/* Subtle Paper Frame Header */}
          <div className="case-study-frame-top">
            <div className="case-study-frame-dots">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <span className="case-study-frame-url">
              https://{project.id}.app
            </span>
            <span className="case-study-frame-tag">SCREENSHOT</span>
          </div>

          {/* Actual Unfiltered Project Image */}
          <div className="case-study-image-wrapper">
            <img
              src={project.image}
              alt={project.imageAlt || project.title}
              className="case-study-actual-image"
              loading="lazy"
            />
            <div className="case-study-zoom-overlay">
              <Maximize2 className="w-4 h-4" />
              <span>CLICK TO EXPAND SCREENSHOT</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          CONTENT COLUMN: Number, Title, Description, Stack, CTAs
          ========================================================= */}
      <div className="case-study-content-col">
        
        {/* Project Number & Category Tag */}
        <div className="case-study-meta-line">
          <span className="case-study-num">0{index + 1}</span>
          <span className="case-study-meta-divider">/</span>
          <span className="case-study-category">{project.category}</span>
          {project.year && (
            <>
              <span className="case-study-meta-divider">/</span>
              <span className="case-study-year">{project.year}</span>
            </>
          )}
        </div>

        {/* Dynamic Growing Accent Line on Hover */}
        <div className="case-study-accent-line" />

        {/* Project Title */}
        <h3 className="case-study-title">
          {project.title}
        </h3>

        {/* Project Subtitle */}
        {project.subtitle && (
          <p className="case-study-subtitle">
            {project.subtitle}
          </p>
        )}

        {/* Short Verified Description */}
        <p className="case-study-description">
          {project.description}
        </p>

        {/* Highlights / Features */}
        {project.features && project.features.length > 0 && (
          <div className="case-study-features-box">
            {project.features.slice(0, 3).map((feat, fIdx) => (
              <div key={fIdx} className="case-study-feature-item">
                <span className="case-study-feature-bullet">&rarr;</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Technologies List */}
        <div className="case-study-stack-row">
          <span className="case-study-stack-label">STACK:</span>
          <div className="case-study-stack-pills">
            {project.technologies.map((tech) => (
              <span key={tech} className="case-study-tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="case-study-actions-row">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-primary"
            >
              <span>LIVE DEMO</span>
              <ExternalLink className="w-3.5 h-3.5 btn-arrow" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-secondary"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>SOURCE CODE</span>
            </a>
          )}

          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="case-study-details-link"
          >
            <span>CASE STUDY &amp; SPECS</span>
            <span className="details-arrow">&rarr;</span>
          </button>
        </div>

      </div>

      <style>{`
        .featured-case-study {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(28px, 4.5vw, 56px);
          align-items: center;
          padding: clamp(36px, 5.5vw, 64px) 0;
          border-bottom: 1px solid var(--border);
        }

        .featured-case-study:last-child {
          border-bottom: none;
        }

        @media (min-width: 992px) {
          .featured-case-study {
            grid-template-columns: 1.15fr 0.95fr;
          }

          .featured-case-study.is-reversed {
            grid-template-columns: 0.95fr 1.15fr;
          }

          .featured-case-study.is-reversed .case-study-media-col {
            order: 2;
          }

          .featured-case-study.is-reversed .case-study-content-col {
            order: 1;
          }
        }

        /* Media Column */
        .case-study-frame {
          background: var(--surface); /* Paper surface #F2EFE7 */
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          overflow: hidden;
          cursor: zoom-in;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .case-study-frame:hover {
          transform: translateY(-2px);
          border-color: var(--border-strong);
        }

        .case-study-frame-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 14px;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border);
        }

        .case-study-frame-dots {
          display: flex;
          gap: 5px;
        }

        .case-study-frame-dots .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--border-strong);
        }

        .case-study-frame-url {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-secondary);
          letter-spacing: 0.04em;
        }

        .case-study-frame-tag {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--accent);
          letter-spacing: 0.08em;
          font-weight: 700;
        }

        .case-study-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: var(--bg-0);
        }

        .case-study-actual-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
          transition: transform 0.35s ease;
        }

        .case-study-frame:hover .case-study-actual-image {
          transform: scale(1.025);
        }

        .case-study-zoom-overlay {
          position: absolute;
          inset: 0;
          background: rgba(36, 39, 32, 0.45);
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

        .case-study-frame:hover .case-study-zoom-overlay {
          opacity: 1;
        }

        /* Content Column */
        .case-study-content-col {
          display: flex;
          flex-direction: column;
        }

        .case-study-meta-line {
          display: flex;
          align-items: baseline;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          margin-bottom: 8px;
          flex-wrap: wrap;
        }

        .case-study-num {
          color: var(--accent); /* Olive */
          font-weight: 700;
          font-size: 13px;
        }

        .case-study-meta-divider {
          color: var(--border-strong);
        }

        .case-study-category {
          color: var(--text-primary);
          font-weight: 600;
          text-transform: uppercase;
        }

        .case-study-year {
          color: var(--text-muted);
        }

        /* Growing Accent Line */
        .case-study-accent-line {
          width: 28px;
          height: 2px;
          background: var(--accent);
          margin-bottom: 12px;
          transition: width 0.25s ease;
        }

        .featured-case-study:hover .case-study-accent-line {
          width: 48px;
        }

        .case-study-title {
          font-family: var(--font-display);
          font-size: clamp(1.65rem, 2.5vw, 2.35rem);
          font-weight: 800;
          letter-spacing: -0.025em;
          color: var(--text-primary);
          line-height: 1.15;
          margin: 0 0 6px;
        }

        .case-study-subtitle {
          font-family: var(--font-mono);
          font-size: 11.5px;
          color: var(--accent-secondary); /* Muted copper */
          margin: 0 0 14px;
          font-weight: 600;
        }

        .case-study-description {
          font-family: var(--font-body);
          font-size: 14.5px;
          line-height: 1.65;
          color: var(--text-secondary);
          margin: 0 0 18px;
          max-width: 56ch;
        }

        .case-study-features-box {
          display: flex;
          flex-direction: column;
          gap: 5px;
          margin-bottom: 18px;
          padding: 12px 14px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
        }

        .case-study-feature-item {
          display: flex;
          align-items: baseline;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 12.5px;
          color: var(--text-primary);
          line-height: 1.45;
        }

        .case-study-feature-bullet {
          color: var(--accent);
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
        }

        .case-study-stack-row {
          display: flex;
          align-items: baseline;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .case-study-stack-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 700;
        }

        .case-study-stack-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .case-study-tech-pill {
          font-family: var(--font-mono);
          font-size: 11px;
          padding: 3px 8px;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          color: var(--text-primary);
          border-radius: var(--radius-xs);
          font-weight: 500;
        }

        .case-study-actions-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .case-study-details-link {
          background: none;
          border: none;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          cursor: pointer;
          padding: 8px 10px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: underline;
          text-decoration-color: var(--accent);
          text-underline-offset: 4px;
          transition: color 0.15s ease;
        }

        .case-study-details-link:hover {
          color: var(--accent);
        }

        .details-arrow {
          transition: transform 0.2s ease;
        }

        .case-study-details-link:hover .details-arrow {
          transform: translateX(3px);
        }
      `}</style>
    </article>
  );
}

import React from 'react';
import { ExternalLink, Maximize2, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';

// Official Technology Documentation Websites Map
const techUrlMap = {
  "React.js": "https://react.dev/",
  "React": "https://react.dev/",
  "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "HTML5": "https://developer.mozilla.org/en-US/docs/Web/HTML",
  "CSS3": "https://developer.mozilla.org/en-US/docs/Web/CSS",
  "Java": "https://dev.java/",
  "Spring Boot": "https://spring.io/projects/spring-boot",
  "MongoDB": "https://www.mongodb.com/",
  "REST APIs": "https://restfulapi.net/",
  "C": "https://en.cppreference.com/w/c",
  "C++": "https://isocpp.org/",
  "Linux": "https://www.kernel.org/",
  "Operating Systems": "https://en.wikipedia.org/wiki/Operating_system",
  "Cryptographic Hashing": "https://en.wikipedia.org/wiki/Cryptographic_hash_function",
  "Security Protocols": "https://en.wikipedia.org/wiki/Communications_protocol#Security",
  "Google Gemini API": "https://ai.google.dev/",
  "Local Storage API": "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
  "Netlify CI/CD": "https://www.netlify.com/",
};

export function ProjectParallelCard({
  project,
  index,
  onOpenDetails = () => {},
  onOpenLightbox = () => {},
}) {
  const galleryImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [{ src: project.image, alt: project.imageAlt || project.title, caption: project.title }];

  const handleImageClick = () => {
    onOpenLightbox(galleryImages, 0, project.title);
  };

  return (
    <article
      id={`project-${project.id}`}
      className="project-compact-card"
    >
      {/* Top Media: Project Screenshot with Aspect Ratio 16:9 & Zoom Action */}
      <div
        className="project-card-media-box"
        onClick={handleImageClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') handleImageClick(); }}
        aria-label={`Enlarge screenshot for ${project.title}`}
      >
        <div className="project-card-media-bar">
          <span className="project-card-category-tag">{project.category.split('/')[0].trim()}</span>
          <span className="project-card-zoom-hint">
            <Maximize2 className="w-3 h-3" />
            <span>ZOOM</span>
          </span>
        </div>

        <div className="project-card-img-wrap">
          <img
            src={project.image}
            alt={project.imageAlt || project.title}
            className="project-card-img"
            loading="lazy"
          />
        </div>
      </div>

      {/* Card Content: Title, Summary, Technologies & Actions */}
      <div className="project-card-body">
        
        {/* Title & Subtitle */}
        <div className="project-card-title-group">
          <h3 className="project-card-title">{project.title}</h3>
          {project.subtitle && (
            <p className="project-card-subtitle">{project.subtitle}</p>
          )}
        </div>

        {/* Concise Description */}
        <p className="project-card-desc">
          {project.description}
        </p>

        {/* Key Points (Short, To-the-point) */}
        {project.features && project.features.length > 0 && (
          <div className="project-card-highlights">
            {project.features.slice(0, 2).map((feat, fIdx) => (
              <div key={fIdx} className="project-card-feat-item">
                <span className="project-card-bullet">&bull;</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills — Responsive & Links to Official Sites */}
        <div className="project-card-tech-section">
          <span className="project-card-tech-label">TECHNOLOGIES:</span>
          <div className="project-card-tech-pills">
            {project.technologies.map((tech) => {
              const url = techUrlMap[tech];
              return url ? (
                <a
                  key={tech}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-tech-badge is-link"
                  title={`Official website for ${tech}`}
                >
                  <span>{tech}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              ) : (
                <span key={tech} className="project-tech-badge">
                  {tech}
                </span>
              );
            })}
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="project-card-actions">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-primary btn-sm"
            >
              <span>LIVE DEMO</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-secondary btn-sm"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>SOURCE</span>
            </a>
          )}

          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="project-details-btn"
          >
            <span>SPECS &amp; CASE STUDY &rarr;</span>
          </button>
        </div>

      </div>

      <style>{`
        .project-compact-card {
          background: var(--surface); /* #F2EFE7 */
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.02);
        }

        .project-compact-card:hover {
          transform: translateY(-2px);
          border-color: var(--accent);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
        }

        /* Media Box */
        .project-card-media-box {
          position: relative;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border);
          cursor: zoom-in;
          overflow: hidden;
        }

        .project-card-media-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background: var(--bg-0);
          border-bottom: 1px solid var(--border);
        }

        .project-card-category-tag {
          font-family: var(--font-mono);
          font-size: 10.5px;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .project-card-zoom-hint {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .project-card-img-wrap {
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: var(--bg-secondary);
        }

        .project-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
          transition: transform 0.3s ease;
        }

        .project-compact-card:hover .project-card-img {
          transform: scale(1.02);
        }

        /* Body */
        .project-card-body {
          padding: clamp(16px, 2.2vw, 22px);
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 12px;
        }

        .project-card-title-group {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .project-card-title {
          font-family: var(--font-display);
          font-size: clamp(1.2rem, 1.4vw, 1.35rem);
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.2;
          margin: 0;
          letter-spacing: -0.015em;
        }

        .project-card-subtitle {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--accent-secondary);
          margin: 0;
          font-weight: 600;
        }

        .project-card-desc {
          font-family: var(--font-body);
          font-size: 13.5px;
          line-height: 1.55;
          color: var(--text-secondary);
          margin: 0;
        }

        .project-card-highlights {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 8px 10px;
          background: var(--bg-0);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xs);
        }

        .project-card-feat-item {
          display: flex;
          align-items: baseline;
          gap: 6px;
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--text-primary);
          line-height: 1.4;
        }

        .project-card-bullet {
          color: var(--accent);
          font-weight: 700;
        }

        /* Tech Section */
        .project-card-tech-section {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-top: 4px;
        }

        .project-card-tech-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 700;
        }

        .project-card-tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .project-tech-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 11px;
          padding: 3px 8px;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          color: var(--text-primary);
          font-weight: 500;
          text-decoration: none;
          transition: all 0.15s ease;
        }

        .project-tech-badge.is-link:hover {
          background: var(--accent-light);
          border-color: var(--accent);
          color: var(--text-primary);
        }

        /* Actions */
        .project-card-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          padding-top: 10px;
          margin-top: auto;
          border-top: 1px solid var(--border);
        }

        .btn-sm {
          padding: 6px 12px !important;
          font-size: 11px !important;
        }

        .project-details-btn {
          background: none;
          border: none;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0;
          text-decoration: underline;
          text-decoration-color: var(--accent);
          text-underline-offset: 3px;
          transition: color 0.15s ease;
          margin-left: auto;
        }

        .project-details-btn:hover {
          color: var(--accent);
        }
      `}</style>
    </article>
  );
}

import React from 'react';
import { Maximize2, ExternalLink } from 'lucide-react';

export function ParallelCertificateCard({ certificate, onOpenCertificate = () => {} }) {
  const handleClick = () => {
    onOpenCertificate(certificate);
  };

  return (
    <article className="cert-editorial-card">
      {/* Visual Preview Area: Actual Certificate Image */}
      <div
        className="cert-visual-wrap"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') handleClick(); }}
        aria-label={`View certificate for ${certificate.title}`}
      >
        <img
          src={certificate.image}
          alt={certificate.title}
          className="cert-actual-image"
          loading="lazy"
        />
        <div className="cert-hover-overlay">
          <Maximize2 className="w-4 h-4" />
          <span>EXPAND CREDENTIAL</span>
        </div>
      </div>

      {/* Information Hierarchy per prompt structure */}
      <div className="cert-details-block">
        
        {/* Kicker: Issuer & Date */}
        <div className="cert-meta-header">
          <div className="cert-issuer-badge">
            <span className="cert-badge-dot" />
            <span>ISSUED BY: {certificate.organization || certificate.provider}</span>
          </div>
          <span className="cert-date-text">{certificate.date || certificate.year}</span>
        </div>

        {/* Certificate Title */}
        <h3 className="cert-title">
          {certificate.title}
        </h3>

        {/* Credential Subtitle / ID */}
        {certificate.subtitle && (
          <p className="cert-subtitle">
            {certificate.subtitle}
          </p>
        )}

        {/* ABOUT (Description) */}
        {certificate.description && (
          <div className="cert-about-section">
            <span className="cert-about-label">ABOUT:</span>
            <p className="cert-about-text">
              {certificate.description}
            </p>
          </div>
        )}

        {/* SKILLS / TECHNOLOGIES */}
        {certificate.skills && certificate.skills.length > 0 && (
          <div className="cert-skills-section">
            <span className="cert-skills-label">SKILLS / TECHNOLOGIES:</span>
            <div className="cert-skills-tags">
              {certificate.skills.map((skill) => (
                <span key={skill} className="cert-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Button: VIEW CERTIFICATE → */}
        <div className="cert-actions-block">
          <button
            type="button"
            onClick={handleClick}
            className="cert-view-btn"
          >
            <span>VIEW CERTIFICATE &rarr;</span>
          </button>

          {certificate.verificationUrl && (
            <a
              href={certificate.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-verify-link"
              title="Official credential registry"
            >
              <span>VERIFY</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

      </div>

      <style>{`
        .cert-editorial-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s ease, transform 0.2s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
        }

        .cert-editorial-card:hover {
          border-color: var(--text-secondary);
          transform: translateY(-2px);
        }

        .cert-visual-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          background: var(--bg-secondary);
          overflow: hidden;
          cursor: zoom-in;
          border-bottom: 1px solid var(--border);
        }

        .cert-actual-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
          transition: transform 0.3s ease;
        }

        .cert-visual-wrap:hover .cert-actual-image {
          transform: scale(1.03);
        }

        .cert-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(32, 35, 31, 0.45);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: #FFFFFF;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          font-weight: 600;
          transition: opacity 0.2s ease;
        }

        .cert-visual-wrap:hover .cert-hover-overlay {
          opacity: 1;
        }

        .cert-details-block {
          padding: clamp(16px, 2.2vw, 22px);
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;
          gap: 14px;
        }

        .cert-meta-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          flex-wrap: wrap;
        }

        .cert-issuer-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.08em;
          color: var(--accent);
          font-weight: 700;
          text-transform: uppercase;
        }

        .cert-badge-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
        }

        .cert-date-text {
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--text-secondary);
        }

        .cert-title {
          font-family: var(--font-display);
          font-size: clamp(1.15rem, 1.4vw, 1.35rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          line-height: 1.25;
          margin: 0;
        }

        .cert-subtitle {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-secondary);
          margin: -6px 0 0;
        }

        .cert-about-section {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .cert-about-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 700;
        }

        .cert-about-text {
          font-family: var(--font-body);
          font-size: 12.5px;
          line-height: 1.55;
          color: var(--text-secondary);
          margin: 0;
        }

        .cert-skills-section {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .cert-skills-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .cert-skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .cert-skill-tag {
          font-family: var(--font-mono);
          font-size: 10.5px;
          padding: 2px 7px;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          color: var(--text-primary);
        }

        .cert-actions-block {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid var(--border);
        }

        .cert-view-btn {
          background: none;
          border: none;
          padding: 0;
          font-family: var(--font-mono);
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          cursor: pointer;
          text-decoration: underline;
          text-decoration-color: var(--accent);
          text-underline-offset: 3px;
          transition: color 0.15s ease;
        }

        .cert-view-btn:hover {
          color: var(--accent);
        }

        .cert-verify-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .cert-verify-link:hover {
          color: var(--accent);
        }
      `}</style>
    </article>
  );
}

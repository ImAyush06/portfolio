import React from 'react';
import { Maximize2, ExternalLink } from 'lucide-react';

export function ParallelCertificateCard({ certificate, onOpenCertificate = () => {} }) {
  const handleClick = () => {
    onOpenCertificate(certificate);
  };

  return (
    <article className="cert-compact-card">
      {/* Top Banner: Blended Certificate Graphic */}
      <div
        className="cert-card-header"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') handleClick(); }}
        aria-label={`View certificate for ${certificate.title}`}
      >
        <img
          src={certificate.image}
          alt={certificate.title}
          className="cert-card-bg-img"
          loading="lazy"
        />
        {/* Soft gradient blend into card surface */}
        <div className="cert-card-gradient-blend" />
      </div>

      {/* Main Data Body — Immediately Visible at First Glance */}
      <div className="cert-card-body">
        
        {/* Issuer & Date Strip */}
        <div className="cert-issuer-strip">
          <span className="cert-issuer-name">{certificate.organization || certificate.provider}</span>
          <span className="cert-issue-date">{certificate.date || certificate.year}</span>
        </div>

        {/* Certificate Title */}
        <h3 className="cert-title">
          {certificate.title}
        </h3>

        {/* Short to-the-point description */}
        {certificate.subtitle && (
          <p className="cert-subtitle">
            {certificate.subtitle}
          </p>
        )}

        {/* Skills Pills */}
        {certificate.skills && certificate.skills.length > 0 && (
          <div className="cert-skills-row">
            {certificate.skills.map((skill) => (
              <span key={skill} className="cert-skill-pill">
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Action Row */}
        <div className="cert-action-row">
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
              title="Verify credential on official portal"
            >
              <span>VERIFY</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

      </div>

      <style>{`
        .cert-compact-card {
          background: var(--surface); /* #F2EFE7 */
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
        }

        .cert-compact-card:hover {
          transform: translateY(-2px);
          border-color: var(--accent);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
        }

        /* Blended Certificate Header */
        .cert-card-header {
          position: relative;
          width: 100%;
          height: 96px;
          background: var(--bg-secondary);
          overflow: hidden;
          cursor: zoom-in;
          border-bottom: 1px solid var(--border-subtle);
        }

        .cert-card-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          opacity: 0.72;
          filter: contrast(0.96) saturate(0.9);
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .cert-compact-card:hover .cert-card-bg-img {
          transform: scale(1.04);
          opacity: 0.88;
        }

        /* Gradient mask blending the certificate into the card background */
        .cert-card-gradient-blend {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(242, 239, 231, 0.15) 0%,
            rgba(242, 239, 231, 0.7) 65%,
            var(--surface) 100%
          );
          pointer-events: none;
        }

        .cert-card-zoom-pill {
          position: absolute;
          top: 8px;
          right: 8px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(36, 39, 32, 0.75);
          color: #FFFFFF;
          padding: 2px 7px;
          border-radius: var(--radius-xs);
          font-family: var(--font-mono);
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.04em;
          opacity: 0.85;
          transition: opacity 0.2s ease;
        }

        .cert-compact-card:hover .cert-card-zoom-pill {
          opacity: 1;
          background: var(--accent);
        }

        /* Body */
        .cert-card-body {
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 8px;
        }

        .cert-issuer-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
        }

        .cert-issuer-name {
          font-family: var(--font-mono);
          font-size: 10.5px;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .cert-issue-date {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
        }

        .cert-title {
          font-family: var(--font-display);
          font-size: 15.5px;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.25;
          margin: 0;
          letter-spacing: -0.015em;
        }

        .cert-subtitle {
          font-family: var(--font-body);
          font-size: 12.5px;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.4;
        }

        .cert-skills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: 2px;
        }

        .cert-skill-pill {
          font-family: var(--font-mono);
          font-size: 10.5px;
          padding: 2px 6px;
          background: var(--bg-0);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          color: var(--text-primary);
          font-weight: 500;
        }

        .cert-action-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 10px;
          margin-top: auto;
          border-top: 1px solid var(--border-subtle);
        }

        .cert-view-btn {
          background: none;
          border: none;
          padding: 0;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
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
          gap: 3px;
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

import React from 'react';
import { Maximize2, ExternalLink } from 'lucide-react';

export function ParallelCertificateCard({ certificate, onOpenCertificate = () => {} }) {
  const handleClick = () => {
    onOpenCertificate(certificate);
  };

  return (
    <article className="cert-gallery-item">
      {/* IMAGE-FIRST: Actual certificate image with natural aspect framing */}
      <div
        className="cert-image-frame"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') handleClick(); }}
        aria-label={`Expand certificate for ${certificate.title}`}
      >
        <img
          src={certificate.image}
          alt={certificate.title}
          className="cert-image-media"
          loading="lazy"
        />
        <div className="cert-image-hover-curtain">
          <Maximize2 className="w-4 h-4" />
          <span>EXPAND CREDENTIAL</span>
        </div>
      </div>

      {/* Supporting Information Under Certificate */}
      <div className="cert-meta-container">
        
        {/* Issuer & Date Strip */}
        <div className="cert-issuer-strip">
          <div className="cert-issuer-pill">
            <span className="cert-issuer-bullet" />
            <span>{certificate.organization || certificate.provider}</span>
          </div>
          <span className="cert-date-caption">{certificate.date || certificate.year}</span>
        </div>

        {/* Certificate Title */}
        <h3 className="cert-heading">
          {certificate.title}
        </h3>

        {/* Credential Subtitle */}
        {certificate.subtitle && (
          <p className="cert-sub-text">
            {certificate.subtitle}
          </p>
        )}

        {/* Description */}
        {certificate.description && (
          <p className="cert-description-text">
            {certificate.description}
          </p>
        )}

        {/* Relevant Skills */}
        {certificate.skills && certificate.skills.length > 0 && (
          <div className="cert-skills-wrap">
            <span className="cert-skills-label">SKILLS:</span>
            <div className="cert-skills-pills">
              {certificate.skills.map((skill) => (
                <span key={skill} className="cert-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Link: View Certificate */}
        <div className="cert-footer-row">
          <button
            type="button"
            onClick={handleClick}
            className="cert-expand-link"
          >
            <span>VIEW CERTIFICATE &rarr;</span>
          </button>

          {certificate.verificationUrl && (
            <a
              href={certificate.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-external-verify"
              title="Verify credential"
            >
              <span>VERIFY</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

      </div>

      <style>{`
        .cert-gallery-item {
          background: var(--surface); /* Paper surface #F2EFE7 */
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, border-color 0.2s ease;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.02);
        }

        .cert-gallery-item:hover {
          transform: translateY(-2px);
          border-color: var(--border-strong);
        }

        /* Image-First Presentation */
        .cert-image-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          background: var(--bg-secondary);
          overflow: hidden;
          cursor: zoom-in;
          border-bottom: 1px solid var(--border);
        }

        .cert-image-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
          transition: transform 0.3s ease;
        }

        .cert-image-frame:hover .cert-image-media {
          transform: scale(1.03);
        }

        .cert-image-hover-curtain {
          position: absolute;
          inset: 0;
          background: rgba(36, 39, 32, 0.45);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: #FFFFFF;
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.08em;
          font-weight: 600;
          transition: opacity 0.2s ease;
        }

        .cert-image-frame:hover .cert-image-hover-curtain {
          opacity: 1;
        }

        /* Meta Container */
        .cert-meta-container {
          padding: clamp(16px, 2.2vw, 22px);
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;
          gap: 12px;
        }

        .cert-issuer-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          flex-wrap: wrap;
        }

        .cert-issuer-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.08em;
          color: var(--accent); /* Olive */
          font-weight: 700;
          text-transform: uppercase;
        }

        .cert-issuer-bullet {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
        }

        .cert-date-caption {
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--text-muted);
        }

        .cert-heading {
          font-family: var(--font-display);
          font-size: clamp(1.15rem, 1.4vw, 1.35rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          line-height: 1.25;
          margin: 0;
        }

        .cert-sub-text {
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--text-secondary);
          margin: -4px 0 0;
        }

        .cert-description-text {
          font-family: var(--font-body);
          font-size: 12.5px;
          line-height: 1.55;
          color: var(--text-secondary);
          margin: 0;
        }

        .cert-skills-wrap {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .cert-skills-label {
          font-family: var(--font-mono);
          font-size: 9.5px;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 700;
        }

        .cert-skills-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .cert-skill-tag {
          font-family: var(--font-mono);
          font-size: 10.5px;
          padding: 2px 7px;
          background: var(--bg-0);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          color: var(--text-primary);
        }

        .cert-footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 10px;
          border-top: 1px solid var(--border);
        }

        .cert-expand-link {
          background: none;
          border: none;
          padding: 0;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          cursor: pointer;
          text-decoration: underline;
          text-decoration-color: var(--accent);
          text-underline-offset: 3px;
          transition: color 0.15s ease;
        }

        .cert-expand-link:hover {
          color: var(--accent);
        }

        .cert-external-verify {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .cert-external-verify:hover {
          color: var(--accent);
        }
      `}</style>
    </article>
  );
}

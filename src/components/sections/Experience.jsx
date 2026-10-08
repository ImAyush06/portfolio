import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, Maximize2 } from 'lucide-react';
import { SectionShell } from '@/components/layout/SectionShell';
import { experience } from '@/data/experience';
import Lightbox from '@/components/ui/Lightbox';

export function Experience() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!experience || experience.length === 0) return null;

  const item = experience[0]; // Summer Training 2026

  const handleOpenCertificate = () => {
    setLightboxOpen(true);
  };

  return (
    <>
      <SectionShell
        id="experience"
        label="TRAINING"
      >
        <div className="training-editorial-wrap">
          
          {/* Editorial Timeline Container */}
          <div className="training-timeline">
            
            {/* Timeline Item */}
            <div className="training-timeline-item">
              
              {/* Left Timeline Pillar: Year & Organization */}
              <div className="training-timeline-left">
                <div className="training-year-tag">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.year || '2026'}</span>
                </div>
                <span className="training-org-name">{item.organization}</span>
                <span className="training-dept-name">{item.department}</span>
                <span className="training-school-name">{item.school}</span>

                <div className="training-merit-badge">
                  <Award className="w-3.5 h-3.5" />
                  <span>{item.grade} &middot; CERTIFICATE OF MERIT</span>
                </div>
              </div>

              {/* Timeline Center Rule & Node */}
              <div className="training-timeline-spine">
                <div className="training-timeline-node" />
                <div className="training-timeline-line" />
              </div>

              {/* Right Content: Title, Summary, Certificate Preview, Skills */}
              <div className="training-timeline-content">
                
                <div className="training-header-block">
                  <div className="training-type-kicker">SUMMER TRAINING &middot; {item.duration}</div>
                  <h3 className="training-program-title">{item.title}</h3>
                  <p className="training-program-subtitle">{item.subtitle}</p>
                </div>

                <p className="training-lead-summary">
                  {item.summary}
                </p>

                <p className="training-detailed-desc">
                  {item.description}
                </p>

                {/* Training Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="training-highlights-box">
                    <span className="training-highlights-heading">PROGRAM HIGHLIGHTS</span>
                    <ul className="training-highlights-list">
                      {item.highlights.map((h, idx) => (
                        <li key={idx} className="training-highlight-item">
                          <span className="training-bullet">&rarr;</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Skills Learned */}
                <div className="training-skills-row">
                  <span className="training-skills-label">COMPETENCIES:</span>
                  <div className="training-skills-tags">
                    {item.skills.map((skill) => (
                      <span key={skill} className="training-skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certificate Document Thumbnail Preview */}
                <div className="training-cert-preview-card">
                  <div
                    className="training-cert-thumb-wrap"
                    onClick={handleOpenCertificate}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleOpenCertificate(); }}
                    aria-label="View official Certificate of Merit in Lightbox"
                  >
                    <img
                      src={item.image}
                      alt="LPU Certificate of Merit"
                      className="training-cert-thumb-img"
                    />
                    <div className="training-cert-overlay">
                      <Maximize2 className="w-4 h-4" />
                      <span>VIEW FULL CERTIFICATE</span>
                    </div>
                  </div>

                  <div className="training-cert-info">
                    <span className="training-cert-doc-title">OFFICIAL UNIVERSITY CREDENTIAL</span>
                    <p className="training-cert-meta">
                      Issued by Lovely Professional University on {item.date} &middot; Certificate No. {item.certificateNo}
                    </p>
                    <div className="training-cert-actions">
                      <button
                        type="button"
                        onClick={handleOpenCertificate}
                        className="training-cert-btn"
                      >
                        <span>EXPAND DOCUMENT &rarr;</span>
                      </button>
                      <a
                        href={item.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="training-cert-link"
                      >
                        <span>LPU.IN</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </SectionShell>

      {/* Lightbox for Training Certificate */}
      <Lightbox
        isOpen={lightboxOpen}
        images={[{ src: item.image, alt: item.title, caption: `${item.title} — ${item.organization}` }]}
        currentIndex={0}
        title={item.title}
        onClose={() => setLightboxOpen(false)}
      />

      <style>{`
        .training-editorial-wrap {
          width: 100%;
        }

        .training-timeline {
          display: flex;
          flex-direction: column;
        }

        .training-timeline-item {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          position: relative;
        }

        @media (min-width: 992px) {
          .training-timeline-item {
            grid-template-columns: 260px 32px 1fr;
            gap: 0;
          }
        }

        /* Timeline Left */
        .training-timeline-left {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-right: 24px;
        }

        .training-year-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--accent);
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 4px 10px;
          border-radius: var(--radius-xs);
          width: fit-content;
        }

        .training-org-name {
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
          margin-top: 6px;
        }

        .training-dept-name {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--text-secondary);
        }

        .training-school-name {
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--text-secondary);
        }

        .training-merit-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 10px;
          padding: 4px 10px;
          background: var(--accent-soft);
          border: 1px solid #D1DAC7;
          border-radius: var(--radius-xs);
          font-family: var(--font-mono);
          font-size: 10.5px;
          font-weight: 700;
          color: var(--accent);
          width: fit-content;
        }

        /* Timeline Spine */
        .training-timeline-spine {
          display: none;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        @media (min-width: 992px) {
          .training-timeline-spine {
            display: flex;
          }
        }

        .training-timeline-node {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--accent);
          border: 2px solid var(--surface);
          box-shadow: 0 0 0 1px var(--accent);
          margin-top: 8px;
          z-index: 2;
        }

        .training-timeline-line {
          width: 1px;
          flex: 1;
          background: var(--border);
          margin-top: 4px;
        }

        /* Timeline Content Right */
        .training-timeline-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-left: 0;
        }

        @media (min-width: 992px) {
          .training-timeline-content {
            padding-left: 28px;
          }
        }

        .training-type-kicker {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 600;
          margin-bottom: 4px;
        }

        .training-program-title {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 2.2vw, 1.9rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          color: var(--text-primary);
          line-height: 1.25;
          margin: 0 0 6px;
        }

        .training-program-subtitle {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-secondary);
          margin: 0;
        }

        .training-lead-summary {
          font-family: var(--font-body);
          font-size: 14.5px;
          line-height: 1.65;
          color: var(--text-primary);
          font-weight: 500;
          margin: 0;
        }

        .training-detailed-desc {
          font-family: var(--font-body);
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
        }

        .training-highlights-box {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .training-highlights-heading {
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 700;
        }

        .training-highlights-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .training-highlight-item {
          display: flex;
          align-items: baseline;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--text-primary);
        }

        .training-bullet {
          color: var(--accent);
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
        }

        .training-skills-row {
          display: flex;
          align-items: baseline;
          gap: 10px;
          flex-wrap: wrap;
        }

        .training-skills-label {
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 700;
        }

        .training-skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .training-skill-pill {
          font-family: var(--font-mono);
          font-size: 11px;
          padding: 3px 9px;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          color: var(--text-primary);
          border-radius: var(--radius-xs);
        }

        /* Certificate Thumbnail Card */
        .training-cert-preview-card {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          padding: 16px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          margin-top: 8px;
          align-items: center;
        }

        @media (min-width: 640px) {
          .training-cert-preview-card {
            grid-template-columns: 160px 1fr;
            gap: 20px;
          }
        }

        .training-cert-thumb-wrap {
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: var(--radius-xs);
          overflow: hidden;
          position: relative;
          cursor: zoom-in;
          border: 1px solid var(--border);
        }

        .training-cert-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .training-cert-overlay {
          position: absolute;
          inset: 0;
          background: rgba(32, 35, 31, 0.45);
          opacity: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: #FFFFFF;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.06em;
          font-weight: 600;
          transition: opacity 0.2s ease;
        }

        .training-cert-thumb-wrap:hover .training-cert-overlay {
          opacity: 1;
        }

        .training-cert-info {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .training-cert-doc-title {
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 700;
        }

        .training-cert-meta {
          font-family: var(--font-body);
          font-size: 12.5px;
          color: var(--text-secondary);
          margin: 0;
        }

        .training-cert-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 6px;
        }

        .training-cert-btn {
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
        }

        .training-cert-btn:hover {
          color: var(--accent);
        }

        .training-cert-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-secondary);
          text-decoration: none;
        }

        .training-cert-link:hover {
          color: var(--accent);
        }
      `}</style>
    </>
  );
}

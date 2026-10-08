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
        <div className="training-editorial-wrapper">
          
          {/* Editorial Timeline Entry */}
          <div className="training-entry-layout">
            
            {/* Left Timeline Pillar: Number, Year & Institution */}
            <div className="training-pillar-col">
              <div className="training-entry-index">
                <span className="training-num">01</span>
                <span className="training-sep">/</span>
                <span className="training-year">{item.year || '2026'}</span>
              </div>

              <h4 className="training-org-title">{item.organization}</h4>
              <span className="training-org-dept">{item.department}</span>
              <span className="training-org-school">{item.school}</span>

              {/* Merit Badge */}
              <div className="training-merit-tag">
                <Award className="w-3.5 h-3.5" />
                <span>{item.grade} &middot; MERIT</span>
              </div>
            </div>

            {/* Subtle Vertical Spine Rule for Desktop */}
            <div className="training-spine-col" aria-hidden="true">
              <div className="training-spine-node" />
              <div className="training-spine-line" />
            </div>

            {/* Right Content Pillar */}
            <div className="training-content-col">
              
              <div className="training-title-block">
                <span className="training-type-label">SUMMER IMMERSION &middot; {item.duration}</span>
                <h3 className="training-program-name">{item.title}</h3>
                <p className="training-program-sub">{item.subtitle}</p>
              </div>

              <p className="training-lead-text">
                {item.summary}
              </p>

              <p className="training-body-text">
                {item.description}
              </p>

              {/* Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="training-highlights-card">
                  <span className="training-highlights-title">KEY CURRICULUM HIGHLIGHTS</span>
                  <div className="training-highlights-grid">
                    {item.highlights.map((h, idx) => (
                      <div key={idx} className="training-highlight-row">
                        <span className="training-highlight-bullet">&rarr;</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills */}
              <div className="training-skills-strip">
                <span className="training-skills-heading">COMPETENCIES:</span>
                <div className="training-skills-list">
                  {item.skills.map((s) => (
                    <span key={s} className="training-skill-pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Official Certificate Preview */}
              <div className="training-cert-dock">
                <div
                  className="training-cert-preview-box"
                  onClick={handleOpenCertificate}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleOpenCertificate(); }}
                  aria-label="Enlarge Certificate of Merit"
                >
                  <img
                    src={item.image}
                    alt="LPU Certificate of Merit"
                    className="training-cert-img"
                  />
                  <div className="training-cert-hover-layer">
                    <Maximize2 className="w-4 h-4" />
                    <span>EXPAND CREDENTIAL</span>
                  </div>
                </div>

                <div className="training-cert-dock-info">
                  <span className="training-cert-dock-tag">OFFICIAL UNIVERSITY CREDENTIAL</span>
                  <p className="training-cert-dock-desc">
                    Issued by Lovely Professional University &middot; Certificate No. {item.certificateNo}
                  </p>
                  <div className="training-cert-dock-links">
                    <button
                      type="button"
                      onClick={handleOpenCertificate}
                      className="training-cert-expand-btn"
                    >
                      <span>VIEW FULL DOCUMENT &rarr;</span>
                    </button>
                    <a
                      href={item.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="training-cert-verify-link"
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
        .training-editorial-wrapper {
          width: 100%;
        }

        .training-entry-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 992px) {
          .training-entry-layout {
            grid-template-columns: 240px 32px 1fr;
            gap: 0;
          }
        }

        /* Left Pillar */
        .training-pillar-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-right: 20px;
        }

        .training-entry-index {
          display: flex;
          align-items: baseline;
          gap: 6px;
          font-family: var(--font-mono);
          margin-bottom: 4px;
        }

        .training-num {
          font-size: 18px;
          font-weight: 800;
          color: var(--accent); /* Olive */
        }

        .training-sep {
          color: var(--border-strong);
        }

        .training-year {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .training-org-title {
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .training-org-dept {
          font-family: var(--font-body);
          font-size: 12.5px;
          color: var(--text-secondary);
        }

        .training-org-school {
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--text-muted);
        }

        .training-merit-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 10px;
          padding: 3px 8px;
          background: var(--accent-light);
          border: 1px solid var(--accent);
          border-radius: var(--radius-xs);
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          color: var(--accent);
          width: fit-content;
        }

        /* Spine */
        .training-spine-col {
          display: none;
          flex-direction: column;
          align-items: center;
        }

        @media (min-width: 992px) {
          .training-spine-col {
            display: flex;
          }
        }

        .training-spine-node {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          border: 2px solid var(--bg-0);
          box-shadow: 0 0 0 1px var(--accent);
          margin-top: 6px;
          z-index: 2;
        }

        .training-spine-line {
          width: 1px;
          flex: 1;
          background: var(--border);
          margin-top: 4px;
        }

        /* Right Content Pillar */
        .training-content-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-left: 0;
        }

        @media (min-width: 992px) {
          .training-content-col {
            padding-left: 28px;
          }
        }

        .training-type-label {
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 4px;
          display: block;
        }

        .training-program-name {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 2.2vw, 1.85rem);
          font-weight: 800;
          letter-spacing: -0.025em;
          color: var(--text-primary);
          line-height: 1.25;
          margin: 0 0 4px;
        }

        .training-program-sub {
          font-family: var(--font-mono);
          font-size: 11.5px;
          color: var(--text-secondary);
          margin: 0;
        }

        .training-lead-text {
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-primary);
          font-weight: 500;
          margin: 0;
        }

        .training-body-text {
          font-family: var(--font-body);
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
        }

        .training-highlights-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .training-highlights-title {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 700;
        }

        .training-highlights-grid {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .training-highlight-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 12.5px;
          color: var(--text-primary);
        }

        .training-highlight-bullet {
          color: var(--accent);
          font-family: var(--font-mono);
          font-weight: 700;
        }

        .training-skills-strip {
          display: flex;
          align-items: baseline;
          gap: 10px;
          flex-wrap: wrap;
        }

        .training-skills-heading {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 700;
        }

        .training-skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .training-skill-pill {
          font-family: var(--font-mono);
          font-size: 10.5px;
          padding: 2px 8px;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          color: var(--text-primary);
        }

        /* Certificate Dock */
        .training-cert-dock {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          padding: 14px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          margin-top: 6px;
          align-items: center;
        }

        @media (min-width: 640px) {
          .training-cert-dock {
            grid-template-columns: 140px 1fr;
            gap: 18px;
          }
        }

        .training-cert-preview-box {
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: var(--radius-xs);
          overflow: hidden;
          position: relative;
          cursor: zoom-in;
          border: 1px solid var(--border);
          background: var(--bg-0);
        }

        .training-cert-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .training-cert-hover-layer {
          position: absolute;
          inset: 0;
          background: rgba(36, 39, 32, 0.45);
          opacity: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          color: #FFFFFF;
          font-family: var(--font-mono);
          font-size: 9.5px;
          letter-spacing: 0.06em;
          font-weight: 600;
          transition: opacity 0.2s ease;
        }

        .training-cert-preview-box:hover .training-cert-hover-layer {
          opacity: 1;
        }

        .training-cert-dock-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .training-cert-dock-tag {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.08em;
          color: var(--accent);
          font-weight: 700;
        }

        .training-cert-dock-desc {
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--text-secondary);
          margin: 0;
        }

        .training-cert-dock-links {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 6px;
        }

        .training-cert-expand-btn {
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

        .training-cert-expand-btn:hover {
          color: var(--accent);
        }

        .training-cert-verify-link {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--text-secondary);
          text-decoration: none;
        }

        .training-cert-verify-link:hover {
          color: var(--accent);
        }
      `}</style>
    </>
  );
}

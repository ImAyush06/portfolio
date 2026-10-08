import React, { useState } from 'react';
import { SectionShell } from '@/components/layout/SectionShell';
import { certificates } from '@/data/certificates';
import { ParallelCertificateCard } from '@/components/certificates/CertificateItem';
import { CertificateModal } from '@/components/certificates/CertificateModal';

export function Certificates() {
  const [activeCertIndex, setActiveCertIndex] = useState(null);

  const handleOpenCertificate = (cert) => {
    const idx = certificates.findIndex((c) => c.id === cert.id);
    setActiveCertIndex(idx >= 0 ? idx : 0);
  };

  const handleCloseModal = () => {
    setActiveCertIndex(null);
  };

  const handleNext = () => {
    setActiveCertIndex((prev) => (prev + 1) % certificates.length);
  };

  const handlePrev = () => {
    setActiveCertIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const activeCert = activeCertIndex !== null ? certificates[activeCertIndex] : null;

  return (
    <>
      <SectionShell
        id="certificates"
        label="CERTIFICATES"
      >
        <div className="certificates-gallery-section">
          
          {/* Note strip */}
          <div className="certificates-intro-strip">
            <span className="certificates-intro-dot" />
            <p className="certificates-intro-text">
              Verified technical credentials from Infosys Springboard validating foundations in C++ object-oriented architecture and database management systems (DBMS).
            </p>
          </div>

          {/* Image-First Gallery Grid */}
          <div className="certificates-gallery-grid">
            {certificates.map((cert) => (
              <ParallelCertificateCard
                key={cert.id}
                certificate={cert}
                onOpenCertificate={handleOpenCertificate}
              />
            ))}
          </div>

        </div>
      </SectionShell>

      {/* Full Aspect-Fit Certificate Modal */}
      <CertificateModal
        certificate={activeCert}
        isOpen={activeCertIndex !== null}
        onClose={handleCloseModal}
        onNext={handleNext}
        onPrev={handlePrev}
        currentIndex={activeCertIndex ?? 0}
        totalCount={certificates.length}
      />

      <style>{`
        .certificates-gallery-section {
          width: 100%;
        }

        .certificates-intro-strip {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: clamp(24px, 3.5vh, 32px);
          padding: 8px 14px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          max-width: fit-content;
        }

        .certificates-intro-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }

        .certificates-intro-text {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.5;
        }

        .certificates-gallery-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(20px, 3vw, 28px);
        }

        @media (min-width: 768px) {
          .certificates-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1040px) {
          .certificates-gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </>
  );
}

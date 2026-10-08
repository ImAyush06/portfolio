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
    <SectionShell
      id="certificates"
      label="CERTIFICATES"
    >
      <div className="certificates-parallel-container">
        <div className="certificates-parallel-grid">
          {certificates.map((cert) => (
            <ParallelCertificateCard
              key={cert.id}
              certificate={cert}
              onOpenCertificate={handleOpenCertificate}
            />
          ))}
        </div>
      </div>

      {/* Full Certificate Modal / Lightbox with Aspect-Fit */}
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
        .certificates-parallel-container {
          width: 100%;
        }

        .certificates-parallel-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(16px, 2.2vw, 24px);
        }

        @media (min-width: 768px) {
          .certificates-parallel-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1040px) {
          .certificates-parallel-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .parallel-cert-card:hover {
          border-color: rgba(56, 189, 248, 0.4) !important;
          box-shadow: 0 16px 36px -10px rgba(56, 189, 248, 0.18), 0 20px 48px -14px rgba(0, 0, 0, 0.8) !important;
          transform: translateY(-2px);
        }

        .cert-frame-hover:hover .cert-img-zoom {
          transform: scale(1.05);
        }

        .cert-frame-hover:hover .cert-overlay-reveal {
          opacity: 1 !important;
        }

        .cert-btn-ghost-hover:hover {
          background: rgba(56, 189, 248, 0.16) !important;
          border-color: rgba(56, 189, 248, 0.55) !important;
          color: #FFFFFF !important;
          box-shadow: 0 4px 14px rgba(56, 189, 248, 0.25) !important;
          transform: translateY(-1px);
        }
      `}</style>
    </SectionShell>
  );
}

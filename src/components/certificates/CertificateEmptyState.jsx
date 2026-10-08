import React from 'react';

export function CertificateEmptyState() {
  return (
    <div
      style={{
        width: '100%',
        padding: 'clamp(32px, 6vw, 64px) clamp(20px, 4vw, 48px)',
        background: 'var(--bg-1)',
        border: '1px dashed var(--line-strong)',
        borderRadius: 'var(--radius-sm)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background fine technical lines */}
      <div
        style={{
          position: 'absolute',
          right: '-40px',
          bottom: '-40px',
          opacity: 0.12,
          pointerEvents: 'none',
        }}
      >
        <svg width="280" height="200" viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Landscape and portrait document silhouettes */}
          <rect x="10" y="10" width="220" height="150" rx="4" stroke="#F4F0E8" strokeWidth="1.5" strokeDasharray="6 6"/>
          <circle cx="120" cy="80" r="28" stroke="#F4F0E8" strokeWidth="1.5"/>
          <line x1="30" y1="130" x2="210" y2="130" stroke="#F4F0E8" strokeWidth="1.5"/>
          <rect x="70" y="40" width="140" height="180" rx="4" stroke="#C8F169" strokeWidth="1.5" strokeDasharray="4 4"/>
        </svg>
      </div>

      <div style={{ maxWidth: '640px', zIndex: 2 }}>
        <span className="mono-kicker" style={{ fontSize: '11px', display: 'block', marginBottom: '8px' }}>
          DOCUMENT ARCHIVE // PENDING CREDENTIAL INTAKE
        </span>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
            color: 'var(--ivory)',
            marginBottom: '12px',
          }}
        >
          Certificates and professional achievements will appear here.
        </h3>

        <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>
          This archive is configured to display verified certifications as full-bleed, aspect-preserved document plates with integrated lightbox inspection.
        </p>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 'var(--radius-sm)' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }} />
          <span className="mono-meta" style={{ fontSize: '11px', color: 'var(--ivory)' }}>
            READY FOR INTAKE VIA src/data/certificates.js
          </span>
        </div>
      </div>
    </div>
  );
}

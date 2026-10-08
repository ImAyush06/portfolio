import React from 'react';
import { 
  Eye, 
  Terminal, 
  Database, 
  ExternalLink
} from 'lucide-react';

/**
 * =========================================================================
 * PARALLEL CERTIFICATE CARD
 * All 3 certificates stand vertical parallel to each other.
 * Features:
 * - Subtle blended document preview (not showing full certificate directly in card).
 * - Click anywhere on preview or action button to open full certificate on-screen modal.
 * - Removed redundant ID strip and QR code buttons as requested.
 * =========================================================================
 */
export function ParallelCertificateCard({ certificate, onOpenCertificate = () => {} }) {
  const isCpp = certificate.id === 'cpp-programming';
  const HeaderIcon = isCpp ? Terminal : Database;

  return (
    <div
      className="parallel-cert-card"
      style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        padding: 'clamp(16px, 2vw, 22px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        boxShadow: '0 12px 32px -10px rgba(0, 0, 0, 0.6)',
        transition: 'all 0.25s ease',
      }}
    >
      <div>
        {/* Top Header Strip: Provider & Verified Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            paddingBottom: '12px',
            borderBottom: '1px solid var(--line)',
            marginBottom: '14px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span
              style={{
                width: '24px',
                height: '24px',
                borderRadius: 'var(--radius-xs)',
                background: 'rgba(56, 189, 248, 0.12)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <HeaderIcon className="w-3.5 h-3.5" style={{ color: '#38BDF8' }} />
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 600,
                color: '#FFFFFF',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              {certificate.provider}
            </span>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              fontWeight: 600,
              color: '#38BDF8',
              background: 'rgba(56, 189, 248, 0.08)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              padding: '2px 8px',
              borderRadius: 'var(--radius-full)',
            }}
          >
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 5px #10B981' }} />
            <span>VERIFIED</span>
          </div>
        </div>

        {/* Certificate Title & Date */}
        <div style={{ marginBottom: '14px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.15rem, 1.4vw, 1.35rem)',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
              margin: '0 0 6px',
            }}
          >
            {certificate.title}
          </h3>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-muted)',
              display: 'block',
              letterSpacing: '0.02em',
            }}
          >
            Issued: {certificate.date}
          </span>
        </div>

        {/* Blended Document Preview Frame — Only upper preview visible, softly blends into dark card */}
        <div
          onClick={() => onOpenCertificate(certificate)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpenCertificate(certificate);
            }
          }}
          aria-label={`View full certificate for ${certificate.title}`}
          style={{
            position: 'relative',
            width: '100%',
            height: '170px',
            borderRadius: 'var(--radius-xs)',
            overflow: 'hidden',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            marginBottom: '12px',
            cursor: 'pointer',
            background: '#0E1726',
          }}
          className="cert-frame-hover"
        >
          {/* Certificate Image preview (partial cover top aligned) */}
          <img
            src={certificate.image}
            alt={certificate.title}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
              transition: 'transform 0.35s ease',
            }}
            className="cert-img-zoom"
          />

          {/* Smooth Gradient Blend fading to card dark navy */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(16, 29, 50, 0.05) 0%, rgba(16, 29, 50, 0.4) 50%, rgba(16, 29, 50, 0.95) 92%, var(--bg-secondary) 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* Subtle bottom preview badges */}
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '12px',
              right: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              pointerEvents: 'none',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                fontWeight: 600,
                color: '#38BDF8',
                background: 'rgba(8, 14, 28, 0.88)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                padding: '3px 8px',
                borderRadius: 'var(--radius-xs)',
                letterSpacing: '0.04em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Eye className="w-3 h-3" />
              <span>CLICK TO EXPAND</span>
            </span>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                color: 'var(--text-muted)',
                background: 'rgba(8, 14, 28, 0.75)',
                padding: '2px 6px',
                borderRadius: 'var(--radius-xs)',
              }}
            >
              DOCUMENT PREVIEW
            </span>
          </div>

          {/* Hover overlay hint */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(6, 12, 24, 0.85)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              opacity: 0,
              transition: 'opacity 0.2s ease',
              color: '#FFFFFF',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 600,
              padding: '12px',
              textAlign: 'center',
            }}
            className="cert-overlay-reveal"
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(56, 189, 248, 0.15)',
                border: '1px solid #38BDF8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#38BDF8',
              }}
            >
              <Eye className="w-4 h-4" />
            </div>
            <span>VIEW FULL CERTIFICATE</span>
          </div>
        </div>

        {/* View Full Certificate Action Button */}
        <button
          onClick={() => onOpenCertificate(certificate)}
          style={{
            width: '100%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            padding: '9px 12px',
            background: 'rgba(56, 189, 248, 0.08)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            color: '#38BDF8',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            fontWeight: 600,
            borderRadius: 'var(--radius-xs)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            marginBottom: '14px',
          }}
          className="cert-btn-ghost-hover"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>VIEW FULL CERTIFICATE</span>
        </button>

        {/* Description directly under the certificate preview */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            lineHeight: 1.55,
            color: 'var(--text-secondary)',
            margin: '0 0 14px',
          }}
        >
          {certificate.description}
        </p>
      </div>

      {/* Skills Pill Footer */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', paddingTop: '8px', borderTop: '1px solid var(--line)' }}>
        {certificate.skills.map((s) => (
          <span
            key={s}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              padding: '2px 8px',
              borderRadius: 'var(--radius-xs)',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
              letterSpacing: '0.02em',
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

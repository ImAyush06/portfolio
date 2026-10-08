import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink, ShieldCheck } from 'lucide-react';
import { useLockBodyScroll, useFocusTrap } from '@/hooks/useHooks';

export function CertificateModal({
  certificate,
  isOpen = false,
  onClose,
  onNext,
  onPrev,
  currentIndex = 0,
  totalCount = 1,
}) {
  const containerRef = useRef(null);

  useLockBodyScroll(isOpen);
  useFocusTrap(containerRef, isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !certificate) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Certificate View: ${certificate.title}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          background: 'rgba(36, 39, 32, 0.75)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 'clamp(16px, 2.5vw, 32px)',
          boxSizing: 'border-box',
        }}
      >
        {/* Top Header Bar */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            paddingBottom: '14px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  background: 'var(--accent)',
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-xs)',
                  letterSpacing: '0.04em',
                }}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{certificate.provider || 'INFOSYS SPRINGBOARD'}</span>
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: '#E9E6DD',
                }}
              >
                {certificate.date || certificate.year}
              </span>
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                margin: 0,
              }}
            >
              {certificate.title}
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: '#E9E6DD',
              }}
            >
              {currentIndex + 1} / {totalCount}
            </span>

            <button
              onClick={onClose}
              aria-label="Close certificate modal"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-xs)',
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Presentation: Authentic Document Image in Pure Ratio */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '16px 0',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            overflow: 'hidden',
          }}
        >
          {/* Previous Button */}
          {totalCount > 1 && (
            <button
              onClick={onPrev}
              aria-label="Previous certificate"
              style={{
                position: 'absolute',
                left: '8px',
                zIndex: 10,
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-xs)',
                background: 'rgba(36, 39, 32, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Certificate Image Frame */}
          <div
            style={{
              maxHeight: '75vh',
              maxWidth: '92%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45)',
              borderRadius: 'var(--radius-xs)',
              overflow: 'hidden',
              background: '#FFFFFF',
            }}
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              style={{
                maxHeight: '75vh',
                maxWidth: '100%',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>

          {/* Next Button */}
          {totalCount > 1 && (
            <button
              onClick={onNext}
              aria-label="Next certificate"
              style={{
                position: 'absolute',
                right: '8px',
                zIndex: 10,
                width: '42px',
                height: '42px',
                borderRadius: 'var(--radius-xs)',
                background: 'rgba(36, 39, 32, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Bottom Details Footer */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xs)',
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', fontWeight: 700 }}>
              AUTHENTIC INFOSYS SPRINGBOARD CREDENTIAL
            </span>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-primary)', margin: 0 }}>
              {certificate.description}
            </p>
          </div>

          {certificate.verificationUrl && (
            <a
              href={certificate.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                background: 'var(--accent)',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-xs)',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <span>VERIFY AT ONWINGSPAN.COM</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

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
          background: 'rgba(5, 10, 20, 0.94)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 'clamp(14px, 2.5vw, 28px)',
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
            paddingBottom: '12px',
            borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  fontWeight: 600,
                  color: '#38BDF8',
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-full)',
                  letterSpacing: '0.04em',
                }}
              >
                <ShieldCheck className="w-3 h-3" style={{ color: '#10B981' }} />
                <span>{certificate.provider || 'INFOSYS SPRINGBOARD'}</span>
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                }}
              >
                {currentIndex + 1} OF {totalCount}
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.1rem, 1.8vw, 1.45rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              {certificate.title}
            </h3>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
              }}
            >
              Issued: {certificate.date}
            </span>
          </div>

          {/* Top Right Actions: External Link & Close */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              title="Open full resolution certificate image in new tab"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                padding: '8px 14px',
                borderRadius: 'var(--radius-xs)',
                color: '#38BDF8',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <span>OPEN ORIGINAL</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              aria-label="Close Certificate Modal"
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 'var(--radius-xs)',
                color: '#FFFFFF',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Certificate Display Area (fitted with responsive constraints) */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'relative',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '1200px',
            margin: '16px auto',
            minHeight: 0,
          }}
        >
          {/* Previous Certificate Button */}
          {totalCount > 1 && onPrev && (
            <button
              onClick={onPrev}
              aria-label="Previous Certificate"
              style={{
                position: 'absolute',
                left: 'clamp(4px, 1.5vw, 16px)',
                zIndex: 10,
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(8, 15, 30, 0.85)',
                border: '1px solid rgba(56, 189, 248, 0.35)',
                color: '#38BDF8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                transition: 'all 0.2s ease',
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Certificate Image Frame */}
          <div
            style={{
              position: 'relative',
              maxWidth: 'min(94vw, 1050px)',
              maxHeight: 'calc(84vh - 120px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#FFFFFF',
              borderRadius: 'var(--radius-xs)',
              overflow: 'hidden',
              boxShadow: '0 24px 60px -10px rgba(0, 0, 0, 0.9), 0 0 40px rgba(56, 189, 248, 0.15)',
              border: '1px solid rgba(56, 189, 248, 0.4)',
            }}
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              style={{
                display: 'block',
                width: 'auto',
                height: 'auto',
                maxWidth: '100%',
                maxHeight: 'calc(84vh - 120px)',
                objectFit: 'contain',
              }}
            />
          </div>

          {/* Next Certificate Button */}
          {totalCount > 1 && onNext && (
            <button
              onClick={onNext}
              aria-label="Next Certificate"
              style={{
                position: 'absolute',
                right: 'clamp(4px, 1.5vw, 16px)',
                zIndex: 10,
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(8, 15, 30, 0.85)',
                border: '1px solid rgba(56, 189, 248, 0.35)',
                color: '#38BDF8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                transition: 'all 0.2s ease',
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Bottom Bar: Skills & Keyboard Hint */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            paddingTop: '10px',
            borderTop: '1px solid rgba(56, 189, 248, 0.2)',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {certificate.skills?.map((skill) => (
              <span
                key={skill}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: 'var(--text-secondary)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-xs)',
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
            }}
          >
            ESC OR CLICK OUTSIDE TO CLOSE
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

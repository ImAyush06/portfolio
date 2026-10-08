import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useLockBodyScroll, useFocusTrap } from '@/hooks/useHooks';

export default function Lightbox({
  images = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onNext,
  onPrev,
  title = '',
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

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Image Lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'rgba(18, 16, 15, 0.94)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 'clamp(16px, 3vw, 32px)',
        }}
        onClick={onClose}
      >
        {/* Top Bar: Title & Close */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            zIndex: 2,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <span className="mono-kicker" style={{ fontSize: '11px' }}>
              LIGHTBOX PREVIEW // {currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1} OF {images.length < 10 ? `0${images.length}` : images.length}
            </span>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--ivory)', margin: '2px 0 0' }}>
              {title || currentImage.caption || 'Document Preview'}
            </h4>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            style={{
              background: 'var(--bg-2)',
              border: '1px solid var(--line-strong)',
              color: 'var(--ivory)',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Image Container */}
        <div
          style={{
            position: 'relative',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '20px 0',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {images.length > 1 && onPrev && (
            <button
              onClick={onPrev}
              aria-label="Previous Image"
              style={{
                position: 'absolute',
                left: 0,
                zIndex: 10,
                background: 'var(--bg-1)',
                border: '1px solid var(--line-strong)',
                color: 'var(--ivory)',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          <img
            src={currentImage.src || currentImage}
            alt={currentImage.alt || title || 'Fullscreen Preview'}
            style={{
              maxWidth: '92vw',
              maxHeight: '80vh',
              objectFit: 'contain',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--line-strong)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
            }}
          />

          {images.length > 1 && onNext && (
            <button
              onClick={onNext}
              aria-label="Next Image"
              style={{
                position: 'absolute',
                right: 0,
                zIndex: 10,
                background: 'var(--bg-1)',
                border: '1px solid var(--line-strong)',
                color: 'var(--ivory)',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Bottom Caption */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid var(--line)',
            paddingTop: '12px',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <span className="mono-meta">
            {currentImage.caption || 'Native Aspect Ratio · Full-Resolution Archive'}
          </span>
          <span className="mono-meta" style={{ color: 'var(--accent)' }}>
            ESC TO EXIT
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

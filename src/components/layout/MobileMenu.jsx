import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, FileText } from 'lucide-react';
import { useLockBodyScroll, useFocusTrap } from '@/hooks/useHooks';
import { site } from '@/data/site';

export function MobileMenu({ isOpen, onClose, navItems = [] }) {
  const menuRef = useRef(null);

  const handleResumeClick = (e) => {
    onClose();
    if (site.resume) {
      window.open(site.resume, '_blank');
      return;
    }
    e.preventDefault();
    const subject = encodeURIComponent("Resume Request — Ayush Kumar");
    const body = encodeURIComponent(
      "Hi Ayush,\n\nI reviewed your portfolio and would like to request a copy of your resume for consideration.\n\nBest regards,"
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  useLockBodyScroll(isOpen);
  useFocusTrap(menuRef, isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleNavClick = (id) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9990,
          background: 'var(--bg-0)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 'clamp(20px, 5vw, 36px)',
          overflowY: 'auto',
        }}
      >
        {/* Top Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '20px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', background: 'var(--accent)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', color: 'var(--text-primary)' }}>
              AYUSH KUMAR
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close navigation"
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
              borderRadius: 'var(--radius-xs)',
              cursor: 'pointer',
            }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links with Staggered Entrance */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 3vh, 22px)', padding: 'clamp(24px, 5vh, 40px) 0' }}>
          {navItems.map((item, idx) => {
            const displayLabel = item.id === 'projects' ? 'WORK' : item.label;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * idx, duration: 0.25 }}
              >
                <button
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    width: '100%',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.75rem, 8vw, 2.5rem)',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {displayLabel}
                  </span>
                </button>
              </motion.div>
            );
          })}
        </nav>

        {/* Bottom Resume Action & Sign-off */}
        <div style={{ paddingTop: '20px', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <a
            href={site.resume || `mailto:${site.email}?subject=Resume%20Request%20%E2%80%94%20Ayush%20Kumar&body=Hi%20Ayush,%0A%0AI%20would%20like%20to%20request%20a%20copy%20of%20your%20resume.%0A%0AThank%20you!`}
            onClick={handleResumeClick}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '12px 18px',
              background: 'var(--text-primary)',
              border: '1px solid var(--text-primary)',
              borderRadius: 'var(--radius-xs)',
              color: 'var(--surface-raised)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11.5px',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textDecoration: 'none',
              cursor: 'pointer',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <FileText className="w-4 h-4" />
            <span>RESUME / REQUEST RESUME</span>
          </a>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--text-secondary)' }}>
            AYUSH KUMAR // FULL STACK WEB DEVELOPER
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

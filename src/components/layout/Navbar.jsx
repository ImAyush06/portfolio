import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, FileText } from 'lucide-react';
import { site } from '@/data/site';
import { MobileMenu } from './MobileMenu';
import { CommandPalette } from './CommandPalette';

export function Navbar({ navItems = [], activeSection = '' }) {
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const lastScrollYRef = useRef(0);
  const visibleRef = useRef(true);

  const handleResumeClick = (e) => {
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

  // Hide on scroll down, show on scroll up (optimized with rAF to eliminate lag)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const lastScrollY = lastScrollYRef.current;

          let nextVisible = true;
          if (currentScrollY > 80) {
            if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 6) {
              nextVisible = false;
            } else if (lastScrollY - currentScrollY > 6) {
              nextVisible = true;
            } else {
              nextVisible = visibleRef.current;
            }
          }

          if (nextVisible !== visibleRef.current) {
            visibleRef.current = nextVisible;
            setVisible(nextVisible);
          }
          lastScrollYRef.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -80 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '56px',
          zIndex: 100,
          background: 'rgba(233, 230, 221, 0.94)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            padding: '0 clamp(16px, 4vw, 48px)',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Left: Clean Editorial Name */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              color: 'var(--text-primary)',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--accent)',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '14.5px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
              }}
            >
              AYUSH KUMAR
            </span>
          </a>

          {/* Desktop Navigation Links — Slim text links with olive underline */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 'clamp(14px, 2vw, 24px)',
            }}
            className="lg-flex"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const displayLabel = item.id === 'projects' ? 'WORK' : item.label;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  style={{
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '6px 2px',
                    textDecoration: 'none',
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    transition: 'color 0.15s ease',
                  }}
                  className="nav-link-item"
                >
                  <span>{displayLabel}</span>

                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'var(--accent)', /* Olive */
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Slim Resume text button + Mobile Menu Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href={site.resume || `mailto:${site.email}?subject=Resume%20Request%20%E2%80%94%20Ayush%20Kumar&body=Hi%20Ayush,%0A%0AI%20would%20like%20to%20request%20a%20copy%20of%20your%20resume.%0A%0AThank%20you!`}
              onClick={handleResumeClick}
              aria-label="Resume / Request Resume"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '5px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                padding: '5px 12px',
                borderRadius: 'var(--radius-xs)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '10.5px',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textDecoration: 'none',
                transition: 'all 0.15s ease',
                cursor: 'pointer',
              }}
              className="lg-flex nav-resume-btn"
            >
              <FileText className="w-3 h-3" style={{ color: 'var(--accent)' }} />
              <span>RESUME</span>
            </a>

            {/* Mobile Minimal MENU Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              style={{
                height: '32px',
                padding: '0 10px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xs)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.06em',
                cursor: 'pointer',
              }}
              className="mobile-menu-btn"
            >
              <Menu className="w-3.5 h-3.5" />
              <span>MENU</span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
      />

      {/* Command Palette */}
      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        navItems={navItems}
      />

      <style>{`
        @media (min-width: 1024px) {
          .lg-flex { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 1023px) {
          .lg-flex { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        .nav-link-item:hover { color: var(--accent) !important; }
        .nav-resume-btn:hover {
          background: var(--accent-light) !important;
          border-color: var(--accent) !important;
          color: var(--text-primary) !important;
        }
        .mobile-menu-btn:hover {
          background: var(--bg-secondary) !important;
          border-color: var(--text-secondary) !important;
        }
      `}</style>
    </>
  );
}

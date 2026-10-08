import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, FileText } from 'lucide-react';
import { site } from '@/data/site';
import { MobileMenu } from './MobileMenu';
import { CommandPalette } from './CommandPalette';

export function Navbar({ navItems = [], activeSection = '' }) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

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
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 8) {
          setVisible(false);
        } else if (lastScrollY - currentScrollY > 8) {
          setVisible(true);
        }
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
          height: '64px',
          zIndex: 100,
          background: 'rgba(245, 243, 238, 0.94)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
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
          {/* Left: Clean Editorial Brand */}
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              color: 'var(--text-primary)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '15px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
              }}
            >
              {site.name}
            </span>
          </a>

          {/* Desktop Navigation Links — Simple Text Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 'clamp(16px, 2.2vw, 28px)',
            }}
            className="lg-flex"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  style={{
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '8px 2px',
                    textDecoration: 'none',
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    transition: 'color 0.15s ease',
                  }}
                  className="nav-link-hover"
                >
                  <span>{item.label}</span>

                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'var(--accent)',
                        borderRadius: '1px',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Clean Editorial Resume Button + Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Resume Button */}
            <a
              href={site.resume || `mailto:${site.email}?subject=Resume%20Request%20%E2%80%94%20Ayush%20Kumar&body=Hi%20Ayush,%0A%0AI%20would%20like%20to%20request%20a%20copy%20of%20your%20resume.%0A%0AThank%20you!`}
              onClick={handleResumeClick}
              aria-label="Resume / Request Resume"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '6px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-xs)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
              className="lg-flex nav-resume-btn"
            >
              <FileText className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
              <span>RESUME</span>
            </a>

            {/* Mobile Minimal MENU Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              style={{
                height: '36px',
                padding: '0 12px',
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
              <Menu className="w-4 h-4" />
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
        .nav-link-hover:hover { color: var(--accent) !important; }
        .nav-resume-btn:hover {
          background: var(--accent-soft) !important;
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

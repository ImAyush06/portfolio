import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowUpRight, Copy, Check, Download, Mail, Github, Linkedin, X } from 'lucide-react';
import { useLockBodyScroll, useFocusTrap } from '@/hooks/useHooks';
import { site } from '@/data/site';

export function CommandPalette({ isOpen, onClose, navItems = [] }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const paletteRef = useRef(null);

  useLockBodyScroll(isOpen);
  useFocusTrap(paletteRef, isOpen);

  const actions = [
    ...navItems.map((item) => ({
      id: item.id,
      title: `Navigate to ${item.label}`,
      type: 'section',
      action: () => {
        const el = document.getElementById(item.id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    })),
    {
      id: 'copy-email',
      title: `Copy Email (${site.email})`,
      type: 'action',
      action: () => {
        navigator.clipboard.writeText(site.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
    {
      id: 'send-email',
      title: 'Compose Email',
      type: 'action',
      action: () => {
        window.location.href = `mailto:${site.email}`;
        onClose();
      },
    },
    ...(site.github
      ? [
          {
            id: 'open-github',
            title: 'Open GitHub Profile',
            type: 'link',
            action: () => {
              window.open(site.github, '_blank', 'noopener,noreferrer');
              onClose();
            },
          },
        ]
      : []),
    ...(site.linkedin
      ? [
          {
            id: 'open-linkedin',
            title: 'Open LinkedIn Profile',
            type: 'link',
            action: () => {
              window.open(site.linkedin, '_blank', 'noopener,noreferrer');
              onClose();
            },
          },
        ]
      : []),
    {
      id: 'download-resume',
      title: site.resume ? 'Download Curriculum Vitae (PDF)' : 'Request Resume via Email / Contact',
      type: 'action',
      action: () => {
        if (site.resume) {
          window.open(site.resume, '_blank');
        } else {
          const subject = encodeURIComponent("Resume Request — Ayush Kumar");
          const body = encodeURIComponent(
            "Hi Ayush,\n\nI reviewed your portfolio and would like to request a copy of your resume for consideration.\n\nBest regards,"
          );
          window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
          const contactEl = document.getElementById('contact');
          if (contactEl) {
            contactEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
        onClose();
      },
    },
  ];

  const filtered = actions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filtered, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'rgba(32, 35, 31, 0.45)',
          backdropFilter: 'blur(6px)',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: 'clamp(24px, 8vw, 80px) 16px',
        }}
        onClick={onClose}
      >
        <motion.div
          ref={paletteRef}
          role="dialog"
          aria-modal="true"
          aria-label="Command Palette"
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.18 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: '100%',
            maxWidth: '560px',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.08)',
            overflow: 'hidden',
          }}
        >
          {/* Input Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 20px',
              borderBottom: '1px solid var(--line)',
            }}
          >
            <Search className="w-4 h-4 text-accent" style={{ color: 'var(--accent)' }} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or jump to section..."
              autoFocus
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                width: '100%',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--text-secondary)',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                padding: '2px 6px',
                borderRadius: 'var(--radius-xs)',
              }}
            >
              ESC
            </span>
          </div>

          {/* Action List */}
          <div style={{ maxHeight: '320px', overflowY: 'auto', padding: '8px' }}>
            {filtered.length === 0 ? (
              <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                No matching actions found.
              </div>
            ) : (
              filtered.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <div
                    key={item.id}
                    onClick={item.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    style={{
                      padding: '12px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderRadius: 'var(--radius-xs)',
                      background: isSelected ? 'var(--accent-soft)' : 'transparent',
                      border: isSelected ? '1px solid var(--accent)' : '1px solid transparent',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        color: isSelected ? 'var(--accent)' : 'var(--text-primary)',
                        fontWeight: isSelected ? 600 : 500,
                      }}
                    >
                      {item.title}
                    </span>
                    {item.id === 'copy-email' && copied ? (
                      <span style={{ fontSize: '11px', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Check className="w-3.5 h-3.5" /> Copied
                      </span>
                    ) : (
                      <ArrowUpRight className="w-3.5 h-3.5" style={{ color: 'var(--text-secondary)' }} />
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Footer note */}
          <div
            style={{
              padding: '10px 16px',
              borderTop: '1px solid var(--line)',
              background: 'var(--bg-0)',
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--muted)',
            }}
          >
            <span>↑↓ NAVIGATE · ENTER SELECT</span>
            <span>COMMAND PALETTE</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

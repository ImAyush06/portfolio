import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Github, ExternalLink, Layers, CheckCircle } from 'lucide-react';
import { useLockBodyScroll, useFocusTrap } from '@/hooks/useHooks';
import { GithubIcon } from '@/components/ui/BrandIcons';
import { Button } from '@/components/ui/Button';

export function ProjectDrawer({ project, isOpen, onClose }) {
  const drawerRef = useRef(null);

  useLockBodyScroll(isOpen);
  useFocusTrap(drawerRef, isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9995,
          background: 'rgba(12, 13, 17, 0.85)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
        onClick={onClose}
      >
        <motion.div
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} Case Study Details`}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: '100%',
            maxWidth: '680px',
            height: '100%',
            background: 'var(--bg-1)',
            borderLeft: '1px solid var(--line-strong)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '-20px 0 50px rgba(0,0,0,0.8)',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '24px 32px',
              borderBottom: '1px solid var(--line)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <span className="mono-kicker" style={{ fontSize: '11px', color: 'var(--coral)' }}>
                ENGINEERING ARCHITECTURE // {project.category}
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--text-primary)', margin: '4px 0 0' }}>
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              aria-label="Close project drawer"
              style={{
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-2)',
                border: '1px solid var(--line)',
                color: 'var(--text-primary)',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
              }}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '32px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Overview / Story */}
            {project.story && (
              <div>
                <span className="mono-meta" style={{ color: 'var(--coral)', display: 'block', marginBottom: '8px' }}>
                  THE STORY
                </span>
                <p style={{ color: 'var(--text-primary)', fontSize: '15px', lineHeight: 1.65 }}>
                  {project.story}
                </p>
              </div>
            )}

            {/* Problem & Solution */}
            {(project.problem || project.solution) && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
                {project.problem && (
                  <div style={{ background: 'var(--bg-2)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--line)' }}>
                    <span className="mono-meta" style={{ color: 'var(--coral)', display: 'block', marginBottom: '6px' }}>
                      THE PROBLEM
                    </span>
                    <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                      {project.problem}
                    </p>
                  </div>
                )}
                {project.solution && (
                  <div style={{ background: 'var(--bg-2)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--line)' }}>
                    <span className="mono-meta" style={{ color: 'var(--mint)', display: 'block', marginBottom: '6px' }}>
                      THE SOLUTION
                    </span>
                    <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Key Capabilities */}
            {project.features && project.features.length > 0 && (
              <div>
                <span className="mono-meta" style={{ display: 'block', marginBottom: '12px' }}>
                  KEY CAPABILITIES &amp; SPECIFICATIONS
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {project.features.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'baseline', gap: '10px', fontSize: '14px', color: 'var(--text-primary)' }}>
                      <span style={{ color: 'var(--mint)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>—</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* DSA Concepts */}
            {project.dsa && project.dsa.length > 0 && (
              <div style={{ padding: '16px', background: 'var(--bg-0)', border: '1px solid var(--line-strong)', borderRadius: 'var(--radius-sm)' }}>
                <span className="mono-meta" style={{ color: 'var(--mint)', display: 'block', marginBottom: '10px' }}>
                  ALGORITHMS &amp; DATA STRUCTURES EMPLOYED
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.dsa.map((concept) => (
                    <span key={concept} className="mono-tag" style={{ background: 'var(--bg-1)' }}>
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div>
                <span className="mono-meta" style={{ display: 'block', marginBottom: '10px' }}>
                  FULL TECHNOLOGY STACK
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className="mono-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Footer Actions */}
          <div
            style={{
              padding: '20px 32px',
              borderTop: '1px solid var(--line)',
              background: 'var(--bg-0)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {project.liveUrl && (
                <Button href={project.liveUrl} variant="solid" external icon="upRight">
                  LIVE DEMO
                </Button>
              )}
              {project.githubUrl && (
                <Button href={project.githubUrl} variant="outline" external icon="upRight">
                  GITHUB REPOSITORY
                </Button>
              )}
            </div>

            <Button onClick={onClose} variant="ghost" icon="none">
              CLOSE DRAWER
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

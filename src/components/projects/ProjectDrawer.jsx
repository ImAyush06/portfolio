import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { useLockBodyScroll, useFocusTrap } from '@/hooks/useHooks';
import { GithubIcon } from '@/components/ui/BrandIcons';

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
          background: 'rgba(32, 35, 31, 0.45)',
          backdropFilter: 'blur(4px)',
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
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: '100%',
            maxWidth: '680px',
            height: '100%',
            background: 'var(--surface)',
            borderLeft: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.08)',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '24px 32px',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--bg-0)',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                PROJECT ARCHITECTURE // {project.category}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  margin: '4px 0 0',
                }}
              >
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              aria-label="Close project drawer"
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
              }}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
            }}
          >
            {/* Story / Problem Statement */}
            {project.story && (
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    letterSpacing: '0.1em',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  BACKGROUND &amp; CONTEXT
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-secondary)',
                    fontSize: '14.5px',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {project.story}
                </p>
              </div>
            )}

            {/* Problem & Solution */}
            {(project.problem || project.solution) && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                {project.problem && (
                  <div
                    style={{
                      background: 'var(--bg-secondary)',
                      padding: '16px 20px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10.5px',
                        fontWeight: 700,
                        color: 'var(--accent-secondary)',
                        letterSpacing: '0.08em',
                        display: 'block',
                        marginBottom: '6px',
                      }}
                    >
                      THE PROBLEM
                    </span>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '13.5px',
                        color: 'var(--text-primary)',
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {project.problem}
                    </p>
                  </div>
                )}
                {project.solution && (
                  <div
                    style={{
                      background: 'var(--accent-soft)',
                      padding: '16px 20px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid #D1DAC7',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10.5px',
                        fontWeight: 700,
                        color: 'var(--accent)',
                        letterSpacing: '0.08em',
                        display: 'block',
                        marginBottom: '6px',
                      }}
                    >
                      THE ENGINEERING SOLUTION
                    </span>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '13.5px',
                        color: 'var(--text-primary)',
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    letterSpacing: '0.1em',
                    display: 'block',
                    marginBottom: '12px',
                  }}
                >
                  SYSTEM CAPABILITIES &amp; HIGHLIGHTS
                </span>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  {project.features.map((feat, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '10px',
                        fontSize: '13.5px',
                        color: 'var(--text-primary)',
                      }}
                    >
                      <span
                        style={{
                          color: 'var(--accent)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '12px',
                          fontWeight: 700,
                        }}
                      >
                        &rarr;
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* DSA Concepts */}
            {project.dsa && project.dsa.length > 0 && (
              <div
                style={{
                  padding: '16px 20px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10.5px',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    letterSpacing: '0.08em',
                    display: 'block',
                    marginBottom: '10px',
                  }}
                >
                  ALGORITHMS &amp; DATA STRUCTURES
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.dsa.map((concept) => (
                    <span
                      key={concept}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        padding: '4px 9px',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-xs)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Technology Stack */}
            {project.technologies && project.technologies.length > 0 && (
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    letterSpacing: '0.1em',
                    display: 'block',
                    marginBottom: '10px',
                  }}
                >
                  TECHNOLOGIES EMPLOYED
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11.5px',
                        padding: '4px 10px',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-xs)',
                        color: 'var(--text-primary)',
                        fontWeight: 500,
                      }}
                    >
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
              borderTop: '1px solid var(--border)',
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
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 18px',
                    background: 'var(--accent)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    borderRadius: 'var(--radius-sm)',
                    textDecoration: 'none',
                  }}
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 18px',
                    background: 'var(--surface)',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    borderRadius: 'var(--radius-sm)',
                    textDecoration: 'none',
                  }}
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GITHUB REPO</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11.5px',
                color: 'var(--text-secondary)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              CLOSE
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

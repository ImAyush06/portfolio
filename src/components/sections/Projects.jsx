import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, Cpu, Globe, Bot } from 'lucide-react';
import { SectionShell } from '@/components/layout/SectionShell';
import { projects } from '@/data/projects';
import { ProjectParallelCard } from '@/components/projects/ProjectParallelCard';
import { ProjectDrawer } from '@/components/projects/ProjectDrawer';
import Lightbox from '@/components/ui/Lightbox';

const categoryTabs = [
  { id: 'all', label: 'All Projects', icon: <Sparkles className="w-3.5 h-3.5" /> },
  { id: 'full stack', label: 'Full Stack', icon: <Layers className="w-3.5 h-3.5" /> },
  { id: 'systems', label: 'Systems & C++', icon: <Cpu className="w-3.5 h-3.5" /> },
  { id: 'frontend', label: 'Web Platform', icon: <Globe className="w-3.5 h-3.5" /> },
  { id: 'ai', label: 'AI & Web', icon: <Bot className="w-3.5 h-3.5" /> },
];

export function Projects({
  sectionIndex = "03",
  activeHoveredSkill = null,
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDrawerProject, setSelectedDrawerProject] = useState(null);
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
    title: '',
  });

  // Deep-linking support: check URL hash on load (e.g. #project-hospital-management)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#project-')) {
        const pId = hash.replace('#project-', '');
        const target = projects.find((p) => p.id === pId);
        if (target) {
          const el = document.getElementById(`project-${pId}`);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    if (selectedCategory === 'full stack') {
      return projects.filter((p) => p.category.toLowerCase().includes('full stack'));
    }
    if (selectedCategory === 'systems') {
      return projects.filter((p) => p.category.toLowerCase().includes('systems') || p.category.toLowerCase().includes('c++'));
    }
    if (selectedCategory === 'frontend') {
      return projects.filter((p) => p.category.toLowerCase().includes('frontend') || p.category.toLowerCase().includes('web platform'));
    }
    if (selectedCategory === 'ai') {
      return projects.filter((p) => p.category.toLowerCase().includes('ai'));
    }
    return projects;
  }, [selectedCategory]);

  const openLightbox = (images, index, title) => {
    setLightboxState({
      isOpen: true,
      images,
      currentIndex: index,
      title,
    });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleNextLightbox = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  };

  const handlePrevLightbox = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  };

  return (
    <>
      <SectionShell
        id="projects"
        label="PROJECTS"
      >
        {/* Category Filter Tabs & Quick Jump Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
          
          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            {categoryTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '7px 14px',
                    borderRadius: 'var(--radius-xs)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    border: isActive ? '1px solid #FFFFFF' : '1px solid var(--border)',
                    background: isActive ? '#FFFFFF' : 'var(--bg-secondary)',
                    color: isActive ? '#0B0C0E' : 'var(--muted)',
                    transition: 'all 0.2s ease',
                  }}
                  className="filter-pill-btn"
                >
                  <span style={{ color: isActive ? '#0B0C0E' : 'var(--text-secondary)' }}>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Index Jump Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              overflowX: 'auto',
              paddingBottom: '12px',
              borderBottom: '1px solid var(--border)',
              scrollbarWidth: 'none',
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--mint)', flexShrink: 0, fontSize: '11px', fontWeight: 600 }}>
              INDEX //
            </span>
            {projects.map((p) => (
              <a
                key={p.id}
                href={`#project-${p.id}`}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--line)',
                  background: 'var(--bg-secondary)',
                  transition: 'all 0.2s ease',
                }}
                className="project-chip-jump"
              >
                {p.title}
              </a>
            ))}
          </div>

        </div>

        {/* 2-Column Parallel Grid (50% / 50% on Desktop, 1 Column on Mobile) */}
        <div className="projects-parallel-grid">
          {filteredProjects.map((project, idx) => (
            <ProjectParallelCard
              key={project.id}
              project={project}
              index={idx}
              activeHoveredSkill={activeHoveredSkill}
              onOpenDetails={(p) => setSelectedDrawerProject(p)}
              onOpenLightbox={openLightbox}
            />
          ))}
        </div>
      </SectionShell>

      {/* Project Detail Drawer */}
      <ProjectDrawer
        project={selectedDrawerProject}
        isOpen={Boolean(selectedDrawerProject)}
        onClose={() => setSelectedDrawerProject(null)}
      />

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        images={lightboxState.images}
        currentIndex={lightboxState.currentIndex}
        title={lightboxState.title}
        onClose={closeLightbox}
        onNext={handleNextLightbox}
        onPrev={handlePrevLightbox}
      />

      <style>{`
        .projects-parallel-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(16px, 2.5vw, 24px);
        }

        @media (min-width: 1024px) {
          .projects-parallel-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .filter-pill-btn:hover {
          color: var(--text-primary) !important;
          border-color: var(--line-strong) !important;
        }

        .project-chip-jump:hover {
          color: #FFFFFF !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
          background: rgba(255, 255, 255, 0.08) !important;
        }
      `}</style>
    </>
  );
}

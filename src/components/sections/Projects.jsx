import React, { useState, useEffect, useMemo } from 'react';
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

  // Deep-linking support: check URL hash on load
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
        <div className="projects-controls-bar">
          
          {/* Category Filter Buttons */}
          <div className="projects-filter-group" role="tablist" aria-label="Project category filter">
            {categoryTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`projects-tab-btn ${isActive ? 'is-active' : ''}`}
                >
                  <span className="projects-tab-icon">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Index Jump Strip */}
          <div className="projects-jump-strip">
            <span className="projects-jump-label">QUICK JUMP:</span>
            <div className="projects-jump-links">
              {projects.map((p, idx) => (
                <a
                  key={p.id}
                  href={`#project-${p.id}`}
                  className="projects-jump-anchor"
                >
                  <span>0{idx + 1}</span>
                  <span>{p.title}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Large Editorial Project Compositions with Alternating Rhythm */}
        <div className="projects-editorial-list">
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
        .projects-controls-bar {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: clamp(24px, 4vh, 36px);
        }

        .projects-filter-group {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .projects-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: var(--radius-xs);
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          cursor: pointer;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--text-secondary);
          transition: all 0.15s ease;
        }

        .projects-tab-btn:hover {
          background: var(--bg-secondary);
          color: var(--text-primary);
          border-color: var(--border-strong);
        }

        .projects-tab-btn.is-active {
          border-color: var(--accent);
          background: var(--accent);
          color: #FFFFFF;
        }

        .projects-tab-btn.is-active .projects-tab-icon {
          color: #FFFFFF;
        }

        .projects-jump-strip {
          display: flex;
          align-items: center;
          gap: 12px;
          overflow-x: auto;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border);
          scrollbar-width: none;
        }

        .projects-jump-label {
          font-family: var(--font-mono);
          color: var(--accent);
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          flex-shrink: 0;
        }

        .projects-jump-links {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: nowrap;
        }

        .projects-jump-anchor {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-secondary);
          text-decoration: none;
          white-space: nowrap;
          padding: 4px 10px;
          border-radius: var(--radius-xs);
          border: 1px solid var(--border);
          background: var(--bg-secondary);
          transition: all 0.15s ease;
        }

        .projects-jump-anchor:hover {
          color: var(--text-primary);
          border-color: var(--accent);
          background: var(--surface);
        }

        .projects-editorial-list {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
}

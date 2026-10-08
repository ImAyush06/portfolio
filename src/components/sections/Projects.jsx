import React, { useState, useEffect, useMemo } from 'react';
import { Sparkles, Layers, Cpu, Globe, Bot } from 'lucide-react';
import { SectionShell } from '@/components/layout/SectionShell';
import { projects } from '@/data/projects';
import { ProjectParallelCard } from '@/components/projects/ProjectParallelCard';
import { ProjectDrawer } from '@/components/projects/ProjectDrawer';
import Lightbox from '@/components/ui/Lightbox';

const categoryTabs = [
  { id: 'all', label: 'All Work', icon: <Sparkles className="w-3.5 h-3.5" /> },
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
        label="SELECTED WORK"
      >
        {/* Controls: Filter & Quick Jump */}
        <div className="work-controls-wrapper">
          
          {/* Category Filter Pills */}
          <div className="work-filter-pills" role="tablist" aria-label="Project filter">
            {categoryTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`work-filter-btn ${isActive ? 'is-active' : ''}`}
                >
                  <span className="work-filter-icon">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Jump Bar */}
          <div className="work-jump-strip">
            <span className="work-jump-label">INDEX //</span>
            <div className="work-jump-items">
              {projects.map((p) => (
                <a
                  key={p.id}
                  href={`#project-${p.id}`}
                  className="work-jump-link"
                >
                  <span className="jump-name">{p.title}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Parallel Project Cards Grid (2-column natural breadth, blends across section) */}
        <div className="work-parallel-grid">
          {filteredProjects.map((project, idx) => (
            <ProjectParallelCard
              key={project.id}
              project={project}
              index={idx}
              activeHoveredSkill={activeHoveredSkill}
              onOpenDetails={(p) => setSelectedDrawerProject(p)}
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

      <style>{`
        .work-controls-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: clamp(20px, 3.5vh, 32px);
          width: 100%;
        }

        .work-filter-pills {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
        }

        .work-filter-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
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

        .work-filter-btn:hover {
          background: var(--bg-secondary);
          color: var(--text-primary);
        }

        .work-filter-btn.is-active {
          border-color: var(--text-primary);
          background: var(--text-primary);
          color: var(--surface-raised);
        }

        .work-filter-btn.is-active .work-filter-icon {
          color: var(--accent-light);
        }

        .work-jump-strip {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .work-jump-label {
          font-family: var(--font-mono);
          color: var(--accent);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          flex-shrink: 0;
        }

        .work-jump-items {
          display: flex;
          align-items: center;
          gap: 5px;
          flex-wrap: nowrap;
        }

        .work-jump-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--text-secondary);
          text-decoration: none;
          white-space: nowrap;
          padding: 3px 8px;
          border-radius: var(--radius-xs);
          border: 1px solid var(--border);
          background: var(--surface);
          transition: all 0.15s ease;
        }

        .work-jump-link:hover {
          color: var(--text-primary);
          border-color: var(--accent);
          background: var(--bg-secondary);
        }

        /* 2-column natural breadth layout, blending with the page */
        .work-parallel-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(20px, 3vw, 28px);
          width: 100%;
        }

        @media (min-width: 768px) {
          .work-parallel-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </>
  );
}

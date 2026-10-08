import React, { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Certificates } from '@/components/sections/Certificates';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';

import { sectionRegistry } from '@/data/index';
import { useActiveSection } from '@/hooks/useActiveSection';

const componentMap = {
  about: About,
  skills: Skills,
  projects: Projects,
  experience: Experience,
  certificates: Certificates,
  education: Education,
  contact: Contact,
};

export default function App() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Compute active & enabled sections dynamically from section registry (clean labels without numbers)
  const visibleSections = useMemo(() => {
    return sectionRegistry.filter((sec) => sec.enabled && (sec.hasContent || sec.showWhenEmpty));
  }, []);

  const visibleIds = useMemo(() => visibleSections.map((s) => s.id), [visibleSections]);
  const activeSectionId = useActiveSection(visibleIds);

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Accessibility Skip Link */}
      <a href="#about" className="skip-link">
        Skip to main content
      </a>

      {/* Top Hairline Scroll Progress Bar */}
      <ScrollProgress />

      {/* Global Background Elements: Subtle Grid & Ambient Radial Glow */}
      <div className="technical-grid" aria-hidden="true" />
      <div className="ambient-glow" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      {/* Persistent Navigation */}
      <Navbar
        navItems={visibleSections}
        activeSection={activeSectionId}
      />

      {/* Main Landmark */}
      <main id="main-content">
        {/* Editorial Hero */}
        <Hero />

        {/* Dynamically mapped clean sections */}
        {visibleSections.map((sec) => {
          const Component = componentMap[sec.id];
          if (!Component) return null;

          // Special prop injection for cross-referencing between Skills and Projects
          if (sec.id === 'skills') {
            return (
              <Component
                key={sec.id}
                activeHoveredSkill={hoveredSkill}
                onHoverSkill={setHoveredSkill}
              />
            );
          }

          if (sec.id === 'projects') {
            return (
              <Component
                key={sec.id}
                activeHoveredSkill={hoveredSkill}
              />
            );
          }

          return (
            <Component key={sec.id} />
          );
        })}
      </main>

      {/* Structured Footer */}
      <Footer />
    </div>
  );
}

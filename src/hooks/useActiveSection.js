import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds, offset = 140) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    let ticking = false;

    const updateActive = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = elements.length - 1; i >= 0; i--) {
        const el = elements[i];
        if (el.offsetTop <= scrollPosition) {
          setActiveSection((prev) => (prev !== el.id ? el.id : prev));
          break;
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActive);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateActive();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
}

import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds, offset = 140) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;

    const observers = [];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = elements.length - 1; i >= 0; i--) {
        const el = elements[i];
        if (el.offsetTop <= scrollPosition) {
          setActiveSection(el.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
}

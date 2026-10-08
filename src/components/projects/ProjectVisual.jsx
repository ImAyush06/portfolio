import React, { useState } from 'react';
import { BrowserFrame } from '@/components/ui/BrowserFrame';
import { ProjectPlaceholder } from '@/components/ui/Placeholder';

export function ProjectVisual({
  project,
  onOpenLightbox = () => {},
}) {
  const [selectedImage, setSelectedImage] = useState(project.image || (project.gallery && project.gallery[0]?.src) || '');

  // If no image is provided, render the technical designed placeholder
  if (!project.image && (!project.gallery || project.gallery.length === 0)) {
    return (
      <ProjectPlaceholder
        title={project.title}
        technologies={project.technologies}
      />
    );
  }

  const galleryImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [{ src: project.image, alt: project.imageAlt || project.title, caption: project.title }];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
      <BrowserFrame slug={project.id} frame={project.frame !== false}>
        <div
          onClick={() => onOpenLightbox(galleryImages, 0, project.title)}
          className="project-visual-wrapper group"
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: project.imageRatio || '16/10',
            cursor: 'pointer',
            overflow: 'hidden',
            background: 'var(--bg-2)',
          }}
        >
          <img
            src={selectedImage || project.image}
            alt={project.imageAlt || project.title}
            loading="lazy"
            decoding="async"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            className="project-img-zoom"
          />

          {/* Hover overlay hint */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(18,16,15,0.7) 0%, transparent 60%)',
              opacity: 0,
              transition: 'opacity 0.25s ease',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '16px',
            }}
            className="hover-overlay"
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--accent)',
                letterSpacing: '0.1em',
                background: 'var(--bg-0)',
                padding: '4px 10px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--accent)',
              }}
            >
              CLICK TO EXPAND IN LIGHTBOX ↗
            </span>
          </div>
        </div>
      </BrowserFrame>

      {/* Gallery Thumbnail Strip (if multiple images) */}
      {project.gallery && project.gallery.length > 1 && (
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
          {project.gallery.map((img, idx) => {
            const isCurrent = (selectedImage || project.image) === img.src;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedImage(img.src)}
                style={{
                  width: '64px',
                  height: '40px',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  border: isCurrent ? '2px solid var(--accent)' : '1px solid var(--line)',
                  padding: 0,
                  cursor: 'pointer',
                  background: 'var(--bg-2)',
                  flexShrink: 0,
                }}
              >
                <img src={img.src} alt={img.alt || `Thumb ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        .project-visual-wrapper:hover .project-img-zoom {
          transform: scale(1.03);
        }
        .project-visual-wrapper:hover .hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}

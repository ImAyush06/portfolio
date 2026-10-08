import React from 'react';

const sectionIndexMap = {
  about: '01',
  skills: '02',
  projects: '03',
  experience: '04',
  certificates: '05',
  education: '06',
  contact: '07',
};

export function SectionShell({
  id,
  label,
  count,
  children,
  className = "",
  style = {},
}) {
  const number = sectionIndexMap[id];

  return (
    <section
      id={id}
      aria-labelledby={`heading-${id}`}
      style={{
        paddingTop: 'var(--space-section)',
        paddingBottom: 'var(--space-section)',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        ...style,
      }}
      className={className}
    >
      <div className="container-shell">
        {/* Editorial Section Header Strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '16px',
            marginBottom: 'clamp(24px, 3.5vw, 40px)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {number && (
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  letterSpacing: '0.08em',
                }}
              >
                {number} /
              </span>
            )}
            <h2
              id={`heading-${id}`}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                margin: 0,
              }}
            >
              {label}
            </h2>
          </div>

          {count && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
                letterSpacing: '0.06em',
              }}
            >
              {count}
            </span>
          )}
        </div>

        {/* Content */}
        {children}
      </div>
    </section>
  );
}

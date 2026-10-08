import React from 'react';

const sectionIndexMap = {
  about: '01',
  projects: '02',
  skills: '03',
  experience: '04',
  certificates: '05',
  education: '06',
  contact: '07',
};

// Structural section tone styling per prompt section 3
const sectionBackgroundMap = {
  about: 'transparent',
  projects: 'var(--bg-0)',       /* Warm cream base */
  skills: 'var(--bg-secondary)',  /* Slightly darker warm grey #DEDACF */
  experience: 'transparent',
  certificates: 'var(--bg-secondary)', /* Distinct structural tone */
  education: 'transparent',
  contact: 'var(--bg-0)',
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
  const sectionBg = sectionBackgroundMap[id] || 'transparent';

  return (
    <section
      id={id}
      aria-labelledby={`heading-${id}`}
      style={{
        paddingTop: 'var(--space-section)',
        paddingBottom: 'var(--space-section)',
        borderBottom: '1px solid var(--border)',
        background: sectionBg,
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
            paddingBottom: '14px',
            marginBottom: 'clamp(24px, 3.5vw, 36px)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                width: '6px',
                height: '14px',
                background: 'var(--accent)',
                borderRadius: '1px',
                display: 'inline-block',
              }}
            />
            <h2
              id={`heading-${id}`}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 1.8vw, 24px)',
                fontWeight: 800,
                letterSpacing: '0.04em',
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
                letterSpacing: '0.08em',
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

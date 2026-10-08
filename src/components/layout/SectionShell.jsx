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
            alignItems: 'baseline',
            justifyContent: 'space-between',
            paddingBottom: '16px',
            marginBottom: 'clamp(28px, 4vw, 44px)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
            {number && (
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--accent)', /* Olive */
                  letterSpacing: '0.1em',
                }}
              >
                {number}
              </span>
            )}
            <h2
              id={`heading-${id}`}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(14px, 1.2vw, 16px)',
                fontWeight: 700,
                letterSpacing: '0.08em',
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

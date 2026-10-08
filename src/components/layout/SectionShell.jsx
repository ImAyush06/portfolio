import React from 'react';

export function SectionShell({
  id,
  label,
  count,
  children,
  className = "",
  style = {},
}) {
  return (
    <section
      id={id}
      aria-labelledby={`heading-${id}`}
      style={{
        paddingTop: 'var(--space-section)',
        paddingBottom: 'var(--space-section)',
        borderBottom: '1px solid var(--line)',
        position: 'relative',
        ...style,
      }}
      className={className}
    >
      <div className="container-shell">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '14px',
            marginBottom: 'clamp(18px, 3vw, 28px)',
            borderBottom: '1px solid var(--line)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: 'var(--duo-gradient)',
                boxShadow: '0 0 10px rgba(46, 168, 255, 0.7)',
              }}
            />
            <h2
              id={`heading-${id}`}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.14em',
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
              className="mono-meta"
              style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.06em' }}
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

import React from 'react';

export function BrowserFrame({ children, slug = "localhost:3000", frame = true }) {
  if (!frame) return <>{children}</>;

  return (
    <div style={{
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      border: '1px solid var(--border)',
      background: 'var(--surface)',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
    }}>
      {/* Browser Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '7px 12px',
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border)',
      }}>
        {/* Three Dots */}
        <div style={{ display: 'flex', gap: '5px' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#D9D8D0' }} />
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#D9D8D0' }} />
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#D9D8D0' }} />
        </div>

        {/* Address text */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10.5px',
          letterSpacing: '0.04em',
          color: 'var(--text-secondary)',
          background: 'var(--surface)',
          padding: '2px 10px',
          borderRadius: 'var(--radius-xs)',
          border: '1px solid var(--border)',
          maxWidth: '65%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>
          https://{slug}.app
        </div>

        <div style={{ width: '24px' }} />
      </div>

      {/* Viewport Content */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
}

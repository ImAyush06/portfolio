import React from 'react';

export function BrowserFrame({ children, slug = "localhost:3000", frame = true }) {
  if (!frame) return <>{children}</>;

  return (
    <div style={{
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      border: '1px solid var(--line-strong)',
      background: 'var(--bg-2)',
      boxShadow: '0 20px 40px -15px rgba(0,0,0,0.7)',
    }}>
      {/* Browser Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 14px',
        background: 'var(--bg-1)',
        borderBottom: '1px solid var(--line)',
      }}>
        {/* Three Dots */}
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(244,240,232,0.2)' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(244,240,232,0.2)' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(244,240,232,0.2)' }} />
        </div>

        {/* Address text */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.06em',
          color: 'var(--muted)',
          background: 'var(--bg-0)',
          padding: '2px 12px',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--line)',
          maxWidth: '65%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>
          https://{slug}.app
        </div>

        <div style={{ width: '30px' }} />
      </div>

      {/* Viewport Content */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
}

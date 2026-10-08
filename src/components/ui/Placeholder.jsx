import React from 'react';

export function ProjectPlaceholder({ title, technologies = [] }) {
  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '16/10',
        background: 'var(--bg-2)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--radius-sm)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background fine technical grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundSize: '24px 24px',
          backgroundImage:
            'linear-gradient(to right, rgba(244,240,232,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,240,232,0.04) 1px, transparent 1px)',
          pointerEvents: 'none',
        }}
      />

      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
        <span className="mono-kicker" style={{ fontSize: '10px' }}>
          TECHNICAL SCHEMATIC
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--amber)',
            border: '1px solid rgba(217,140,95,0.3)',
            padding: '2px 8px',
            borderRadius: 'var(--radius-sm)',
          }}
        >
          SCREENSHOT TO BE ADDED
        </span>
      </div>

      {/* Center Mini Architecture Flow (Client -> API -> Database) */}
      <div style={{ textAlign: 'center', margin: 'auto', zIndex: 2, maxWidth: '90%' }}>
        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--ivory)', marginBottom: '16px' }}>
          {title}
        </h4>

        {/* Minimal SVG architecture flow diagram */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ border: '1px solid var(--line-strong)', padding: '6px 12px', background: 'var(--bg-1)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ivory)' }}>
            CLIENT INTERFACE
          </div>
          <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>→</span>
          <div style={{ border: '1px solid var(--line-strong)', padding: '6px 12px', background: 'var(--bg-1)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)' }}>
            API ROUTING &amp; LOGIC
          </div>
          <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>→</span>
          <div style={{ border: '1px solid var(--line-strong)', padding: '6px 12px', background: 'var(--bg-1)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--ivory)' }}>
            PERSISTENCE DATA
          </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2, paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
        <span className="mono-meta" style={{ fontSize: '10px' }}>
          SPECIFICATION // ARCHIVE
        </span>
        <span className="mono-meta" style={{ fontSize: '10px', color: 'var(--muted)' }}>
          DROP SCREENSHOT IN /public/projects/
        </span>
      </div>
    </div>
  );
}

import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export function Button({
  children,
  variant = 'solid', // 'solid' | 'ghost' | 'outline'
  href,
  onClick,
  className = '',
  external = false,
  icon = 'arrow', // 'arrow' | 'upRight' | 'none'
  ...props
}) {
  const isSolid = variant === 'solid';
  const isGhost = variant === 'ghost';
  const isOutline = variant === 'outline';

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-mono)',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    padding: '12px 20px',
    borderRadius: 'var(--radius-sm)',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
    minHeight: '44px',
    border: isSolid
      ? '1px solid var(--accent)'
      : isOutline
      ? '1px solid var(--line-strong)'
      : '1px solid transparent',
    background: isSolid
      ? 'var(--accent)'
      : isOutline
      ? 'transparent'
      : 'transparent',
    color: isSolid ? 'var(--accent-ink)' : 'var(--ivory)',
  };

  const renderIcon = () => {
    if (icon === 'upRight') return <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />;
    if (icon === 'arrow') return <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />;
    return null;
  };

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        style={baseStyle}
        className={`group ${className}`}
        {...props}
      >
        <span>{children}</span>
        {renderIcon()}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      style={baseStyle}
      className={`group ${className}`}
      {...props}
    >
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
}

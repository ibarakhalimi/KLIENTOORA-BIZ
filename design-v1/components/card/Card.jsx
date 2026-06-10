import React from 'react';

/**
 * Card — the base surface. Most of the product is cards on a tinted bg.
 * Variants cover the four surfaces in נקודה: plain, elevated, brand
 * gradient (hero) and deep/dark (feature).
 */
const VARIANTS = {
  flat:     { background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'none', color: 'var(--text-body)' },
  elevated: { background: 'var(--surface)', border: 'none', boxShadow: 'var(--shadow-sm)', color: 'var(--text-body)' },
  brand:    { background: 'var(--gradient-brand)', border: 'none', boxShadow: 'var(--shadow-brand-lg)', color: 'var(--text-on-brand)' },
  deep:     { background: 'var(--gradient-deep)', border: 'none', boxShadow: 'var(--shadow-lg)', color: 'var(--text-on-brand)' },
};

const RADII = { md: 'var(--radius-md)', lg: 'var(--radius-lg)', xl: 'var(--radius-xl)', '2xl': 'var(--radius-2xl)' };

export function Card({
  variant = 'elevated',
  radius = 'xl',
  padding = 22,
  interactive = false,
  className = '',
  style = {},
  children,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.elevated;
  return (
    <div
      className={`nk-card ${className}`.trim()}
      style={{
        position: 'relative', overflow: 'hidden',
        borderRadius: RADII[radius] || radius, padding,
        fontFamily: 'var(--font-sans)',
        transition: interactive ? 'transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)' : 'none',
        cursor: interactive ? 'pointer' : 'default',
        ...v, ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

/** CardHeader — title + optional subtitle on the start, actions on the end. */
export function CardHeader({ title, subtitle, action, style = {} }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14, ...style }}>
      <div>
        <div style={{ fontSize: 'var(--text-h4)', fontWeight: 'var(--weight-bold)', color: 'inherit' }}>{title}</div>
        {subtitle && <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: 2 }}>{subtitle}</div>}
      </div>
      {action}
    </div>
  );
}

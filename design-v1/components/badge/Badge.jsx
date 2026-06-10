import React from 'react';

/**
 * Badge — compact status / category pill. Soft (tinted) by default,
 * solid for emphasis. Optional leading dot or icon.
 */
const TONES = {
  brand:   ['var(--brand-subtle)', 'var(--brand)', 'var(--brand)', '#fff'],
  success: ['var(--success-bg)', 'var(--success)', 'var(--success)', '#fff'],
  warning: ['var(--warning-bg)', 'var(--amber-600)', 'var(--warning)', '#fff'],
  danger:  ['var(--danger-bg)', 'var(--danger)', 'var(--danger)', '#fff'],
  info:    ['var(--info-bg)', 'var(--info)', 'var(--info)', '#fff'],
  amber:   ['var(--accent-amber-bg)', 'var(--amber-600)', 'var(--accent-amber)', '#fff'],
  pink:    ['var(--accent-pink-bg)', 'var(--pink-600)', 'var(--accent-pink)', '#fff'],
  teal:    ['var(--accent-teal-bg)', 'var(--accent-teal)', 'var(--accent-teal)', '#fff'],
  neutral: ['var(--neutral-100)', 'var(--text-secondary)', 'var(--neutral-500)', '#fff'],
};

export function Badge({
  tone = 'brand',
  solid = false,
  dot = false,
  icon = null,
  size = 'md',
  children,
  style = {},
  ...rest
}) {
  const [bg, fg, solidBg, solidFg] = TONES[tone] || TONES.brand;
  const pad = size === 'sm' ? '2px 8px' : '4px 10px';
  const fs = size === 'sm' ? 11 : 12;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5, padding: pad,
      borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)', fontSize: fs, lineHeight: 1.3,
      background: solid ? solidBg : bg, color: solid ? solidFg : fg, ...style,
    }} {...rest}>
      {dot && <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'currentColor' }} />}
      {icon && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      {children}
    </span>
  );
}

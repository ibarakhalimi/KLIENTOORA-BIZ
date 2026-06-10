import React from 'react';

/**
 * ProgressRing — circular progress for goals / completion. The little
 * pop of personality on goal cards. Optional centred label.
 */
export function ProgressRing({
  value = 0,
  size = 66,
  thickness = 7,
  color = 'var(--brand)',
  track = 'var(--brand-subtle-2)',
  children,
  style = {},
}) {
  const r = (size - thickness) / 2;
  const c = size / 2;
  const circ = 2 * Math.PI * r;
  const dash = Math.max(0, Math.min(1, value / 100)) * circ;
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0, ...style }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
        <circle cx={c} cy={c} r={r} fill="none" stroke={track} strokeWidth={thickness} />
        <circle cx={c} cy={c} r={r} fill="none" stroke={color} strokeWidth={thickness}
          strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" transform={`rotate(-90 ${c} ${c})`}
          style={{ transition: 'stroke-dasharray var(--duration-slower) var(--ease-out)' }} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-extrabold)', color: 'var(--text-primary)' }}>
        {children}
      </div>
    </div>
  );
}

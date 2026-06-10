import React from 'react';

/**
 * StatTile — נקודה's signature KPI tile: a tinted icon chip beside a
 * label + big number + optional delta. The friendly heartbeat of the
 * dashboard. Use 3–4 across a grid.
 */
const TONES = {
  brand: ['var(--brand-subtle)', 'var(--brand)'],
  amber: ['var(--accent-amber-bg)', 'var(--accent-amber)'],
  pink:  ['var(--accent-pink-bg)', 'var(--accent-pink)'],
  teal:  ['var(--accent-teal-bg)', 'var(--accent-teal)'],
};

export function StatTile({
  icon = null,
  tone = 'brand',
  label,
  value,
  delta = null,
  deltaDirection = 'up',
  layout = 'row',
  style = {},
  ...rest
}) {
  const [chipBg, chipFg] = TONES[tone] || TONES.brand;
  const up = deltaDirection === 'up';
  const chip = (
    <div style={{ width: 54, height: 54, borderRadius: 'var(--radius-md)', background: chipBg,
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: chipFg }}>{icon}</div>
  );
  const body = (
    <div style={{ minWidth: 0 }}>
      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', fontWeight: 'var(--weight-medium)' }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: layout === 'row' ? 3 : 6 }}>
        <div style={{ fontSize: 26, fontWeight: 'var(--weight-extrabold)', color: 'var(--text-primary)',
          letterSpacing: 'var(--tracking-tight)', fontVariantNumeric: 'var(--num-tabular)' }}>{value}</div>
        {delta != null && (
          <span style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', color: up ? 'var(--success)' : 'var(--danger)' }}>
            {up ? '▲' : '▼'} {delta}
          </span>
        )}
      </div>
    </div>
  );
  return (
    <div style={{
      background: 'var(--surface)', borderRadius: 'var(--radius-lg)', padding: '16px 20px',
      boxShadow: 'var(--shadow-sm)', fontFamily: 'var(--font-sans)',
      display: 'flex', flexDirection: layout === 'row' ? 'row' : 'column',
      alignItems: layout === 'row' ? 'center' : 'flex-start', gap: 16, ...style,
    }} {...rest}>
      {chip}{body}
    </div>
  );
}

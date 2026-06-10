import React from 'react';

/**
 * SegmentedTabs — the pill period-switcher used across נקודה cards
 * (שבוע / חודש / רבעון). The active segment lifts onto a white chip.
 */
export function SegmentedTabs({
  options = [],
  value,
  defaultValue,
  onChange,
  size = 'md',
  style = {},
}) {
  const controlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (options[0] && (options[0].value ?? options[0])));
  const current = controlled ? value : internal;
  const pick = (v) => { if (!controlled) setInternal(v); onChange && onChange(v); };
  const pad = size === 'sm' ? '6px 13px' : '7px 16px';
  const fs = size === 'sm' ? 12.5 : 13;
  return (
    <div style={{ display: 'inline-flex', gap: 4, background: 'var(--surface-sunken)', padding: 4,
      borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans)', ...style }}>
      {options.map((o) => {
        const v = o.value ?? o;
        const label = o.label ?? o;
        const active = v === current;
        return (
          <button key={v} onClick={() => pick(v)} type="button" style={{
            padding: pad, borderRadius: 'var(--radius-xs)', border: 'none', cursor: 'pointer',
            fontFamily: 'inherit', fontSize: fs, fontWeight: 'var(--weight-semibold)',
            background: active ? 'var(--surface)' : 'transparent',
            color: active ? 'var(--brand)' : 'var(--text-muted)',
            boxShadow: active ? 'var(--shadow-xs)' : 'none',
            transition: 'var(--transition-colors)',
          }}>{label}</button>
        );
      })}
    </div>
  );
}

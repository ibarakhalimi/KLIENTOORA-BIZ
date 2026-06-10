import React from 'react';

/**
 * Input — text field with optional leading icon and label. Rounded,
 * soft border, brand focus ring. Covers search, text and number fields.
 */
let _injected = false;
function injectOnce() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.id = 'nk-input-styles';
  el.textContent = `
  .nk-field{display:flex;align-items:center;gap:9px;background:var(--surface);
    border:1.5px solid var(--border);border-radius:var(--radius-sm);padding:0 13px;height:var(--field-h);
    transition:var(--transition-colors),box-shadow var(--duration-fast) var(--ease-out);}
  .nk-field:focus-within{border-color:var(--brand);box-shadow:var(--ring);}
  .nk-field[data-disabled="true"]{opacity:.55;pointer-events:none;}
  .nk-field__icon{display:inline-flex;color:var(--text-faint);flex-shrink:0;}
  .nk-field input{flex:1;min-width:0;border:none;outline:none;background:transparent;
    font-family:var(--font-sans);font-size:var(--text-base);color:var(--text-primary);}
  .nk-field input::placeholder{color:var(--text-faint);}`;
  document.head.appendChild(el);
}

export function Input({
  icon = null,
  label = null,
  hint = null,
  size = 'md',
  disabled = false,
  style = {},
  id,
  ...rest
}) {
  injectOnce();
  const fid = id || (label ? 'nk-' + Math.random().toString(36).slice(2, 8) : undefined);
  const h = size === 'sm' ? 38 : size === 'lg' ? 52 : 44;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && <label htmlFor={fid} style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-semibold)', color: 'var(--text-body)' }}>{label}</label>}
      <div className="nk-field" data-disabled={disabled} style={{ height: h }}>
        {icon && <span className="nk-field__icon">{icon}</span>}
        <input id={fid} disabled={disabled} {...rest} />
      </div>
      {hint && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{hint}</span>}
    </div>
  );
}

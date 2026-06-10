import React from 'react';

/**
 * Button — נקודה's primary action element.
 * Rounded, friendly, token-driven. Five variants × three sizes.
 */
let _injected = false;
function injectOnce() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const css = `
  .nk-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;
    font-family:var(--font-sans);font-weight:var(--weight-semibold);border:1.5px solid transparent;
    border-radius:var(--radius-sm);cursor:pointer;white-space:nowrap;text-decoration:none;
    transition:var(--transition-colors),box-shadow var(--duration-fast) var(--ease-out),transform var(--duration-fast) var(--ease-out);}
  .nk-btn:active{transform:translateY(1px) scale(0.99);}
  .nk-btn:focus-visible{outline:none;box-shadow:var(--ring);}
  .nk-btn[disabled]{opacity:0.5;pointer-events:none;}
  .nk-btn--sm{height:36px;padding:0 14px;font-size:13px;}
  .nk-btn--md{height:44px;padding:0 18px;font-size:14px;}
  .nk-btn--lg{height:52px;padding:0 24px;font-size:15.5px;border-radius:var(--radius-md);}
  .nk-btn--full{width:100%;}
  .nk-btn--primary{background:var(--brand);color:var(--brand-on);box-shadow:var(--shadow-brand);}
  .nk-btn--primary:hover{background:var(--brand-hover);}
  .nk-btn--secondary{background:var(--surface);color:var(--text-body);border-color:var(--border-strong);}
  .nk-btn--secondary:hover{background:var(--neutral-50);border-color:var(--neutral-400);}
  .nk-btn--subtle{background:var(--brand-subtle);color:var(--brand);}
  .nk-btn--subtle:hover{background:var(--brand-subtle-2);}
  .nk-btn--ghost{background:transparent;color:var(--text-secondary);}
  .nk-btn--ghost:hover{background:var(--neutral-100);color:var(--text-primary);}
  .nk-btn--danger{background:var(--danger);color:#fff;}
  .nk-btn--danger:hover{background:var(--red-600);}`;
  const el = document.createElement('style');
  el.id = 'nk-btn-styles'; el.textContent = css;
  document.head.appendChild(el);
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon = null,
  iconPosition = 'start',
  fullWidth = false,
  as = 'button',
  className = '',
  children,
  ...rest
}) {
  injectOnce();
  const Tag = as;
  const cls = `nk-btn nk-btn--${variant} nk-btn--${size}${fullWidth ? ' nk-btn--full' : ''} ${className}`.trim();
  return (
    <Tag className={cls} {...rest}>
      {icon && iconPosition === 'start' && <span className="nk-btn__icon" style={{ display: 'inline-flex' }}>{icon}</span>}
      {children}
      {icon && iconPosition === 'end' && <span className="nk-btn__icon" style={{ display: 'inline-flex' }}>{icon}</span>}
    </Tag>
  );
}

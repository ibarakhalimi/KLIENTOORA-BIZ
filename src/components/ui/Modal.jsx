import React from 'react';
import { Icon } from './Icon.jsx';

/**
 * Modal — centered dialog over a dimmed backdrop. Closes on backdrop
 * click, the X button or Escape. Body and footer come in as children.
 */
let _injected = false;
function injectOnce() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const el = document.createElement('style');
  el.id = 'nk-modal-styles';
  el.textContent = `
  .nk-modal__backdrop{position:fixed;inset:0;z-index:100;display:flex;align-items:center;
    justify-content:center;padding:20px;background:rgba(28,25,38,0.45);
    animation:nk-modal-fade var(--duration-fast) var(--ease-out);}
  .nk-modal{width:100%;max-width:520px;max-height:calc(100vh - 40px);overflow-y:auto;
    background:var(--surface);border-radius:var(--radius-lg);box-shadow:var(--shadow-lg);
    padding:24px;animation:nk-modal-pop var(--duration-base) var(--ease-out);}
  @keyframes nk-modal-fade{from{opacity:0;}to{opacity:1;}}
  @keyframes nk-modal-pop{from{opacity:0;transform:translateY(10px) scale(0.98);}
    to{opacity:1;transform:none;}}`;
  document.head.appendChild(el);
}

export function Modal({ open, onClose, title, subtitle = null, children }) {
  injectOnce();

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="nk-modal__backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="nk-modal" role="dialog" aria-modal="true" aria-label={title}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 18 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h2 style={{ fontSize: 'var(--text-h3)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' }}>
              {title}
            </h2>
            {subtitle && (
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: 3 }}>{subtitle}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="סגירה"
            style={{
              border: 'none', background: 'var(--neutral-100)', color: 'var(--text-secondary)',
              width: 34, height: 34, borderRadius: 'var(--radius-sm)', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}
          >
            <Icon name="x" size={17} sw={2.2} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

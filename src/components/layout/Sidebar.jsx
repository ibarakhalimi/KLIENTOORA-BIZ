import React from 'react';
import { Icon } from '../ui/index.js';

/**
 * Sidebar — full labelled navigation (244px). On narrow screens it becomes
 * a slide-in overlay, controlled by Layout via `open` / `onClose`.
 */
export function Sidebar({ items, current, onNavigate, open, onClose }) {
  return (
    <>
      <div className={`sidebar-backdrop${open ? ' open' : ''}`} onClick={onClose} />
      <aside className={`app-sidebar${open ? ' open' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 9px', marginBottom: 22 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--brand)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-brand)',
          }}>
            <Icon name="heart" size={22} stroke="#fff" sw={2} />
          </div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 'var(--weight-extrabold)', color: 'var(--text-primary)', letterSpacing: 'var(--tracking-tight)' }}>
              נְקוּדָה
            </div>
            <div style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-faint)' }}>ניהול מועדון לקוחות</div>
          </div>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
          {items.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`nav-item${item.key === current ? ' active' : ''}`}
              onClick={() => onNavigate(item.key)}
            >
              <Icon name={item.icon} size={20} sw={1.8} />
              {item.label}
            </button>
          ))}
        </nav>

        <button type="button" className="nav-item" onClick={() => {}}>
          <Icon name="logout" size={20} sw={1.8} />
          התנתקות
        </button>
      </aside>
    </>
  );
}

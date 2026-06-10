import React from 'react';
import { Avatar, Icon, Input } from '../ui/index.js';
import { currentUser } from '../../data/mockData.js';

/**
 * Topbar — quick search, notifications and the signed-in user.
 * The hamburger button appears only on narrow screens (opens the sidebar).
 */
export function Topbar({ onMenuClick }) {
  return (
    <header className="app-topbar">
      <button type="button" className="icon-btn topbar-menu-btn" onClick={onMenuClick} aria-label="פתיחת תפריט">
        <Icon name="menu" size={21} sw={1.9} />
      </button>

      <div className="topbar-search" style={{ width: 320, maxWidth: '40vw' }}>
        <Input icon={<Icon name="search" size={18} />} placeholder="חיפוש מהיר…" size="sm" />
      </div>

      <div style={{ marginInlineStart: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
        <button type="button" className="icon-btn" aria-label="התראות">
          <Icon name="bell" size={20} sw={1.8} />
          <span style={{
            position: 'absolute', top: 11, insetInlineEnd: 12, width: 8, height: 8,
            borderRadius: '50%', background: 'var(--accent-pink)', border: '2px solid var(--surface)',
          }} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <Avatar name={currentUser.name} size={36} />
          <div style={{ lineHeight: 1.25 }}>
            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-primary)' }}>
              {currentUser.name}
            </div>
            <div style={{ fontSize: 'var(--text-2xs)', color: 'var(--text-faint)' }}>{currentUser.role}</div>
          </div>
        </div>
      </div>
    </header>
  );
}

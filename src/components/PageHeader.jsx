import React from 'react';

/** PageHeader — page title + optional subtitle, with actions on the end. */
export function PageHeader({ title, subtitle, action }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
      gap: 16, flexWrap: 'wrap', marginBottom: 22,
    }}>
      <div>
        <h1 style={{ fontSize: 'var(--text-h2)', fontWeight: 'var(--weight-extrabold)' }}>{title}</h1>
        {subtitle && (
          <p style={{ marginTop: 4, fontSize: 'var(--text-base)', color: 'var(--text-muted)' }}>{subtitle}</p>
        )}
      </div>
      {action}
    </div>
  );
}

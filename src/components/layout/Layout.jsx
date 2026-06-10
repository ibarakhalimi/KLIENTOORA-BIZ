import React from 'react';
import { Sidebar } from './Sidebar.jsx';
import { Topbar } from './Topbar.jsx';

/** Layout — the dashboard shell: sidebar + topbar + scrolling content area. */
export function Layout({ nav, current, onNavigate, children }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const navigate = (key) => {
    onNavigate(key);
    setSidebarOpen(false);
  };

  return (
    <div className="app-shell" dir="rtl">
      <Sidebar
        items={nav}
        current={current}
        onNavigate={navigate}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="app-main">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="app-content">{children}</main>
      </div>
    </div>
  );
}

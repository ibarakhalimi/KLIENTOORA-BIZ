import React from 'react';

/**
 * Icon — inline line-icon set ported from design-v1 (ui_kits/.../atoms.jsx).
 * 24-grid, 1.7 stroke, rounded caps — matches the Lucide/Feather style the
 * system recommends. Swap for Lucide later without changing call sites.
 */
const PATHS = {
  overview: <><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="3" y="15" width="7" height="6" rx="1.5"/><rect x="14" y="3" width="7" height="6" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/></>,
  users:    <><circle cx="9" cy="8" r="3.2"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M16 5.2a3.2 3.2 0 0 1 0 6"/><path d="M17.5 14.4A5.5 5.5 0 0 1 20.5 19.4"/></>,
  gift:     <><rect x="3" y="9" width="18" height="5" rx="1"/><path d="M5 14v7h14v-7M12 9v12"/><path d="M12 9S10.5 4 8 4a2 2 0 0 0 0 5zM12 9s1.5-5 4-5a2 2 0 0 1 0 5z"/></>,
  megaphone:<><path d="M3 11v2a1 1 0 0 0 1 1h2l4 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M14 8a4 4 0 0 1 0 8M10 18v2a1 1 0 0 0 1 1h1"/></>,
  chart:    <><path d="M4 20V4M4 20h16"/><path d="M8 16l3.5-4 3 2.5L20 8"/></>,
  settings: <><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></>,
  search:   <><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></>,
  bell:     <><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z"/><path d="M10 20a2 2 0 0 0 4 0"/></>,
  star:     <path d="M12 3l2.5 5.5L20 9.3l-4 4 1 5.7-5-2.9-5 2.9 1-5.7-4-4 5.5-.8z"/>,
  coin:     <><circle cx="12" cy="12" r="8.5"/><path d="M12 7v10M9.5 9.2c0-1 1-1.7 2.5-1.7s2.5.7 2.5 1.6c0 2.4-5 1.2-5 3.6 0 1 1 1.7 2.5 1.7s2.5-.7 2.5-1.6"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></>,
  plus:     <path d="M12 5v14M5 12h14"/>,
  chevDown: <path d="M6 9l6 6 6-6"/>,
  coffee:   <><path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8z"/><path d="M17 9h2.5a2.5 2.5 0 0 1 0 5H17"/><path d="M7 3.5v1.5M11 3.5v1.5"/></>,
  percent:  <><circle cx="7.5" cy="7.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/><path d="M18 6L6 18"/></>,
  sparkles: <><path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6z"/><path d="M18 4l.7 1.8L20.5 6.5l-1.8.7L18 9l-.7-1.8L15.5 6.5l1.8-.7z"/></>,
  crown:    <path d="M4 18h16M4 18l-1-9 5 4 4-7 4 7 5-4-1 9z"/>,
  arrowR:   <path d="M5 12h14M13 6l6 6-6 6"/>,
  filter:   <path d="M3 5h18l-7 8v6l-4-2v-4z"/>,
  dots:     <><circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/></>,
  logout:   <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/></>,
  heart:    <path d="M12 20S4 14.5 4 9a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 5.5-8 11-8 11z"/>,
  target:   <><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/></>,
  menu:     <path d="M4 6h16M4 12h16M4 18h16"/>,
  x:        <path d="M6 6l12 12M18 6L6 18"/>,
  download: <><path d="M12 4v11M7 10l5 5 5-5"/><path d="M4 20h16"/></>,
  message:  <path d="M21 12a8 8 0 0 1-8 8H4l2.2-3.4A8 8 0 1 1 21 12z"/>,
  eye:      <><path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></>,
  wallet:   <><rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 10h18"/><path d="M15.5 14.5h2"/></>,
  creditCard:<><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3 10h18M7 15h4"/></>,
  store:    <><path d="M4 9l1.2-5h13.6L20 9"/><path d="M4 9a2.7 2.7 0 0 0 5.4 0A2.7 2.7 0 0 0 14.7 9 2.7 2.7 0 0 0 20 9"/><path d="M5 11.5V21h14v-9.5"/><path d="M9.5 21v-5h5v5"/></>,
};

export function Icon({ name, size = 20, stroke = 'currentColor', sw = 1.7, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke}
      strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={style}>
      {PATHS[name] || null}
    </svg>
  );
}

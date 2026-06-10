// shared.jsx — design tokens + atoms for the loyalty-club dashboard directions
// Exports to window: TOK, Icon, Avatar, AreaChart, BarChart, Donut, Sparkline, Ring, fmt

const TOK = {
  // brand
  purple:    '#5b21b6',
  purple700: '#6d28d9',
  purple600: '#7c3aed',
  purple500: '#8b5cf6',
  purple400: '#a78bfa',
  purple300: '#c4b5fd',
  purple200: '#ddd6fe',
  purple100: '#ede9fe',
  purple50:  '#f5f3ff',
  // accents (fun pops)
  amber:  '#f59e0b',
  amber100:'#fef3c7',
  pink:   '#ec4899',
  pink100:'#fce7f3',
  teal:   '#0d9488',
  teal100:'#ccfbf1',
  green:  '#16a34a',
  green100:'#dcfce7',
  rose:   '#e11d48',
  // neutrals (cool, purple-tinted)
  ink:    '#1c1530',
  ink70:  '#4a4263',
  body:   '#3b3551',
  muted:  '#6b6880',
  faint:  '#9b97ad',
  line:   '#ece9f4',
  line2:  '#f3f1f9',
  bg:     '#f6f5fb',
  card:   '#ffffff',
  white:  '#ffffff',
};
TOK.ink70 = '#4a4263';

const fmt = (n) => n.toLocaleString('he-IL');

// ── Icon set ─────────────────────────────────────────────────
function Icon({ name, size = 20, stroke = 'currentColor', sw = 1.7, style }) {
  const p = {
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
    up:       <path d="M5 15l7-7 7 7"/>,
    down:     <path d="M5 9l7 7 7-7"/>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></>,
    plus:     <path d="M12 5v14M5 12h14"/>,
    chevDown: <path d="M6 9l6 6 6-6"/>,
    chevL:    <path d="M14 6l-6 6 6 6"/>,
    coffee:   <><path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8z"/><path d="M17 9h2.5a2.5 2.5 0 0 1 0 5H17"/><path d="M7 3.5v1.5M11 3.5v1.5"/></>,
    percent:  <><circle cx="7.5" cy="7.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/><path d="M18 6L6 18"/></>,
    cake:     <><path d="M4 21h16M5 21v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7"/><path d="M4 15c1.2 0 1.2 1 2.4 1s1.2-1 2.4-1 1.2 1 2.4 1 1.2-1 2.4-1 1.2 1 2.4 1 1.2-1 2.4-1"/><path d="M12 8V5M12 5l1-1.5L12 2l-1 1.5z" fill="currentColor"/></>,
    truck:    <><path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></>,
    sparkles: <><path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6z"/><path d="M18 4l.7 1.8L20.5 6.5l-1.8.7L18 9l-.7-1.8L15.5 6.5l1.8-.7z"/></>,
    crown:    <path d="M4 18h16M4 18l-1-9 5 4 4-7 4 7 5-4-1 9z"/>,
    arrowR:   <path d="M5 12h14M13 6l6 6-6 6"/>,
    filter:   <path d="M3 5h18l-7 8v6l-4-2v-4z"/>,
    dots:     <><circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/></>,
    logout:   <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/></>,
    heart:    <path d="M12 20S4 14.5 4 9a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 5.5-8 11-8 11z"/>,
    target:   <><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/></>,
  }[name] || null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke}
      strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={style}>{p}</svg>
  );
}

// ── Avatar (initials on tinted disc) ─────────────────────────
const AV_TINTS = [
  ['#ede9fe', '#6d28d9'], ['#fce7f3', '#be185d'], ['#fef3c7', '#b45309'],
  ['#ccfbf1', '#0f766e'], ['#dcfce7', '#15803d'], ['#dbeafe', '#1d4ed8'],
];
function Avatar({ name = '', size = 38, ring }) {
  const init = name.trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join('');
  let h = 0; for (const c of name) h = (h * 31 + c.charCodeAt(0)) % AV_TINTS.length;
  const [bg, fg] = AV_TINTS[h];
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', background: bg, color: fg,
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      fontWeight: 600, fontSize: size * 0.4, boxShadow: ring ? `0 0 0 2.5px ${ring}, 0 0 0 4px ${bg}` : 'none' }}>{init}</div>
  );
}

// ── chart geometry helpers ───────────────────────────────────
function smoothPath(pts) {
  if (pts.length < 2) return '';
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x} ${c1y} ${c2x} ${c2y} ${p2[0]} ${p2[1]}`;
  }
  return d;
}

// AreaChart — smooth area + line, optional gridlines & dots
function AreaChart({ data, w = 600, h = 220, color = TOK.purple600, fill = TOK.purple100,
  pad = { t: 16, r: 8, b: 28, l: 8 }, labels, grid = true, dot }) {
  const max = Math.max(...data) * 1.12, min = Math.min(...data) * 0.86;
  const iw = w - pad.l - pad.r, ih = h - pad.t - pad.b;
  const x = (i) => pad.l + (i / (data.length - 1)) * iw;
  const y = (v) => pad.t + ih - ((v - min) / (max - min)) * ih;
  const pts = data.map((v, i) => [x(i), y(v)]);
  const line = smoothPath(pts);
  const area = `${line} L ${pad.l + iw} ${pad.t + ih} L ${pad.l} ${pad.t + ih} Z`;
  const gid = 'ag' + Math.round(w + h + data[0]);
  const rows = 4;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', overflow: 'visible' }}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={fill} stopOpacity="0.9"/>
          <stop offset="1" stopColor={fill} stopOpacity="0.05"/>
        </linearGradient>
      </defs>
      {grid && [...Array(rows)].map((_, r) => {
        const gy = pad.t + (r / (rows - 1)) * ih;
        return <line key={r} x1={pad.l} y1={gy} x2={pad.l + iw} y2={gy} stroke={TOK.line} strokeWidth="1" strokeDasharray={r === rows - 1 ? '0' : '4 5'} />;
      })}
      <path d={area} fill={`url(#${gid})`} />
      <path d={line} fill="none" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
      {dot != null && <g><circle cx={x(dot)} cy={y(data[dot])} r="9" fill={color} opacity="0.18"/><circle cx={x(dot)} cy={y(data[dot])} r="4.5" fill={color} stroke="#fff" strokeWidth="2.5"/></g>}
      {labels && labels.map((l, i) => (
        <text key={i} x={x(i)} y={h - 6} textAnchor="middle" fontSize="12.5" fill={TOK.faint} fontFamily="Rubik, sans-serif">{l}</text>
      ))}
    </svg>
  );
}

// BarChart — rounded bars; supports two-tone (active index)
function BarChart({ data, w = 600, h = 220, color = TOK.purple500, activeColor = TOK.purple,
  labels, active, pad = { t: 16, r: 6, b: 28, l: 6 }, bw = 0.5 }) {
  const max = Math.max(...data) * 1.1;
  const iw = w - pad.l - pad.r, ih = h - pad.t - pad.b;
  const slot = iw / data.length;
  const barW = slot * bw;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block' }}>
      {[...Array(4)].map((_, r) => {
        const gy = pad.t + (r / 3) * ih;
        return <line key={r} x1={pad.l} y1={gy} x2={pad.l + iw} y2={gy} stroke={TOK.line} strokeWidth="1" strokeDasharray={r === 3 ? '0' : '4 5'} />;
      })}
      {data.map((v, i) => {
        const bh = Math.max(4, (v / max) * ih);
        const bx = pad.l + i * slot + (slot - barW) / 2;
        const by = pad.t + ih - bh;
        const c = active === i ? activeColor : color;
        return <rect key={i} x={bx} y={by} width={barW} height={bh} rx={Math.min(barW / 2, 7)} fill={c} />;
      })}
      {labels && labels.map((l, i) => (
        <text key={i} x={pad.l + i * slot + slot / 2} y={h - 6} textAnchor="middle" fontSize="12.5" fill={TOK.faint} fontFamily="Rubik, sans-serif">{l}</text>
      ))}
    </svg>
  );
}

// Donut / Ring with multiple segments
function Donut({ segments, size = 180, thickness = 26, gap = 0.04, center }) {
  const r = (size - thickness) / 2, c = size / 2, circ = 2 * Math.PI * r;
  const total = segments.reduce((s, x) => s + x.value, 0);
  let acc = 0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={c} cy={c} r={r} fill="none" stroke={TOK.line2} strokeWidth={thickness} />
      {segments.map((s, i) => {
        const frac = s.value / total;
        const len = Math.max(0, (frac - gap) * circ);
        const off = acc * circ;
        acc += frac;
        return <circle key={i} cx={c} cy={c} r={r} fill="none" stroke={s.color} strokeWidth={thickness}
          strokeDasharray={`${len} ${circ - len}`} strokeDashoffset={-off} strokeLinecap="round"
          transform={`rotate(-90 ${c} ${c})`} />;
      })}
      {center && <foreignObject x="0" y="0" width={size} height={size}>
        <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: size, height: size, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Rubik, sans-serif' }}>{center}</div>
      </foreignObject>}
    </svg>
  );
}

// Sparkline — tiny smooth line
function Sparkline({ data, w = 120, h = 40, color = TOK.purple500, fill }) {
  const max = Math.max(...data), min = Math.min(...data);
  const x = (i) => (i / (data.length - 1)) * w;
  const y = (v) => h - 3 - ((v - min) / (max - min || 1)) * (h - 6);
  const pts = data.map((v, i) => [x(i), y(v)]);
  const line = smoothPath(pts);
  const gid = 'sp' + Math.round(w + h + data.length + data[0]);
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block', overflow: 'visible' }}>
      {fill && <defs><linearGradient id={gid} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={fill} stopOpacity="0.5"/><stop offset="1" stopColor={fill} stopOpacity="0"/></linearGradient></defs>}
      {fill && <path d={`${line} L ${w} ${h} L 0 ${h} Z`} fill={`url(#${gid})`} />}
      <path d={line} fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

// Ring — single-value progress ring
function Ring({ value, size = 54, thickness = 6, color = TOK.purple600, track = TOK.purple100, children }) {
  const r = (size - thickness) / 2, c = size / 2, circ = 2 * Math.PI * r;
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={c} cy={c} r={r} fill="none" stroke={track} strokeWidth={thickness} />
        <circle cx={c} cy={c} r={r} fill="none" stroke={color} strokeWidth={thickness}
          strokeDasharray={`${(value / 100) * circ} ${circ}`} strokeLinecap="round" transform={`rotate(-90 ${c} ${c})`} />
      </svg>
      {children && <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{children}</div>}
    </div>
  );
}

Object.assign(window, { TOK, Icon, Avatar, AreaChart, BarChart, Donut, Sparkline, Ring, fmt });

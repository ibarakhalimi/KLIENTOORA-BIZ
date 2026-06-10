import React from 'react';

/**
 * Avatar — initials on a deterministic tinted disc, or an image.
 * Same name always maps to the same tint, so members stay recognisable.
 */
const TINTS = [
  ['var(--purple-100)', 'var(--purple-700)'],
  ['var(--pink-100)',   'var(--pink-600)'],
  ['var(--amber-100)',  'var(--amber-600)'],
  ['var(--teal-100)',   'var(--teal-600)'],
  ['var(--green-100)',  'var(--green-600)'],
  ['var(--blue-100)',   'var(--blue-500)'],
];

function initialsOf(name = '') {
  return name.trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join('');
}

export function Avatar({ name = '', src = null, size = 40, ring = null, style = {}, ...rest }) {
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) % TINTS.length;
  const [bg, fg] = TINTS[h];
  const base = {
    width: size, height: size, borderRadius: '50%', flexShrink: 0,
    boxShadow: ring ? `0 0 0 2.5px ${ring}, 0 0 0 5px var(--surface)` : 'none',
    ...style,
  };
  if (src) {
    return <img src={src} alt={name} style={{ ...base, objectFit: 'cover' }} {...rest} />;
  }
  return (
    <div style={{
      ...base, background: bg, color: fg, display: 'flex', alignItems: 'center',
      justifyContent: 'center', fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)',
      fontSize: size * 0.4,
    }} {...rest}>{initialsOf(name)}</div>
  );
}

/** AvatarStack — overlapping row with optional "+N" overflow chip. */
export function AvatarStack({ names = [], size = 34, max = 4, ringColor = 'var(--surface)' }) {
  const shown = names.slice(0, max);
  const extra = names.length - shown.length;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {shown.map((n, i) => (
        <div key={i} style={{ marginInlineStart: i ? -size * 0.32 : 0, borderRadius: '50%', boxShadow: `0 0 0 2.5px ${ringColor}` }}>
          <Avatar name={n} size={size} />
        </div>
      ))}
      {extra > 0 && (
        <div style={{ marginInlineStart: -size * 0.32, width: size, height: size, borderRadius: '50%',
          background: 'var(--neutral-200)', color: 'var(--text-secondary)', boxShadow: `0 0 0 2.5px ${ringColor}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)',
          fontWeight: 'var(--weight-bold)', fontSize: size * 0.34 }}>+{extra}</div>
      )}
    </div>
  );
}

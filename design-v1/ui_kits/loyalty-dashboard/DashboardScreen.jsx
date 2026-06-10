// dashB.jsx — Direction B · "כרטיסים ידידותיים" (Friendly, playful cards)
function DashboardB() {
  const months = ['ש1', 'ש2', 'ש3', 'ש4', 'ש5', 'ש6', 'ש7', 'ש8'];
  const pts = [320, 410, 380, 520, 470, 610, 580, 720];

  const nav = ['סקירה', 'חברים', 'הטבות', 'קמפיינים', 'אנליטיקס'];

  const tiles = [
    { ic: 'users', label: 'חברים פעילים', value: '1,236', delta: '+8%', up: true, color: TOK.purple600, tint: TOK.purple100 },
    { ic: 'coin', label: 'נקודות החודש', value: '24,800', delta: '+5.6%', up: true, color: TOK.amber, tint: TOK.amber100 },
    { ic: 'gift', label: 'הטבות מומשו', value: '312', delta: '+3.1%', up: true, color: TOK.pink, tint: TOK.pink100 },
    { ic: 'sparkles', label: 'חברים חדשים', value: '184', delta: '+22%', up: true, color: TOK.teal, tint: TOK.teal100 },
  ];

  const feed = [
    ['דנה כהן', 'הצטרפה למועדון', 'לפני 8 דקות', 'sparkles', TOK.teal, TOK.teal100],
    ['מאיה אברהם', 'מימשה קפה חינם ☕', 'לפני 24 דקות', 'gift', TOK.pink, TOK.pink100],
    ['יוסי לוי', 'עלה לדרגת זהב 🏆', 'לפני שעה', 'crown', TOK.amber, TOK.amber100],
    ['נועה פרץ', 'צברה 250 נקודות', 'לפני שעתיים', 'coin', TOK.purple600, TOK.purple100],
  ];

  const goals = [
    { label: 'חברים חדשים', cur: 184, target: 250, color: TOK.purple600, track: TOK.purple100 },
    { label: 'מימושי הטבות', cur: 312, target: 400, color: TOK.amber, track: TOK.amber100 },
  ];

  return (
    <div dir="rtl" style={{ width: 1360, height: 940, background: '#f7f5fc', fontFamily: 'Rubik, sans-serif', color: TOK.body, padding: '22px 26px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

      {/* top nav */}
      <header style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 40, height: 40, borderRadius: 13, background: TOK.purple, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 5px 14px ${TOK.purple}45` }}>
            <Icon name="heart" size={22} stroke="#fff" sw={2} />
          </div>
          <span style={{ fontSize: 19, fontWeight: 800, color: TOK.ink, letterSpacing: '-0.3px' }}>נְקוּדָה</span>
        </div>
        <nav style={{ display: 'flex', gap: 4, background: '#fff', padding: 5, borderRadius: 14, boxShadow: '0 1px 3px rgba(28,21,48,0.05)' }}>
          {nav.map((n, i) => (
            <div key={n} style={{ padding: '9px 18px', borderRadius: 10, fontSize: 14, fontWeight: i === 0 ? 600 : 500,
              background: i === 0 ? TOK.purple : 'transparent', color: i === 0 ? '#fff' : TOK.muted, cursor: 'pointer' }}>{n}</div>
          ))}
        </nav>
        <div style={{ marginInlineStart: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 13, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', boxShadow: '0 1px 3px rgba(28,21,48,0.05)' }}>
            <Icon name="bell" size={20} stroke={TOK.body} />
            <div style={{ position: 'absolute', top: 11, left: 12, width: 8, height: 8, borderRadius: 4, background: TOK.pink, border: '2px solid #fff' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, background: '#fff', padding: '6px 14px 6px 6px', borderRadius: 13, boxShadow: '0 1px 3px rgba(28,21,48,0.05)' }}>
            <Avatar name="נטע גל" size={34} />
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: TOK.ink }}>נטע גל</div>
              <div style={{ fontSize: 11.5, color: TOK.faint }}>מנהלת מועדון</div>
            </div>
          </div>
        </div>
      </header>

      {/* hero greeting */}
      <div style={{ position: 'relative', borderRadius: 24, padding: '16px 28px', marginBottom: 10, overflow: 'hidden',
        background: `linear-gradient(115deg, ${TOK.purple} 0%, ${TOK.purple600} 55%, ${TOK.purple500} 100%)`, color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: `0 14px 34px ${TOK.purple}38`, flexShrink: 0 }}>
        <div style={{ position: 'absolute', top: -60, left: 120, width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ position: 'absolute', bottom: -90, left: -10, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.4px', marginBottom: 6 }}>היי נטע, ברוכה הבאה 👋</div>
          <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', maxWidth: 460, lineHeight: 1.5 }}>
            הקהילה שלך גדלה ב-<b style={{ color: '#fff' }}>184 חברים</b> החודש 🎉 הנה מה שקורה במועדון היום.
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 14 }}>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '11px 20px', borderRadius: 12, border: 'none', background: '#fff', color: TOK.purple, fontWeight: 700, fontSize: 14.5, fontFamily: 'inherit', cursor: 'pointer', boxShadow: '0 6px 18px rgba(0,0,0,0.16)' }}>
              <Icon name="megaphone" size={18} stroke={TOK.purple} sw={2} />שגר מבצע חדש
            </button>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '11px 20px', borderRadius: 12, border: '1.5px solid rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.12)', color: '#fff', fontWeight: 600, fontSize: 14.5, fontFamily: 'inherit', cursor: 'pointer' }}>
              <Icon name="plus" size={18} stroke="#fff" sw={2.2} />הוסף הטבה
            </button>
          </div>
        </div>
        <div style={{ position: 'relative', display: 'flex', gap: 14 }}>
          {[['סך חברים', '4,820', 'users'], ['שביעות רצון', '94%', 'heart']].map(([l, v, ic]) => (
            <div key={l} style={{ background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 18, padding: '16px 20px', minWidth: 132 }}>
              <div style={{ width: 38, height: 38, borderRadius: 11, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                <Icon name={ic} size={20} stroke="#fff" sw={1.9} />
              </div>
              <div style={{ fontSize: 25, fontWeight: 800, letterSpacing: '-0.5px' }}>{v}</div>
              <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.8)', marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* stat tiles */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 10, flexShrink: 0 }}>
        {tiles.map((t) => (
          <div key={t.label} style={{ background: '#fff', borderRadius: 20, padding: '15px 20px', boxShadow: '0 2px 8px rgba(28,21,48,0.05)', display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 54, height: 54, borderRadius: 16, background: t.tint, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name={t.ic} size={26} stroke={t.color} sw={1.9} />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 13.5, color: TOK.muted, fontWeight: 500 }}>{t.label}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 3 }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: TOK.ink, letterSpacing: '-0.5px' }}>{t.value}</div>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: TOK.green }}>{t.delta}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* chart + goals */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 16, marginBottom: 10, flexShrink: 0 }}>
        <div style={{ background: '#fff', borderRadius: 22, padding: '16px 24px 8px', boxShadow: '0 2px 8px rgba(28,21,48,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: TOK.ink }}>פעילות נקודות 📈</div>
              <div style={{ fontSize: 13, color: TOK.muted, marginTop: 2 }}>נקודות שנצברו ב-8 השבועות האחרונים</div>
            </div>
            <div style={{ display: 'flex', gap: 4, background: '#f4f1fb', padding: 4, borderRadius: 11 }}>
              {['שבוע', 'חודש', 'רבעון'].map((t, i) => (
                <div key={t} style={{ padding: '7px 15px', borderRadius: 8, fontSize: 12.5, fontWeight: 600, cursor: 'pointer',
                  background: i === 0 ? '#fff' : 'transparent', color: i === 0 ? TOK.purple : TOK.muted, boxShadow: i === 0 ? '0 1px 3px rgba(28,21,48,0.1)' : 'none' }}>{t}</div>
              ))}
            </div>
          </div>
          <BarChart data={pts} labels={months} w={780} h={150} color={TOK.purple300} activeColor={TOK.purple600} active={7} bw={0.46} />
        </div>

        <div style={{ background: '#fff', borderRadius: 22, padding: '16px 24px', boxShadow: '0 2px 8px rgba(28,21,48,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <Icon name="target" size={20} stroke={TOK.purple} sw={1.9} />
            <span style={{ fontSize: 17, fontWeight: 700, color: TOK.ink }}>יעדי החודש</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {goals.map((g) => {
              const pct = Math.round((g.cur / g.target) * 100);
              return (
                <div key={g.label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <Ring value={pct} size={66} thickness={7} color={g.color} track={g.track}>
                    <span style={{ fontSize: 15, fontWeight: 800, color: TOK.ink }}>{pct}%</span>
                  </Ring>
                  <div>
                    <div style={{ fontSize: 14.5, fontWeight: 600, color: TOK.ink }}>{g.label}</div>
                    <div style={{ fontSize: 13, color: TOK.muted, marginTop: 3 }}>
                      <b style={{ color: g.color, fontWeight: 700 }}>{fmt(g.cur)}</b> מתוך {fmt(g.target)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 18, padding: '13px 15px', borderRadius: 14, background: TOK.purple50, display: 'flex', alignItems: 'center', gap: 11 }}>
            <div style={{ fontSize: 22 }}>🎯</div>
            <div style={{ fontSize: 13, color: TOK.purple, fontWeight: 500, lineHeight: 1.4 }}>אתם <b>74%</b> מהיעד — עוד 66 חברים לסיום מעולה!</div>
          </div>
        </div>
      </div>

      {/* feed + promo */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 16, flex: 1, minHeight: 0 }}>
        <div style={{ background: '#fff', borderRadius: 22, padding: '18px 22px', boxShadow: '0 2px 8px rgba(28,21,48,0.05)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 17, fontWeight: 700, color: TOK.ink }}>פעילות אחרונה ✨</span>
            <span style={{ fontSize: 13.5, fontWeight: 600, color: TOK.purple, cursor: 'pointer' }}>הצג הכל</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {feed.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '4px 0', borderTop: i ? `1px solid ${TOK.line2}` : 'none' }}>
                <Avatar name={f[0]} size={38} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, color: TOK.ink }}><b style={{ fontWeight: 600 }}>{f[0]}</b> <span style={{ color: TOK.muted, fontWeight: 500 }}>{f[1]}</span></div>
                  <div style={{ fontSize: 12.5, color: TOK.faint, marginTop: 2 }}>{f[2]}</div>
                </div>
                <div style={{ width: 36, height: 36, borderRadius: 11, background: f[5], display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={f[3]} size={18} stroke={f[4]} sw={1.9} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderRadius: 22, padding: '24px', position: 'relative', overflow: 'hidden', color: '#fff',
          background: `linear-gradient(140deg, ${TOK.ink} 0%, ${TOK.purple} 90%)`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ position: 'absolute', top: -40, left: -30, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 20, background: 'rgba(245,158,11,0.22)', color: '#fcd34d', fontSize: 12.5, fontWeight: 600, marginBottom: 14 }}>
              <Icon name="star" size={13} stroke="none" style={{ fill: '#fcd34d' }} />ההטבה הכי פופולרית
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.4px' }}>קפה חינם ☕</div>
            <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.78)', lineHeight: 1.5 }}>128 מימושים החודש — ההטבה האהובה על חברי המועדון שלך.</div>
          </div>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {['דנה כהן', 'יוסי לוי', 'מאיה אברהם', 'נועה פרץ'].map((n, i) => (
                <div key={n} style={{ marginInlineStart: i ? -12 : 0, border: '2.5px solid #2a1d52', borderRadius: '50%' }}><Avatar name={n} size={34} /></div>
              ))}
              <div style={{ marginInlineStart: -12, width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.18)', border: '2.5px solid #2a1d52', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11.5, fontWeight: 700 }}>+124</div>
            </div>
            <button style={{ width: 44, height: 44, borderRadius: '50%', border: 'none', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Icon name="arrowR" size={20} stroke={TOK.purple} sw={2.2} style={{ transform: 'scaleX(-1)' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
window.DashboardB = DashboardB;

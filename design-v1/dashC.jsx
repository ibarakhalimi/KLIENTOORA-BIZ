// dashC.jsx — Direction C · "מודרני נועז" (Bold, editorial, layered)
function DashboardC() {
  const months = ['ינו', 'פבר', 'מרץ', 'אפר', 'מאי', 'יונ', 'יול', 'אוג', 'ספט', 'אוק', 'נוב', 'דצמ'];
  const growth = [2100, 2350, 2520, 2780, 3010, 3260, 3520, 3760, 4050, 4320, 4580, 4820];
  const heroSpark = [30, 32, 31, 36, 40, 39, 45, 48, 52, 50, 58, 64];

  const rail = [
    ['overview', true], ['users', false], ['gift', false], ['megaphone', false], ['chart', false], ['settings', false],
  ];

  const leaders = [
    ['מאיה אברהם', 'פלטינה', 8910, TOK.purple],
    ['איתי ביטון', 'זהב', 6420, TOK.amber],
    ['דנה כהן', 'זהב', 3240, TOK.amber],
    ['רוני שרון', 'כסף', 2880, TOK.purple400],
    ['יוסי לוי', 'כסף', 1180, TOK.purple400],
  ];
  const lMax = 8910;

  const tiers = [
    ['פלטינה', 320, TOK.purple], ['זהב', 900, TOK.amber], ['כסף', 1500, TOK.purple400], ['ברונזה', 2100, TOK.purple200],
  ];
  const tTotal = 4820;

  const labelCss = { fontSize: 12, fontWeight: 600, color: TOK.faint, letterSpacing: '0.3px' };

  return (
    <div dir="rtl" style={{ width: 1360, height: 940, background: TOK.bg, fontFamily: 'Rubik, sans-serif', color: TOK.body, display: 'flex', overflow: 'hidden' }}>

      {/* icon rail */}
      <aside style={{ width: 78, flexShrink: 0, background: TOK.ink, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px 0' }}>
        <div style={{ width: 44, height: 44, borderRadius: 14, background: TOK.purple600, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 34, boxShadow: `0 6px 16px ${TOK.purple}66` }}>
          <Icon name="heart" size={23} stroke="#fff" sw={2} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {rail.map(([ic, active], i) => (
            <div key={i} style={{ width: 46, height: 46, borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: active ? 'rgba(255,255,255,0.12)' : 'transparent', position: 'relative' }}>
              {active && <div style={{ position: 'absolute', right: -16, top: '50%', transform: 'translateY(-50%)', width: 3.5, height: 24, background: TOK.purple400, borderRadius: 3 }} />}
              <Icon name={ic} size={22} stroke={active ? '#fff' : 'rgba(255,255,255,0.45)'} sw={1.8} />
            </div>
          ))}
        </div>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
          <Icon name="logout" size={21} stroke="rgba(255,255,255,0.45)" sw={1.8} />
          <Avatar name="נטע גל" size={40} ring={TOK.purple400} />
        </div>
      </aside>

      {/* main */}
      <main style={{ flex: 1, minWidth: 0, padding: '24px 32px', display: 'flex', flexDirection: 'column' }}>
        {/* header */}
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
          <div>
            <div style={{ ...labelCss, marginBottom: 4 }}>מועדון נְקוּדָה · לוח בקרה</div>
            <h1 style={{ margin: 0, fontSize: 30, fontWeight: 800, color: TOK.ink, letterSpacing: '-0.7px' }}>סקירה כללית</h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, background: '#fff', border: `1px solid ${TOK.line}`, borderRadius: 12, padding: '10px 15px', fontSize: 13.5, fontWeight: 500, color: TOK.body }}>
              <Icon name="calendar" size={17} stroke={TOK.purple} />יוני 2026<Icon name="chevDown" size={15} stroke={TOK.faint} />
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '11px 18px', borderRadius: 12, border: 'none', background: TOK.ink, color: '#fff', fontWeight: 600, fontSize: 14, fontFamily: 'inherit', cursor: 'pointer' }}>
              <Icon name="plus" size={18} stroke="#fff" sw={2.2} />קמפיין חדש
            </button>
          </div>
        </header>

        {/* hero row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.65fr 1fr', gap: 18, marginBottom: 18 }}>
          {/* big dark feature card */}
          <div style={{ position: 'relative', borderRadius: 22, padding: '28px 30px', overflow: 'hidden', color: '#fff',
            background: `linear-gradient(135deg, ${TOK.ink} 0%, #3b1078 55%, ${TOK.purple600} 130%)` }}>
            <div style={{ position: 'absolute', top: -80, left: -40, width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(167,139,250,0.35), transparent 65%)' }} />
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.3px' }}>סך חברי המועדון</div>
                <div style={{ fontSize: 66, fontWeight: 800, letterSpacing: '-2px', lineHeight: 1, margin: '10px 0 8px' }}>4,820</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, padding: '4px 10px', borderRadius: 8, background: 'rgba(74,222,128,0.2)', color: '#86efac', fontSize: 13, fontWeight: 700 }}>
                    <Icon name="up" size={14} sw={2.6} />12.4%
                  </span>
                  <span style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.65)' }}>לעומת 4,290 ברבעון הקודם</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                {[['פעילים', '1,236'], ['חדשים', '184']].map(([l, v]) => (
                  <div key={l} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.16)', borderRadius: 14, padding: '12px 16px', textAlign: 'center', minWidth: 86 }}>
                    <div style={{ fontSize: 22, fontWeight: 800 }}>{v}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 2 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative', marginTop: 14, marginInline: -30, marginBottom: -28 }}>
              <Sparkline data={heroSpark} w={760} h={88} color={TOK.purple300} fill={TOK.purple400} />
            </div>
          </div>

          {/* stacked light stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[
              { label: 'נקודות פעילות', value: '86,400', sub: 'נצברו החודש', ic: 'coin', color: TOK.amber, tint: TOK.amber100, spark: [40, 44, 42, 48, 46, 52, 55] },
              { label: 'מימושי הטבות', value: '312', sub: 'ב-30 הימים האחרונים', ic: 'gift', color: TOK.pink, tint: TOK.pink100, spark: [30, 28, 34, 32, 38, 36, 33] },
            ].map((s) => (
              <div key={s.label} style={{ flex: 1, background: '#fff', border: `1px solid ${TOK.line}`, borderRadius: 22, padding: '20px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ width: 46, height: 46, borderRadius: 13, background: s.tint, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={s.ic} size={23} stroke={s.color} sw={1.8} />
                  </div>
                  <Sparkline data={s.spark} w={92} h={40} color={s.color} fill={s.color} />
                </div>
                <div style={{ fontSize: 34, fontWeight: 800, color: TOK.ink, letterSpacing: '-1px', marginTop: 14 }}>{s.value}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: TOK.body }}>{s.label}</span>
                  <span style={{ fontSize: 12.5, color: TOK.faint }}>· {s.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* main: chart + leaderboard */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 388px', gap: 18, flex: 1, minHeight: 0 }}>
          {/* chart card */}
          <div style={{ background: '#fff', border: `1px solid ${TOK.line}`, borderRadius: 22, padding: '22px 26px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: TOK.ink }}>צמיחת המועדון</div>
                <div style={{ fontSize: 13, color: TOK.muted, marginTop: 3 }}>חברים חדשים מצטברים · 12 חודשים</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 500, color: TOK.body }}><span style={{ width: 10, height: 10, borderRadius: 3, background: TOK.purple600 }} />חברים</div>
                <Icon name="dots" size={20} stroke={TOK.faint} />
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', marginTop: 8 }}>
              <AreaChart data={growth} labels={months} w={720} h={300} color={TOK.purple600} fill={TOK.purple200} dot={11} />
            </div>
            <div style={{ display: 'flex', gap: 0, borderTop: `1px solid ${TOK.line2}`, paddingTop: 16, marginTop: 4 }}>
              {[['ממוצע צבירה', '226 נק׳'], ['שימור חברים', '88%'], ['הכנסה מחברים', '₪142.5K'], ['ביקור חוזר', '2.4×']].map(([l, v], i) => (
                <div key={l} style={{ flex: 1, paddingInline: 18, borderInlineStart: i ? `1px solid ${TOK.line2}` : 'none' }}>
                  <div style={{ fontSize: 21, fontWeight: 800, color: TOK.ink, letterSpacing: '-0.5px' }}>{v}</div>
                  <div style={{ fontSize: 12.5, color: TOK.muted, marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* leaderboard card */}
          <div style={{ background: '#fff', border: `1px solid ${TOK.line}`, borderRadius: 22, padding: '22px 24px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 16 }}>
              <Icon name="crown" size={22} stroke={TOK.amber} sw={1.9} />
              <span style={{ fontSize: 18, fontWeight: 700, color: TOK.ink }}>מובילי המועדון</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {leaders.map((l, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 8px', borderRadius: 12, background: i === 0 ? TOK.purple50 : 'transparent' }}>
                  <div style={{ width: 22, fontSize: 14, fontWeight: 800, color: i === 0 ? TOK.purple : TOK.faint, textAlign: 'center' }}>{i + 1}</div>
                  <Avatar name={l[0]} size={40} ring={i === 0 ? TOK.amber : null} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: TOK.ink }}>{l[0]}</div>
                    <div style={{ fontSize: 12, color: l[3], fontWeight: 600, marginTop: 1 }}>{l[1]}</div>
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: TOK.ink, fontVariantNumeric: 'tabular-nums' }}>{fmt(l[2])}</div>
                    <div style={{ fontSize: 11, color: TOK.faint }}>נקודות</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: `1px solid ${TOK.line2}` }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: TOK.body, marginBottom: 11 }}>התפלגות דרגות</div>
              <div style={{ display: 'flex', height: 11, borderRadius: 6, overflow: 'hidden', gap: 2.5 }}>
                {tiers.map((t) => <div key={t[0]} style={{ width: `${(t[1] / tTotal) * 100}%`, background: t[2] }} />)}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', marginTop: 11 }}>
                {tiers.map((t) => (
                  <div key={t[0]} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5 }}>
                    <span style={{ width: 8, height: 8, borderRadius: 2.5, background: t[2] }} />
                    <span style={{ color: TOK.muted, fontWeight: 500 }}>{t[0]}</span>
                    <span style={{ color: TOK.ink, fontWeight: 700 }}>{fmt(t[1])}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
window.DashboardC = DashboardC;

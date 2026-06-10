// dashA.jsx — Direction A · "קלאסי נקי" (Clean Classic admin layout)
function DashboardA() {
  const card = { background: TOK.card, border: `1px solid ${TOK.line}`, borderRadius: 16, boxShadow: '0 1px 2px rgba(28,21,48,0.04)' };
  const months = ['ינו', 'פבר', 'מרץ', 'אפר', 'מאי', 'יונ', 'יול', 'אוג', 'ספט', 'אוק', 'נוב', 'דצמ'];
  const growth = [2100, 2350, 2520, 2780, 3010, 3260, 3520, 3760, 4050, 4320, 4580, 4820];

  const nav = [
    ['overview', 'סקירה כללית', true],
    ['users', 'חברי מועדון', false],
    ['gift', 'הטבות ומבצעים', false],
    ['megaphone', 'קמפיינים', false],
    ['chart', 'אנליטיקס', false],
    ['settings', 'הגדרות', false],
  ];

  const kpis = [
    { label: 'סך חברי המועדון', value: '4,820', delta: '+12.4%', up: true, spark: [30, 34, 33, 38, 42, 44, 48, 52, 56, 60, 64, 70], color: TOK.purple600 },
    { label: 'פעילים החודש', value: '1,236', delta: '+8.1%', up: true, spark: [20, 24, 22, 28, 26, 32, 30, 35, 38, 36, 42, 46], color: TOK.teal },
    { label: 'נקודות שחולקו', value: '86,400', delta: '+5.6%', up: true, spark: [40, 38, 42, 41, 45, 44, 48, 47, 50, 52, 51, 55], color: TOK.amber },
    { label: 'מימושי הטבות', value: '312', delta: '−2.3%', up: false, spark: [44, 46, 42, 45, 40, 43, 38, 41, 36, 39, 35, 33], color: TOK.pink },
  ];

  const tierSeg = [
    { name: 'פלטינה', value: 320, color: TOK.purple },
    { name: 'זהב', value: 900, color: TOK.amber },
    { name: 'כסף', value: 1500, color: TOK.purple400 },
    { name: 'ברונזה', value: 2100, color: TOK.purple200 },
  ];

  const tierColors = { 'פלטינה': TOK.purple, 'זהב': TOK.amber, 'כסף': TOK.purple500, 'ברונזה': TOK.purple300 };
  const members = [
    ['מאיה אברהם', 'פלטינה', '8,910', '7 במאי', 'פעיל'],
    ['דנה כהן', 'זהב', '3,240', '12 במאי', 'פעיל'],
    ['איתי ביטון', 'כסף', '2,050', '3 במאי', 'פעיל'],
    ['יוסי לוי', 'כסף', '1,180', '9 במאי', 'פעיל'],
    ['נועה פרץ', 'ברונזה', '420', '15 במאי', 'חדש'],
  ];

  const rewards = [
    ['coffee', 'קפה חינם', 128, TOK.purple600, TOK.purple100],
    ['percent', '10% הנחה', 96, TOK.teal, TOK.teal100],
    ['cake', 'מתנת יום הולדת', 64, TOK.amber, TOK.amber100],
    ['truck', 'משלוח חינם', 24, TOK.pink, TOK.pink100],
  ];
  const rwMax = 128;

  return (
    <div dir="rtl" style={{ width: 1360, height: 940, display: 'flex', background: TOK.bg, fontFamily: 'Rubik, sans-serif', color: TOK.body, overflow: 'hidden' }}>

      {/* ── Sidebar ───────────────────────────── */}
      <aside style={{ width: 244, flexShrink: 0, background: TOK.white, borderLeft: `1px solid ${TOK.line}`, display: 'flex', flexDirection: 'column', padding: '26px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '0 8px 6px' }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: TOK.purple, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 12px ${TOK.purple}40` }}>
            <Icon name="heart" size={21} stroke="#fff" sw={2} />
          </div>
          <div>
            <div style={{ fontSize: 16.5, fontWeight: 700, color: TOK.ink, letterSpacing: '-0.2px' }}>נְקוּדָה</div>
            <div style={{ fontSize: 11.5, color: TOK.faint, fontWeight: 500 }}>מועדון לקוחות</div>
          </div>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: 3, marginTop: 26 }}>
          {nav.map(([ic, label, active]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 13px', borderRadius: 11,
              background: active ? TOK.purple50 : 'transparent', color: active ? TOK.purple : TOK.muted, fontWeight: active ? 600 : 500, fontSize: 14.5, position: 'relative' }}>
              {active && <div style={{ position: 'absolute', right: -18, top: '50%', transform: 'translateY(-50%)', width: 3.5, height: 22, background: TOK.purple, borderRadius: 3 }} />}
              <Icon name={ic} size={20} stroke={active ? TOK.purple : TOK.muted} sw={active ? 2 : 1.7} />
              {label}
            </div>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', background: TOK.purple50, borderRadius: 14, padding: 16, textAlign: 'center' }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: TOK.white, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', boxShadow: '0 2px 6px rgba(28,21,48,0.08)' }}>
            <Icon name="sparkles" size={22} stroke={TOK.amber} sw={1.8} />
          </div>
          <div style={{ fontSize: 13.5, fontWeight: 600, color: TOK.ink, marginBottom: 3 }}>שדרגו לתוכנית Pro</div>
          <div style={{ fontSize: 12, color: TOK.muted, lineHeight: 1.45, marginBottom: 12 }}>אוטומציות, סגמנטים ודוחות מתקדמים</div>
          <button style={{ width: '100%', padding: '9px', borderRadius: 10, border: 'none', background: TOK.purple, color: '#fff', fontWeight: 600, fontSize: 13.5, fontFamily: 'inherit', cursor: 'pointer' }}>גלו עוד</button>
        </div>
      </aside>

      {/* ── Main ───────────────────────────── */}
      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', padding: '20px 30px 20px' }}>
        {/* topbar */}
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 25, fontWeight: 700, color: TOK.ink, letterSpacing: '-0.4px' }}>סקירה כללית</h1>
            <div style={{ fontSize: 13.5, color: TOK.muted, marginTop: 3 }}>ראשון, 10 ביוני 2026 · עדכון אחרון לפני 4 דקות</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, background: TOK.white, border: `1px solid ${TOK.line}`, borderRadius: 11, padding: '9px 13px', width: 230, color: TOK.faint }}>
              <Icon name="search" size={18} stroke={TOK.faint} />
              <span style={{ fontSize: 13.5 }}>חיפוש חבר, הטבה…</span>
            </div>
            <div style={{ width: 42, height: 42, borderRadius: 11, background: TOK.white, border: `1px solid ${TOK.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <Icon name="bell" size={19} stroke={TOK.body} />
              <div style={{ position: 'absolute', top: 9, left: 11, width: 7, height: 7, borderRadius: 4, background: TOK.pink, border: '1.5px solid #fff' }} />
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '11px 16px', borderRadius: 11, border: 'none', background: TOK.purple, color: '#fff', fontWeight: 600, fontSize: 14, fontFamily: 'inherit', cursor: 'pointer', boxShadow: `0 4px 14px ${TOK.purple}38` }}>
              <Icon name="plus" size={18} stroke="#fff" sw={2.2} />צור קמפיין
            </button>
          </div>
        </header>

        {/* KPI row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18, marginBottom: 16 }}>
          {kpis.map((k) => (
            <div key={k.label} style={{ ...card, padding: '15px 18px 12px' }}>
              <div style={{ fontSize: 13.5, color: TOK.muted, fontWeight: 500 }}>{k.label}</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 8 }}>
                <div>
                  <div style={{ fontSize: 29, fontWeight: 700, color: TOK.ink, letterSpacing: '-0.6px', lineHeight: 1 }}>{k.value}</div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, marginTop: 9, padding: '3px 8px', borderRadius: 7,
                    background: k.up ? TOK.green100 : TOK.pink100, color: k.up ? TOK.green : TOK.rose, fontSize: 12, fontWeight: 600 }}>
                    <Icon name={k.up ? 'up' : 'down'} size={13} sw={2.4} />{k.delta}
                  </div>
                </div>
                <Sparkline data={k.spark} w={70} h={38} color={k.color} fill={k.color} />
              </div>
            </div>
          ))}
        </div>

        {/* chart + donut row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 18, marginBottom: 16 }}>
          <div style={{ ...card, padding: '16px 22px 12px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 6 }}>
              <div>
                <div style={{ fontSize: 16.5, fontWeight: 700, color: TOK.ink }}>צמיחת חברי המועדון</div>
                <div style={{ fontSize: 13, color: TOK.muted, marginTop: 2 }}>12 החודשים האחרונים</div>
              </div>
              <div style={{ display: 'flex', gap: 4, background: TOK.bg, padding: 4, borderRadius: 10 }}>
                {['חודש', 'רבעון', 'שנה'].map((t, i) => (
                  <div key={t} style={{ padding: '6px 13px', borderRadius: 7, fontSize: 12.5, fontWeight: 600, cursor: 'pointer',
                    background: i === 2 ? TOK.white : 'transparent', color: i === 2 ? TOK.purple : TOK.muted, boxShadow: i === 2 ? '0 1px 2px rgba(28,21,48,0.08)' : 'none' }}>{t}</div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4 }}>
              <div style={{ fontSize: 30, fontWeight: 700, color: TOK.ink, letterSpacing: '-0.6px' }}>4,820</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 3, color: TOK.green, fontSize: 13, fontWeight: 600 }}>
                <Icon name="up" size={14} sw={2.4} />+2,720 השנה
              </div>
            </div>
            <AreaChart data={growth} labels={months} w={760} h={186} color={TOK.purple600} fill={TOK.purple200} dot={11} />
          </div>

          <div style={{ ...card, padding: '16px 22px' }}>
            <div style={{ fontSize: 16.5, fontWeight: 700, color: TOK.ink, marginBottom: 2 }}>התפלגות דרגות</div>
            <div style={{ fontSize: 13, color: TOK.muted }}>לפי חברי מועדון פעילים</div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0 12px' }}>
              <Donut segments={tierSeg} size={150} thickness={22} center={
                <><div style={{ fontSize: 24, fontWeight: 700, color: TOK.ink, lineHeight: 1 }}>4,820</div>
                  <div style={{ fontSize: 12, color: TOK.muted, marginTop: 3 }}>סך חברים</div></>
              } />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {tierSeg.map((s) => (
                <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13 }}>
                  <div style={{ width: 9, height: 9, borderRadius: 3, background: s.color }} />
                  <span style={{ color: TOK.body, fontWeight: 500 }}>{s.name}</span>
                  <span style={{ marginInlineStart: 'auto', color: TOK.muted, fontWeight: 600 }}>{fmt(s.value)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* table + rewards row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 18, flex: 1, minHeight: 0 }}>
          <div style={{ ...card, padding: '18px 6px 6px 6px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px 12px' }}>
              <div style={{ fontSize: 16.5, fontWeight: 700, color: TOK.ink }}>חברים שהצטרפו לאחרונה</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: TOK.purple, fontSize: 13.5, fontWeight: 600, cursor: 'pointer' }}>הצג הכל<Icon name="arrowR" size={15} stroke={TOK.purple} sw={2} style={{ transform: 'scaleX(-1)' }} /></div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ color: TOK.faint, fontSize: 12, fontWeight: 600, textAlign: 'right' }}>
                  <th style={{ padding: '8px 16px', fontWeight: 600 }}>חבר</th>
                  <th style={{ padding: '8px 16px', fontWeight: 600 }}>דרגה</th>
                  <th style={{ padding: '8px 16px', fontWeight: 600 }}>נקודות</th>
                  <th style={{ padding: '8px 16px', fontWeight: 600 }}>הצטרף</th>
                  <th style={{ padding: '8px 16px', fontWeight: 600 }}>סטטוס</th>
                </tr>
              </thead>
              <tbody>
                {members.map((m, i) => (
                  <tr key={i} style={{ borderTop: `1px solid ${TOK.line2}` }}>
                    <td style={{ padding: '9px 16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                        <Avatar name={m[0]} size={36} />
                        <span style={{ fontWeight: 600, color: TOK.ink, fontSize: 14 }}>{m[0]}</span>
                      </div>
                    </td>
                    <td style={{ padding: '9px 16px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', borderRadius: 20, background: `${tierColors[m[1]]}18`, color: tierColors[m[1]], fontSize: 12.5, fontWeight: 600 }}>
                        <Icon name="star" size={12} stroke="none" style={{ fill: tierColors[m[1]] }} />{m[1]}
                      </span>
                    </td>
                    <td style={{ padding: '9px 16px', fontWeight: 600, color: TOK.body, fontSize: 14, fontVariantNumeric: 'tabular-nums' }}>{m[2]}</td>
                    <td style={{ padding: '9px 16px', color: TOK.muted, fontSize: 13.5 }}>{m[3]}</td>
                    <td style={{ padding: '9px 16px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: m[4] === 'חדש' ? TOK.amber : TOK.green, fontSize: 13, fontWeight: 600 }}>
                        <span style={{ width: 7, height: 7, borderRadius: 4, background: m[4] === 'חדש' ? TOK.amber : TOK.green }} />{m[4]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ ...card, padding: '20px 22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ fontSize: 16.5, fontWeight: 700, color: TOK.ink }}>הטבות מובילות</div>
              <Icon name="dots" size={20} stroke={TOK.faint} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 17 }}>
              {rewards.map(([ic, name, val, color, tint]) => (
                <div key={name}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 8 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: tint, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name={ic} size={19} stroke={color} sw={1.8} />
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 600, color: TOK.ink }}>{name}</span>
                    <span style={{ marginInlineStart: 'auto', fontSize: 14, fontWeight: 700, color: TOK.body }}>{val}</span>
                  </div>
                  <div style={{ height: 7, borderRadius: 4, background: TOK.line2, overflow: 'hidden' }}>
                    <div style={{ width: `${(val / rwMax) * 100}%`, height: '100%', borderRadius: 4, background: color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
window.DashboardA = DashboardA;

import React from 'react';
import { PageHeader } from '../components/PageHeader.jsx';
import { Avatar, Card, CardHeader, Icon, ProgressRing, StatTile } from '../components/ui/index.js';
import { currentUser, fmt, insights, monthlyGoal, recentActivity, stats } from '../data/mockData.js';
import { CURRENT_BUSINESS_ID } from '../config/business.js';

const CHIP_TONES = {
  brand: ['var(--brand-subtle)', 'var(--brand)'],
  amber: ['var(--accent-amber-bg)', 'var(--accent-amber)'],
  pink: ['var(--accent-pink-bg)', 'var(--accent-pink)'],
  teal: ['var(--accent-teal-bg)', 'var(--accent-teal)'],
};

function ActivityRow({ item, first }) {
  const [chipBg, chipFg] = CHIP_TONES[item.tone] || CHIP_TONES.brand;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 13, padding: '11px 0',
      borderTop: first ? 'none' : '1px solid var(--neutral-100)',
    }}>
      <Avatar name={item.name} size={38} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 'var(--text-base)', color: 'var(--text-primary)' }}>
          <b style={{ fontWeight: 'var(--weight-semibold)' }}>{item.name}</b>{' '}
          <span style={{ color: 'var(--text-muted)' }}>{item.action}</span>
        </div>
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-faint)', marginTop: 2 }}>{item.time}</div>
      </div>
      <div style={{
        width: 36, height: 36, borderRadius: 'var(--radius-sm)', background: chipBg, color: chipFg,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <Icon name={item.icon} size={18} sw={1.9} />
      </div>
    </div>
  );
}

export function DashboardPage() {
  const businessStats = stats.filter((s) => s.business_id === CURRENT_BUSINESS_ID);
  const businessActivity = recentActivity.filter((a) => a.business_id === CURRENT_BUSINESS_ID);
  const businessInsights = insights.filter((ins) => ins.business_id === CURRENT_BUSINESS_ID);
  const goal = monthlyGoal.business_id === CURRENT_BUSINESS_ID ? monthlyGoal : null;
  const goalPct = goal ? Math.round((goal.current / goal.target) * 100) : 0;

  return (
    <>
      <PageHeader
        title={`היי ${currentUser.name.split(' ')[0]}, ברוכה הבאה 👋`}
        subtitle="הנה מה שקורה במועדון שלך היום"
      />

      <div className="stats-grid">
        {businessStats.map((s) => (
          <StatTile
            key={s.key}
            icon={<Icon name={s.icon} size={26} sw={1.9} />}
            tone={s.tone}
            label={s.label}
            value={s.value}
            delta={s.delta}
          />
        ))}
      </div>

      <div className="two-col" style={{ marginTop: 16 }}>
        <Card>
          <CardHeader
            title="פעילות אחרונה ✨"
            subtitle="העדכונים האחרונים מחברי המועדון"
            action={
              <a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)' }}>
                הצג הכל
              </a>
            }
          />
          <div>
            {businessActivity.map((item, i) => (
              <ActivityRow key={item.id} item={item} first={i === 0} />
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader title="תובנות 💡" subtitle="מה כדאי לדעת השבוע" />

          {goal && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 16, padding: '13px 15px',
              borderRadius: 'var(--radius-md)', background: 'var(--brand-subtle)', marginBottom: 14,
            }}>
              <ProgressRing value={goalPct} size={66} thickness={7}>
                <span style={{ fontSize: 15 }}>{goalPct}%</span>
              </ProgressRing>
              <div>
                <div style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-primary)' }}>
                  {goal.label}
                </div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: 3 }}>
                  <b style={{ color: 'var(--brand)' }}>{fmt(goal.current)}</b> מתוך {fmt(goal.target)} —
                  עוד {fmt(goal.target - goal.current)} לסיום מעולה!
                </div>
              </div>
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {businessInsights.map((ins, i) => (
              <div key={ins.id} style={{
                display: 'flex', gap: 11, alignItems: 'flex-start', padding: '11px 2px',
                borderTop: i === 0 ? 'none' : '1px solid var(--neutral-100)',
              }}>
                <span style={{ fontSize: 19, lineHeight: 1.3 }}>{ins.emoji}</span>
                <p style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-sm)', color: 'var(--text-body)' }}>{ins.text}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

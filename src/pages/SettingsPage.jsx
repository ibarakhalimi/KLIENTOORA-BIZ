import React from 'react';
import { PageHeader } from '../components/PageHeader.jsx';
import { Badge, Button, Card, CardHeader, Icon, Input } from '../components/ui/index.js';
import { businessSettings, clubSettings, integrations } from '../data/mockData.js';

function IntegrationRow({ item, first }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0',
      borderTop: first ? 'none' : '1px solid var(--neutral-100)',
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'var(--brand-subtle)',
        color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <Icon name={item.icon} size={21} sw={1.8} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <b style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-primary)' }}>
            {item.title}
          </b>
          <Badge tone="neutral" size="sm">בקרוב</Badge>
        </div>
        <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: 2 }}>{item.description}</div>
      </div>
      <Button variant="secondary" size="sm" disabled>חיבור</Button>
    </div>
  );
}

export function SettingsPage() {
  return (
    <>
      <PageHeader
        title="הגדרות"
        subtitle="פרטי העסק, הגדרות המועדון ואינטגרציות"
        action={<Button onClick={() => {}}>שמירת שינויים</Button>}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 860 }}>
        <Card>
          <CardHeader title="פרטי העסק 🏪" subtitle="הפרטים שיוצגו לחברי המועדון" />
          <div className="form-grid">
            <Input label="שם העסק" defaultValue={businessSettings.name} />
            <Input label="טלפון" type="tel" defaultValue={businessSettings.phone} />
            <Input label="אימייל" type="email" defaultValue={businessSettings.email} />
            <Input label="כתובת" defaultValue={businessSettings.address} />
          </div>
        </Card>

        <Card>
          <CardHeader title="הגדרות מועדון 🎯" subtitle="כללי הצבירה וההטבות של המועדון" />
          <div className="form-grid">
            <Input label="שם המועדון" defaultValue={clubSettings.clubName} />
            <Input label="נקודות לכל ₪ קנייה" type="number" defaultValue={clubSettings.pointsPerShekel} />
            <Input label="בונוס הצטרפות (נק׳)" type="number" defaultValue={clubSettings.welcomeBonus} />
            <Input label="תוקף נקודות" defaultValue={clubSettings.pointsExpiry} />
          </div>
        </Card>

        <Card>
          <CardHeader title="אינטגרציות 🔌" subtitle="חיבורים עתידיים — יופעלו בשלבים הבאים" />
          <div>
            {integrations.map((item, i) => (
              <IntegrationRow key={item.key} item={item} first={i === 0} />
            ))}
          </div>
        </Card>

        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-faint)' }}>
          שמירת ההגדרות תהיה זמינה עם חיבור המערכת לדאטה.
        </p>
      </div>
    </>
  );
}

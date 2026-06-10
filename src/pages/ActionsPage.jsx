import React from 'react';
import { PageHeader } from '../components/PageHeader.jsx';
import { Badge, Button, Card, Icon } from '../components/ui/index.js';
import { quickActions } from '../data/mockData.js';

const CHIP_TONES = {
  brand: ['var(--brand-subtle)', 'var(--brand)'],
  amber: ['var(--accent-amber-bg)', 'var(--accent-amber)'],
  pink: ['var(--accent-pink-bg)', 'var(--accent-pink)'],
  teal: ['var(--accent-teal-bg)', 'var(--accent-teal)'],
};

function ActionCard({ action }) {
  const [chipBg, chipFg] = CHIP_TONES[action.tone] || CHIP_TONES.brand;
  return (
    <Card>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{
          width: 54, height: 54, borderRadius: 'var(--radius-md)', background: chipBg, color: chipFg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon name={action.icon} size={26} sw={1.9} />
        </div>
        <Badge tone="neutral" size="sm">בקרוב</Badge>
      </div>
      <h3 style={{ fontSize: 'var(--text-h4)', fontWeight: 'var(--weight-bold)' }}>{action.title}</h3>
      <p style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--lh-sm)', color: 'var(--text-muted)', marginTop: 5, minHeight: 38 }}>
        {action.description}
      </p>
      <Button variant="subtle" size="sm" style={{ marginTop: 14 }} icon={<Icon name="arrowR" size={16} sw={2} style={{ transform: 'scaleX(-1)' }} />} iconPosition="end">
        {action.cta}
      </Button>
    </Card>
  );
}

export function ActionsPage() {
  return (
    <>
      <PageHeader
        title="פעולות ותובנות"
        subtitle="כל הכלים לתפעול וצמיחה של המועדון — במקום אחד"
      />
      <div className="actions-grid">
        {quickActions.map((action) => (
          <ActionCard key={action.key} action={action} />
        ))}
      </div>
    </>
  );
}

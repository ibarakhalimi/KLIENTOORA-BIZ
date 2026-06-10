import React from 'react';
import { PageHeader } from '../components/PageHeader.jsx';
import { DataTable } from '../components/DataTable.jsx';
import { Avatar, Badge, Button, Card, Icon, Input, SegmentedTabs } from '../components/ui/index.js';
import { fmt, members, memberStatuses } from '../data/mockData.js';

const columns = [
  {
    key: 'name',
    header: 'שם מלא',
    render: (m) => (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
        <Avatar name={m.name} size={32} />
        <b style={{ fontWeight: 'var(--weight-semibold)', color: 'var(--text-primary)' }}>{m.name}</b>
      </span>
    ),
  },
  { key: 'phone', header: 'טלפון', render: (m) => <span data-num>{m.phone}</span> },
  { key: 'email', header: 'אימייל', render: (m) => <span style={{ color: 'var(--text-secondary)' }}>{m.email}</span> },
  {
    key: 'status',
    header: 'סטטוס',
    render: (m) => {
      const s = memberStatuses[m.status];
      return <Badge tone={s.tone} dot>{s.label}</Badge>;
    },
  },
  {
    key: 'points',
    header: 'נקודות',
    render: (m) => (
      <b data-num style={{ fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' }}>
        {fmt(m.points)} <span style={{ fontWeight: 'var(--weight-regular)', color: 'var(--text-faint)' }}>נק׳</span>
      </b>
    ),
  },
  { key: 'joined', header: 'תאריך הצטרפות', render: (m) => <span data-num>{m.joined}</span> },
  { key: 'lastAction', header: 'פעולה אחרונה', render: (m) => <span style={{ color: 'var(--text-secondary)' }}>{m.lastAction}</span> },
];

export function MembersPage() {
  const [query, setQuery] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('all');

  const q = query.trim();
  const visible = members.filter((m) => {
    const matchesQuery = !q || [m.name, m.phone, m.email].some((v) => v.includes(q));
    const matchesStatus = statusFilter === 'all' || m.status === statusFilter;
    return matchesQuery && matchesStatus;
  });

  return (
    <>
      <PageHeader
        title="חברי מועדון"
        subtitle={`${fmt(members.length)} חברים רשומים במועדון שלך`}
        action={
          <Button icon={<Icon name="plus" size={18} sw={2.2} />}>
            הוסף חבר מועדון
          </Button>
        }
      />

      <Card padding={0}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap',
          padding: '16px 18px', borderBottom: '1px solid var(--border)',
        }}>
          <div style={{ width: 300, maxWidth: '100%' }}>
            <Input
              icon={<Icon name="search" size={18} />}
              placeholder="חיפוש לפי שם, טלפון או אימייל…"
              size="sm"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <SegmentedTabs
            size="sm"
            value={statusFilter}
            onChange={setStatusFilter}
            options={[
              { value: 'all', label: 'הכל' },
              { value: 'active', label: 'פעילים' },
              { value: 'new', label: 'חדשים' },
              { value: 'inactive', label: 'לא פעילים' },
            ]}
          />
          <span style={{ marginInlineStart: 'auto', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
            מציג <b data-num style={{ color: 'var(--text-primary)' }}>{fmt(visible.length)}</b> חברים
          </span>
        </div>

        <DataTable columns={columns} rows={visible} emptyMessage="לא נמצאו חברים תואמים 🔍" />
      </Card>
    </>
  );
}

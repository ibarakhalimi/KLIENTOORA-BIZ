import React from 'react';
import { PageHeader } from '../components/PageHeader.jsx';
import { DataTable } from '../components/DataTable.jsx';
import { Avatar, Badge, Button, Card, Icon, Input, Modal, SegmentedTabs } from '../components/ui/index.js';
import { fmt, memberStatuses } from '../data/mockData.js';
import { CURRENT_BUSINESS_ID } from '../config/business.js';
import { supabase } from '../lib/supabase.js';

const formatDate = (iso) => iso
  ? new Date(iso).toLocaleDateString('he-IL', { day: '2-digit', month: '2-digit', year: 'numeric' })
  : '';

/* club_members row -> the shape the table renders */
const toMember = (r) => ({
  id: r.id,
  name: r.full_name ?? r.name ?? '',
  phone: r.phone ?? '',
  email: r.email ?? '',
  birthday: formatDate(r.birthday),
  status: r.status,
  points: r.points ?? 0,
  joined: formatDate(r.joined_at ?? r.created_at),
  lastAction: r.last_action ?? '',
  primaryMemberId: r.primary_member_id ?? null,
});

const columns = [
  {
    key: 'name',
    header: 'שם מלא',
    render: (m) => (
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        paddingInlineStart: m.primaryMemberId ? 28 : 0,
      }}>
        <Avatar name={m.name} size={32} />
        <span style={{ display: 'inline-flex', flexDirection: 'column', gap: 2 }}>
          <b style={{ fontWeight: 'var(--weight-semibold)', color: 'var(--text-primary)' }}>{m.name}</b>
          {m.primaryMemberId && (
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>משתמש מקושר</span>
          )}
        </span>
      </span>
    ),
  },
  { key: 'phone', header: 'טלפון', render: (m) => <span data-num>{m.phone}</span> },
  { key: 'email', header: 'אימייל', render: (m) => <span style={{ color: 'var(--text-secondary)' }}>{m.email}</span> },
  { key: 'birthday', header: 'יום הולדת', render: (m) => <span data-num>{m.birthday || '—'}</span> },
  {
    key: 'status',
    header: 'סטטוס',
    render: (m) => {
      const s = memberStatuses[m.status] ?? { label: m.status || '—', tone: 'neutral' };
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
  {
    key: 'linkedCount',
    header: 'משתמשים מחוברים',
    render: (m) => m.primaryMemberId
      ? <span style={{ color: 'var(--text-faint)' }}>-</span>
      : <b data-num style={{ fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)' }}>{fmt(m.linkedCount)}</b>,
  },
  { key: 'joined', header: 'תאריך הצטרפות', render: (m) => <span data-num>{m.joined}</span> },
  { key: 'lastAction', header: 'פעולה אחרונה', render: (m) => <span style={{ color: 'var(--text-secondary)' }}>{m.lastAction}</span> },
];

function AddMemberForm({ primaryMember = null, onAdded, onClose }) {
  const [form, setForm] = React.useState({ full_name: '', phone: '', email: '', birthday: '', status: 'new' });
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState(null);
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const payload = {
      business_id: CURRENT_BUSINESS_ID,
      full_name: form.full_name.trim(),
      phone: form.phone.trim() || null,
      email: form.email.trim() || null,
      status: form.status,
      points: 0,
      joined_at: new Date().toISOString().slice(0, 10),
      last_action: 'הצטרפות למועדון',
    };
    if (form.birthday) payload.birthday = form.birthday;
    if (primaryMember) payload.primary_member_id = primaryMember.id;

    const { data, error: insertError } = await supabase
      .from('club_members')
      .insert(payload)
      .select()
      .single();

    if (insertError) {
      setError(insertError.message);
      setSaving(false);
      return;
    }
    onAdded(toMember(data));
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Input label="שם מלא" required value={form.full_name} onChange={set('full_name')} placeholder="ישראל ישראלי" />
      <div className="form-grid">
        <Input label="טלפון" type="tel" value={form.phone} onChange={set('phone')} placeholder="050-0000000" />
        <Input label="אימייל" type="email" value={form.email} onChange={set('email')} placeholder="name@example.com" />
      </div>
      <Input label="יום הולדת" type="date" value={form.birthday} onChange={set('birthday')} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-body)' }}>סטטוס</span>
        <SegmentedTabs
          size="sm"
          value={form.status}
          onChange={(v) => setForm((f) => ({ ...f, status: v }))}
          options={[
            { value: 'new', label: 'חדש' },
            { value: 'active', label: 'פעיל' },
            { value: 'inactive', label: 'לא פעיל' },
          ]}
        />
      </div>
      {error && (
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--danger)' }}>שגיאה בשמירה: {error}</p>
      )}
      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 4 }}>
        <Button type="button" variant="secondary" onClick={onClose} disabled={saving}>ביטול</Button>
        <Button type="submit" disabled={saving}>{saving ? 'שומר…' : 'הוספת חבר'}</Button>
      </div>
    </form>
  );
}

function DetailItem({ label, value }) {
  return (
    <div className="member-profile__detail">
      <span>{label}</span>
      <b>{value || '—'}</b>
    </div>
  );
}

function MemberProfile({ member, linkedMembers }) {
  const s = memberStatuses[member.status] ?? { label: member.status || '—', tone: 'neutral' };

  return (
    <div className="member-profile">
      <div className="member-profile__hero">
        <Avatar name={member.name} size={54} />
        <div>
          <h3>{member.name || 'ללא שם'}</h3>
          <Badge tone={s.tone} dot>{s.label}</Badge>
        </div>
      </div>

      <div className="member-profile__grid">
        <DetailItem label="טלפון" value={member.phone} />
        <DetailItem label="אימייל" value={member.email} />
        <DetailItem label="יום הולדת" value={member.birthday} />
        <DetailItem label="תאריך הצטרפות" value={member.joined} />
        <DetailItem label="נקודות" value={`${fmt(member.points)} נק׳`} />
        <DetailItem label="פעולה אחרונה" value={member.lastAction} />
      </div>

      {member.primaryMemberId && (
        <p className="member-profile__note">זהו משתמש מקושר לחבר ראשי.</p>
      )}

      {!member.primaryMemberId && linkedMembers.length > 0 && (
        <section className="member-profile__linked">
          <h4>משתמשים מחוברים</h4>
          <div className="member-profile__linked-list">
            {linkedMembers.map((linked) => (
              <article className="member-profile__linked-item" key={linked.id}>
                <Avatar name={linked.name} size={34} />
                <div>
                  <b>{linked.name || 'ללא שם'}</b>
                  <span>{[linked.phone, linked.email].filter(Boolean).join(' · ') || 'אין פרטי קשר'}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export function MembersPage() {
  const [query, setQuery] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('all');
  /* null = סגור, { primaryMember: null } = חבר רגיל, { primaryMember: m } = חבר מחובר ל-m */
  const [addModal, setAddModal] = React.useState(null);
  const [profileMember, setProfileMember] = React.useState(null);
  const [businessMembers, setBusinessMembers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    let cancelled = false;

    supabase
      .from('club_members')
      .select('*')
      .eq('business_id', CURRENT_BUSINESS_ID)
      .order('joined_at', { ascending: false })
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) setError(error.message);
        else setBusinessMembers((data ?? []).map(toMember));
        setLoading(false);
      });

    return () => { cancelled = true; };
  }, []);

  /* count linked members per primary member (primary_member_id → how many point at it) */
  const linkedCounts = {};
  for (const m of businessMembers) {
    if (m.primaryMemberId) linkedCounts[m.primaryMemberId] = (linkedCounts[m.primaryMemberId] || 0) + 1;
  }
  const rows = businessMembers.map((m) => ({
    ...m,
    linkedCount: m.primaryMemberId ? null : (linkedCounts[m.id] || 0),
  }));
  const rowsById = new Map(rows.map((m) => [m.id, m]));
  const childrenByPrimary = new Map();
  const primaryRows = [];
  const orphanLinkedRows = [];

  for (const m of rows) {
    if (!m.primaryMemberId) {
      primaryRows.push(m);
      continue;
    }

    if (!rowsById.has(m.primaryMemberId)) {
      orphanLinkedRows.push(m);
      continue;
    }

    const children = childrenByPrimary.get(m.primaryMemberId) ?? [];
    children.push(m);
    childrenByPrimary.set(m.primaryMemberId, children);
  }

  /* trailing column: add a linked member — only on primary members */
  const tableColumns = [
    ...columns,
    {
      key: 'addLinked',
      header: '',
      width: 60,
      render: (m) => m.primaryMemberId ? null : (
        <Button
          variant="ghost"
          size="sm"
          title={`הוספת חבר מחובר ל${m.name}`}
          aria-label={`הוספת חבר מחובר ל${m.name}`}
          icon={<Icon name="plus" size={16} sw={2.2} />}
          onClick={(event) => {
            event.stopPropagation();
            setAddModal({ primaryMember: m });
          }}
          style={{ padding: '0 10px' }}
        />
      ),
    },
  ];

  const q = query.trim();
  const hasActiveFilter = q || statusFilter !== 'all';
  const rowMatches = (m) => {
    const matchesQuery = !q || [m.name, m.phone, m.email].some((v) => v.includes(q));
    const matchesStatus = statusFilter === 'all' || m.status === statusFilter;
    return matchesQuery && matchesStatus;
  };

  const visible = [];
  for (const primary of primaryRows) {
    const children = childrenByPrimary.get(primary.id) ?? [];

    if (!hasActiveFilter) {
      visible.push(primary, ...children);
      continue;
    }

    const matchingChildren = children.filter(rowMatches);
    if (rowMatches(primary) || matchingChildren.length > 0) {
      visible.push(primary, ...matchingChildren);
    }
  }
  visible.push(...orphanLinkedRows.filter((m) => !hasActiveFilter || rowMatches(m)));

  const emptyMessage = loading
    ? 'טוען חברי מועדון…'
    : error
      ? `שגיאה בטעינת הנתונים: ${error}`
      : businessMembers.length === 0
        ? 'אין עדיין חברים במועדון'
        : 'לא נמצאו חברים תואמים 🔍';

  return (
    <>
      <PageHeader
        title="חברי מועדון"
        subtitle={loading ? 'טוען…' : `${fmt(businessMembers.length)} חברים רשומים במועדון שלך`}
        action={
          <Button icon={<Icon name="plus" size={18} sw={2.2} />} onClick={() => setAddModal({ primaryMember: null })}>
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

        <DataTable
          columns={tableColumns}
          rows={visible}
          emptyMessage={emptyMessage}
          onRowClick={setProfileMember}
        />
      </Card>

      <Modal
        open={addModal !== null}
        onClose={() => setAddModal(null)}
        title={addModal?.primaryMember ? 'הוספת חבר מחובר' : 'הוספת חבר מועדון'}
        subtitle={addModal?.primaryMember
          ? `החבר החדש יחובר ל${addModal.primaryMember.name} ויופיע מיד בטבלה`
          : 'החבר החדש יישמר ויופיע מיד בטבלה'}
      >
        <AddMemberForm
          primaryMember={addModal?.primaryMember ?? null}
          onClose={() => setAddModal(null)}
          onAdded={(m) => {
            setBusinessMembers((rows) => [m, ...rows]);
            setAddModal(null);
          }}
        />
      </Modal>

      <Modal
        open={profileMember !== null}
        onClose={() => setProfileMember(null)}
        title="פרופיל לקוח"
        subtitle={profileMember?.primaryMemberId ? 'משתמש מקושר' : 'חבר ראשי במועדון'}
      >
        {profileMember && (
          <MemberProfile
            member={profileMember}
            linkedMembers={childrenByPrimary.get(profileMember.id) ?? []}
          />
        )}
      </Modal>
    </>
  );
}

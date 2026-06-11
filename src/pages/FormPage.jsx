import React from 'react';
import { Button, Icon, Input } from '../components/ui/index.js';
import { CURRENT_BUSINESS_ID } from '../config/business.js';
import { supabase } from '../lib/supabase.js';

const BENEFITS = [
  { icon: 'gift', title: 'הטבות שמורות לחברים', text: 'קופונים, מתנות והנחות לפי הפעילות שלך.' },
  { icon: 'coin', title: 'צבירת נקודות', text: 'כל ביקור וקנייה יכולים לקדם אותך להטבה הבאה.' },
  { icon: 'sparkles', title: 'עדכונים לפני כולם', text: 'מבצעים, אירועים והפתעות לחברי המועדון.' },
];

const RELATION_OPTIONS = [
  'בן/בת זוג',
  'ילד/ה',
  'הורה',
  'אח/ות',
  'חבר/ה',
  'עובד/ת',
  'אחר',
];

const emptyPrimary = {
  fullName: '',
  phone: '',
  email: '',
  birthDate: '',
};

const emptyLinked = {
  fullName: '',
  phone: '',
  relation: '',
};

function SelectField({ label, value, onChange, options, required = false }) {
  return (
    <label className="club-form-select-wrap">
      <span>{label}</span>
      <select value={value} onChange={onChange} required={required}>
        <option value="">בחירת קרבה</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

export function FormPage() {
  const [step, setStep] = React.useState('welcome');
  const [primary, setPrimary] = React.useState(emptyPrimary);
  const [linkedUsers, setLinkedUsers] = React.useState([emptyLinked]);
  const [wantsLinked, setWantsLinked] = React.useState(null);
  const [submitted, setSubmitted] = React.useState(false);
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState(null);

  const updatePrimary = (key) => (event) => {
    setPrimary((current) => ({ ...current, [key]: event.target.value }));
  };

  const updateLinked = (index, key) => (event) => {
    setLinkedUsers((current) => current.map((user, userIndex) => (
      userIndex === index ? { ...user, [key]: event.target.value } : user
    )));
  };

  const addLinkedUser = () => {
    setLinkedUsers((current) => current.length >= 5 ? current : [...current, { ...emptyLinked }]);
  };

  const removeLinkedUser = (index) => {
    setLinkedUsers((current) => current.filter((_, userIndex) => userIndex !== index));
  };

  const primaryComplete = primary.fullName.trim() && primary.phone.trim();
  const linkedComplete = !wantsLinked || linkedUsers.every((user) => (
    user.fullName.trim() && user.phone.trim() && user.relation.trim()
  ));

  const buildMemberPayload = (member, primaryMemberId = null) => {
    const payload = {
      business_id: CURRENT_BUSINESS_ID,
      full_name: member.fullName.trim(),
      phone: member.phone.trim(),
      email: member.email?.trim() || null,
      status: 'new',
      points: 0,
      joined_at: new Date().toISOString().slice(0, 10),
      last_action: primaryMemberId
        ? `הצטרפות כמשתמש מקושר${member.relation ? ` - ${member.relation}` : ''}`
        : 'הצטרפות למועדון',
    };

    if (member.birthDate) payload.birthday = member.birthDate;
    if (primaryMemberId) payload.primary_member_id = primaryMemberId;

    return payload;
  };

  const finish = async (event) => {
    event.preventDefault();
    if (!linkedComplete || saving) return;

    setSaving(true);
    setError(null);

    const { data: primaryMember, error: primaryError } = await supabase
      .from('club_members')
      .insert(buildMemberPayload(primary))
      .select('id')
      .single();

    if (primaryError) {
      setError(primaryError.message);
      setSaving(false);
      return;
    }

    if (wantsLinked) {
      const linkedPayloads = linkedUsers.map((user) => ({
        ...buildMemberPayload(user, primaryMember.id),
        relation_to_primary: user.relation,
      }));

      let { error: linkedError } = await supabase
        .from('club_members')
        .insert(linkedPayloads);

      if (linkedError?.code === 'PGRST204' && linkedError.message.includes('relation_to_primary')) {
        const fallbackPayloads = linkedPayloads.map(({ relation_to_primary, ...payload }) => payload);
        const fallbackResult = await supabase
          .from('club_members')
          .insert(fallbackPayloads);
        linkedError = fallbackResult.error;
      }

      if (linkedError) {
        setError(linkedError.message);
        setSaving(false);
        return;
      }
    }

    setSaving(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="club-form-page" dir="rtl">
        <section className="club-form-shell club-form-shell--success">
          <div className="club-form-success-icon">
            <Icon name="heart" size={34} sw={2} />
          </div>
          <p className="club-form-kicker">הפרטים נקלטו</p>
          <h1>ברוכים הבאים למועדון</h1>
          <p className="club-form-copy">
            ההרשמה נשמרה במועדון. אם הוספת משתמשים מקושרים, הם חוברו לחבר הראשי.
          </p>
          <Button size="lg" onClick={() => {
            setStep('welcome');
            setPrimary(emptyPrimary);
            setLinkedUsers([emptyLinked]);
            setWantsLinked(null);
            setError(null);
            setSaving(false);
            setSubmitted(false);
          }}>
            הרשמה נוספת
          </Button>
        </section>
      </main>
    );
  }

  return (
    <main className="club-form-page" dir="rtl">
      <section className="club-form-shell">
        <div className="club-form-progress" aria-label="שלבי ההרשמה">
          {['welcome', 'primary', 'linked'].map((item, index) => (
            <span
              key={item}
              className={
                item === step
                  ? 'club-form-dot active'
                  : ['welcome', 'primary', 'linked'].indexOf(step) > index
                    ? 'club-form-dot done'
                    : 'club-form-dot'
              }
            />
          ))}
        </div>

        {step === 'welcome' && (
          <div className="club-form-welcome">
            <p className="club-form-kicker">מועדון לקוחות</p>
            <h1>ברוך הבא למועדון</h1>
            <p className="club-form-copy">
              מצטרפים פעם אחת ונהנים מהטבות, נקודות ועדכונים שמותאמים אליך ולמי שתרצה לצרף אליך.
            </p>

            <div className="club-form-benefits">
              {BENEFITS.map((benefit) => (
                <article className="club-form-benefit" key={benefit.title}>
                  <span className="club-form-benefit-icon"><Icon name={benefit.icon} size={22} /></span>
                  <div>
                    <h2>{benefit.title}</h2>
                    <p>{benefit.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <Button
              size="lg"
              fullWidth
              icon={<Icon name="arrowR" size={19} />}
              iconPosition="end"
              onClick={() => setStep('primary')}
            >
              הבא
            </Button>
          </div>
        )}

        {step === 'primary' && (
          <form className="club-form-stack" onSubmit={(event) => {
            event.preventDefault();
            if (primaryComplete) setStep('linked');
          }}>
            <div>
              <p className="club-form-kicker">פרטי חבר ראשי</p>
              <h1>נכיר אותך</h1>
              <p className="club-form-copy">הפרטים האלה ישמשו לפתיחת החברות הראשית במועדון.</p>
            </div>

            <div className="club-form-grid">
              <Input label="שם מלא" value={primary.fullName} onChange={updatePrimary('fullName')} required />
              <Input label="טלפון" type="tel" value={primary.phone} onChange={updatePrimary('phone')} required />
              <Input label="אימייל" type="email" value={primary.email} onChange={updatePrimary('email')} />
              <Input label="תאריך לידה" type="date" value={primary.birthDate} onChange={updatePrimary('birthDate')} />
            </div>

            <div className="club-form-actions">
              <Button type="button" variant="secondary" onClick={() => setStep('welcome')}>חזרה</Button>
              <Button type="submit" disabled={!primaryComplete}>המשך</Button>
            </div>
          </form>
        )}

        {step === 'linked' && (
          <form className="club-form-stack" onSubmit={finish}>
            <div>
              <p className="club-form-kicker">משתמש מקושר</p>
              <h1>רוצה לצרף עוד משתמש?</h1>
              <p className="club-form-copy">
                אפשר להוסיף בן/בת משפחה או משתמש נוסף שיהיה מקושר לחבר הראשי.
              </p>
            </div>

            <div className="club-form-choice">
              <button type="button" className={wantsLinked === true ? 'selected' : ''} onClick={() => {
                setWantsLinked(true);
                if (linkedUsers.length === 0) setLinkedUsers([{ ...emptyLinked }]);
              }}>
                <Icon name="plus" size={20} />
                כן, להוסיף משתמש
              </button>
              <button type="button" className={wantsLinked === false ? 'selected' : ''} onClick={() => setWantsLinked(false)}>
                <Icon name="heart" size={20} />
                לא כרגע
              </button>
            </div>

            {wantsLinked && (
              <div className="club-form-linked-list">
                {linkedUsers.map((user, index) => (
                  <section className="club-form-linked-card" key={index}>
                    <div className="club-form-linked-title">
                      <h2>משתמש מקושר {index + 1}</h2>
                      {linkedUsers.length > 1 && (
                        <button type="button" onClick={() => removeLinkedUser(index)} aria-label="הסרת משתמש מקושר">
                          <Icon name="x" size={18} />
                        </button>
                      )}
                    </div>

                    <div className="club-form-grid">
                      <Input label="שם מלא" value={user.fullName} onChange={updateLinked(index, 'fullName')} required />
                      <Input label="טלפון" type="tel" value={user.phone} onChange={updateLinked(index, 'phone')} required />
                      <SelectField
                        label="קרבה לחבר הראשי"
                        value={user.relation}
                        onChange={updateLinked(index, 'relation')}
                        options={RELATION_OPTIONS}
                        required
                      />
                    </div>
                  </section>
                ))}

                <Button
                  type="button"
                  variant="subtle"
                  icon={<Icon name="plus" size={18} />}
                  onClick={addLinkedUser}
                  disabled={linkedUsers.length >= 5}
                >
                  הוסף משתמש מקושר
                </Button>

                <span className="club-form-limit">ניתן להוסיף עד 5 משתמשים מקושרים.</span>
              </div>
            )}

            <div className="club-form-actions">
              <Button type="button" variant="secondary" onClick={() => setStep('primary')} disabled={saving}>חזרה</Button>
              <Button type="submit" disabled={wantsLinked === null || !linkedComplete || saving}>
                {saving ? 'שומר…' : 'סיום'}
              </Button>
            </div>

            {error && (
              <p className="club-form-error">שגיאה בשמירת ההרשמה: {error}</p>
            )}
          </form>
        )}
      </section>
    </main>
  );
}

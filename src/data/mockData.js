/**
 * mockData — all demo data for the dashboard lives here.
 * When a real backend arrives, replace these exports with API calls
 * (the pages only consume the shapes, not the source).
 *
 * Every business-scoped record carries business_id (tagged once below,
 * never hardcoded per row) and pages filter by CURRENT_BUSINESS_ID.
 */

import { CURRENT_BUSINESS_ID } from '../config/business.js';

const withBusiness = (rows) => rows.map((row) => ({ ...row, business_id: CURRENT_BUSINESS_ID }));

export const fmt = (n) => n.toLocaleString('he-IL');

export const currentUser = {
  business_id: CURRENT_BUSINESS_ID,
  name: 'נטע גל',
  role: 'מנהלת מועדון',
};

/* ---- עמוד ראשי -------------------------------------------- */

export const stats = withBusiness([
  { key: 'members', label: 'סה״כ חברי מועדון', value: '4,820', delta: '+12%', tone: 'brand', icon: 'users' },
  { key: 'active', label: 'חברים פעילים', value: '1,236', delta: '+8%', tone: 'teal', icon: 'heart' },
  { key: 'actions', label: 'פעולות החודש', value: '2,148', delta: '+5.6%', tone: 'amber', icon: 'chart' },
  { key: 'rewards', label: 'הטבות פעילות', value: '14', delta: '+2', tone: 'pink', icon: 'gift' },
]);

export const recentActivity = withBusiness([
  { id: 1, name: 'דנה כהן', action: 'הצטרפה למועדון', time: 'לפני 8 דקות', icon: 'sparkles', tone: 'teal' },
  { id: 2, name: 'מאיה אברהם', action: 'מימשה קפה חינם ☕', time: 'לפני 24 דקות', icon: 'gift', tone: 'pink' },
  { id: 3, name: 'יוסי לוי', action: 'עלה לדרגת זהב 🏆', time: 'לפני שעה', icon: 'crown', tone: 'amber' },
  { id: 4, name: 'נועה פרץ', action: 'צברה 250 נקודות', time: 'לפני שעתיים', icon: 'coin', tone: 'brand' },
  { id: 5, name: 'אבי מזרחי', action: 'מימש 10% הנחה', time: 'לפני 3 שעות', icon: 'percent', tone: 'teal' },
]);

export const insights = withBusiness([
  { id: 1, emoji: '🎉', text: 'הקהילה שלך גדלה ב-184 חברים החודש — קצב מעולה!' },
  { id: 2, emoji: '☕', text: 'קפה חינם היא ההטבה הפופולרית ביותר עם 128 מימושים.' },
  { id: 3, emoji: '📈', text: 'שיעור החזרה של חברים פעילים עלה ל-64% — שיא חדש.' },
]);

export const monthlyGoal = {
  business_id: CURRENT_BUSINESS_ID,
  label: 'יעד חברים חדשים',
  current: 184,
  target: 250,
};

/* ---- חברי מועדון ------------------------------------------- */

export const members = withBusiness([
  { id: 1, name: 'דנה כהן', phone: '050-1234567', email: 'dana.cohen@gmail.com', status: 'new', points: 120, joined: '02.06.2026', lastAction: 'הצטרפות למועדון' },
  { id: 2, name: 'יוסי לוי', phone: '052-2345678', email: 'yossi.levi@gmail.com', status: 'active', points: 2840, joined: '14.01.2025', lastAction: 'עלייה לדרגת זהב' },
  { id: 3, name: 'מאיה אברהם', phone: '054-3456789', email: 'maya.avraham@walla.co.il', status: 'active', points: 1565, joined: '03.03.2025', lastAction: 'מימוש קפה חינם' },
  { id: 4, name: 'נועה פרץ', phone: '053-4567890', email: 'noa.peretz@gmail.com', status: 'active', points: 980, joined: '22.07.2025', lastAction: 'צבירת 250 נק׳' },
  { id: 5, name: 'אבי מזרחי', phone: '050-5678901', email: 'avi.mizrahi@outlook.com', status: 'active', points: 1742, joined: '09.11.2024', lastAction: 'מימוש 10% הנחה' },
  { id: 6, name: 'שירה ביטון', phone: '058-6789012', email: 'shira.biton@gmail.com', status: 'inactive', points: 430, joined: '18.05.2025', lastAction: 'צבירת 80 נק׳', primary_member_id: 2 },
  { id: 7, name: 'עומר דהן', phone: '052-7890123', email: 'omer.dahan@gmail.com', status: 'active', points: 2210, joined: '27.02.2025', lastAction: 'מימוש מאפה מתנה' },
  { id: 8, name: 'רותם שלו', phone: '054-8901234', email: 'rotem.shalev@gmail.com', status: 'inactive', points: 95, joined: '11.09.2025', lastAction: 'הצטרפות למועדון', primary_member_id: 2 },
  { id: 9, name: 'ליאור אדרי', phone: '050-9012345', email: 'lior.edri@gmail.com', status: 'active', points: 3105, joined: '05.08.2024', lastAction: 'צבירת 320 נק׳' },
  { id: 10, name: 'הילה ברק', phone: '053-0123456', email: 'hila.barak@gmail.com', status: 'new', points: 50, joined: '07.06.2026', lastAction: 'בונוס הצטרפות' },
  { id: 11, name: 'אלון שמש', phone: '052-1357913', email: 'alon.shemesh@gmail.com', status: 'active', points: 1380, joined: '30.04.2025', lastAction: 'מימוש קפה חינם' },
  { id: 12, name: 'טל גבאי', phone: '058-2468024', email: 'tal.gabay@gmail.com', status: 'inactive', points: 610, joined: '16.12.2024', lastAction: 'צבירת 45 נק׳' },
  /* primary_member_id: null = חבר ראשי; אחרת ה-id של החבר הראשי שאליו הוא מחובר */
]).map((m) => ({ primary_member_id: null, ...m }));

export const memberStatuses = {
  active: { label: 'פעיל', tone: 'success' },
  inactive: { label: 'לא פעיל', tone: 'neutral' },
  new: { label: 'חדש', tone: 'teal' },
};

/* ---- פעולות ותובנות ----------------------------------------- */

export const quickActions = [
  { key: 'message', icon: 'message', tone: 'brand', title: 'שליחת הודעה', description: 'שלחו עדכון, ברכה או מבצע לכל חברי המועדון או לקבוצה נבחרת.', cta: 'כתבו הודעה' },
  { key: 'reward', icon: 'gift', tone: 'pink', title: 'יצירת הטבה', description: 'צרו הטבה חדשה — הנחה, מתנה או בונוס נקודות — ושגרו אותה לחברים.', cta: 'צרו הטבה' },
  { key: 'insights', icon: 'chart', tone: 'teal', title: 'צפייה בתובנות', description: 'מגמות הצטרפות, מימושים והרגלי ביקור של חברי המועדון שלך.', cta: 'לצפייה בתובנות' },
  { key: 'export', icon: 'download', tone: 'amber', title: 'ייצוא נתונים', description: 'הורידו את רשימת החברים והפעילות כקובץ CSV לעבודה חיצונית.', cta: 'ייצוא לקובץ' },
];

/* ---- הגדרות -------------------------------------------------- */

export const businessSettings = {
  business_id: CURRENT_BUSINESS_ID,
  name: 'קפה נקודה',
  phone: '03-1234567',
  email: 'hello@nekuda.cafe',
  address: 'דיזנגוף 99, תל אביב',
};

export const clubSettings = {
  business_id: CURRENT_BUSINESS_ID,
  clubName: 'מועדון נקודה',
  pointsPerShekel: '1',
  welcomeBonus: '50',
  pointsExpiry: '12 חודשים',
};

export const integrations = [
  { key: 'whatsapp', icon: 'message', title: 'וואטסאפ', description: 'שליחת הודעות ועדכונים אוטומטיים לחברים' },
  { key: 'wallet', icon: 'wallet', title: 'Apple Wallet / Google Wallet', description: 'כרטיס חבר דיגיטלי בארנק הטלפון' },
  { key: 'payments', icon: 'creditCard', title: 'סליקה ותשלומים', description: 'צבירת נקודות אוטומטית מעסקאות' },
];

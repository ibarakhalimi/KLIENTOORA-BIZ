import React from 'react';
import { Layout } from './components/layout/Layout.jsx';
import { DashboardPage } from './pages/DashboardPage.jsx';
import { MembersPage } from './pages/MembersPage.jsx';
import { ActionsPage } from './pages/ActionsPage.jsx';
import { SettingsPage } from './pages/SettingsPage.jsx';
import { FormPage } from './pages/FormPage.jsx';

const NAV = [
  { key: 'dashboard', label: 'ראשי', icon: 'overview', page: DashboardPage },
  { key: 'members', label: 'חברי מועדון', icon: 'users', page: MembersPage },
  { key: 'actions', label: 'פעולות ותובנות', icon: 'sparkles', page: ActionsPage },
  { key: 'settings', label: 'הגדרות', icon: 'settings', page: SettingsPage },
];

function ManagementApp() {
  const [current, setCurrent] = React.useState('dashboard');
  const Page = (NAV.find((n) => n.key === current) || NAV[0]).page;

  return (
    <Layout nav={NAV} current={current} onNavigate={setCurrent}>
      <Page />
    </Layout>
  );
}

export default function App() {
  return window.location.pathname === '/form' ? <FormPage /> : <ManagementApp />;
}

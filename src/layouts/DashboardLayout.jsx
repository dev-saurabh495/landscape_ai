import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  Activity, BarChart3, Bell, BookOpen, ChevronDown, ChevronRight,
  Command, Database, FileCheck2, FileText, GitBranch, Globe2, Landmark,
  LayoutDashboard, LogOut, Menu, Moon, PanelLeftClose, PanelLeftOpen,
  Search, Settings, ShieldCheck, SlidersHorizontal, Sparkles, Users, X,
} from 'lucide-react';
import { useApp } from '../app/providers';

const groups = [
  ['OVERVIEW', [['Dashboard', '/dashboard', LayoutDashboard]]],
  ['INTELLIGENCE', [['Map Explorer', '/map', Globe2], ['Evidence', '/evidence', FileCheck2], ['Evidence Graph', '/evidence-graph', GitBranch], ['Land Records', '/land-records', Landmark]]],
  ['ANALYSIS', [['Policy Simulator', '/policy-simulator', SlidersHorizontal], ['Disputes', '/disputes', ShieldCheck], ['Analytics', '/analytics', BarChart3], ['Field Surveys', '/field-surveys', Activity]]],
  ['RESEARCH', [['Research Workspace', '/research', BookOpen], ['Reports', '/reports', FileText]]],
  ['TRUST', [['Provenance', '/provenance', Database]]],
  ['SYSTEM', [['Notifications', '/notifications', Bell], ['Profile', '/profile', Users], ['Settings', '/settings', Settings]]],
];

const adminLinks = [
  ['User Management', '/admin/users', Users],
  ['Verification Queue', '/admin/verification', FileCheck2],
  ['Audit Logs', '/admin/audit-logs', FileText],
  ['System Health', '/admin/system-health', Activity],
];

export default function DashboardLayout() {
  const { user, logout, theme, setTheme, resetDemo } = useApp();
  const [collapsed, setCollapsed] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const links = useMemo(() => groups.flatMap(group => group[1]), []);

  useEffect(() => {
    const handleShortcut = event => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearch(true);
      }
    };
    window.addEventListener('keydown', handleShortcut);
    const handleEscape = event => { if (event.key === 'Escape') { setMobile(false); setSearch(false); setMenu(false); } };
    window.addEventListener('keydown', handleEscape);
    document.body.style.overflow = mobile || search ? 'hidden' : '';
    return () => { window.removeEventListener('keydown', handleShortcut); window.removeEventListener('keydown', handleEscape); document.body.style.overflow = ''; };
  }, [mobile, search]);

  return <div className="app-shell">
    {mobile && <button className="drawer-backdrop" onClick={() => setMobile(false)} aria-label="Close navigation overlay" />}
    <aside className={`sidebar ${collapsed ? 'collapsed ' : ''}${mobile ? 'mobile-open' : ''}`}>
      <div className="sidebar-head">
        <div className="brand-mark"><Globe2 size={21} /></div>
        {!collapsed && <div className="brand-copy"><b>LandEvidence AI</b><small>Evidence-driven intelligence</small></div>}
        <button className="icon-btn mobile-only" onClick={() => setMobile(false)} aria-label="Close navigation"><X size={18} /></button>
      </div>
      <div className="demo-badge"><Sparkles size={14} />{!collapsed && 'Demo Mode'}</div>
      <nav aria-label="Main navigation">
        {groups.map(([title, items]) => <div className="nav-group" key={title}>
          <span className="nav-title">{!collapsed && title}</span>
          {items.map(([label, path, Icon]) => <NavLink key={path} to={path} onClick={() => setMobile(false)} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} title={collapsed ? label : undefined}><Icon size={18} /><span>{!collapsed && label}</span></NavLink>)}
        </div>)}
        {user?.role === 'admin' && <div className="nav-group"><span className="nav-title">{!collapsed && 'ADMIN'}</span>{adminLinks.map(([label, path, Icon]) => <NavLink key={path} to={path} onClick={() => setMobile(false)} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} title={collapsed ? label : undefined}><Icon size={18} /><span>{!collapsed && label}</span></NavLink>)}</div>}
      </nav>
      <div className="sidebar-foot"><div className="system-dot"><span />{!collapsed && <small>All systems operational</small>}</div>{!collapsed && <button className="reset-btn" onClick={resetDemo}>Reset Demo Data</button>}</div>
      <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)} aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}>{collapsed ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}</button>
    </aside>

    <div className="main-shell">
      <header className="topbar">
        <button className="icon-btn mobile-only" onClick={() => setMobile(true)} aria-label="Open navigation"><Menu size={20} /></button>
        <button className="global-search" onClick={() => setSearch(true)} aria-label="Open search"><Search size={17} /><span>Search district, village, survey number, or policy...</span><kbd><Command size={12} /> K</kbd></button>
        <div className="top-actions">
          <button className="icon-btn" onClick={() => setTheme(theme === 'light' ? 'midnight' : 'light')} title="Toggle theme" aria-label="Toggle theme"><Moon size={18} /></button>
          <NavLink className="icon-btn" to="/notifications" aria-label="Notifications"><Bell size={18} /><i className="notif-dot" /></NavLink>
          <div className="profile-menu">
            <button className="profile-trigger" onClick={() => setMenu(!menu)} aria-expanded={menu}><div className="avatar">{user?.name?.split(' ').map(part => part[0]).join('').slice(0, 2)}</div><span className="profile-label"><b>{user?.name}</b><small>{user?.role}</small></span><ChevronDown size={15} /></button>
            <AnimatePresence>{menu && <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="dropdown"><button onClick={() => { navigate('/profile'); setMenu(false); }}><Users size={16} /> Profile</button><button onClick={() => { navigate('/settings'); setMenu(false); }}><Settings size={16} /> Settings</button><button onClick={() => { navigate('/profile/security'); setMenu(false); }}><ShieldCheck size={16} /> Security</button><hr /><button onClick={logout}><LogOut size={16} /> Logout</button></motion.div>}</AnimatePresence>
          </div>
        </div>
      </header>
      <main className="content"><Outlet /></main>
    </div>
    {search && <CommandPalette close={() => setSearch(false)} links={links} />}
  </div>;
}

function CommandPalette({ close, links }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const filtered = links.filter(link => link[0].toLowerCase().includes(query.toLowerCase()));
  return <div className="modal-backdrop" onMouseDown={close}><motion.div className="command-palette" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} onMouseDown={event => event.stopPropagation()}><div className="command-input"><Search size={19} /><input autoFocus value={query} onChange={event => setQuery(event.target.value)} placeholder="Search pages and intelligence..." /><kbd>ESC</kbd></div><div className="command-results">{filtered.map(([label, path, Icon]) => <button key={path} onClick={() => { navigate(path); close(); }}><Icon size={17} /><span>{label}</span><ChevronRight size={15} /></button>)}{!filtered.length && <div className="empty-mini">No results found.</div>}</div><div className="command-foot"><span>Navigate with search</span><span>Ctrl K</span></div></motion.div></div>;
}

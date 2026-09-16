import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle, ArrowDownRight, ArrowRight,
  CalendarDays, CheckCircle2, Clock3, Database, Download, FileCheck2,
  Landmark, MapPinned, RefreshCw, ShieldCheck,
  Sparkles, Target, TrendingUp, Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import PageHeader from '../../components/common/PageHeader';
import MapPanel from '../../components/maps/MapPanel';
import DecisionTrace from '../../components/common/DecisionTrace';
import DecisionModal from '../../components/common/DecisionModal';
import { activities, disputes, evidence } from '../../data/mockData';
import { dashboardStats, evidenceActivity, priorityIntelligence, provenanceSnapshot, policySnapshot, riskDistribution, verificationFunnel } from '../../data/dashboardData';
import { useApp } from '../../app/providers';

const mapFilters = ['All', 'Evidence', 'Dispute', 'High Risk', 'Verified'];
const toneIcons = { danger: AlertTriangle, warning: AlertTriangle, info: FileCheck2, success: CheckCircle2 };

function Panel({ title, eyebrow, action, children, className = '' }) {
  return <section className={`card dashboard-panel ${className}`}><div className="dashboard-panel-head"><div><span className="dashboard-panel-eyebrow">{eyebrow}</span><h2>{title}</h2></div>{action}</div>{children}</section>;
}

function Trend({ value, tone }) {
  const Down = value.startsWith('-') ? ArrowDownRight : TrendingUp;
  return <span className={`dashboard-trend ${tone}`}><Down size={13} /> {value}</span>;
}

function DashboardSkeleton() {
  return <div className="dashboard-skeleton" aria-label="Loading dashboard"><span /><span /><span /><span /><div /><div /><div /></div>;
}

export default function Dashboard() {
  const { user } = useApp();
  const [period, setPeriod] = useState('Last 30 days');
  const [range, setRange] = useState('30D');
  const [mapFilter, setMapFilter] = useState('All');
  const [lastUpdated, setLastUpdated] = useState('2 min ago');
  const [parcel, setParcel] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const chartData = evidenceActivity[range];
  const totalRisk = riskDistribution.reduce((sum, item) => sum + item.value, 0);
  const recentEvidence = useMemo(() => evidence.slice(0, 5), []);
  const activeCases = useMemo(() => disputes.filter(item => item.status !== 'Resolved').slice(0, 5), []);

  const refresh = () => {
    setRefreshing(true);
    window.setTimeout(() => { setLastUpdated('just now'); setRefreshing(false); }, 450);
  };
  const exportReport = () => {
    const report = `LandEvidence AI dashboard export\nPeriod: ${period}\nLast updated: ${lastUpdated}\nSynthetic demo data only.`;
    const url = URL.createObjectURL(new Blob([report], { type: 'text/plain' }));
    const anchor = document.createElement('a'); anchor.href = url; anchor.download = 'landevidence-dashboard-demo.txt'; anchor.click(); URL.revokeObjectURL(url);
  };

  if (!user) return <DashboardSkeleton />;
  return <div className="dashboard-command-center">
    <PageHeader eyebrow="LAND INTELLIGENCE COMMAND CENTER" title="Land Intelligence Dashboard" description="Monitor land evidence, records, disputes and policy signals from one workspace." actions={<div className="dashboard-header-actions"><label className="dashboard-period"><CalendarDays size={15} /><select value={period} onChange={event => setPeriod(event.target.value)} aria-label="Dashboard period"><option>Last 7 days</option><option>Last 30 days</option><option>Last 90 days</option><option>This year</option></select></label><button className="btn" onClick={refresh} disabled={refreshing}><RefreshCw className={refreshing ? 'spin' : ''} size={15} /> Refresh</button><button className="btn" onClick={exportReport}><Download size={15} /> Export</button></div>} />

    <div className="dashboard-overview-strip"><div><span className="overview-live"><i /> System operational</span><b>District overview</b><small>Lucknow, Uttar Pradesh • Prototype workspace</small></div><div><span>Monitored regions</span><strong>8</strong></div><div><span>Evidence sources</span><strong>42</strong></div><div><span>Last synchronized</span><strong>{lastUpdated}</strong></div></div>

    <div className="dashboard-kpi-grid">{dashboardStats.map((stat, index) => <motion.div key={stat.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .05 }} className={`dashboard-kpi dashboard-kpi-${index}`}><div className="dashboard-kpi-top"><span>{[Landmark, FileCheck2, ShieldCheck, Target][index] && React.createElement([Landmark, FileCheck2, ShieldCheck, Target][index], { size: 20 })}</span><small>{stat.label}</small></div><strong>{stat.value}</strong><div><Trend value={stat.trend} tone={stat.tone} /><em>{stat.note}</em></div><i className="kpi-spark" /></motion.div>)}</div>

    <div className="dashboard-main-grid">
      <div className="dashboard-map-column"><Panel title="Land Activity Map" eyebrow="GIS INTELLIGENCE" action={<Link className="panel-action" to="/map">View full map <ArrowRight size={14} /></Link>}><div className="map-filter-row" role="group" aria-label="Map marker filters">{mapFilters.map(filter => <button key={filter} className={mapFilter === filter ? 'active' : ''} onClick={() => setMapFilter(filter)}>{filter}</button>)}</div><MapPanel onParcel={setParcel} markerFilter={mapFilter} /></Panel><DecisionTrace /></div>
      <Panel title="Priority Intelligence" eyebrow="ACTION QUEUE" action={<span className="status info">{priorityIntelligence.length} signals</span>} className="priority-panel"> <div className="priority-list">{priorityIntelligence.map(item => { const Icon = toneIcons[item.tone]; return <Link className="priority-item" to={item.route} key={item.title}><span className={`priority-icon ${item.tone}`}><Icon size={16} /></span><span><b>{item.title}</b><small>{item.detail}</small><time>{item.time}</time></span><ArrowRight size={15} /></Link>; })}</div><Link className="panel-footer-link" to="/notifications">Open activity center <ArrowRight size={14} /></Link></Panel>
    </div>

    <div className="dashboard-analytics-grid">
      <Panel title="Evidence Activity" eyebrow="SOURCE MONITORING" action={<div className="range-tabs">{Object.keys(evidenceActivity).map(item => <button key={item} className={range === item ? 'active' : ''} onClick={() => setRange(item)}>{item}</button>)}</div>} className="activity-chart-panel"><div className="chart-legend-note"><span><i className="legend-collected" /> Collected</span><span><i className="legend-verified" /> Verified</span><small>All figures are synthetic demo data</small></div><div className="dashboard-chart"><ResponsiveContainer width="100%" height={265}><BarChart data={chartData} margin={{ top: 12, right: 10, left: -18, bottom: 0 }}><XAxis dataKey="day" tick={{ fill: 'var(--quiet)', fontSize: 11 }} axisLine={false} tickLine={false} /><YAxis tick={{ fill: 'var(--quiet)', fontSize: 11 }} axisLine={false} tickLine={false} /><Tooltip contentStyle={{ background: 'var(--cards)', border: '1px solid var(--line)', borderRadius: 8, color: 'var(--heading)', fontSize: 12 }} /><Bar dataKey="collected" fill="var(--forest-2)" radius={[4, 4, 0, 0]} /><Bar dataKey="verified" fill="var(--forest)" radius={[4, 4, 0, 0]} /></BarChart></ResponsiveContainer></div></Panel>
      <Panel title="Land Risk Distribution" eyebrow="RISK MONITORING" action={<span className="status warning">{totalRisk.toLocaleString()} parcels</span>} className="risk-panel"><div className="risk-chart"><ResponsiveContainer width="100%" height={190}><PieChart><Pie data={riskDistribution} dataKey="value" nameKey="name" innerRadius={54} outerRadius={78} paddingAngle={3} stroke="none">{riskDistribution.map(item => <Cell key={item.name} fill={item.color} />)}</Pie><Tooltip contentStyle={{ background: 'var(--cards)', border: '1px solid var(--line)', borderRadius: 8, color: 'var(--heading)', fontSize: 12 }} /></PieChart></ResponsiveContainer><div><strong>{totalRisk.toLocaleString()}</strong><small>monitored parcels</small></div></div><div className="risk-legend">{riskDistribution.map(item => <div key={item.name}><span><i style={{ background: item.color }} /> {item.name}</span><b>{item.value.toLocaleString()} <small>{Math.round(item.value / totalRisk * 100)}%</small></b></div>)}</div></Panel>
    </div>

    <div className="dashboard-lower-grid"><Panel title="Evidence Verification" eyebrow="PROCESS FUNNEL" action={<Link className="panel-action" to="/admin/verification">Open queue <ArrowRight size={14} /></Link>} className="verification-panel"><div className="verification-funnel">{verificationFunnel.map(([label, value, percent], index) => <div className="verification-row" key={label}><div><span>{label}</span><b>{value}</b></div><div className="verification-bar"><i style={{ width: `${percent}%` }} /></div><small>{percent}%</small>{index < verificationFunnel.length - 1 && <ArrowRight size={14} />}</div>)}</div></Panel><Panel title="Policy Intelligence" eyebrow="SCENARIO WATCH" className="policy-snapshot"><div className="policy-stat-grid"><div><Sparkles size={16} /><strong>{policySnapshot.scenarios}</strong><span>active scenarios</span></div><div><MapPinned size={16} /><strong>{policySnapshot.regions}</strong><span>affected regions</span></div><div><AlertTriangle size={16} /><strong>{policySnapshot.impact}</strong><span>{policySnapshot.label}</span></div></div><Link className="panel-footer-link" to="/policy-simulator">Open policy simulator <ArrowRight size={14} /></Link></Panel></div>

    <div className="dashboard-two-column"><Panel title="Active Land Disputes" eyebrow="CONFLICT MONITORING" action={<Link className="panel-action" to="/disputes">View all disputes <ArrowRight size={14} /></Link>} className="disputes-panel"><div className="responsive-data-list"><div className="data-list-head"><span>Case</span><span>Location</span><span>Type</span><span>Priority</span><span>Updated</span><span>Status</span></div>{activeCases.map(item => <Link className="data-list-row" to="/disputes" key={item.id}><b>{item.id}</b><span>{item.parcel.replace('UP-LKO-', 'Lucknow-')}</span><span>{item.type}</span><span className={`status ${item.risk.toLowerCase()}`}>{item.risk}</span><time>{item.last}</time><span className="status info">{item.status}</span></Link>)}</div></Panel><Panel title="Recent Activity" eyebrow="WORKSPACE TIMELINE" action={<Link className="panel-action" to="/notifications">View all <ArrowRight size={14} /></Link>} className="recent-activity-panel"><div className="compact-activity">{activities.slice(0, 5).map(item => <div key={item.id}><span className="activity-dot"><Clock3 size={14} /></span><span><b>{item.text}</b><small>Workspace event</small></span><time>{item.time.split(', ')[1]}</time></div>)}</div></Panel></div>

    <div className="dashboard-two-column evidence-provenance-grid"><Panel title="Recent Evidence" eyebrow="SOURCE STREAM" action={<Link className="panel-action" to="/evidence">View evidence <ArrowRight size={14} /></Link>} className="recent-evidence-panel"><div className="recent-evidence-list">{recentEvidence.map(item => <Link to={`/evidence/${item.id}`} key={item.id}><span className="evidence-type-icon"><Database size={16} /></span><span><b>{item.id} • {item.title}</b><small>{item.type} • {item.district} • {item.date}</small></span><strong>{item.confidence}%<small>confidence</small></strong><ArrowRight size={14} /></Link>)}</div></Panel><Panel title="Evidence Provenance" eyebrow="TRACEABILITY" action={<Link className="panel-action" to="/provenance">View provenance <ArrowRight size={14} /></Link>} className="provenance-panel"><div className="provenance-integrity"><div><ShieldCheck size={22} /><span><small>Integrity checks</small><strong>{provenanceSnapshot.integrity}</strong></span></div><span className="status success">Demo verification</span></div><div className="provenance-chain">{['Source', 'Collected', 'Processed', 'Verified', 'Published'].map((step, index) => <React.Fragment key={step}><span className={index < 4 ? 'complete' : ''}><i>{index < 4 ? '✓' : '5'}</i>{step}</span>{index < 4 && <ArrowRight size={13} />}</React.Fragment>)}</div><small className="provenance-note">{provenanceSnapshot.verified.toLocaleString()} of {provenanceSnapshot.sources.toLocaleString()} sources have passed the prototype check.</small></Panel></div>

    {parcel && <DecisionModal title="Parcel selected" text={`Synthetic parcel ${parcel.id} in ${parcel.village}, ${parcel.district}. ${parcel.area} ha ${parcel.landUse.toLowerCase()} land with ${parcel.ownership.toLowerCase()} tenure.`} close={() => setParcel(null)} />}
  </div>;
}

import React, { useState } from 'react';
import { AlertTriangle, BarChart3, CheckCircle2, Clock3, FileCheck2, GitBranch, Landmark, MapPinned, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import StatCard from '../../components/common/StatCard';
import MapPanel from '../../components/maps/MapPanel';
import DecisionTrace from '../../components/common/DecisionTrace';
import DecisionModal from '../../components/common/DecisionModal';
import { activities } from '../../data/mockData';
import { useApp } from '../../app/providers';

const insights = [
  ['Land-use change detected', 'Satellite Classification Dataset', '28 Apr 2025 • 92% confidence', 'Review', AlertTriangle, 'warning'],
  ['Boundary inconsistency detected', 'Field Verification Report', '27 Apr 2025 • 86% confidence', 'Needs verification', GitBranch, 'danger'],
  ['Evidence bundle verified', 'Mutation Register Extract', '26 Apr 2025 • 98% confidence', 'Verified', CheckCircle2, 'success'],
];

const timeline = [
  ['Record created', 'Revenue register', '12 Mar 2021', true],
  ['Mutation logged', 'Mutation Register Extract', '09 Jun 2022', true],
  ['Field survey', 'Field Survey Team', '18 Apr 2025', true],
  ['Satellite observation', 'ISRO Bhuvan', '24 Apr 2025', true],
  ['Verification review', 'District Verification Queue', 'In progress', false],
];

export default function Dashboard() {
  const { user } = useApp();
  const [parcel, setParcel] = useState(null);
  return <>
    <PageHeader eyebrow="DISTRICT INTELLIGENCE" title={`Good afternoon, ${user?.name?.split(' ')[0]}.`} description="Lucknow District • Synthetic prototype workspace" actions={<><Link className="btn" to="/evidence"><FileCheck2 size={14} /> Review evidence</Link><Link className="btn primary" to="/policy-simulator"><Sparkles size={14} /> Run policy scenario</Link></>} />
    <div className="grid kpi-grid">
      <StatCard icon={Landmark} label="Verified land records" value="18,426" trend="↑ 8.4% this quarter" />
      <StatCard icon={FileCheck2} label="Active evidence cases" value="246" trend="38 need review" />
      <StatCard icon={AlertTriangle} label="Boundary conflicts" value="24" trend="6 high priority" />
      <StatCard icon={BarChart3} label="Policy scenarios" value="18" trend="4 saved this week" />
      <StatCard icon={MapPinned} label="Pending verification" value="73" trend="12 field visits due" />
    </div>
    <div className="dashboard-grid">
      <div><MapPanel onParcel={setParcel} /><div style={{ marginTop: 12 }}><DecisionTrace /></div></div>
      <div className="grid" style={{ alignContent: 'start' }}>
        <div className="card insight-card"><div className="section-title">Intelligence signals <span className="status info" style={{ float: 'right' }}>SIMULATED</span></div><div className="section-sub">Prioritized from synthetic district evidence</div><div className="insight-list">{insights.map(([title, source, meta, status, Icon, tone]) => <div className="insight" key={title}><div className={'insight-icon ' + tone}><Icon size={15} /></div><div><b>{title}</b><small>{source}</small><small>{meta}</small></div><span className={'status ' + tone}>{status}</span></div>)}</div><Link className="text-link" to="/evidence">Open evidence workspace <span>→</span></Link></div>
        <div className="card"><div className="section-title">Evidence timeline <span className="status info" style={{ float: 'right' }}>PARCEL CONTEXT</span></div><div className="section-sub">UP-LKO-004276 • Sarojini Nagar</div><div className="dashboard-timeline">{timeline.map(([title, source, date, complete]) => <div className={'dashboard-event ' + (complete ? 'complete' : '')} key={title}><span className="event-dot" /><div><b>{title}</b><small>{source}</small></div><time>{date}</time></div>)}</div></div>
      </div>
    </div>
    <div className="card activity-card"><div className="section-title">Recent workspace activity <Link className="text-link" to="/notifications" style={{ float: 'right' }}>View all <span>→</span></Link></div><div className="activity-list">{activities.slice(0, 5).map(item => <div className="activity-row" key={item.id}><span className="activity-icon"><Clock3 size={14} /></span><span>{item.text}</span><time>{item.time}</time></div>)}</div></div>
    {parcel && <DecisionModal title="Parcel selected" text={`Synthetic parcel ${parcel.id} in ${parcel.village}, ${parcel.district}. ${parcel.area} ha ${parcel.landUse.toLowerCase()} land with ${parcel.ownership.toLowerCase()} tenure.`} close={() => setParcel(null)} />}
  </>;
}

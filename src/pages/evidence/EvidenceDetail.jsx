import React from 'react';
import { ArrowLeft, FileCheck2, ShieldCheck } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import DecisionTrace from '../../components/common/DecisionTrace';
import AIAnalysisPanel from '../../components/common/AIAnalysisPanel';
import { evidence } from '../../data/mockData';

export default function EvidenceDetail() {
  const { id } = useParams();
  const record = evidence.find(item => item.id === id) || evidence[0];
  return <>
    <PageHeader eyebrow="EVIDENCE RECORD" title={record.title} description={`${record.source} • ${record.district} • ${record.date}`} actions={<Link className="btn" to="/evidence"><ArrowLeft size={14} /> Back</Link>} />
    <div className="dashboard-grid evidence-detail-grid">
      <div className="grid">
        <div className="card panel"><div className="metric-grid"><div className="metric-box"><span>Status</span><b style={{ fontSize: 12, color: 'var(--success)' }}>Verified</b></div><div className="metric-box"><span>Confidence</span><b>{record.confidence}%</b></div><div className="metric-box"><span>Evidence type</span><b style={{ fontSize: 12 }}>{record.type}</b></div><div className="metric-box"><span>Year</span><b>2024</b></div></div><h3>Evidence summary</h3><p>Synthetic prototype evidence record showing how a land-use observation can be connected to a source, verification event and spatial context. It is not an official government record.</p></div>
        <AIAnalysisPanel evidence={record} />
        <DecisionTrace />
      </div>
      <div className="grid"><div className="card panel"><div className="section-title"><FileCheck2 size={15} /> Provenance</div><p className="section-sub">Source: {record.source}</p><p className="hash">SHA-256: {record.hash}</p><p>Timestamp: 28 Apr 2025, 14:25<br />Verifier: Prototype verification service</p><span className="status verified"><ShieldCheck size={12} /> VERIFIED</span></div><div className="card panel"><div className="section-title">Related evidence</div>{evidence.slice(0, 4).map(item => <Link key={item.id} to={`/evidence/${item.id}`} className="related-evidence"><b>{item.id}</b><span>{item.title}</span></Link>)}</div></div>
    </div>
  </>;
}

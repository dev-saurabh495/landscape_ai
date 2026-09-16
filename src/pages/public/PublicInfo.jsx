import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
export default function PublicInfo({title,description,items=[]}){
 return <div className="auth-panel" style={{minHeight:'100vh',display:'block',padding:'50px 8%'}}><PageHeader eyebrow="LANDEVIDENCE AI" title={title} description={description}/><div className="cards-grid">{items.map(([h,p])=><div className="card panel" key={h}><h3 style={{font:'600 14px Manrope'}}>{h}</h3><p style={{fontSize:10,color:'var(--muted)',lineHeight:1.7}}>{p}</p></div>)}</div><div style={{marginTop:20}}><Link className="btn primary" to="/login">Open Demo →</Link></div></div>
}

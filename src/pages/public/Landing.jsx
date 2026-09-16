import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Activity, ArrowRight, BarChart3, CheckCircle2, Database, FileCheck2,
  GitBranch, Globe2, Landmark, Layers3, Map, Menu, Search, ShieldCheck,
  SlidersHorizontal, Sparkles, Users, X,
} from 'lucide-react';

const capabilities = [
  ['Evidence intelligence', 'Search, verify and connect registry, legal, field and satellite sources.', FileCheck2, '/evidence'],
  ['GIS and spatial analysis', 'Read parcel context, land-use change and conflict signals on one map.', Map, '/map'],
  ['Land records', 'Turn parcel records into a clear, searchable operational view.', Landmark, '/land-records'],
  ['Dispute intelligence', 'Bring boundary observations and source evidence into one review path.', ShieldCheck, '/disputes'],
  ['Policy simulation', 'Compare prototype scenarios with transparent assumptions and trade-offs.', SlidersHorizontal, '/policy-simulator'],
  ['Research and analytics', 'Keep datasets, studies, reports and decision context connected.', BarChart3, '/research'],
];

const workflow = [
  ['01', 'Collect', 'Bring records, surveys, satellite observations and policy sources together.'],
  ['02', 'Verify', 'See confidence, status, timestamp and provenance before relying on a source.'],
  ['03', 'Connect', 'Link parcels, disputes, observations and research into a shared context.'],
  ['04', 'Analyze', 'Surface land-use patterns and compare prototype policy scenarios.'],
  ['05', 'Decide', 'Keep the decision traceable back to the evidence that supports it.'],
];

const stats = [['18,426', 'Verified records'], ['246', 'Evidence cases'], ['24', 'Active conflicts'], ['18', 'Policy scenarios']];

function Reveal({ children, className = '', delay = 0 }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .16 }} transition={{ duration: .55, delay }}>{children}</motion.div>;
}

export default function Landing() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMenu = () => setMobileOpen(false);
  return <div className="landing-redesign">
    <header className="landing-redesign-nav">
      <Link className="landing-brand" to="/" onClick={closeMenu}><span className="landing-brand-mark"><Globe2 size={22} /></span><span><b>LandEvidence AI</b><small>Land governance intelligence</small></span></Link>
      <nav className={mobileOpen ? 'open' : ''} aria-label="Public navigation"><a href="#platform" onClick={closeMenu}>Platform</a><a href="#evidence" onClick={closeMenu}>Evidence</a><a href="#gis" onClick={closeMenu}>GIS</a><a href="#research" onClick={closeMenu}>Research</a><a href="#about" onClick={closeMenu}>About</a><Link className="mobile-signin" to="/login" onClick={closeMenu}>Sign in</Link></nav>
      <div className="landing-nav-actions"><Link className="landing-signin" to="/login">Sign in</Link><Link className="landing-button landing-button-primary" to="/dashboard">Open platform <ArrowRight size={16} /></Link></div>
      <button className="landing-menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>{mobileOpen ? <X size={23} /> : <Menu size={23} />}</button>
    </header>

    <main>
      <section className="landing-redesign-hero">
        <div className="landing-container landing-hero-grid">
          <Reveal className="landing-hero-copy"><span className="landing-kicker">LAND GOVERNANCE <i>•</i> EVIDENCE <i>•</i> INTELLIGENCE</span><h1>Evidence-driven intelligence <em>for better land governance.</em></h1><p>Connect land records, spatial evidence, disputes and policy insights in one trusted workspace.</p><div className="landing-hero-actions"><Link className="landing-button landing-button-primary" to="/dashboard">Explore platform <ArrowRight size={17} /></Link><Link className="landing-button landing-button-secondary" to="/evidence"><FileCheck2 size={17} /> View evidence</Link></div><div className="landing-status"><span className="landing-status-dot" /> Prototype workspace <span>•</span> Synthetic data clearly labelled</div></Reveal>
          <Reveal className="landing-product-preview" delay={.12}><div className="landing-preview-bar"><span><span className="landing-live-dot" /> District intelligence</span><b>Lucknow <Search size={14} /></b></div><div className="landing-preview-map"><div className="preview-grid" /><div className="preview-river" /><div className="preview-boundary" /><span className="preview-marker marker-a" /><span className="preview-marker marker-b" /><span className="preview-marker marker-c" /><span className="preview-label label-a">Sarojini Nagar</span><span className="preview-label label-b">Mohan</span><div className="preview-parcel"><small>SELECTED PARCEL</small><strong>UP-LKO-004276</strong><span>2.45 ha <i>•</i> Agricultural</span><em>Needs verification</em></div><div className="preview-layer"><Layers3 size={14} /> Land use <span>On</span></div></div><div className="landing-preview-footer"><span><GitBranch size={14} /> 7 linked sources</span><span><ShieldCheck size={14} /> Provenance ready</span><b>92% <small>confidence</small></b></div></Reveal>
        </div>
      </section>

      <section className="landing-trust-strip"><div className="landing-container trust-strip-inner"><span>BUILT FOR SHARED CONTEXT</span>{stats.map(([value, label]) => <div key={label}><strong>{value}</strong><small>{label}</small></div>)}</div></section>

      <section id="platform" className="landing-section landing-container landing-solve"><Reveal><span className="landing-kicker">WHY LANDEVIDENCE AI</span><h2>Land questions rarely live in one dataset.</h2><p className="landing-lead">A record can tell you what was registered. A map can show what changed. A field survey can reveal what is happening now. LandEvidence AI helps teams hold those perspectives together before a decision is made.</p></Reveal><div className="landing-solve-grid"><Reveal className="solve-note" delay={.1}><Database size={21} /><h3>Fragmented evidence</h3><p>Disconnected records and observations make context easy to lose.</p></Reveal><div className="solve-arrow"><ArrowRight size={24} /></div><Reveal className="solve-note solve-note-accent" delay={.2}><Sparkles size={21} /><h3>Traceable intelligence</h3><p>One workspace makes source, confidence and consequence visible.</p></Reveal><div className="solve-arrow"><ArrowRight size={24} /></div><Reveal className="solve-note" delay={.3}><CheckCircle2 size={21} /><h3>Defensible action</h3><p>Decisions stay connected to the evidence that informed them.</p></Reveal></div></section>

      <section id="evidence" className="landing-section landing-container"><div className="landing-section-heading"><div><span className="landing-kicker">THE PLATFORM</span><h2>One calm workspace for complex land decisions.</h2></div><p>Purpose-built surfaces for officers, researchers, policy analysts and field teams.</p></div><div className="landing-capability-grid">{capabilities.map(([title, text, Icon, path], index) => <Reveal key={title} className={`landing-capability capability-${index}`} delay={index * .04}><Link to={path}><span className="capability-icon"><Icon size={21} /></span><span><h3>{title}</h3><p>{text}</p><b>Explore <ArrowRight size={14} /></b></span></Link></Reveal>)}</div></section>

      <section className="landing-section landing-workflow-section"><div className="landing-container"><Reveal><span className="landing-kicker">EVIDENCE WORKFLOW</span><h2>Every conclusion has a path back.</h2><p className="landing-lead">Move from source collection to decision with fewer blind spots and a clearer record of how the work happened.</p></Reveal><div className="landing-workflow">{workflow.map(([number, title, text], index) => <Reveal className="landing-workflow-step" key={title} delay={index * .06}><span className="workflow-number">{number}</span><div><h3>{title}</h3><p>{text}</p></div>{index < workflow.length - 1 && <span className="workflow-connector" />}</Reveal>)}</div></div></section>

      <section id="gis" className="landing-section landing-container landing-feature-split"><Reveal className="landing-feature-visual"><div className="feature-map"><div className="feature-map-grid" /><div className="feature-map-river" /><div className="feature-map-parcel parcel-one" /><div className="feature-map-parcel parcel-two" /><div className="feature-map-parcel parcel-three" /><span className="feature-pin feature-pin-one" /><span className="feature-pin feature-pin-two" /><div className="feature-map-toolbar"><button aria-label="Layers"><Layers3 size={17} /></button><button aria-label="Search"><Search size={17} /></button><b>Lucknow district</b></div><div className="feature-map-legend"><span><i className="legend-sage" /> Agricultural</span><span><i className="legend-amber" /> Review area</span><span><i className="legend-red" /> Conflict</span></div></div></Reveal><Reveal className="landing-feature-copy" delay={.1}><span className="landing-kicker">GIS & SPATIAL INTELLIGENCE</span><h2>See the parcel in its real context.</h2><p>Layer land use, administrative boundaries, field observations and dispute hotspots without leaving the evidence trail.</p><ul><li><CheckCircle2 size={17} /> Parcel-level context</li><li><CheckCircle2 size={17} /> District and village views</li><li><CheckCircle2 size={17} /> Layer-aware evidence markers</li></ul><Link className="landing-text-link" to="/map">Open map explorer <ArrowRight size={15} /></Link></Reveal></section>

      <section className="landing-section landing-container landing-lineage-section"><Reveal className="landing-feature-copy"><span className="landing-kicker">PROVENANCE & LINEAGE</span><h2>Trust is easier when the chain is visible.</h2><p>Understand where an observation came from, when it was captured, how it was verified and what decision context it supports.</p><Link className="landing-text-link" to="/provenance">View provenance records <ArrowRight size={15} /></Link></Reveal><Reveal className="landing-lineage" delay={.12}><div className="lineage-source"><Database size={19} /><span>Source</span><small>Land record • Satellite • Field survey</small></div><div className="lineage-line" /><div className="lineage-source"><ShieldCheck size={19} /><span>Verification</span><small>Timestamp and confidence visible</small></div><div className="lineage-line" /><div className="lineage-source lineage-final"><GitBranch size={19} /><span>Decision trace</span><small>Evidence connected to analysis</small></div></Reveal></section>

      <section className="landing-section landing-policy-band"><div className="landing-container landing-policy-grid"><Reveal className="landing-feature-copy"><span className="landing-kicker">POLICY INTELLIGENCE</span><h2>Explore trade-offs before action.</h2><p>Prototype scenarios help teams ask better questions about affected parcels, environmental risk and dispute exposure.</p><Link className="landing-text-link" to="/policy-simulator">Open policy simulator <ArrowRight size={15} /></Link></Reveal><Reveal className="landing-policy-preview" delay={.12}><div className="policy-preview-head"><span>Policy scenario</span><b>Prototype simulation</b></div><h3>Agricultural conversion threshold</h3><div className="policy-options"><span>Baseline <b>10%</b></span><span className="selected">Proposed <b>15%</b></span><span>Expanded <b>20%</b></span></div><div className="policy-bars"><div><span>Affected parcels</span><b>+18.7%</b><i><em style={{ width: '68%' }} /></i></div><div><span>Dispute exposure</span><b>Medium</b><i><em style={{ width: '48%' }} /></i></div><div><span>Environmental risk</span><b>+8.5%</b><i><em style={{ width: '34%' }} /></i></div></div></Reveal></div></section>

      <section id="research" className="landing-section landing-container landing-analytics"><div className="landing-section-heading"><div><span className="landing-kicker">RESEARCH & ANALYTICS</span><h2>Make the pattern legible.</h2></div><p>Bring evidence collections, reports and district signals into a shared research workspace.</p></div><div className="analytics-layout"><Reveal className="analytics-chart"><div className="analytics-card-head"><span>Evidence verification trend</span><b>Apr 2025 <ArrowRight size={14} /></b></div><div className="chart-area"><div className="chart-lines"><i /><i /><i /><i /></div><svg viewBox="0 0 600 190" role="img" aria-label="Synthetic evidence verification trend chart"><path d="M0 160 C55 142 70 132 115 145 S172 90 220 114 S278 78 325 94 S377 52 430 71 S492 34 540 48 S575 21 600 30" fill="none" stroke="currentColor" strokeWidth="4" /><path d="M0 160 C55 142 70 132 115 145 S172 90 220 114 S278 78 325 94 S377 52 430 71 S492 34 540 48 S575 21 600 30 L600 190 L0 190Z" fill="currentColor" opacity=".08" /></svg></div><div className="chart-labels"><span>01 Apr</span><span>08 Apr</span><span>15 Apr</span><span>22 Apr</span><span>28 Apr</span></div></Reveal><div className="analytics-side"><div><Activity size={20} /><strong>73</strong><span>Pending verification</span></div><div><Users size={20} /><strong>12</strong><span>Research contributors</span></div><div><FileCheck2 size={20} /><strong>92%</strong><span>Prototype confidence</span></div></div></div></section>

      <section id="about" className="landing-final-cta"><div className="landing-container"><span className="landing-kicker">A CLEARER STARTING POINT</span><h2>Put the evidence in the room before the decision.</h2><p>Explore the LandEvidence AI prototype and see how records, spatial context and policy questions can stay connected.</p><div><Link className="landing-button landing-button-primary" to="/dashboard">Open platform <ArrowRight size={17} /></Link><Link className="landing-button landing-button-secondary" to="/evidence">Browse evidence <FileCheck2 size={17} /></Link></div></div></section>
    </main>

    <footer className="landing-redesign-footer"><div className="landing-container"><Link className="landing-brand" to="/"><span className="landing-brand-mark"><Globe2 size={20} /></span><span><b>LandEvidence AI</b><small>Land governance intelligence</small></span></Link><span>Prototype interface • Synthetic data • No official government predictions</span><Link to="/about">About the platform</Link></div></footer>
  </div>;
}

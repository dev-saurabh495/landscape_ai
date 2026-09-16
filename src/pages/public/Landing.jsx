import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, BarChart3, CheckCircle2, Database, FileCheck2, GitBranch,
  Globe2, Landmark, Map, Play, Search, ShieldCheck, Sparkles,
} from 'lucide-react';

const workflow = [
  ['01', 'Land data', 'Records, parcels and satellite observations enter one spatial workspace.', Database],
  ['02', 'Evidence', 'Sources are connected, scored and made easy to verify.', FileCheck2],
  ['03', 'Intelligence', 'Patterns, conflicts and change signals become decision context.', Sparkles],
  ['04', 'Policy', 'Prototype scenarios reveal possible trade-offs before action.', BarChart3],
  ['05', 'Decision', 'Every conclusion keeps a visible trace back to its sources.', GitBranch],
];

const modules = [
  ['Land intelligence map', 'See parcels, risks, field observations and land-use change in district context.', Map, '/map'],
  ['Evidence workspace', 'Search across registry, legal, satellite and field evidence with confidence signals.', FileCheck2, '/evidence'],
  ['Policy simulator', 'Compare prototype scenarios with transparent impact assumptions and affected parcels.', BarChart3, '/policy-simulator'],
  ['Provenance records', 'Follow source, timestamp, verification and lineage for every evidence record.', ShieldCheck, '/provenance'],
];

export default function Landing() {
  const [activeStep, setActiveStep] = useState(2);
  const ActiveIcon = workflow[activeStep][3];

  return (
    <div className="landing landing-v2">
      <header className="landing-nav">
        <Link className="brand" to="/">
          <div className="brand-mark"><Globe2 size={20} /></div>
          <div><b>LandEvidence AI</b><small>Evidence-driven land governance</small></div>
        </Link>
        <nav aria-label="Public navigation">
          <a href="#workflow">Workflow</a><a href="#modules">Modules</a><a href="#trust">Trust</a>
        </nav>
        <Link className="btn primary" to="/login">Open demo <ArrowRight size={15} /></Link>
      </header>

      <main>
        <section className="landing-hero landing-hero-v2">
          <div className="hero-copy">
            <span className="eyebrow">LAND INTELLIGENCE PLATFORM <i>•</i> SYNTHETIC DEMO</span>
            <h1>Evidence-Driven Intelligence <em>for Land Governance</em></h1>
            <p>Connect land records, geospatial intelligence, field observations and policy research into one traceable decision system.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/login">Explore platform <ArrowRight size={15} /></Link>
              <a className="btn hero-play" href="#workflow"><Play size={14} /> View intelligence demo</a>
            </div>
            <div className="hero-trust"><span><CheckCircle2 size={14} /> Source lineage</span><span><ShieldCheck size={14} /> Demo verification</span><span><Database size={14} /> Synthetic datasets</span></div>
          </div>
          <motion.div className="hero-command" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}>
            <div className="command-top"><span><span className="live-dot" /> Intelligence workspace</span><span>Lucknow district <Search size={13} /></span></div>
            <div className="command-map"><div className="map-grid" /><div className="map-river" /><div className="map-boundary" /><span className="map-pin pin-one" /><span className="map-pin pin-two" /><span className="map-pin pin-three" /><span className="map-place place-one">Sarojini Nagar</span><span className="map-place place-two">Mohan</span><div className="map-readout"><small>SELECTED PARCEL</small><b>UP-LKO-004276</b><span>2.45 ha <i>•</i> Agricultural</span></div></div>
            <div className="command-foot"><span><span className="signal-bar" /> 7 linked evidence sources</span><b>Confidence <strong>92%</strong></b></div>
          </motion.div>
        </section>

        <section id="workflow" className="landing-section workflow-section">
          <div className="section-intro"><span className="eyebrow">THE DECISION LOOP</span><h2>From fragmented land data to a defensible decision.</h2><p>LandEvidence AI keeps the chain visible, so teams can move from spatial signal to policy action without losing context.</p></div>
          <div className="workflow-layout"><div className="workflow-list">{workflow.map(([number, title, text, Icon], index) => <button className={'workflow-step ' + (activeStep === index ? 'active' : '')} key={title} onClick={() => setActiveStep(index)}><span className="step-number">{number}</span><Icon size={18} /><span><b>{title}</b><small>{text}</small></span><ArrowRight size={15} /></button>)}</div><motion.div className="workflow-preview" key={activeStep} initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }}><div className="preview-kicker"><ActiveIcon size={16} /> LIVE WORKFLOW PREVIEW</div><div className="preview-icon"><ActiveIcon size={30} /></div><h3>{workflow[activeStep][1]}</h3><p>{workflow[activeStep][2]}</p><div className="preview-line"><span style={{ width: `${42 + activeStep * 12}%` }} /></div><small>Prototype signal <b>{activeStep === 4 ? 'decision trace ready' : 'context assembled'}</b></small></motion.div></div>
        </section>

        <section id="modules" className="landing-section modules-section"><div className="section-intro"><span className="eyebrow">CORE INTELLIGENCE MODULES</span><h2>One product language for every land question.</h2></div><div className="module-grid">{modules.map(([title, text, Icon, path]) => <Link className="module-card" to={path} key={title}><div className="module-icon"><Icon size={19} /></div><h3>{title}</h3><p>{text}</p><span>Explore module <ArrowRight size={14} /></span></Link>)}</div></section>

        <section id="trust" className="landing-section trust-section"><div><span className="eyebrow">BUILT FOR ACCOUNTABLE ACTION</span><h2>Clarity for the people who hold the decision.</h2><p>Government officers, researchers, policy analysts and field teams work from the same evidence context, with synthetic data clearly marked throughout this prototype.</p><Link className="text-link" to="/features">See platform capabilities <ArrowRight size={14} /></Link></div><div className="trust-rail"><div><Landmark size={18} /><b>Governance</b><span>Roles, verification queues and audit-ready records.</span></div><div><GitBranch size={18} /><b>Collaboration</b><span>Research, field observations and reports stay connected.</span></div><div><GitBranch size={18} /><b>Decision trace</b><span>Source lineage remains visible from signal to outcome.</span></div></div></section>

        <section className="landing-cta"><span className="eyebrow">READY FOR THE NEXT QUESTION?</span><h2>Make land decisions with the evidence in view.</h2><Link className="btn primary" to="/login">Enter the demo workspace <ArrowRight size={15} /></Link></section>
      </main>
      <footer className="landing-footer"><span>LandEvidence AI</span><small>Prototype interface • Synthetic data • No official government predictions</small><Link to="/about">About the platform</Link></footer>
    </div>
  );
}

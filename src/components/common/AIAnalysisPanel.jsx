import React from 'react';
import { AlertTriangle, CheckCircle2, CircleAlert, FileSearch, LoaderCircle, RotateCcw, ShieldCheck } from 'lucide-react';
import { aiAvailability } from '../../services/ai/aiConfig';
import { useAIAnalysis } from '../../hooks/useAIAnalysis';

export default function AIAnalysisPanel({ evidence }) {
  const analysis = useAIAnalysis();
  const availability = aiAvailability();
  const runAnalysis = () => analysis.run(evidence);

  return <section className="card panel ai-analysis-panel" aria-live="polite">
    <div className="ai-panel-head"><div><span className="eyebrow">ASSISTED ANALYSIS</span><h3>Evidence analysis</h3><p>Structured AI assistance with source references. It is not legal or administrative verification.</p></div><span className={`status ${availability.available ? 'info' : 'warning'}`}>{availability.label}</span></div>
    {analysis.status === 'idle' && <div className="ai-idle"><FileSearch size={22} /><div><b>Review this evidence with AI</b><small>{availability.available ? 'The request will return a structured result and citations.' : 'No provider is configured for this workspace.'}</small></div><button className="btn primary" onClick={runAnalysis} disabled={!availability.available}>Analyze evidence</button></div>}
    {analysis.status === 'processing' && <div className="ai-processing"><LoaderCircle className="spin" size={21} /><div><b>Analysis in progress</b><small>Retrieving context and validating the structured result...</small></div></div>}
    {analysis.status === 'failed' && <div className="ai-error"><CircleAlert size={21} /><div><b>Analysis unavailable</b><small>{analysis.error}</small></div><button className="btn" onClick={runAnalysis}><RotateCcw size={14} /> Retry</button></div>}
    {analysis.status === 'completed' && analysis.result && <div className="ai-result"><div className="ai-result-summary"><span className="status info">{availability.label}</span><b>{analysis.result.classification}</b><p>{analysis.result.summary}</p></div><div className="ai-result-grid"><div><span><ShieldCheck size={14} /> Signal confidence</span><strong>{Math.round(analysis.result.confidence * 100)}%</strong></div><div><span><CheckCircle2 size={14} /> Entities extracted</span><strong>{analysis.result.entities.length}</strong></div><div><span><AlertTriangle size={14} /> Risk flags</span><strong>{analysis.result.riskFlags.length}</strong></div></div><div className="ai-result-columns"><div><b>Review suggestions</b><ul>{analysis.result.recommendedReview.map(item => <li key={item}>{item}</li>)}</ul></div><div><b>Sources used</b><ul>{analysis.result.citations.map(item => <li key={item.reference}><span>{item.label}</span><small>{item.reference}</small></li>)}</ul></div></div><div className="ai-review-actions"><span>Human review required</span><button className="btn" onClick={analysis.reset}>Run again</button><button className="btn">Mark for review</button></div></div>}
  </section>;
}

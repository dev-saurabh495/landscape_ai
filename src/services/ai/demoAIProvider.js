import { validateEvidenceAnalysis } from './aiSchemas';
import { createAIProvider } from './AIProviderInterface';

function analyzeEvidenceDemo(evidence) {
  const isSatellite = evidence.type === 'Satellite';
  const isField = evidence.type === 'Field';
  const result = {
    summary: `DEMO AI analysis: this ${evidence.type.toLowerCase()} record is associated with ${evidence.district} and should be reviewed alongside its linked parcel and source records.`,
    classification: isSatellite ? 'Land-use observation' : isField ? 'Field observation' : 'Administrative evidence',
    entities: [evidence.id, evidence.district, evidence.source],
    riskFlags: evidence.status === 'Pending' ? ['Verification is still pending'] : ['No additional demo risk signal'],
    inconsistencies: [],
    recommendedReview: ['Compare against related evidence', 'Confirm source date and parcel reference'],
    citations: [{ label: evidence.title, reference: evidence.id }, { label: evidence.source, reference: evidence.date }],
    confidence: Math.min(0.99, Math.max(0.5, evidence.confidence / 100)),
  };
  return validateEvidenceAnalysis(result);
}

export const demoAIProvider = createAIProvider({
  async analyzeEvidence(evidence) {
    await new Promise(resolve => window.setTimeout(resolve, 650));
    return analyzeEvidenceDemo(evidence);
  },
});

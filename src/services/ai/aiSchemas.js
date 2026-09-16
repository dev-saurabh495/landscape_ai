const isStringArray = value => Array.isArray(value) && value.every(item => typeof item === 'string');

export function validateEvidenceAnalysis(value) {
  const valid = value && typeof value === 'object'
    && typeof value.summary === 'string'
    && typeof value.classification === 'string'
    && isStringArray(value.entities)
    && isStringArray(value.riskFlags)
    && isStringArray(value.inconsistencies)
    && isStringArray(value.recommendedReview)
    && Array.isArray(value.citations)
    && value.citations.every(item => item && typeof item.label === 'string' && typeof item.reference === 'string')
    && typeof value.confidence === 'number'
    && value.confidence >= 0 && value.confidence <= 1;
  if (!valid) throw new Error('The AI service returned an invalid structured result.');
  return value;
}

export const evidenceAnalysisSchema = {
  type: 'object',
  required: ['summary', 'classification', 'entities', 'riskFlags', 'inconsistencies', 'recommendedReview', 'citations', 'confidence'],
  properties: {
    summary: { type: 'string' },
    classification: { type: 'string' },
    entities: { type: 'array', items: { type: 'string' } },
    riskFlags: { type: 'array', items: { type: 'string' } },
    inconsistencies: { type: 'array', items: { type: 'string' } },
    recommendedReview: { type: 'array', items: { type: 'string' } },
    citations: { type: 'array', items: { type: 'object', required: ['label', 'reference'] } },
    confidence: { type: 'number', minimum: 0, maximum: 1 },
  },
};

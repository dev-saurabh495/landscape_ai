export function createAIProvider({ analyzeEvidence }) {
  if (typeof analyzeEvidence !== 'function') throw new TypeError('AI providers must implement analyzeEvidence.');
  return Object.freeze({ analyzeEvidence });
}

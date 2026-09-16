import { aiAvailability, aiConfig } from './aiConfig';
import { demoAIProvider } from './demoAIProvider';
import { validateEvidenceAnalysis } from './aiSchemas';

function authHeaders() {
  const token = localStorage.getItem('landEvidenceToken');
  return { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) };
}

async function post(path, payload) {
  const response = await fetch(`${aiConfig.apiBaseUrl}${path}`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(payload),
  });
  if (response.status === 401) throw new Error('Your session has expired. Sign in again to use AI analysis.');
  if (response.status === 403) throw new Error('You are not authorized to analyze this record.');
  if (response.status === 408 || response.status === 504) throw new Error('AI analysis timed out. Your evidence was not changed.');
  if (response.status === 429) throw new Error('AI analysis is temporarily rate-limited. Try again shortly.');
  if (!response.ok) throw new Error('AI analysis could not be completed. Your evidence was not changed.');
  return response.json();
}

export const aiClient = {
  async analyzeEvidence(evidence) {
    const availability = aiAvailability();
    if (availability.mode === 'demo') return demoAIProvider.analyzeEvidence(evidence);
    if (!availability.available) throw new Error('AI provider not configured. Set the backend AI provider or explicitly enable DEMO AI.');
    const result = await post('/ai/evidence/analyze', { evidenceId: evidence.id, context: { type: evidence.type, source: evidence.source, district: evidence.district, date: evidence.date } });
    return validateEvidenceAnalysis(result.data || result);
  },
};

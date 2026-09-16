export const aiConfig = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '/api/v1',
  provider: import.meta.env.VITE_AI_PROVIDER || '',
  model: import.meta.env.VITE_AI_MODEL || '',
  demoMode: import.meta.env.VITE_AI_DEMO_MODE === 'true',
};

export function aiAvailability() {
  if (aiConfig.demoMode) return { available: true, mode: 'demo', label: 'DEMO AI' };
  if (aiConfig.provider) return { available: true, mode: 'api', label: 'AI SERVICE' };
  return { available: false, mode: 'unconfigured', label: 'AI NOT CONFIGURED' };
}

import { useState } from 'react';
import { aiClient } from '../services/ai/aiClient';

export function useAIAnalysis() {
  const [state, setState] = useState({ status: 'idle', result: null, error: null });
  const run = async evidence => {
    setState({ status: 'processing', result: null, error: null });
    try {
      const result = await aiClient.analyzeEvidence(evidence);
      setState({ status: 'completed', result, error: null });
      return result;
    } catch (error) {
      setState({ status: 'failed', result: null, error: error.message });
      return null;
    }
  };
  return { ...state, run, reset: () => setState({ status: 'idle', result: null, error: null }) };
}

# LandEvidence AI architecture

This repository is currently a React/Vite frontend. No Laravel application, database, queue worker, or provider credential is present in the workspace. The frontend therefore exposes a backend-ready contract and an explicitly gated demo provider; it does not claim that demo output is production inference.

## Request flow

```text
React feature -> aiClient -> Laravel /api/v1/ai/* -> domain AI service -> provider adapter -> structured result
```

Provider credentials must remain on the Laravel server. The browser only receives structured results and citations. The frontend reads `VITE_API_BASE_URL`, `VITE_AI_PROVIDER`, `VITE_AI_MODEL`, and the explicit `VITE_AI_DEMO_MODE` flag. It never reads an API key.

## Current frontend contract

`POST /api/v1/ai/evidence/analyze`

Request:

```json
{
  "evidenceId": "EV-1000",
  "context": {
    "type": "Survey",
    "source": "District Survey Authority",
    "district": "Lucknow",
    "date": "10 Apr 2025"
  }
}
```

Response can be wrapped in `data` and must validate against the evidence analysis schema:

```json
{
  "summary": "...",
  "classification": "...",
  "entities": ["EV-1000", "Lucknow"],
  "riskFlags": [],
  "inconsistencies": [],
  "recommendedReview": ["..."],
  "citations": [{ "label": "Source record", "reference": "EV-1000" }],
  "confidence": 0.82
}
```

Invalid responses are rejected before rendering.

## Recommended Laravel implementation

- `AIProviderInterface` and provider adapters under `app/Services/AI/`
- Domain services such as `EvidenceAIService`, `DocumentAIService`, `RiskAIService`, and `PolicyAIService`
- Form requests and authenticated, authorized controllers under `api/v1/ai`
- Queued jobs for document analysis/report generation
- `ai_analyses`, `ai_feedback`, `documents`, `document_chunks`, `embeddings`, and `ai_audit_logs` migrations
- Structured output validation and one correction retry before marking an analysis failed
- Rate limits, request timeouts, caching, input hashing, and source citation persistence
- Human-review actions stored in `ai_feedback`

## Demo mode

Set `VITE_AI_DEMO_MODE=true` only for local prototype demonstrations. The UI labels these results `DEMO AI`. With demo mode off and no backend provider configured, the UI shows `AI NOT CONFIGURED` and does not invent a result.

# TravelMate 360 AI

> **Your Journey. Your DNA. Reimagined by AI.**

TravelMate 360 AI is a demo-ready, intelligent tourism platform that transforms traveller preferences into adaptive, explainable journeys. It works immediately in Demo Mode, without API credentials.

## Product vision

Travel should feel personal even when plans change. TravelMate combines a living traveller profile with itinerary design, in-trip health signals, and transparent replanning so every adjustment still feels right for the traveller.

## Four-system intelligence architecture

1. **Travel DNA** — a preference model across culture, discovery, comfort, pace, and budget.
2. **AI Itinerary** — an explainable three-day route with match scores.
3. **Journey Pulse** — an experience health score built from experience, logistics, and spending signals.
4. **Dynamic Replanning** — three clearly differentiated, consequence-aware alternatives when disruption occurs.

The **AI Travel Twin** is the conversational layer that uses this context to explain trade-offs and help refine decisions.

## What is included

- Cinematic responsive landing experience and authentication-ready entry point
- Travel DNA onboarding/profile visualization with adaptive feedback
- Tokyo demo itinerary, timeline, map-ready route model, and saved-memory treatment
- Journey Pulse dashboard with an explicitly labelled simulated rain disruption
- Dynamic replanning: Best AI Match, Best Hidden Gem, and Best Budget Choice
- Accepting an alternative updates the itinerary, estimated costs, and Pulse score
- Trip budget dashboard, profile preferences, completed-journey memory, and Travel Twin panel
- Accessible controls, desktop/tablet/mobile layouts, and clear labels for Demo, Simulated, and Estimated data

## Demo Journey (3–5 minutes)

1. Select **Try demo** and meet Arjun, a Culture Seeker.
2. Inspect Travel DNA and the three-day Tokyo plan.
3. In Journey Pulse, select **Simulate a rainy disruption**.
4. Review the three alternatives and select one.
5. Observe the updated Day 2 itinerary, cost impact, route intent, and restored Pulse score.
6. Use **How was this change?** to demonstrate feedback updating Travel DNA.

All demo scenarios are deliberately labelled and do not claim live data.

## Technology

- Next.js 16 App Router + TypeScript
- React 19 and responsive CSS (accessible component patterns)
- Lucide icons
- Vercel-compatible deployment

## Architecture

`app/` contains routes and the interactive demo UI. Future integrations belong in `lib/ai`, `lib/maps`, `lib/weather`, `lib/travel-dna`, `lib/journey-pulse`, and `lib/replanning`; credentials must be accessed only in secure server-side routes/actions. `components/` is reserved for extracting reusable product modules as the application grows. A Supabase configuration directory can be added once a Supabase project is provisioned.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. No values are required to run Demo Mode.

## Environment and services

Copy `.env.example` to `.env.local`. Never commit it. Optional services are Supabase (authentication/PostgreSQL), an LLM provider, weather provider, map provider, and translation provider. If a credential is absent, use the labelled demo/fallback data rather than simulating a live service.

## Database setup

Create a Supabase project, place the public URL and anon key in `.env.local`, and keep service-role credentials server-only. Recommended tables: `profiles`, `travel_dna`, `journeys`, `itinerary_items`, `journey_events`, and `traveller_feedback`, all protected by row-level security tied to the authenticated user.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start local development |
| `npm run lint` | Run linting |
| `npm run typecheck` | Check TypeScript |
| `npm test` | Run demo logic tests |
| `npm run build` | Produce a production build |
| `npm start` | Serve the production build |

## Deployment

Deploy to Vercel after setting only the required environment variables in the project settings. The application remains usable without external credentials through Demo Mode.

## Privacy and responsible AI

Travel DNA is sensitive preference data. Collect the minimum necessary, request consent, allow editing/deletion, and never send service-role keys or private profile data to the browser. AI recommendations should identify their evidence, uncertainty, data source (Live, Estimated, AI-Generated, or Demo), and allow traveller override.

## Project structure

```text
app/                 Next.js routes, layout, and UI
tests/               Automated demo checks
.env.example         Safe environment-variable template
```

## Known limitations

- This repository intentionally uses Demo Mode until external providers are configured.
- Production Supabase authentication, live maps, weather, and server-side LLM routes require their respective credentials and implementation wiring.
- Map rendering is represented by route-aware itinerary content rather than a configured commercial map SDK.

## Future improvements

Add Supabase schema/migrations and RLS policies, live integration adapters with rate limits, a provider-backed map view, multilingual content, offline support, and end-to-end tests.

export type Choice = 'match' | 'gem' | 'budget';

export type Alternative = {
  name: string;
  cost: number;
  score: number;
  note: string;
};

export const demoAlternatives: Record<Choice, Alternative> = {
  match: { name: 'Mori Art Museum + Roppongi walk', cost: 42, score: 84, note: 'Indoor art and a covered food hall preserve your culture-first pace.' },
  gem: { name: 'Kiyosumi gardens + local coffee', cost: 28, score: 82, note: 'A quiet, rain-softened neighborhood experience away from crowds.' },
  budget: { name: 'Tokyo Metropolitan Government Building', cost: 8, score: 79, note: 'Free city views, simple transit, and room left in your food budget.' },
};

export const demoDimensions = [
  { label: 'Culture', value: 92, color: '#ff6b4a' },
  { label: 'Discovery', value: 86, color: '#f6bd60' },
  { label: 'Comfort', value: 72, color: '#80b918' },
  { label: 'Pace', value: 64, color: '#6c63ff' },
  { label: 'Budget', value: 78, color: '#00a6a6' },
] as const;

export function isChoice(value: unknown): value is Choice {
  return value === 'match' || value === 'gem' || value === 'budget';
}

export function replanDemoJourney(choice: Choice) {
  const alternative = demoAlternatives[choice];
  return {
    source: 'Demo Data' as const,
    alternative,
    itinerary: { day: 2, replaces: 'Tokyo City View', title: alternative.name },
    budget: { estimatedTotal: 1240 + alternative.cost - 35, change: alternative.cost - 35, currency: 'JPY' },
    pulse: { score: alternative.score, status: 'Recovered' },
    explanation: `${alternative.name} replaces Tokyo City View because ${alternative.note}`,
  };
}

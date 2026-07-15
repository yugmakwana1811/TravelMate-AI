import { demoAlternatives, demoDimensions } from '@/lib/travel';
import { json } from '@/lib/server/http';

export const dynamic = 'force-dynamic';

export async function GET() {
  return json({
    source: 'Demo Data',
    traveller: { name: 'Arjun', archetype: 'Curious Culture Seeker', destination: 'Tokyo', days: 3 },
    travelDna: demoDimensions,
    alternatives: demoAlternatives,
    pulse: { score: 91, status: 'In sync' },
  });
}

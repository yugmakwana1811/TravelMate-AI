import { isChoice, replanDemoJourney } from '@/lib/travel';
import { json, readJson } from '@/lib/server/http';

export async function POST(request: Request) {
  try {
    const body = await readJson(request);
    if (!body || typeof body !== 'object' || !isChoice((body as { choice?: unknown }).choice)) {
      return json({ error: 'Select a valid replanning option.' }, 400);
    }
    return json(replanDemoJourney((body as { choice: 'match' | 'gem' | 'budget' }).choice));
  } catch {
    return json({ error: 'Unable to process this request.' }, 400);
  }
}

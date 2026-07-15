import { json, readJson } from '@/lib/server/http';

export async function POST(request: Request) {
  try {
    const body = await readJson(request);
    const rating = body && typeof body === 'object' ? (body as { rating?: unknown }).rating : undefined;
    if (rating !== 'positive' && rating !== 'negative') return json({ error: 'Feedback must be positive or negative.' }, 400);
    // Demo Mode deliberately does not persist personal data. A production adapter writes only to the authenticated user record.
    return json({ source: 'Demo Data', accepted: true, travelDnaChange: rating === 'positive' ? { comfort: 2 } : { pace: -1 } });
  } catch {
    return json({ error: 'Unable to process this request.' }, 400);
  }
}

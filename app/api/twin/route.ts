import { json, readJson } from '@/lib/server/http';

export async function POST(request: Request) {
  try {
    const body = await readJson(request);
    const message = body && typeof body === 'object' ? (body as { message?: unknown }).message : undefined;
    if (typeof message !== 'string' || message.trim().length < 2 || message.length > 500) return json({ error: 'Enter a message between 2 and 500 characters.' }, 400);
    return json({ source: 'Demo Data', reply: 'I would keep your culture-first pace and choose an indoor, local alternative if the weather turns.' });
  } catch {
    return json({ error: 'Unable to process this request.' }, 400);
  }
}

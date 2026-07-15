/** Server-only configuration. Never return these values from an API response. */
export const integrations = {
  supabaseEnabled: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
  aiEnabled: Boolean(process.env.OPENAI_API_KEY),
  weatherEnabled: Boolean(process.env.WEATHER_API_KEY),
  mapsEnabled: Boolean(process.env.NEXT_PUBLIC_MAP_PROVIDER_TOKEN),
} as const;

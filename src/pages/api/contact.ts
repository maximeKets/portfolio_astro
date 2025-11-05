import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

const json = (data: unknown, status = 200) => new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
const bad = (message: string, status = 400) => json({ message }, status);

export const POST: APIRoute = async ({ request }) => {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return bad('Invalid JSON', 400);
  }

  const { name, email, message, company, t } = body || {};

  // Basic validations
  if (!name || !email || !message) return bad('Missing required fields', 400);
  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') return bad('Invalid field types', 400);
  if (!/.+@.+\..+/.test(email)) return bad('Invalid email', 400);
  if (company && String(company).trim() !== '') return bad('Spam detected', 400); // honeypot
  if (typeof t === 'number' && t < 5) return bad('Too fast. Please take a moment before sending.', 429);

  const SUPABASE_URL = import.meta.env.SUPABASE_URL as string | undefined;
  const SUPABASE_SERVICE_ROLE_KEY = import.meta.env.SUPABASE_SERVICE_ROLE_KEY as string | undefined;

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return json({ code: 'UNCONFIGURED', message: 'Contact database is not configured. Use the email link instead.' }, 503);
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

  const headers = request.headers;
  const ip = headers.get('x-forwarded-for')?.split(',')[0]?.trim() || headers.get('cf-connecting-ip') || 'unknown';
  const userAgent = headers.get('user-agent') || 'unknown';

  try {
    const { error } = await supabase.from('contact_messages').insert({
      name,
      email,
      message,
      time_on_page: typeof t === 'number' ? t : null,
      ip,
      user_agent: userAgent,
    });

    if (error) {
      console.error('[contact] supabase insert error', error);
      return bad('Failed to save message. Please try again later.', 502);
    }

    return json({ ok: true });
  } catch (e: any) {
    console.error('[contact] Error', e?.message || e);
    return bad('Unexpected error. Please try again later.', 500);
  }
};

export const GET: APIRoute = async () => json({ ok: true });

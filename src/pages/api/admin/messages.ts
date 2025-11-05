import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

const json = (data: unknown, status = 200) => new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
const err = (message: string, status = 400) => json({ message }, status);

export const GET: APIRoute = async ({ request }) => {
  const token = request.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
  
  // Simple token validation (in production use proper JWT verification)
  if (!token || token.length < 10) {
    return err('Unauthorized', 401);
  }

  const SUPABASE_URL = import.meta.env.SUPABASE_URL as string | undefined;
  const SUPABASE_SERVICE_ROLE_KEY = import.meta.env.SUPABASE_SERVICE_ROLE_KEY as string | undefined;
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return err('Database not configured', 503);
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

  const url = new URL(request.url);
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '50', 10), 200);
  const offset = Math.max(parseInt(url.searchParams.get('offset') || '0', 10), 0);

  const { data, error, count } = await supabase
    .from('contact_messages')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    console.error('[admin/messages] supabase error', error);
    return err('Failed to fetch messages', 502);
  }

  return json({ data, count, limit, offset });
};

import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

const json = (data: unknown, status = 200) => new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request }) => {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }

  const email = body?.username || body?.email; 
  const password = body?.password;

  if (!email || !password) {
    return json({ error: 'Email and password are required' }, 400);
  }

  const SUPABASE_URL = import.meta.env.SUPABASE_URL as string | undefined;
  const SUPABASE_ANON_KEY = import.meta.env.SUPABASE_ANON_KEY as string | undefined;

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return json({ error: 'Server misconfiguration: Supabase not setup' }, 503);
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { 
    auth: { persistSession: false } 
  });

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error || !data.session) {
    return json({ error: 'Invalid credentials' }, 401);
  }

  return json({ 
    success: true, 
    token: data.session.access_token 
  });
};

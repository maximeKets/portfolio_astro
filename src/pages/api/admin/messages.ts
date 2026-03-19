import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

const json = (data: unknown, status = 200) => new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
const err = (message: string, status = 400) => json({ message }, status);

export const GET: APIRoute = async ({ request }) => {
  const token = request.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
  
  if (!token) {
    return err('Unauthorized: Missing token', 401);
  }

  const SUPABASE_URL = import.meta.env.SUPABASE_URL as string | undefined;
  const SUPABASE_ANON_KEY = import.meta.env.SUPABASE_ANON_KEY as string | undefined;
  
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return err('Database not configured', 503);
  }

  // 1. Initialiser Supabase en attachant le token JWT de l'utilisateur.
  // Cela permet à Supabase d'appliquer les règles de sécurité RLS propres à cet utilisateur.
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { 
    auth: { persistSession: false },
    global: {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  });

  // 2. Vérifier que le JWT est bien valide et n'a pas expiré selon Supabase Auth.
  const { data: { user }, error: authError } = await supabase.auth.getUser(token);
  if (authError || !user) {
    console.error('[admin/messages] auth error', authError);
    return err('Unauthorized: Invalid or expired token', 401);
  }

  const url = new URL(request.url);
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '50', 10), 200);
  const offset = Math.max(parseInt(url.searchParams.get('offset') || '0', 10), 0);

  // 3. Récupération des données (Maintenant soumise aux politiques de sécurité RLS !).
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

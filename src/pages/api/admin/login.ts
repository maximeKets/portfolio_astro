import type { APIRoute } from 'astro';

const json = (data: unknown, status = 200) => new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request }) => {
  const ADMIN_USERNAME = import.meta.env.ADMIN_USERNAME as string | undefined;
  const ADMIN_PASSWORD = import.meta.env.ADMIN_PASSWORD as string | undefined;

  if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
    return json({ error: 'Admin credentials not configured' }, 503);
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }

  const { username, password } = body || {};

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // Generate a simple session token (in production use JWT or secure sessions)
    const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');
    return json({ success: true, token });
  }

  return json({ error: 'Invalid credentials' }, 401);
};

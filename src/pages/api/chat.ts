import type { APIRoute } from 'astro';
import Groq from 'groq-sdk';

const groq = new Groq({ apiKey: import.meta.env.GROQ_API_KEY });

type ErrorCode =
  | 'CONFIG_ERROR'
  | 'INVALID_JSON'
  | 'INVALID_MESSAGES'
  | 'INVALID_RESPONSE'
  | 'AI_SERVICE_ERROR'
  | 'TIMEOUT'
  | 'INTERNAL_ERROR';

const ts = () => new Date().toISOString();
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
const err = (code: ErrorCode, message: string, status: number) =>
  json({ code, message, timestamp: ts() }, status);

export const POST: APIRoute = async ({ request }) => {
  // Fast-fail if not configured
  if (!import.meta.env.GROQ_API_KEY) {
    console.error('[Chat API] Missing GROQ_API_KEY');
    return err('CONFIG_ERROR', 'Chat service is not configured. Please contact the site administrator.', 503);
  }

  // Parse body
  let body: any;
  try {
    body = await request.json();
  } catch {
    return err('INVALID_JSON', 'Invalid request format', 400);
  }

  const messages = body?.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return err('INVALID_MESSAGES', 'Messages array is required and must not be empty', 400);
  }

  try {
    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages,
      temperature: 0.7,
      max_tokens: 500,
    });

    const content = completion.choices?.[0]?.message?.content;
    if (!content) {
      console.error('[Chat API] Invalid response from Groq API');
      return err('INVALID_RESPONSE', 'Received invalid response from AI service', 500);
    }

    return json({ message: content }, 200);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';

    // Groq-specific error
    if (error instanceof Groq.APIError) {
      return err(
        'AI_SERVICE_ERROR',
        import.meta.env.DEV ? `AI service error: ${message}` : 'The AI service is temporarily unavailable',
        (error as any).status || 500
      );
    }

    // Timeout
    if (message.includes('timeout')) {
      return err('TIMEOUT', 'Request timed out. Please try again.', 504);
    }

    // Generic
    console.error('[Chat API] Error:', message);
    return err(
      'INTERNAL_ERROR',
      import.meta.env.DEV ? message : 'An unexpected error occurred. Please try again later.',
      500
    );
  }
};

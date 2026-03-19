import type { APIRoute } from 'astro';
import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

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

// Schema definitions
const record_user_details_json = {
  type: "function",
  function: {
    name: "record_user_details",
    description: "Use this tool to record that a user is interested in being in touch and provided an email address",
    parameters: {
      type: "object",
      properties: {
        email: { type: "string", description: "The email address of this user" },
        name: { type: "string", description: "The user's name, if they provided it" },
        notes: { type: "string", description: "Any additional information about the conversation that's worth recording to give context" }
      },
      required: ["email"],
      additionalProperties: false
    }
  }
};

const record_unknown_question_json = {
  type: "function",
  function: {
    name: "record_unknown_question",
    description: "Always use this tool to record any question that couldn't be answered as you didn't know the answer",
    parameters: {
      type: "object",
      properties: {
        question: { type: "string", description: "The question that couldn't be answered" }
      },
      required: ["question"],
      additionalProperties: false
    }
  }
};

const tools = [record_user_details_json, record_unknown_question_json];

// Helper to handle push notifications
async function pushNotification(text: string) {
  const token = import.meta.env.PUSHOVER_TOKEN || process.env.PUSHOVER_TOKEN;
  const user = import.meta.env.PUSHOVER_USER || process.env.PUSHOVER_USER;
  
  if (!token || !user) {
    console.error('[Chat API] Missing PUSHOVER_TOKEN or PUSHOVER_USER');
    return;
  }

  try {
    const formData = new URLSearchParams();
    formData.append('token', token);
    formData.append('user', user);
    formData.append('message', text);

    await fetch('https://api.pushover.net/1/messages.json', {
      method: 'POST',
      body: formData
    });
  } catch (e) {
    console.error('[Chat API] Error sending push notification:', e);
  }
}

async function handleToolCall(toolCall: any) {
  const toolName = toolCall.function.name;
  let argumentsObj: any = {};
  try {
    argumentsObj = JSON.parse(toolCall.function.arguments);
  } catch(e) {}

  console.log(`[Chat API] Tool called: ${toolName}`);
  
  let result = {};
  if (toolName === 'record_user_details') {
    const { email, name = "Name not provided", notes = "not provided" } = argumentsObj;
    await pushNotification(`Recording ${name} with email ${email} and notes ${notes}`);
    result = { recorded: "ok" };
  } else if (toolName === 'record_unknown_question') {
    const { question } = argumentsObj;
    await pushNotification(`Recording ${question}`);
    result = { recorded: "ok" };
  }

  return {
    role: "tool",
    content: JSON.stringify(result),
    tool_call_id: toolCall.id
  };
}

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY;
  const model = import.meta.env.OPENAI_MODEL || process.env.OPENAI_MODEL || 'gpt-5.4-nano-2026-03-17';
  if (!apiKey) {
    console.error('[Chat API] Missing OPENAI_API_KEY');
    return err('CONFIG_ERROR', 'Chat service is not configured. Please contact the site administrator.', 503);
  }

  const openai = new OpenAI({ apiKey });

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
    let done = false;
    let currentMessages = [...messages];
    
    // Inject CV and summary text if needed
    for (const msg of currentMessages) {
      if (msg.role === 'system' && typeof msg.content === 'string') {
        let cvText = '';
        let summaryText = '';
        
        try {
          const cvPath = path.join(process.cwd(), 'src', 'assets', 'cv.md');
          if (fs.existsSync(cvPath)) {
            cvText = fs.readFileSync(cvPath, 'utf-8');
          }
        } catch (e) {
          console.error('[Chat API] Error reading CV text:', e);
        }

        msg.content = msg.content
          .replace('{{CV_CONTENT}}', cvText);
      }
    }

    let finalContent = null;

    while (!done) {
      const completion = await openai.chat.completions.create({
        model: model,
        messages: currentMessages,
        tools: tools as any
      });
      
      const choice = completion.choices?.[0];
      
      if (!choice) {
        throw new Error('Invalid response from OpenAI');
      }

      if (choice.finish_reason === 'tool_calls') {
        const assistantMessage = choice.message;
        currentMessages.push(assistantMessage);

        const toolCalls = assistantMessage.tool_calls || [];
        for (const toolCall of toolCalls) {
          const toolResult = await handleToolCall(toolCall);
          currentMessages.push(toolResult);
        }
      } else {
        finalContent = choice.message?.content;
        done = true;
      }
    }

    if (!finalContent) {
      return err('INVALID_RESPONSE', 'Received empty response from AI service', 500);
    }

    return json({ message: finalContent }, 200);

  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Chat API] Error:', message);
    return err('INTERNAL_ERROR', import.meta.env.DEV ? message : 'An unexpected error occurred. Please try again later.', 500);
  }
};

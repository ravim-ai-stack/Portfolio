import { NextRequest, NextResponse } from "next/server";

import { buildSystemPrompt } from "@/lib/portfolio-context";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const MAX_HISTORY_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;

function parseHistory(body: unknown): ChatMessage[] {
  if (!body || typeof body !== "object" || !Array.isArray((body as { messages?: unknown }).messages)) {
    return [];
  }

  const raw = (body as { messages: unknown[] }).messages;

  return raw
    .filter(
      (m): m is ChatMessage =>
        !!m &&
        typeof m === "object" &&
        (m as ChatMessage).role !== undefined &&
        ((m as ChatMessage).role === "user" || (m as ChatMessage).role === "assistant") &&
        typeof (m as ChatMessage).content === "string"
    )
    .slice(-MAX_HISTORY_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) }));
}

async function callDatabricks(messages: { role: string; content: string }[]) {
  const host = process.env.DATABRICKS_HOST;
  const token = process.env.DATABRICKS_TOKEN;
  const endpoint = process.env.DATABRICKS_MODEL_ENDPOINT;

  if (!host || !token || !endpoint) {
    throw new Error(
      "Databricks is not configured. Set DATABRICKS_HOST, DATABRICKS_TOKEN, and DATABRICKS_MODEL_ENDPOINT in .env.local."
    );
  }

  const url = `${host.replace(/\/$/, "")}/serving-endpoints/${endpoint}/invocations`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      messages,
      max_tokens: 500,
      temperature: 0.2,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Databricks request failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  const reply = data?.choices?.[0]?.message?.content;

  if (typeof reply !== "string" || !reply.trim()) {
    throw new Error("Databricks returned an empty response.");
  }

  return reply.trim();
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const history = parseHistory(body);
  if (history.length === 0) {
    return NextResponse.json({ error: "No message provided." }, { status: 400 });
  }

  try {
    const reply = await callDatabricks([{ role: "system", content: buildSystemPrompt() }, ...history]);
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      { error: "Something went wrong reaching the assistant. Please try again or use the contact section." },
      { status: 502 }
    );
  }
}

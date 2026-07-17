import { NextRequest } from "next/server";
import fs from "fs/promises";
import path from "path";

const FILE = path.join(process.cwd(), "waitlist.json");

async function readWaitlist(): Promise<{ email: string; joinedAt: string }[]> {
  try {
    const raw = await fs.readFile(FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!email || !email.includes("@")) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  const list = await readWaitlist();

  if (list.some((entry) => entry.email === email)) {
    return Response.json({ error: "Already on the list" }, { status: 409 });
  }

  list.push({ email, joinedAt: new Date().toISOString() });
  await fs.writeFile(FILE, JSON.stringify(list, null, 2));

  return Response.json({ ok: true }, { status: 201 });
}

export async function GET() {
  const list = await readWaitlist();
  return Response.json(list);
}

import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { randomBytes } from "crypto";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email ?? "").trim().toLowerCase();

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 }
      );
    }

    const result = await sql`
      SELECT id
      FROM clients
      WHERE email = ${email}
      LIMIT 1
    `;

    if (result.length === 0) {
      return NextResponse.json({
        success: true,
        message: "If this email exists, a reset link has been prepared."
      });
    }

    const client = result[0];
    const token = randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 1000 * 60 * 30);

    await sql`
      INSERT INTO password_resets (client_id, token, expires_at)
      VALUES (${client.id}, ${token}, ${expiresAt.toISOString()})
    `;

    return NextResponse.json({
      success: true,
      message: `Reset prepared. Temporary test link: /reset-password?token=${token}`
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to prepare reset." },
      { status: 500 }
    );
  }
}

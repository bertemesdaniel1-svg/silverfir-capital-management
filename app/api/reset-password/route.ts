import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { hashPassword } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const token = String(body.token ?? "").trim();
    const newPassword = String(body.newPassword ?? "").trim();

    if (!token || !newPassword) {
      return NextResponse.json(
        { success: false, error: "Missing token or password." },
        { status: 400 }
      );
    }

    const rows = await sql`
      SELECT id, client_id, expires_at
      FROM password_resets
      WHERE token = ${token}
      LIMIT 1
    `;

    if (rows.length === 0) {
      return NextResponse.json(
        { success: false, error: "Invalid reset token." },
        { status: 400 }
      );
    }

    const reset = rows[0];
    const expiresAt = new Date(reset.expires_at);

    if (expiresAt.getTime() < Date.now()) {
      return NextResponse.json(
        { success: false, error: "Reset token has expired." },
        { status: 400 }
      );
    }

    const newHash = await hashPassword(newPassword);

    await sql`
      UPDATE clients
      SET password_hash = ${newHash}
      WHERE id = ${reset.client_id}
    `;

    await sql`
      DELETE FROM password_resets
      WHERE id = ${reset.id}
    `;

    return NextResponse.json({
      success: true,
      message: "Password updated successfully."
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Reset failed." },
      { status: 500 }
    );
  }
}

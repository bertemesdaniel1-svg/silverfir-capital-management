import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sql } from "@/lib/db";
import {
  getClientFromSessionToken,
  verifyPassword,
  hashPassword,
} from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const currentPassword = String(body.currentPassword ?? "").trim();
    const newPassword = String(body.newPassword ?? "").trim();
    const confirmPassword = String(body.confirmPassword ?? "").trim();

    if (!currentPassword || !newPassword || !confirmPassword) {
      return NextResponse.json(
        { success: false, error: "Please fill all password fields." },
        { status: 400 }
      );
    }

    if (newPassword !== confirmPassword) {
      return NextResponse.json(
        { success: false, error: "New passwords do not match." },
        { status: 400 }
      );
    }

    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("sfcm_session")?.value;

    if (!sessionToken) {
      return NextResponse.json(
        { success: false, error: "Not authenticated." },
        { status: 401 }
      );
    }

    const client = await getClientFromSessionToken(sessionToken);

    if (!client) {
      return NextResponse.json(
        { success: false, error: "Invalid session." },
        { status: 401 }
      );
    }

    const rows = await sql`
      SELECT id, password_hash
      FROM clients
      WHERE id = ${client.id}
      LIMIT 1
    `;

    if (rows.length === 0) {
      return NextResponse.json(
        { success: false, error: "Client not found." },
        { status: 404 }
      );
    }

    const dbClient = rows[0];
    const storedPassword = String(dbClient.password_hash ?? "");

    let currentPasswordOk = false;

    if (
      storedPassword.startsWith("$2a$") ||
      storedPassword.startsWith("$2b$") ||
      storedPassword.startsWith("$2y$")
    ) {
      currentPasswordOk = await verifyPassword(currentPassword, storedPassword);
    } else {
      currentPasswordOk = currentPassword === storedPassword;
    }

    if (!currentPasswordOk) {
      return NextResponse.json(
        { success: false, error: "Current password is incorrect." },
        { status: 400 }
      );
    }

    const newHash = await hashPassword(newPassword);

    await sql`
      UPDATE clients
      SET password_hash = ${newHash}
      WHERE id = ${client.id}
    `;

    return NextResponse.json({
      success: true,
      message: "Password updated successfully.",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Password update failed." },
      { status: 500 }
    );
  }
}

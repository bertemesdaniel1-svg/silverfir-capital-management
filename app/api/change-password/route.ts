import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sql } from "@/lib/db";
import { getClientFromSessionToken } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("sfcm_session")?.value;

    if (!sessionToken) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const client = await getClientFromSessionToken(sessionToken);

    if (!client) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const currentPassword = String(body.currentPassword ?? "").trim();
    const newPassword = String(body.newPassword ?? "").trim();
    const confirmPassword = String(body.confirmPassword ?? "").trim();

    if (!currentPassword || !newPassword || !confirmPassword) {
      return NextResponse.json(
        { success: false, error: "Please fill in all password fields." },
        { status: 400 }
      );
    }

    if (newPassword.length < 6) {
      return NextResponse.json(
        { success: false, error: "New password must be at least 6 characters." },
        { status: 400 }
      );
    }

    if (newPassword !== confirmPassword) {
      return NextResponse.json(
        { success: false, error: "New passwords do not match." },
        { status: 400 }
      );
    }

    const result = await sql`
      SELECT id, password_hash
      FROM clients
      WHERE id = ${client.id}
      LIMIT 1
    `;

    const dbClient = result[0];

    if (!dbClient) {
      return NextResponse.json(
        { success: false, error: "Client not found." },
        { status: 404 }
      );
    }

    if (dbClient.password_hash !== currentPassword) {
      return NextResponse.json(
        { success: false, error: "Current password is incorrect." },
        { status: 401 }
      );
    }

    await sql`
      UPDATE clients
      SET password_hash = ${newPassword}
      WHERE id = ${client.id}
    `;

    return NextResponse.json({
      success: true,
      message: "Password updated successfully.",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Server error." },
      { status: 500 }
    );
  }
}

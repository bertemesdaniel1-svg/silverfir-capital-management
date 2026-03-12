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

    const firstName = String(body.firstName ?? "").trim();
    const lastName = String(body.lastName ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const tvUsername = String(body.tvUsername ?? "").trim();

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const existing = await sql`
      SELECT id
      FROM clients
      WHERE email = ${email}
        AND id <> ${client.id}
      LIMIT 1
    `;

    if (existing.length > 0) {
      return NextResponse.json(
        { success: false, error: "This email is already in use." },
        { status: 409 }
      );
    }

    await sql`
  UPDATE clients
  SET
    first_name = ${firstName},
    last_name = ${lastName},
    email = ${email},
    tv_username = ${tvUsername}
  WHERE id = ${client.id}
`;

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully."
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to update profile." },
      { status: 500 }
    );
  }
}

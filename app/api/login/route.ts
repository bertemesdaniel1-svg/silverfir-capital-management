import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email ?? "").trim().toLowerCase();
    const password = String(body.password ?? "").trim();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Missing email or password." },
        { status: 400 }
      );
    }

    const result = await sql`
      SELECT id, first_name, last_name, email, password_hash, client_secret, subscription_status
      FROM clients
      WHERE email = ${email}
      LIMIT 1
    `;

    const client = result[0];

    if (!client) {
      return NextResponse.json(
        { success: false, error: "Client not found." },
        { status: 401 }
      );
    }

    if (client.password_hash !== password) {
      return NextResponse.json(
        { success: false, error: "Wrong password." },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      client: {
        id: client.id,
        first_name: client.first_name,
        last_name: client.last_name,
        email: client.email,
        client_secret: client.client_secret,
        subscription_status: client.subscription_status
      }
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Server error." },
      { status: 500 }
    );
  }
}

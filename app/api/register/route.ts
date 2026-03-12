import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { generateClientSecret, hashPassword } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const firstName = String(body.firstName ?? "").trim();
    const lastName = String(body.lastName ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const tvUsername = String(body.tvUsername ?? "").trim();
    const password = String(body.password ?? "").trim();
    const chosenCode = String(body.chosenCode ?? "").trim();

    if (!firstName || !lastName || !email || !password || !chosenCode) {
      return NextResponse.json(
        { success: false, error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    if (!/^\d{4}$/.test(chosenCode)) {
      return NextResponse.json(
        { success: false, error: "Your client code must be exactly 4 digits." },
        { status: 400 }
      );
    }

    const existing = await sql`
      SELECT id
      FROM clients
      WHERE email = ${email}
      LIMIT 1
    `;

    if (existing.length > 0) {
      return NextResponse.json(
        { success: false, error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    let clientSecret = generateClientSecret(chosenCode);

    while (true) {
      const secretExists = await sql`
        SELECT id
        FROM clients
        WHERE client_secret = ${clientSecret}
        LIMIT 1
      `;

      if (secretExists.length === 0) break;
      clientSecret = generateClientSecret(chosenCode);
    }

    const passwordHash = await hashPassword(password);

    await sql`
      INSERT INTO clients (
        first_name,
        last_name,
        email,
        password_hash,
        tv_username,
        client_secret,
        subscription_status,
        payment_status,
        is_approved
      )
      VALUES (
        ${firstName},
        ${lastName},
        ${email},
        ${passwordHash},
        ${tvUsername},
        ${clientSecret},
        ${"inactive"},
        ${"unpaid"},
        ${false}
      )
    `;

    return NextResponse.json({
      success: true,
      message: "Registration successful. You can now sign in after activation."
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Registration failed." },
      { status: 500 }
    );
  }
}

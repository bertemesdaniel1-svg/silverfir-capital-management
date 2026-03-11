import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { createSession } from "@/lib/auth";

export async function POST(request: Request) {

  const body = await request.json();

  const email = body.email;
  const password = body.password;

  const result = await sql`
    SELECT *
    FROM clients
    WHERE email = ${email}
    LIMIT 1
  `;

  const client = result[0];

  if (!client) {
    return NextResponse.json({
      success: false,
      error: "Client not found"
    });
  }

  if (client.password_hash !== password) {
    return NextResponse.json({
      success: false,
      error: "Wrong password"
    });
  }

  const session = await createSession(client.id);

  const response = NextResponse.json({
    success: true
  });

  response.cookies.set(
    "sfcm_session",
    session.token,
    {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      expires: session.expiresAt
    }
  );

  return response;

}

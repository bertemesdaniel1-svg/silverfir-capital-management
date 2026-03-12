import { createSession, verifyPassword, hashPassword } from "@/lib/auth";
import { NextResponse } from "next/server";
import { sql } from "@/lib/db";


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

const storedPassword = String(client.password_hash ?? "");
let passwordOk = false;

if (
  storedPassword.startsWith("$2a$") ||
  storedPassword.startsWith("$2b$") ||
  storedPassword.startsWith("$2y$")
) {
  passwordOk = await verifyPassword(password, storedPassword);
} else {
  passwordOk = password === storedPassword;

  if (passwordOk) {
    const newHash = await hashPassword(password);

    await sql`
      UPDATE clients
      SET password_hash = ${newHash}
      WHERE id = ${client.id}
    `;
  }
}

if (!passwordOk) {
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

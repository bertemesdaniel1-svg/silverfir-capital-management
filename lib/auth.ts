import { randomBytes } from "crypto";
import { sql } from "@/lib/db";

export function generateSessionToken() {
  return randomBytes(32).toString("hex");
}

export async function createSession(clientId: number) {
  const token = generateSessionToken();

  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 30);

  await sql`
    INSERT INTO sessions (client_id, session_token, expires_at)
    VALUES (${clientId}, ${token}, ${expiresAt.toISOString()})
  `;

  return {
    token,
    expiresAt
  };
}

export async function getClientFromSessionToken(token: string) {
  const result = await sql`
    SELECT
      c.id,
      c.first_name,
      c.last_name,
      c.email,
      c.client_secret,
      c.subscription_status,
      c.payment_status,
      c.is_approved
    FROM sessions s
    JOIN clients c ON c.id = s.client_id
    WHERE s.session_token = ${token}
      AND s.expires_at > NOW()
    LIMIT 1
  `;

  return result[0] ?? null;
}

export async function deleteSession(token: string) {

  await sql`
    DELETE FROM sessions
    WHERE session_token = ${token}
  `;

}

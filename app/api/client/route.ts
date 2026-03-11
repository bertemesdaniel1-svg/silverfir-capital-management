import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET() {
  try {

    const result = await sql`
      SELECT id, first_name, last_name, email, client_secret, subscription_status
      FROM clients
      LIMIT 1
    `;

    const client = result[0];

    return NextResponse.json({
      success: true,
      client
    });

  } catch (err) {

    return NextResponse.json({
      success: false
    });

  }
}

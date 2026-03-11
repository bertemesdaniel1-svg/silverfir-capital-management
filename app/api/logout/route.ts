import { NextResponse } from "next/server";
import { deleteSession } from "@/lib/auth";

export async function POST(request: Request) {

  const cookie = request.headers.get("cookie");

  const token = cookie
    ?.split("; ")
    .find(c => c.startsWith("sfcm_session="))
    ?.split("=")[1];

  if (token) {
    await deleteSession(token);
  }

  const response = NextResponse.redirect(
    new URL("/login", request.url)
  );

  response.cookies.set(
    "sfcm_session",
    "",
    {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      expires: new Date(0)
    }
  );

  return response;

}

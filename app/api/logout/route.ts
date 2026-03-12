import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { deleteSession } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("sfcm_session")?.value;

    if (token) {
      await deleteSession(token);
    }

    const response = NextResponse.redirect(new URL("/", request.url));

    response.cookies.set("sfcm_session", "", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      expires: new Date(0)
    });

    return response;
  } catch {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

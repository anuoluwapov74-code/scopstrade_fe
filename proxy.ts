import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(_request: NextRequest) {
  return NextResponse.redirect("https://scopstrades.com", { status: 301 });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

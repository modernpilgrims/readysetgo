import { NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)

  const code = searchParams.get("code")

  if (code) {
    const supabase = await createServerClient()

    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      console.error("[auth/callback] exchange error:", error)
      return NextResponse.redirect(new URL("/auth/error", origin))
    }

    console.log("✅ AUTH SUCCESS")

    return NextResponse.redirect(new URL("/app", origin))
  }

  return NextResponse.redirect(new URL("/", origin))
}
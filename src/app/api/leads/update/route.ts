import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"

type LeadStatus = "new" | "in_progress" | "done" | "rejected"

const ALLOWED_STATUSES: LeadStatus[] = [
  "new",
  "in_progress",
  "done",
  "rejected",
]

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { id, status } = body as {
      id?: string
      status?: string
    }

    if (!id || !status) {
      return NextResponse.json(
        { error: "Missing id or status" },
        { status: 400 }
      )
    }

    if (!ALLOWED_STATUSES.includes(status as LeadStatus)) {
      return NextResponse.json(
        { error: "Invalid status" },
        { status: 400 }
      )
    }

    const supabase = createAdminClient()

    const payload = {
      status,
      updated_at: new Date().toISOString(),
    }

    const { error } = await supabase
      .from("leads")
      .update(payload as any)
      .eq("id", id)
    if (error) {
      console.error("Update error:", error)

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }
    return NextResponse.json({ success: true })
  } catch (e) {
    console.error("API error:", e)

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}
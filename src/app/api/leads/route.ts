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
        const { id, status } = await req.json()

        if (!id || !status) {
            return NextResponse.json({ error: "Missing id or status" }, { status: 400 })
        }

        if (!ALLOWED_STATUSES.includes(status)) {
            return NextResponse.json({ error: "Invalid status" }, { status: 400 })
        }

        const supabase = createAdminClient()

        const { error } = await supabase
            .from("leads")
            .update({
                status,
                updated_at: new Date().toISOString(),
            })
            .eq("id", id)

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({ success: true })

    } catch {
        return NextResponse.json({ error: "Server error" }, { status: 500 })
    }
}
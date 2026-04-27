import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"

export async function POST(req: Request) {
    try {
        const body = await req.json()

        const userId = body.userId
        const leadId = body.leadId

        if (!userId || !leadId) {
            return NextResponse.json(
                { error: "Missing userId or leadId" },
                { status: 400 }
            )
        }

        const supabase = createAdminClient()
        const db = supabase as any

        const { error } = await db
            .from("leads")
            .update({
                user_id: userId,
            })
            .eq("id", leadId)

        if (error) {
            console.error("Attach error:", error)
            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            )
        }

        return NextResponse.json({ success: true })
    } catch (e) {
        console.error("Attach user error:", e)
        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        )
    }
}
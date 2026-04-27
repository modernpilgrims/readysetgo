import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const userId = body.userId

        if (!userId) {
            return NextResponse.json({ error: "No userId" }, { status: 400 })
        }

        const supabase = createAdminClient()

        // 💀 отключаем типизацию полностью
        const db = supabase as any

        // 1. найти последний лид без пользователя
        const { data: lastLead, error: findError } = await db
            .from("leads")
            .select("id")
            .is("user_id", null)
            .order("created_at", { ascending: false })
            .limit(1)
            .single()

        if (findError || !lastLead) {
            return NextResponse.json({ success: true })
        }

        // 2. привязать юзера к лиду
        const { error: updateError } = await db
            .from("leads")
            .update({ user_id: userId })
            .eq("id", lastLead.id)

        if (updateError) {
            console.error("Update error:", updateError)
            return NextResponse.json(
                { error: updateError.message },
                { status: 500 }
            )
        }

        return NextResponse.json({ success: true })
    } catch (e) {
        console.error("Attach user error:", e)
        return NextResponse.json({ error: "Server error" }, { status: 500 })
    }
}
export const runtime = "nodejs"

import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"

export async function POST(req: Request) {
    try {
        const formData = await req.formData()

        const supabase = createAdminClient()

        const payload = {
            task: String(formData.get("task") || "no task"),
            contact: String(formData.get("contact") || "no contact"),
            locale: formData.get("locale")
                ? String(formData.get("locale"))
                : null,
            source: "landing",
        }

        const { data, error } = await (supabase as any)
            .from("leads")
            .insert([payload])
            .select()
            .single()

        if (error) {
            console.error("❌ INSERT ERROR:", error)
            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            )
        }

        return NextResponse.json({
            success: true,
            id: data?.id,
        })

    } catch (e) {
        console.error("❌ API ERROR:", e)

        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        )
    }
}
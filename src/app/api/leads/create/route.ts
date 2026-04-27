export const runtime = "nodejs"

import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        console.log("BODY:", body)

        const supabase = createAdminClient()

        console.log("URL:", process.env.NEXT_PUBLIC_SUPABASE_URL)
        console.log("KEY:", process.env.SUPABASE_SERVICE_ROLE_KEY ? "OK" : "MISSING")

        const payload = {
            task: body.task || body.message || "no task",
            contact: body.contact || "no contact",
            locale: body.locale || null,
            source: "landing",
        }

        console.log("PAYLOAD:", payload)

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

        console.log("✅ SUCCESS:", data)

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
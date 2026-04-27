export const runtime = "nodejs"

import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"
import { sendTelegramMessage } from "@/lib/telegram/send-message"
import { sendTelegramVoice } from "@/lib/telegram/send-voice"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const supabase = createAdminClient()

    const task = String(formData.get("task") || "").trim()
    const contact = String(formData.get("contact") || "").trim()
    const locale = formData.get("locale")
      ? String(formData.get("locale"))
      : null

    const company = String(formData.get("company") || "").trim()

    const voiceEntry = formData.get("voice")
    const voice = voiceEntry instanceof File ? voiceEntry : null

    // honeypot anti-spam
    if (company) {
      return NextResponse.json({ success: true })
    }

    const payload = {
      task: task || "🎤 Voice message",
      contact: contact || "no contact",
      locale,
      source: "landing",
      status: "new",
    }

    const { data, error } = await (supabase as any)
      .from("leads")
      .insert([payload])
      .select("id, task, contact, locale, status")
      .single()

    if (error) {
      console.error("❌ INSERT ERROR:", error)

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    console.log("🔥 TELEGRAM SEND START")

    await sendTelegramMessage(`
🔥 Новый лид

Задача: ${payload.task}
Контакт: ${payload.contact}
Язык: ${payload.locale || "unknown"}
ID: ${data?.id}
`)

    if (voice) {
      console.log("🎙 TELEGRAM VOICE SEND START", {
        name: voice.name,
        size: voice.size,
        type: voice.type,
      })

      await sendTelegramVoice(voice)
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
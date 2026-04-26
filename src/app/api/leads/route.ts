import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { sendTelegramMessage } from '@/lib/telegram/send-message'
import { formatLeadMessage } from '@/lib/leads/lead-mappers'

// 🔴 rate limit store (простой)
const ipStore = new Map<string, number>()

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // 🔴 0. HONEYPOT (боты палятся здесь)
    if (body.company) {
      return NextResponse.json({ success: true })
    }

    // 🔴 1. RATE LIMIT (1 запрос / 10 сек)
    const ip =
      req.headers.get('x-forwarded-for') ||
      req.headers.get('x-real-ip') ||
      'unknown'

    const now = Date.now()
    const last = ipStore.get(ip)

    if (last && now - last < 10000) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      )
    }

    ipStore.set(ip, now)

    // 🔴 2. НОРМАЛИЗАЦИЯ
    const task = body.task?.trim()
    const contact = body.contact?.trim()

    // 🔴 3. ВАЛИДАЦИЯ
    if (!task || !contact) {
      return NextResponse.json(
        { error: 'Missing fields' },
        { status: 400 }
      )
    }

    const supabase = createAdminClient()

    const payload = {
      task,
      contact,
      source: body.source || 'landing',
      locale: body.locale || null,

      utm_source: body.utm_source || null,
      utm_medium: body.utm_medium || null,
      utm_campaign: body.utm_campaign || null,
      utm_term: body.utm_term || null,
      utm_content: body.utm_content || null,
    }

    // 🔹 4. сохраняем в Supabase
    const { error } = await supabase
      .from('leads')
      .insert(payload as any)

    if (error) {
      console.error('Insert error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // 🔹 5. Telegram (не ломает API)
    try {
      const text = formatLeadMessage({
        contact,
        message: task,
        locale: payload.locale,
        source: payload.source,
      })

      await sendTelegramMessage(text)
    } catch (tgError) {
      console.error('Telegram error:', tgError)
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('API error:', e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
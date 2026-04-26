import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const supabase = createAdminClient()

    const payload = {
      task: body.task,
      contact: body.contact,
      source: body.source || 'landing',
      locale: body.locale || null,

      utm_source: body.utm_source || null,
      utm_medium: body.utm_medium || null,
      utm_campaign: body.utm_campaign || null,
      utm_term: body.utm_term || null,
      utm_content: body.utm_content || null,
    }

    const { error } = await supabase
      .from('leads')
      .insert(payload as any) // 👈 ВОТ КЛЮЧ

    if (error) {
      console.error('Insert error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('API error:', e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
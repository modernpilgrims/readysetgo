import { createAdminClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const supabase = createAdminClient()

    const payload = {
      task: body.task,
      contact: body.contact,
      locale: body.locale || 'en',
      source: body.source || 'landing',
      created_at: new Date().toISOString(),
    }

    const { error } = await supabase
      .from('leads')
      .insert([payload])

    if (error) {
      console.error('Insert error:', error)
      return NextResponse.json({ error: 'Insert failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true })

  } catch (e) {
    console.error('API error:', e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
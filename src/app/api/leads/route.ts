import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const supabase = await createClient()

    const payload = {
      full_name: body.name || '',
      email: body.contact || '',
      company_name: body.company || null,
      service_interest: body.message || null,
      created_at: new Date().toISOString(),
    }

    const { data, error } = await supabase
      .from('leads')
      .insert(payload as any) // 🔥 ключевой фикс
      .select()
      .single()

    if (error) {
      console.error('Insert error:', error)
      return NextResponse.json({ error: 'Insert failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (e) {
    console.error('API error:', e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
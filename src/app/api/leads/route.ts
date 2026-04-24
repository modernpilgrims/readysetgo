import { NextRequest, NextResponse } from 'next/server'
import { createClient }       from '@/lib/supabase/server'
import { createAdminClient }  from '@/lib/supabase/admin'
import { leadSchema }         from '@/lib/leads/lead-schema'
import { mapLeadInputToInsert } from '@/lib/leads/lead-mappers'
import { sendLeadToTelegram } from '@/lib/telegram/send-message'

export async function POST(req: NextRequest) {
  try {
    // 1. Parse & validate body
    const json   = await req.json()
    const parsed = leadSchema.safeParse(json)

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: 'Invalid form data', issues: parsed.error.flatten() },
        { status: 400 }
      )
    }

    // 2. Get current user (optional — anonymous leads are fine)
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    // 3. Insert via service role (bypasses RLS — server-side only)
    const admin   = createAdminClient()
    const payload = mapLeadInputToInsert(parsed.data, user?.id)

    const { data, error } = await admin
      .from('leads')
      .insert(payload)
      .select('id, full_name, email, company_name, service_interest, created_at')
      .single()

    if (error) {
      console.error('[leads] insert error:', error)
      return NextResponse.json({ ok: false, error: 'Failed to save lead' }, { status: 500 })
    }

    // 4. Log event
    await admin.from('lead_events').insert({
      lead_id:    data.id,
      event_type: 'lead_created',
      payload:    { source: payload.source },
      actor_id:   user?.id ?? null,
    })

    // 5. Telegram notification (non-blocking — don't let it fail the response)
    sendLeadToTelegram({
      id:              data.id,
      fullName:        data.full_name,
      email:           data.email,
      companyName:     data.company_name,
      serviceInterest: data.service_interest,
      message:         payload.message ?? '',
      source:          payload.source,
    }).catch((err) => console.error('[leads] telegram error:', err))

    return NextResponse.json({ ok: true, leadId: data.id }, { status: 201 })
  } catch (err) {
    console.error('[leads] unexpected error:', err)
    return NextResponse.json({ ok: false, error: 'Unexpected server error' }, { status: 500 })
  }
}

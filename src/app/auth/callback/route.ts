import { NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)

  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/app'

  if (code) {
    const supabase = await createServerClient()

    const { error } = await supabase.auth.exchangeCodeForSession(code)

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      const { data: lastLead } = await supabase
        .from('leads')
        .select('id')
        .is('user_id', null)
        .order('created_at', { ascending: false })
        .limit(1)
        .single()

      if (lastLead) {
        await supabase
          .from('leads')
          .update({
            user_id: user.id,
            full_name: user.user_metadata?.full_name || null,
          })
          .eq('id', lastLead.id)
      }
    }

    if (!error) {
      return NextResponse.redirect(new URL(next, origin))
    }

    console.error('[auth/callback] exchange error:', error)
  }

  return NextResponse.redirect(new URL('/auth/error', origin))
}
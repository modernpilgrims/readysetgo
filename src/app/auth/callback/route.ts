import { NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

function getSafeNext(value: string | null) {
  if (!value) return '/app'

  // защита от open redirect
  if (!value.startsWith('/') || value.startsWith('//')) {
    return '/app'
  }

  return value
}

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)

  const code = searchParams.get('code')
  const next = getSafeNext(searchParams.get('next'))

  const authError = searchParams.get('error')

  if (authError) {
    console.error('[auth/callback] provider error:', authError)
    return NextResponse.redirect(new URL('/auth/error', origin))
  }

  if (!code) {
    console.error('[auth/callback] missing code')
    return NextResponse.redirect(new URL('/auth/error', origin))
  }

  const supabase = await createServerClient()

  const { error } = await supabase.auth.exchangeCodeForSession(code)

  if (error) {
    console.error('[auth/callback] exchange error:', error)
    return NextResponse.redirect(new URL('/auth/error', origin))
  }

  return NextResponse.redirect(new URL(next, origin))
}
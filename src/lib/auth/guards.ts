import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

/** Redirects to /auth/login if user is not authenticated. Returns the user object. */
export async function requireAuth() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')
  return user
}

/** Redirects to /auth/error if user doesn't have admin or editor role. */
export async function requireAdmin() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (!profile || !['admin', 'editor'].includes(profile.role)) {
    redirect('/auth/error')
  }

  return user
}

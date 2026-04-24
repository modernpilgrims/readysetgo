import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

/**
 * Admin client using the service role key.
 * Only use in Route Handlers / Server Actions — NEVER expose to clients.
 */
export function createAdminClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  )
}

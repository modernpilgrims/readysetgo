import type { LeadInput } from './lead-schema'
import type { Database } from '@/types/database'

type LeadInsert = Database['public']['Tables']['leads']['Insert']

export function mapLeadInputToInsert(
  input: LeadInput,
  userId?: string | null
): LeadInsert {
  return {
    created_by:       userId ?? null,
    full_name:        input.fullName,
    email:            input.email,
    phone:            input.phone || null,
    telegram_handle:  input.telegramHandle || null,
    company_name:     input.companyName || null,
    website:          input.website || null,
    country:          input.country || null,
    language:         input.language || null,
    service_interest: input.serviceInterest || null,
    budget_range:     input.budgetRange || null,
    timeline:         input.timeline || null,
    message:          input.message,
    source:           input.source,
    landing_path:     input.landingPath || null,
    referrer:         input.referrer || null,
    utm_source:       input.utmSource || null,
    utm_medium:       input.utmMedium || null,
    utm_campaign:     input.utmCampaign || null,
    utm_content:      input.utmContent || null,
    utm_term:         input.utmTerm || null,
  }
}

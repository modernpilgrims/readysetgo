import type { Database } from './database'

export type Lead        = Database['public']['Tables']['leads']['Row']
export type LeadInsert  = Database['public']['Tables']['leads']['Insert']
export type LeadUpdate  = Database['public']['Tables']['leads']['Update']

export type LeadStatus   = 'new' | 'qualified' | 'proposal_sent' | 'in_progress' | 'won' | 'lost' | 'spam'
export type LeadPriority = 'low' | 'normal' | 'high' | 'urgent'

export const LEAD_STATUSES: LeadStatus[] = ['new', 'qualified', 'proposal_sent', 'in_progress', 'won', 'lost', 'spam']
export const LEAD_PRIORITIES: LeadPriority[] = ['low', 'normal', 'high', 'urgent']

export type LeadNote  = Database['public']['Tables']['lead_notes']['Row']
export type LeadEvent = Database['public']['Tables']['lead_events']['Row']

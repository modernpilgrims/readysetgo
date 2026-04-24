/**
 * Auto-generated types should go here after running:
 *   npx supabase gen types typescript --project-id <project-id> > src/types/database.ts
 *
 * The stub below keeps TypeScript happy until you connect Supabase.
 */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id:           string
          email:        string | null
          full_name:    string | null
          avatar_url:   string | null
          phone:        string | null
          company_name: string | null
          role:         string
          created_at:   string
          updated_at:   string
        }
        Insert: Omit<Database['public']['Tables']['profiles']['Row'], 'created_at' | 'updated_at'> & {
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>
      }
      leads: {
        Row: {
          id:               string
          created_by:       string | null
          full_name:        string
          email:            string
          phone:            string | null
          telegram_handle:  string | null
          company_name:     string | null
          website:          string | null
          country:          string | null
          language:         string | null
          service_interest: string | null
          budget_range:     string | null
          timeline:         string | null
          message:          string | null
          source:           string
          status:           string
          priority:         string
          assigned_to:      string | null
          utm_source:       string | null
          utm_medium:       string | null
          utm_campaign:     string | null
          utm_content:      string | null
          utm_term:         string | null
          referrer:         string | null
          landing_path:     string | null
          created_at:       string
          updated_at:       string
        }
        Insert: Omit<Database['public']['Tables']['leads']['Row'], 'id' | 'created_at' | 'updated_at' | 'status' | 'priority'> & {
          id?:         string
          status?:     string
          priority?:   string
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database['public']['Tables']['leads']['Insert']>
      }
      lead_notes: {
        Row: {
          id:         string
          lead_id:    string
          author_id:  string
          body:       string
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['lead_notes']['Row'], 'id' | 'created_at'> & {
          id?:         string
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['lead_notes']['Insert']>
      }
      lead_events: {
        Row: {
          id:         string
          lead_id:    string
          event_type: string
          payload:    Json
          actor_id:   string | null
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['lead_events']['Row'], 'id' | 'created_at' | 'payload'> & {
          id?:         string
          payload?:    Json
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['lead_events']['Insert']>
      }
    }
    Views:      Record<string, never>
    Functions:  Record<string, never>
    Enums:      Record<string, never>
  }
}

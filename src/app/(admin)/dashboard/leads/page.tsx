import { createAdminClient } from "@/lib/supabase/admin"
import { LeadCard } from "@/components/admin/lead-card"

export default async function LeadsPage() {
  const supabase = createAdminClient()

  const { data } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false })

  const leads = data ?? []

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Leads</h1>

      {leads.map((lead: any) => (
        <LeadCard key={lead.id} lead={lead} admins={[]} />
      ))}
    </div>
  )
}
import { createServerClient } from "@/lib/supabase/server"

export default async function LeadsPage() {
  const supabase = await createServerClient()

  const { data: leads, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    return <div>Error loading leads</div>
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold mb-6">
        Leads
      </h1>

      <div className="space-y-4">
        {leads?.map((lead: any) => (
          <div
            key={lead.id}
            className="p-4 border border-black/10 rounded-xl"
          >
            <div className="text-sm text-black/40">
              {new Date(lead.created_at).toLocaleString()}
            </div>

            <div className="mt-2 font-medium">
              {lead.task}
            </div>

            <div className="text-black/60">
              {lead.contact}
            </div>

            <div className="text-xs mt-2 text-black/40">
              {lead.locale}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
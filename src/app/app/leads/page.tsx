import { createServerClient } from '@/lib/supabase/server'

export default async function LeadsPage() {
    const supabase = await createServerClient()

    const { data: leads } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })

    return (
        <div className="p-6 space-y-4">
            <h1 className="text-xl font-semibold">
                Leads
            </h1>

            {!leads?.length && (
                <div className="opacity-60 text-sm">
                    No leads yet
                </div>
            )}

            {leads?.map((lead) => (
                <div
                    key={lead.id}
                    className="border border-white/10 p-4 rounded"
                >
                    <div className="text-xs opacity-50">
                        {new Date(lead.created_at).toLocaleString()}
                    </div>

                    <div className="mt-2">
                        {lead.task}
                    </div>

                    <div className="mt-2 text-sm opacity-70">
                        {lead.contact}
                    </div>

                    <div className="mt-2 text-xs">
                        status: {lead.status}
                    </div>
                </div>
            ))}
        </div>
    )
}
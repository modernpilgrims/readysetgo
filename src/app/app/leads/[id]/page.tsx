import { createServerClient } from '@/lib/supabase/server'

export default async function LeadPage({ params }: any) {
    const { id } = params

    const supabase = await createServerClient()

    const { data: lead } = await supabase
        .from('leads')
        .select('*')
        .eq('id', id)
        .single()

    if (!lead) {
        return <div>Lead not found</div>
    }

    return (
        <div className="p-6 space-y-4">
            <h1>Lead #{lead.id}</h1>

            <div>{lead.task}</div>

            <div className="text-sm opacity-70">
                {lead.contact}
            </div>

            <div>
                Status: {lead.status}
            </div>
        </div>
    )
}
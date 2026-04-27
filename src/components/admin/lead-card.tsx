"use client"

type Lead = {
    id: string
    full_name: string | null
    contact: string
    task: string
    status: string | null
    assigned_to: string | null
    created_at?: string
}

type Admin = {
    id: string
    email: string
}

export function LeadCard({
    lead,
    admins,
}: {
    lead: Lead
    admins: Admin[]
}) {
    async function updateLead(updates: {
        status?: string
        assigned_to?: string | null
    }) {
        await fetch("/api/leads/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: lead.id,
                ...updates,
            }),
        })

        location.reload()
    }

    return (
        <div className="space-y-3 rounded-xl border bg-white p-4">
            <div>
                <div className="text-sm font-medium">
                    {lead.full_name || "No name"}
                </div>

                <div className="text-xs text-slate-500">
                    {lead.contact}
                </div>
            </div>

            <p className="line-clamp-4 text-sm text-slate-700">
                {lead.task}
            </p>

            <div>
                <label className="mb-1 block text-xs text-slate-400">
                    Assigned to
                </label>

                <select
                    value={lead.assigned_to || ""}
                    onChange={(e) =>
                        updateLead({
                            assigned_to: e.target.value || null,
                        })
                    }
                    className="w-full rounded-lg border px-2 py-2 text-xs"
                >
                    <option value="">Unassigned</option>

                    {admins.map((admin) => (
                        <option key={admin.id} value={admin.id}>
                            {admin.email}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
                <button
                    type="button"
                    onClick={() => updateLead({ status: "new" })}
                    className="rounded border px-2 py-1 text-xs"
                >
                    New
                </button>

                <button
                    type="button"
                    onClick={() => updateLead({ status: "in_progress" })}
                    className="rounded border px-2 py-1 text-xs"
                >
                    Work
                </button>

                <button
                    type="button"
                    onClick={() => updateLead({ status: "done" })}
                    className="rounded border px-2 py-1 text-xs"
                >
                    Done
                </button>

                <button
                    type="button"
                    onClick={() => updateLead({ status: "rejected" })}
                    className="rounded border px-2 py-1 text-xs"
                >
                    Reject
                </button>
            </div>
        </div>
    )
}
import { createServerClient } from "@/lib/supabase/server"
import { getTrack } from "@/content/track"

type LeadStatus = "new" | "in_progress" | "done" | "rejected"

type TrackStep = {
    title: string
    description: string
}

export default async function Page({
    params,
}: {
    params: Promise<{ locale: string; id: string }>
}) {
    const { locale, id } = await params

    const content = getTrack(locale)
    const supabase = await createServerClient()

    // ❌ УБРАЛИ auth

    const { data: lead, error } = await supabase
        .from("leads")
        .select("id, task, status, created_at, updated_at")
        .eq("id", id)
        .single()

    if (!lead || error) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-white px-6">
                <div className="max-w-md text-center space-y-3">
                    <h1 className="text-2xl font-semibold">Not found</h1>
                    <p className="text-black/60">
                        This request does not exist.
                    </p>
                </div>
            </main>
        )
    }

    const statusMap: Record<LeadStatus, number> = {
        new: 0,
        in_progress: 1,
        done: 2,
        rejected: 2,
    }

    const safeStatus = (lead.status || "new") as LeadStatus
    const currentStep = statusMap[safeStatus] ?? 0

    return (
        <main className="min-h-screen flex items-center justify-center bg-white">
            <div className="max-w-xl w-full px-6 py-20">
                <h1 className="text-3xl font-semibold">
                    {content.title}
                </h1>

                <p className="text-black/60 mt-2">
                    {content.subtitle}
                </p>

                <div className="mt-10 space-y-6">
                    {content.steps.map((step: TrackStep, i: number) => (
                        <div key={i} className="flex gap-4 items-start">
                            <div
                                className={`w-3 h-3 mt-2 rounded-full ${i <= currentStep ? "bg-black" : "bg-black/20"
                                    }`}
                            />

                            <div>
                                <h3
                                    className={
                                        i <= currentStep
                                            ? "text-black font-medium"
                                            : "text-black/40 font-medium"
                                    }
                                >
                                    {step.title}
                                </h3>

                                <p className="text-sm text-black/60 mt-1">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 rounded-xl bg-black/5 p-4">
                    <p className="text-sm text-black/50">
                        {content.note}
                    </p>

                    {lead.task && (
                        <p className="text-sm text-black/70 mt-4">
                            {lead.task}
                        </p>
                    )}
                </div>
            </div>
        </main>
    )
}
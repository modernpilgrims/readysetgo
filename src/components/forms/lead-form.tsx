"use client"

import { useState } from "react"
import type { Landing } from "@/content/landing"

type Props = {
  content: Landing["form"]
}

export function LeadForm({ content }: Props) {
  const [task, setTask] = useState("")
  const [contact, setContact] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!task || !contact) return

    setLoading(true)

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task,
          contact,
          locale: document.documentElement.lang || "en",
          source: "landing",
        }),
      })

      if (!res.ok) {
        throw new Error("Failed to send")
      }

      setSent(true)
      setTask("")
      setContact("")
    } catch (err) {
      console.error("Submit error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

      <div className="grid md:grid-cols-2">

        {/* LEFT */}
        <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-black/10 space-y-6">

          <div className="text-xs uppercase tracking-wide bg-black/5 inline-block px-3 py-1 rounded-md">
            {content.badge}
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            {content.title}
          </h2>

          <p className="text-black/60">
            {content.description}
          </p>

          <div className="space-y-4 pt-4">
            {content.features.map((item, i) => (
              <div key={i} className="flex gap-3">

                <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center">
                  {i === 0 && "💬"}
                  {i === 1 && "🔒"}
                  {i === 2 && "⏱"}
                </div>

                <div>
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-xs text-black/50">{item.description}</p>
                </div>

              </div>
            ))}
          </div>

          <p className="text-xs text-black/40 pt-6">
            {content.trust}
          </p>

        </div>

        {/* RIGHT */}
        <div className="p-8 md:p-10 space-y-6">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* TASK */}
            <div>
              <label className="text-sm text-black/60">
                {content.taskLabel}
              </label>

              <textarea
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder={content.taskPlaceholder}
                className="mt-2 w-full h-32 rounded-xl border border-black/10 p-4 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/10"
              />
            </div>

            {/* HELPER */}
            <div className="flex items-center justify-between text-xs text-black/50">
              <span>💡 {content.helper}</span>

              <button
                type="button"
                className="border border-black/10 rounded-lg px-3 py-1 text-xs"
              >
                🎤
              </button>
            </div>

            {/* CONTACT */}
            <div>
              <label className="text-sm text-black/60">
                {content.contactLabel}
              </label>

              <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder={content.contactPlaceholder}
                className="mt-2 w-full rounded-xl border border-black/10 p-4 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/10"
              />

              <p className="text-xs text-black/40 mt-2">
                {content.note}
              </p>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-4 rounded-xl hover:opacity-90 transition"
            >
              {loading ? content.sending : content.submit}
            </button>

            {/* SUCCESS */}
            {sent && (
              <p className="text-sm text-black/60 text-center">
                {content.success}
              </p>
            )}

            {/* POLICY */}
            <p className="text-xs text-black/40 text-center pt-2">
              🔒 {content.policy}
            </p>

          </form>

        </div>

      </div>
    </div>
  )
}
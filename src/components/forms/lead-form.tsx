"use client"

import { useState } from "react"
import type { FormContent } from "@/content/form"
import { createClient } from "@/lib/supabase/client"
import { VoiceRecorder } from "@/components/ui/voice-recorder"

type Props = {
  content: FormContent
  onClose?: () => void
}

export function LeadForm({ content, onClose }: Props) {
  const [task, setTask] = useState("")
  const [contact, setContact] = useState("")
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)

  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")
  const [contactHint, setContactHint] = useState("")

  const [company, setCompany] = useState("")

  const MAX_LENGTH = 500

  async function handleGoogleLogin() {
    const supabase = createClient()

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
  }

  function isValidContact(value: string) {
    const v = value.trim()

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
    const isPhone = /^\+?[0-9\s\-()]{7,}$/.test(v)
    const isTelegram = /^@?[a-zA-Z0-9_]{5,}$/.test(v)

    return isEmail || isPhone || isTelegram
  }

  function detectContactType(value: string) {
    if (value.includes("@") && value.includes(".")) return "email"
    if (value.startsWith("+")) return "phone"
    if (value.startsWith("@")) return "telegram"
    return "unknown"
  }

  function handleContactChange(value: string) {
    setContact(value)

    if (!value) {
      setContactHint("")
      return
    }

    const type = detectContactType(value)

    if (type === "email") setContactHint(content.hintEmail)
    else if (type === "phone") setContactHint(content.hintPhone)
    else if (type === "telegram") setContactHint(content.hintTelegram)
    else setContactHint(content.hintGeneral)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (loading) return

    const cleanTask = task.trim()
    const cleanContact = contact.trim()

    // 🔴 validation: теперь допускаем голос БЕЗ текста
    if (!cleanTask && !audioBlob) {
      setError(content.errorTask)
      return
    }

    if (!isValidContact(cleanContact)) {
      setError(content.errorContact)
      return
    }

    setError("")
    setLoading(true)

    try {
      const formData = new FormData()

      formData.append("task", cleanTask)
      formData.append("contact", cleanContact)
      formData.append("locale", document.documentElement.lang || "en")
      formData.append("source", "landing")
      formData.append("company", company)

      if (audioBlob) {
        formData.append("voice", audioBlob, "voice.webm")
      }

      const res = await fetch("/api/leads/create", {
        method: "POST",
        body: formData,
      })

      if (!res.ok) throw new Error("Failed")

      setSent(true)
      setTask("")
      setContact("")
      setAudioBlob(null)
      setCompany("")
    } catch (err) {
      console.error(err)
      setError(content.errorSubmit)
    } finally {
      setLoading(false)
    }
  }

  // 🟢 SUCCESS
  if (sent) {
    return (
      <div className="p-10 text-center space-y-6">
        <div className="text-4xl">🚀</div>

        <h2 className="text-2xl font-semibold">
          {content.successTitle}
        </h2>

        <p className="text-black/60">
          {content.successText}
        </p>

        <div className="bg-black/5 rounded-xl p-4 text-sm text-black/70">
          {content.successFast}
        </div>

        <div className="space-y-3">
          <a
            href={content.contacts.telegram}
            target="_blank"
            className="block w-full bg-black text-white py-3 rounded-xl"
          >
            Telegram
          </a>

          <a
            href={content.contacts.whatsapp}
            target="_blank"
            className="block w-full border border-black/10 py-3 rounded-xl"
          >
            WhatsApp
          </a>

          <a
            href={`tel:${content.contacts.phone}`}
            className="block w-full border border-black/10 py-3 rounded-xl"
          >
            Call
          </a>
        </div>

        <div className="pt-4 border-t border-black/10 space-y-3">
          <p className="text-sm text-black/60">
            {content.successAlt}
          </p>

          <button
            onClick={handleGoogleLogin}
            className="w-full border border-black/10 py-3 rounded-xl hover:bg-black hover:text-white transition"
          >
            {content.successAuth}
          </button>
        </div>

        <button
          onClick={onClose}
          className="text-xs text-black/40 underline pt-4"
        >
          {content.close}
        </button>
      </div>
    )
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
        </div>

        {/* RIGHT */}
        <div className="p-8 md:p-10 space-y-6">

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="hidden"
            />

            {/* TEXT */}
            <div>
              <label className="text-sm text-black/60">
                {content.taskLabel}
              </label>

              <textarea
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder={content.taskPlaceholder}
                maxLength={MAX_LENGTH}
                className="mt-2 w-full h-32 rounded-xl border border-black/10 p-4"
              />
            </div>

            {/* 🎙 VOICE */}
            <div className="flex flex-col items-center gap-2">
              <VoiceRecorder onComplete={(blob) => setAudioBlob(blob)} />

              {audioBlob && (
                <p className="text-xs text-green-600">
                  Voice message recorded ✓
                </p>
              )}
            </div>

            {/* CONTACT */}
            <div>
              <label className="text-sm text-black/60">
                {content.contactLabel}
              </label>

              <input
                value={contact}
                onChange={(e) => handleContactChange(e.target.value)}
                placeholder={content.contactPlaceholder}
                className="mt-2 w-full rounded-xl border border-black/10 p-4"
              />

              <p className="text-xs mt-2 text-black/50">
                {contactHint}
              </p>
            </div>

            {error && (
              <p className="text-sm text-red-500 text-center">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-4 rounded-xl"
            >
              {loading ? content.sending : content.submit}
            </button>

            <p className="text-xs text-black/40 text-center">
              🔒 {content.policy}
            </p>

          </form>

        </div>

      </div>
    </div>
  )
}
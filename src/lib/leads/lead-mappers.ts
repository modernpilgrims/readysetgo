export function formatLeadMessage(data: {
  contact: string
  message: string
  locale?: string
  source?: string
  quality?: "high" | "medium" | "low"
}) {
  const locale = data.locale?.toUpperCase() || "UNKNOWN"
  const source = data.source || "Landing"

  // 🔴 качество лида
  const qualityIcon =
    data.quality === "high" ? "🔥" :
      data.quality === "medium" ? "⚠️" :
        "❌"

  const qualityLabel =
    data.quality === "high" ? "High" :
      data.quality === "medium" ? "Medium" :
        "Low"

  return `
${qualityIcon} Новый лид (${qualityLabel})

${locale} | ${source}

Контакт:
${data.contact || "—"}

Задача:
${data.message || "—"}
`
}
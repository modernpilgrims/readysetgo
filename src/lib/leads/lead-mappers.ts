export function formatLeadMessage(data: {
  contact: string
  message: string
  locale: string
  source?: string
}) {
  const locale = data.locale?.toUpperCase() || "UNKNOWN"
  const source = data.source || "Landing"

  return `
Новый лид

${locale} | ${source}

Контакт: ${data.contact || "—"}

Задача:
${data.message || "—"}
`
}
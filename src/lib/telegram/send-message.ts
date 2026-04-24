export type LeadTelegramPayload = {
  id:              string
  fullName:        string
  email:           string
  companyName?:    string | null
  serviceInterest?: string | null
  message:         string
  source:          string
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function sendLeadToTelegram(payload: LeadTelegramPayload): Promise<void> {
  const token  = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    console.warn('[Telegram] env vars missing — skipping notification')
    return
  }

  const lines = [
    '<b>🚀 Новая заявка — Ready Set Go</b>',
    '',
    `<b>ID:</b> <code>${escapeHtml(payload.id)}</code>`,
    `<b>Имя:</b> ${escapeHtml(payload.fullName)}`,
    `<b>Email:</b> ${escapeHtml(payload.email)}`,
    payload.companyName     ? `<b>Компания:</b> ${escapeHtml(payload.companyName)}`      : null,
    payload.serviceInterest ? `<b>Интерес:</b> ${escapeHtml(payload.serviceInterest)}`   : null,
    `<b>Источник:</b> ${escapeHtml(payload.source)}`,
    '',
    `<b>Сообщение:</b>`,
    escapeHtml(payload.message),
  ]

  const text = lines.filter(Boolean).join('\n')

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({
        chat_id:                  chatId,
        text,
        parse_mode:               'HTML',
        disable_web_page_preview: true,
      }),
    }
  )

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`[Telegram] ${response.status}: ${body}`)
  }
}

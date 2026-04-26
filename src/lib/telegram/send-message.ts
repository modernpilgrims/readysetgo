export async function sendTelegramMessage(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    throw new Error("Telegram env missing")
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
    }),
  })

  const json = await res.json()

  if (!json.ok) {
    console.error("Telegram error:", json)
  }
}
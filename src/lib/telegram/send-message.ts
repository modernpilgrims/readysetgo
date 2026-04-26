export async function sendTelegramMessage(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  // 🔴 1. ЛОГ ENV (временно)
  console.log("TG TOKEN:", token ? "OK" : "MISSING")
  console.log("TG CHAT:", chatId)

  if (!token || !chatId) {
    console.error("Telegram env missing")
    return
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`

  try {
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

    // 🔴 2. ЛОГ ОТВЕТА TELEGRAM
    console.log("TG RESPONSE:", json)

    if (!json.ok) {
      console.error("Telegram error:", json)
    }

  } catch (err) {
    // 🔴 3. СЕТЕВАЯ ОШИБКА
    console.error("Telegram fetch error:", err)
  }
}
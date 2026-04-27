export async function sendTelegramVoice(file: File) {
    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    console.log("TG VOICE TOKEN:", token ? "OK" : "MISSING")
    console.log("TG VOICE CHAT:", chatId)

    if (!token || !chatId) {
        console.error("Telegram voice env missing")
        return
    }

    const formData = new FormData()
    formData.append("chat_id", chatId)
    formData.append("voice", file)

    try {
        const res = await fetch(
            `https://api.telegram.org/bot${token}/sendVoice`,
            {
                method: "POST",
                body: formData,
            }
        )

        const json = await res.json()

        console.log("TG VOICE RESPONSE:", json)

        if (!json.ok) {
            console.error("Telegram voice error:", json)
        }
    } catch (err) {
        console.error("Telegram voice fetch error:", err)
    }
}
export async function sendTelegramVoice(file: File) {
    const token = process.env.TELEGRAM_BOT_TOKEN!
    const chatId = process.env.TELEGRAM_CHAT_ID!

    const form = new FormData()
    form.append("chat_id", chatId)
    form.append("voice", file)

    await fetch(`https://api.telegram.org/bot${token}/sendVoice`, {
        method: "POST",
        body: form,
    })
}
import type { FormContent } from "./types"

export const form_en: FormContent = {
    title: "Describe your task",
    description: "Briefly, as it is. No preparation needed.",

    taskLabel: "What needs to be done",
    taskPlaceholder:
        "Describe your task as it is.\n\nFor example:\n— need a website for a construction business\n— clients don’t understand what makes us different\n— we have a website but no requests",

    contactLabel: "How can we contact you",
    contactPlaceholder: "Telegram / WhatsApp / Email",

    note: "Any convenient way",

    submit: "Review my task",
    sending: "Sending...",
    success: "Task received. We will reply within 24 hours.",

    badge: "GET A WEBSITE",

    features: [
        {
            title: "We read every request",
            description: "No bots. Real people.",
        },
        {
            title: "Your data is safe",
            description: "We don’t share your information.",
        },
        {
            title: "Reply within 24 hours",
            description: "Usually much faster.",
        },
    ],

    helper: "Free form is fine",
    trust: "Trusted by small and medium businesses",
    policy: "No obligations. Straight to the point.",

    errorTask: "Describe your task",
    errorContact: "Enter a valid contact: Telegram, phone or email",
    errorSubmit: "Failed to send. Try again",

    hintEmail: "Looks like an email",
    hintPhone: "Looks like a phone number",
    hintTelegram: "Looks like a Telegram username",
    hintGeneral: "Enter Telegram, phone or email",

    successTitle: "Request received",
    successText: "We will review it and get back within 24 hours.",
    successNote: "We value your time. No spam.",

    reset: "Send another request",

    successFast: "Want faster? Contact us directly:",

    successAlt: "Want to track your request?",

    successAuth: "Sign in with Google",

    close: "Close",

    contacts: {
        telegram: "https://t.me/your_username",
        whatsapp: "https://wa.me/123456789",
        phone: "+123456789",
    },
}
export type FormContent = {
    title: string
    description: string

    taskLabel: string
    taskPlaceholder: string

    contactLabel: string
    contactPlaceholder: string

    note: string

    submit: string
    sending: string
    success: string

    badge: string

    features: {
        title: string
        description: string
    }[]

    helper: string
    trust: string
    policy: string

    errorTask: string
    errorContact: string
    errorSubmit: string

    hintEmail: string
    hintPhone: string
    hintTelegram: string
    hintGeneral: string

    successTitle: string
    successText: string
    successNote: string

    reset?: string

    // 🔥 SUCCESS EXTENDED
    successFast: string
    successAlt: string
    successAuth: string
    close: string

    contacts: {
        telegram: string
        whatsapp: string
        phone: string
    }
}
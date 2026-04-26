import type { FormContent } from "./types"

export const form_ru: FormContent = {
    title: "Опишите задачу",
    description: "Коротко, как есть. Без подготовки.",

    taskLabel: "Что нужно сделать",
    taskPlaceholder:
        "Опишите задачу как есть.\n\nНапример:\n— нужен сайт для ремонта квартир\n— клиенты не понимают, чем мы отличаемся\n— есть сайт, но нет заявок",

    contactLabel: "Как с вами связаться",
    contactPlaceholder: "Telegram / WhatsApp / Email",

    note: "Любой удобный способ",

    submit: "Разобрать задачу",
    sending: "Отправка...",
    success: "Задача получена. Ответим в течение 24 часов.",

    badge: "ЗАПУСТИТЬ САЙТ",

    features: [
        {
            title: "Каждую заявку смотрит человек",
            description: "Без ботов и автоматических ответов.",
        },
        {
            title: "Данные в безопасности",
            description: "Информация не передаётся третьим лицам.",
        },
        {
            title: "Ответ в течение 24 часов",
            description: "Обычно быстрее.",
        },
    ],

    helper: "Можно в свободной форме",
    trust: "Для малого и среднего бизнеса",
    policy: "Без обязательств. Только по делу.",

    errorTask: "Опишите задачу",
    errorContact: "Введите корректный контакт: Telegram, телефон или email",
    errorSubmit: "Ошибка отправки. Попробуйте ещё раз",

    hintEmail: "Похоже на email",
    hintPhone: "Похоже на телефон",
    hintTelegram: "Похоже на Telegram",
    hintGeneral: "Введите Telegram, телефон или email",

    successTitle: "Заявка получена",
    successText: "Мы рассмотрим её и ответим в течение 24 часов.",
    successNote: "Без спама. Только по делу.",

    reset: "Отправить ещё одну заявку",

    successFast: "Нужно быстрее? Напишите нам напрямую:",

    successAlt: "Хотите отслеживать заявку?",

    successAuth: "Войти через Google",

    close: "Закрыть",

    contacts: {
        telegram: "https://t.me/your_username",
        whatsapp: "https://wa.me/123456789",
        phone: "+123456789",
    },
}
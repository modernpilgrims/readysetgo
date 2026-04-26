import { form_en } from "./en"
import { form_ru } from "./ru"

export function getForm(locale: string) {
    switch (locale) {
        case "ru":
            return form_ru
        case "en":
        default:
            return form_en
    }
}

export type { FormContent } from "./types"
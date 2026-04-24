import { landing_en } from "./en"
import { landing_ru } from "./ru"

export type Landing = typeof landing_en

export function getLanding(locale: string): Landing {
    switch (locale) {
        case "ru":
            return landing_ru
        default:
            return landing_en
    }
}
import { landing_en, type Landing } from "./en"
import { landing_ru } from "./ru"

export type { Landing }

export function getLanding(locale: string): Landing {
    switch (locale) {
        case "ru":
            return landing_ru as unknown as Landing
        default:
            return landing_en
    }
}
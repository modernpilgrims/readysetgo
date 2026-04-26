import { track_en } from "./en"
import { track_ru } from "./ru"

export function getTrack(locale: string) {
    return locale === "ru" ? track_ru : track_en
}
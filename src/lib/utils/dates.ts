/** Format a date string or Date to locale string */
export function formatDate(
  date: string | Date,
  locale = 'en-GB',
  opts: Intl.DateTimeFormatOptions = {
    year: 'numeric', month: 'short', day: 'numeric',
  }
): string {
  return new Intl.DateTimeFormat(locale, opts).format(new Date(date))
}

/** Relative time, e.g. "2 days ago" */
export function formatRelative(date: string | Date, locale = 'en'): string {
  const diff  = Date.now() - new Date(date).getTime()
  const rtf   = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })
  const units: [string, number][] = [
    ['year',   1000 * 60 * 60 * 24 * 365],
    ['month',  1000 * 60 * 60 * 24 * 30],
    ['day',    1000 * 60 * 60 * 24],
    ['hour',   1000 * 60 * 60],
    ['minute', 1000 * 60],
    ['second', 1000],
  ]
  for (const [unit, ms] of units) {
    if (Math.abs(diff) >= ms) {
      return rtf.format(-Math.round(diff / ms), unit as Intl.RelativeTimeFormatUnit)
    }
  }
  return 'just now'
}

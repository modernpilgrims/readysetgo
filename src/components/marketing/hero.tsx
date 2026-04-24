import { Button } from "@/components/ui/button"

type Props = {
  title: string
  subtitle: string
  description: string
  note?: string
  ctaPrimary: string
  ctaSecondary: string
}

export function Hero({
  title,
  subtitle,
  description,
  note,
  ctaPrimary,
  ctaSecondary,
}: Props) {
  return (
    <section className="min-h-screen flex items-center border-b border-white/10 bg-white/[0.02]">

      <div className="max-w-6xl mx-auto px-6 w-full">

        <div className="max-w-2xl">

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight text-red-500">
            {title}
          </h1>

          <h2 className="mt-6 text-xl md:text-2xl text-white/70">
            {subtitle}
          </h2>

          <p className="mt-6 text-lg text-white/60">
            {description}
          </p>

          {note && (
            <p className="mt-3 text-sm text-white/40">
              {note}
            </p>
          )}

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button>{ctaPrimary}</Button>
            <Button variant="secondary">{ctaSecondary}</Button>
          </div>

        </div>
      </div>
    </section>
  )
}
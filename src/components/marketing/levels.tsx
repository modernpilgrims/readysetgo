import { Landing } from "@/content/landing/en"
import { pricing } from "@/content/pricing"

type Props = Landing["levels"]

export function Levels({ title, subtitle, items, cta, note }: Props) {
  return (
    <section className="py-24 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          {title}
        </h2>

        <p className="mt-2 text-white/60">
          {subtitle}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pricing.map((plan) => {
            const text = items[plan.id]

            // ⚠️ защита от рассинхрона
            if (!text) return null

            return (
              <div
                key={plan.id}
                className="border border-white/10 p-6 rounded-xl flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-medium">
                    {text.name}
                  </h3>

                  <p className="mt-2 text-sm text-white/60">
                    {text.description}
                  </p>

                  <p className="mt-6 text-2xl font-semibold">
                    {plan.price}
                  </p>

                  <p className="text-sm text-white/50">
                    {plan.timeline}
                  </p>

                  {plan.features && (
                    <ul className="mt-4 space-y-1 text-sm text-white/70">
                      {plan.features.map((f: string, i: number) => (
                        <li key={i}>— {f}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <button className="mt-6 bg-white text-black px-4 py-2 rounded-lg">
                  {cta}
                </button>
              </div>
            )
          })}
        </div>

        <p className="mt-6 text-sm text-white/50">
          {note}
        </p>
      </div>
    </section>
  )
}
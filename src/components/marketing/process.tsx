import { Landing } from "@/content/landing/en"

type Props = Landing["process"]

export function Process({ title, steps, result }: Props) {
  return (
    <section className="py-24 border-b border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold">
          {title}
        </h2>

        <div className="mt-10 space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="text-white/40 font-medium">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div>
                <h3 className="font-medium">
                  {step.title}
                </h3>

                <p className="mt-1 text-white/60 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 font-medium">
          {result}
        </p>
      </div>
    </section>
  )
}
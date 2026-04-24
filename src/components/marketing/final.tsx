import { Landing } from "@/content/landing/en"

type Props = Landing["final"]

export function Final({ text, cta, secondary }: Props) {
    return (
        <section className="py-20 border-t border-white/10">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    {text}
                </h2>

                <button className="mt-6 bg-white text-black px-6 py-3 rounded-xl">
                    {cta}
                </button>

                {secondary && (
                    <div className="mt-12 pt-6 border-t border-white/10">
                        <h3 className="text-lg font-medium">
                            {secondary.title}
                        </h3>

                        <p className="mt-2 text-white/60">
                            {secondary.text}
                        </p>

                        <button className="mt-4 text-sm underline opacity-80 hover:opacity-100">
                            {secondary.cta}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
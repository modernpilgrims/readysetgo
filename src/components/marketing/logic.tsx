import { Landing } from "@/content/landing/en"

type Props = Landing["logic"]

export function Logic({ title, items, note }: Props) {
    return (
        <section className="py-24 border-b border-white/10">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    {title}
                </h2>

                <ul className="mt-8 space-y-3">
                    {items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-white/80">
                            <span className="opacity-40">—</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <p className="mt-8 text-sm text-white/50">
                    {note}
                </p>
            </div>
        </section>
    )
}
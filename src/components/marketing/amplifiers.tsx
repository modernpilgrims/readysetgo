import { Landing } from "@/content/landing/en"

type Props = Landing["amplifiers"]

export function Amplifiers({ title, items, note, conclusion }: Props) {
    return (
        <section className="py-20 border-b border-white/10">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    {title}
                </h2>

                <ul className="mt-6 space-y-2 text-white/80">
                    {items.map((item, i) => (
                        <li key={i}>— {item}</li>
                    ))}
                </ul>

                <p className="mt-6 text-white/60">
                    {note}
                </p>

                <p className="mt-2 font-medium">
                    {conclusion}
                </p>
            </div>
        </section>
    )
}
import { Landing } from "@/content/landing/en"

type Props = Landing["facts"]

export function Facts({ title, items, conclusion }: Props) {
    return (
        <section className="py-20 border-b border-white/10">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    {title}
                </h2>

                <div className="mt-6 space-y-6">
                    {items.map((item, i) => (
                        <div key={i}>
                            <p className="font-medium">
                                {item.title}: {item.value}
                            </p>

                            <p className="text-sm text-white/60 mt-1">
                                {item.note}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="mt-8 font-medium">
                    {conclusion}
                </p>
            </div>
        </section>
    )
}
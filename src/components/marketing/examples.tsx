import { Landing } from "@/content/landing/en"

type Props = Landing["examples"]

export function Examples({ title, subtitle, items, more }: Props) {
    return (
        <section className="py-20 border-b border-white/10">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    {title}
                </h2>

                <p className="mt-2 text-white/60">
                    {subtitle}
                </p>

                <div className="mt-8 space-y-6">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="border border-white/10 p-5 rounded-xl"
                        >
                            <h3 className="text-lg font-medium">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-sm text-white/60">
                                {item.task}
                            </p>

                            <p className="mt-2 text-sm">
                                {item.result}
                            </p>

                            <button className="mt-3 text-sm underline opacity-80 hover:opacity-100">
                                {item.cta}
                            </button>
                        </div>
                    ))}
                </div>

                <p className="mt-8 text-sm underline cursor-pointer opacity-80 hover:opacity-100">
                    {more}
                </p>
            </div>
        </section>
    )
}
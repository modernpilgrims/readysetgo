export function Reality({ title, items, result, conclusion }: Props) {
  return (
    <section className="py-24 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6">

        {/* 🔥 Заголовок сильнее */}
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight max-w-2xl">
          {title}
        </h2>

        {/* 🔥 Список в виде блоков */}
        <div className="mt-10 grid gap-4 max-w-2xl">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/10"
            >
              <div className="w-1.5 h-1.5 mt-2 rounded-full bg-white/40" />
              <p className="text-white/80">{item}</p>
            </div>
          ))}
        </div>

        {/* 🔥 Результат отделяем */}
        <div className="mt-12 max-w-2xl">
          <p className="text-white/60">
            {result}
          </p>

          <p className="mt-3 text-white font-medium">
            {conclusion}
          </p>
        </div>

      </div>
    </section>
  )
}
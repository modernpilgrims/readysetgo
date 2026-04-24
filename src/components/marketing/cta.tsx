type Props = {
  title: string
  button: string
}

export function CTA({ title, button }: Props) {
  return (
    <section className="px-6 py-24 border-t border-white/10 text-center">

      <h2 className="text-3xl font-semibold">
        {title}
      </h2>

      <a
        href="/contact"
        className="inline-block mt-8 bg-white text-black px-8 py-4 rounded-xl"
      >
        {button}
      </a>

    </section>
  )
}
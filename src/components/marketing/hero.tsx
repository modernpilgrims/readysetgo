import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { HeroVisual } from "@/components/marketing/hero-visual"

type Props = {
  title: string
  subtitle: string
  description: string
  note: string
  ctaPrimary: string
  ctaSecondary: string

  heroVisual: {
    items: {
      title: string
      image: string
    }[]
  }

  onOpenForm: () => void
}

export function Hero({
  title,
  subtitle,
  description,
  note,
  ctaPrimary,
  ctaSecondary,
  heroVisual,
  onOpenForm,
}: Props) {
  return (
    <Section>
      <Container>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="max-w-xl">

            <h1 className="sr-only">{title}</h1>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              {title}
            </h2>

            <p className="mt-6 text-lg text-black/80">
              {subtitle}
            </p>

            <div className="mt-6 space-y-1 text-black/60">
              <p>{description}</p>
              <p>{note}</p>
            </div>

            <div className="mt-8 flex gap-4">

              {/* PRIMARY → ОТКРЫВАЕТ ФОРМУ */}
              <Button onClick={onOpenForm}>
                {ctaPrimary}
              </Button>

              {/* SECONDARY → ЯКОРЬ НА ПРИМЕРЫ */}
              <Link href="#examples">
                <Button variant="secondary">
                  {ctaSecondary}
                </Button>
              </Link>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <HeroVisual items={heroVisual.items} />
          </div>

        </div>

      </Container>
    </Section>
  )
}
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"

export function Hero({ title, subtitle }: any) {
  return (
    <Section>
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              {title}
            </h1>

            <p className="text-black/70 max-w-md">
              {subtitle}
            </p>

            <div className="flex gap-4">
              <Button>Get a website</Button>
              <Button>See examples</Button>
            </div>
          </div>

          {/* VISUAL */}
          <div className="h-[300px] bg-gray-100 rounded-2xl" />

        </div>
      </Container>
    </Section>
  )
}
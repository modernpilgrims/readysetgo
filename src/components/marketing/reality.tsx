import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
export function Reality({ title, items }: any) {
  return (
    <Section>
      <Container>
        <div className="grid md:grid-cols-2 gap-10">

          <h2 className="text-3xl font-semibold">
            {title}
          </h2>

          <ul className="space-y-3 text-black/70">
            {items.map((item: string, i: number) => (
              <li key={i}>— {item}</li>
            ))}
          </ul>

        </div>
      </Container>
    </Section>
  )
}
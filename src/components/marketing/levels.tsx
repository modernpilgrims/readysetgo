import { Landing } from "@/content/landing/en"
import { pricing } from "@/content/pricing"

import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Heading } from "@/components/typography/heading"
import { Text } from "@/components/typography/text"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Props = Landing["levels"]

export function Levels({ title, subtitle, items, cta, note }: Props) {
  return (
    <Section id="levels">
      <Container>

        <div className="space-y-4 max-w-xl">
          <Heading>{title}</Heading>
          <Text>{subtitle}</Text>
        </div>

        {/* CARDS */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pricing.map((plan) => {
            const text = items[plan.id]
            if (!text) return null

            return (
              <Card key={plan.id}>
                <div className="flex flex-col h-full justify-between">

                  <div className="space-y-4">

                    <div>
                      <div className="text-lg font-medium">
                        {text.name}
                      </div>

                      <Text>
                        {text.description}
                      </Text>
                    </div>

                    <div>
                      <div className="text-2xl font-semibold">
                        {plan.price}
                      </div>

                      <div className="text-sm text-black/50">
                        {plan.timeline}
                      </div>
                    </div>

                    {plan.features && (
                      <ul className="space-y-1 text-sm text-black/70">
                        {plan.features.map((f: string, i: number) => (
                          <li key={i}>— {f}</li>
                        ))}
                      </ul>
                    )}

                  </div>

                  <Button>
                    {cta}
                  </Button>

                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-6 max-w-xl">
          <Text>{note}</Text>
        </div>

      </Container>
    </Section>
  )
}
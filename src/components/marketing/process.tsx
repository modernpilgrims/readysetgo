import { Landing } from "@/content/landing/en"

import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Heading } from "@/components/typography/heading"
import { Text } from "@/components/typography/text"

type Props = Landing["process"]

export function Process({ title, steps, result }: Props) {
  return (
    <Section id="process">
      <Container>
        <div className="space-y-10">

          <Heading>
            {title}
          </Heading>

          {/* STEPS */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start">

                {/* NUMBER */}
                <div className="text-sm text-black/40 font-medium w-6">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* CONTENT */}
                <div className="space-y-1">
                  <div className="font-medium">
                    {step.title}
                  </div>

                  <Text>
                    {step.description}
                  </Text>
                </div>

              </div>
            ))}
          </div>

          {/* RESULT */}
          <div className="pt-6 border-t border-black/10 font-medium">
            {result}
          </div>

        </div>
      </Container>
    </Section>
  )
}
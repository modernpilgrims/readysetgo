import { Landing } from "@/content/landing/en"

import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Heading } from "@/components/typography/heading"
import { Text } from "@/components/typography/text"
import { Button } from "@/components/ui/button"

type Props = Landing["final"]

export function Final({ text, cta, secondary }: Props) {
    return (
        <Section>
            <Container>

                <div className="max-w-xl mx-auto text-center space-y-6">

                    <Heading>
                        {text}
                    </Heading>

                    <Button>
                        {cta}
                    </Button>

                    {secondary && (
                        <div className="pt-10 mt-10 border-t border-black/10 space-y-3">

                            <div className="text-lg font-medium">
                                {secondary.title}
                            </div>

                            <Text>
                                {secondary.text}
                            </Text>

                            <button className="text-sm underline opacity-70 hover:opacity-100">
                                {secondary.cta}
                            </button>

                        </div>
                    )}

                </div>

            </Container>
        </Section>
    )
}
import { Landing } from "@/content/landing/en"

import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Heading } from "@/components/typography/heading"
import { Text } from "@/components/typography/text"

type Props = Landing["facts"]

export function Facts({ title, items, conclusion }: Props) {
    return (
        <Section>
            <Container>

                <div className="max-w-xl space-y-8">

                    <Heading>
                        {title}
                    </Heading>

                    {/* FACTS */}
                    <div className="space-y-6">
                        {items.map((item, i) => (
                            <div key={i} className="space-y-1">

                                <div className="font-medium">
                                    {item.title}: {item.value}
                                </div>

                                <Text>
                                    {item.note}
                                </Text>

                            </div>
                        ))}
                    </div>

                    {/* CONCLUSION */}
                    <div className="pt-6 border-t border-black/10 font-medium">
                        {conclusion}
                    </div>

                </div>

            </Container>
        </Section>
    )
}
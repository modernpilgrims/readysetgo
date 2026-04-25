import { Landing } from "@/content/landing/en"

import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Heading } from "@/components/typography/heading"
import { Text } from "@/components/typography/text"

type Props = Landing["logic"]

export function Logic({ title, items, note }: Props) {
    return (
        <Section>
            <Container>
                <div className="max-w-2xl space-y-6">

                    <Heading>
                        {title}
                    </Heading>

                    <ul className="space-y-3">
                        {items.map((item, i) => (
                            <li key={i} className="flex gap-3 text-black/70">
                                <span className="opacity-40">—</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <Text>
                        {note}
                    </Text>

                </div>
            </Container>
        </Section>
    )
}
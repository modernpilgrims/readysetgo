import { Landing } from "@/content/landing/en"

import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Heading } from "@/components/typography/heading"
import { Text } from "@/components/typography/text"

type Props = Landing["amplifiers"]

export function Amplifiers({ title, items, note, conclusion }: Props) {
    return (
        <Section>
            <Container>

                <div className="max-w-xl space-y-8">

                    <Heading>
                        {title}
                    </Heading>

                    {/* ITEMS */}
                    <ul className="space-y-3">
                        {items.map((item, i) => (
                            <li key={i} className="flex gap-3 text-black/80">
                                <span className="opacity-40">—</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* NOTE */}
                    <Text>
                        {note}
                    </Text>

                    {/* CONCLUSION */}
                    <div className="pt-4 border-t border-black/10 font-medium">
                        {conclusion}
                    </div>

                </div>

            </Container>
        </Section>
    )
}
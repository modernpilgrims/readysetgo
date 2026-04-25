import { Landing } from "@/content/landing/en"

import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Heading } from "@/components/typography/heading"
import { Text } from "@/components/typography/text"
import { Card } from "@/components/ui/card"

type Props = Landing["examples"]

export function Examples({ title, subtitle, items, more }: Props) {
    return (
        <Section id="examples">
            <Container>

                <div className="max-w-xl space-y-4">
                    <Heading>{title}</Heading>
                    <Text>{subtitle}</Text>
                </div>

                {/* GRID */}
                <div className="mt-10 grid gap-6 md:grid-cols-3">

                    {items.map((item, i) => (
                        <Card key={i}>
                            <div className="space-y-3">

                                <div className="font-medium">
                                    {item.title}
                                </div>

                                <Text>
                                    {item.task}
                                </Text>

                                <div className="text-sm">
                                    {item.result}
                                </div>

                                <button className="text-sm underline opacity-70 hover:opacity-100">
                                    {item.cta}
                                </button>

                            </div>
                        </Card>
                    ))}

                </div>

                {/* MORE */}
                <div className="mt-8 text-sm underline opacity-70 hover:opacity-100 cursor-pointer">
                    {more}
                </div>

            </Container>
        </Section>
    )
}
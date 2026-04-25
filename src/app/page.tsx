import { Header } from "@/components/marketing/header"
import { getLanding } from "@/content/landing"

import { Hero } from "@/components/marketing/hero"
import { Reality } from "@/components/marketing/reality"
import { Logic } from "@/components/marketing/logic"
import { Process } from "@/components/marketing/process"
import { Levels } from "@/components/marketing/levels"
import { Amplifiers } from "@/components/marketing/amplifiers"
import { Examples } from "@/components/marketing/examples"
import { Facts } from "@/components/marketing/facts"
import { Final } from "@/components/marketing/final"

export default async function Page({ params }: any) {
    const { locale } = params
    const landing = getLanding(locale)

    return (
        <>
            <Header locale={locale} />

            <main className="pt-16">
                <div className="max-w-6xl mx-auto px-6">

                    <Hero
                        {...landing.hero}
                        heroVisual={landing.heroVisual}
                    />

                    <Reality {...landing.reality} />
                    <Logic {...landing.logic} />
                    <Process {...landing.process} />
                    <Levels {...landing.levels} />
                    <Amplifiers {...landing.amplifiers} />
                    <Examples {...landing.examples} />
                    <Facts {...landing.facts} />
                    <Final {...landing.final} />

                </div>
            </main>
        </>
    )
}
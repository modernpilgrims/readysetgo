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

export default function Page({
    params,
}: {
    params: { locale: string }
}) {
    const landing = getLanding(params.locale)

    return (
        <main className="min-h-screen">
            <div className="max-w-6xl mx-auto px-6">

                <Hero {...landing.hero} />
                <div className="border-b border-white/10" />

                <Reality {...landing.reality} />
                <div className="border-b border-white/10" />

                <Logic {...landing.logic} />
                <div className="border-b border-white/10" />

                <Process {...landing.process} />
                <div className="border-b border-white/10" />

                <Levels {...landing.levels} />
                <div className="border-b border-white/10" />

                <Amplifiers {...landing.amplifiers} />
                <div className="border-b border-white/10" />

                <Examples {...landing.examples} />
                <div className="border-b border-white/10" />

                <Facts {...landing.facts} />
                <div className="border-b border-white/10" />

                <Final {...landing.final} />

            </div>
        </main>
    )
}
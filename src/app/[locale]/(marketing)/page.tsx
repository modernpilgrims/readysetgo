import { Header } from "@/components/marketing/header"
import { getLanding } from "@/content/landing"

import { Hero } from "@/components/marketing/hero"
import { Logic } from "@/components/marketing/logic"
import { Process } from "@/components/marketing/process"
import { Levels } from "@/components/marketing/levels"
import { Examples } from "@/components/marketing/examples"
import { Facts } from "@/components/marketing/facts"
import { Final } from "@/components/marketing/final"

export default async function Page({ params }: any) {
  const { locale } = await params
  const landing = getLanding(locale)

  return (
    <>
      <Header locale={locale} />

      <main>
        <Hero {...landing.hero} />
        <Logic {...landing.logic} />
        <Process {...landing.process} />
        <Levels {...landing.levels} />
        <Examples {...landing.examples} />
        <Facts {...landing.facts} />
        <Final {...landing.final} />
      </main>
    </>
  )
}
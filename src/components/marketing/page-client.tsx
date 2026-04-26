"use client"

import { useState, useEffect } from "react"

import { Header } from "@/components/marketing/header"
import { Hero } from "@/components/marketing/hero"
import { Logic } from "@/components/marketing/logic"
import { Process } from "@/components/marketing/process"
import { Levels } from "@/components/marketing/levels"
import { Examples } from "@/components/marketing/examples"
import { Facts } from "@/components/marketing/facts"
import { Final } from "@/components/marketing/final"
import { LeadForm } from "@/components/forms/lead-form"

import type { FormContent } from "@/content/form"

type Props = {
    landing: any
    form: FormContent
    locale: string
}

export function PageClient({ landing, form, locale }: Props) {
    const [isFormOpen, setIsFormOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = isFormOpen ? "hidden" : "auto"
    }, [isFormOpen])

    return (
        <>
            <Header
                locale={locale}
                onOpenForm={() => setIsFormOpen(true)}
            />

            <main>
                <Hero
                    {...landing.hero}
                    heroVisual={landing.heroVisual}
                    onOpenForm={() => setIsFormOpen(true)}
                />

                <Logic {...landing.logic} />
                <Process {...landing.process} />
                <Levels {...landing.levels} />
                <Examples {...landing.examples} />
                <Facts {...landing.facts} />
                <Final {...landing.final} />
            </main>

            {isFormOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
                    onClick={() => setIsFormOpen(false)}
                >
                    <div
                        className="bg-white border border-black/10 rounded-2xl w-full max-w-5xl relative shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* CLOSE BUTTON */}
                        <button
                            onClick={() => setIsFormOpen(false)}
                            className="absolute top-4 right-4 text-black/40 hover:text-black text-lg"
                        >
                            ✕
                        </button>

                        {/* 🔥 ВАЖНО: теперь форма отдельная */}
                        <LeadForm
                            content={form}
                            onClose={() => setIsFormOpen(false)}
                        />
                    </div>
                </div>
            )}
        </>
    )
}
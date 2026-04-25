"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"

export function Header({ locale }: { locale: string }) {
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black/10">
            <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">

                {/* LEFT */}
                <Link href={`/${locale}`}>
                    <Logo variant="header" />
                </Link>

                {/* CENTER (desktop) */}
                <nav className="hidden md:flex items-center gap-6 text-sm text-black/70">
                    <a href="#examples">Examples</a>
                    <a href="#process">Process</a>
                    <a href="#levels">Pricing</a>
                </nav>

                {/* RIGHT */}
                <div className="flex items-center gap-3">

                    {/* Language */}
                    <select
                        className="text-sm bg-transparent outline-none"
                        value={locale}
                        onChange={(e) => {
                            window.location.href = `/${e.target.value}`
                        }}
                    >
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                    </select>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Button>Start</Button>
                    </div>

                    {/* Burger */}
                    <button
                        className="md:hidden text-xl"
                        onClick={() => setOpen(!open)}
                    >
                        ☰
                    </button>

                </div>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden border-t border-black/10 px-6 py-6 bg-white">

                    <nav className="flex flex-col gap-3 text-lg">

                        <a href="#examples" onClick={() => setOpen(false)}>
                            Examples
                        </a>

                        <a href="#process" onClick={() => setOpen(false)}>
                            Process
                        </a>

                        <a href="#levels" onClick={() => setOpen(false)}>
                            Pricing
                        </a>

                    </nav>

                    <div className="pt-6">
                        <Button className="w-full">
                            Start
                        </Button>
                    </div>

                </div>
            )}
        </header>
    )
}
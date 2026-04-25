"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header({ locale }: { locale: string }) {
    return (
        <header className="border-b border-black/10">
            <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">

                {/* LEFT */}
                <Link href={`/${locale}`} className="font-medium">
                    ReadySetGo
                </Link>

                {/* CENTER (desktop only) */}
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
                            const newLocale = e.target.value
                            window.location.href = `/${newLocale}`
                        }}
                    >
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                    </select>

                    {/* CTA */}
                    <Button>
                        Start
                    </Button>

                </div>

            </div>
        </header>
    )
}
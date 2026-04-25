"use client"

import { useState, useEffect } from "react"

type Props = {
    items: {
        title: string
        image: string
    }[]
}

export function HeroVisual({ items }: Props) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const i = setInterval(() => {
            setIndex((prev) => (prev + 1) % items.length)
        }, 3000)

        return () => clearInterval(i)
    }, [items.length])

    const slide = items[index]

    return (
        <div className="flex flex-col items-center">

            <div className="relative flex justify-center items-center">

                {/* LAPTOP */}
                <div className="w-[420px] h-[260px] border border-black/10 rounded-xl overflow-hidden bg-white shadow-sm">
                    <img
                        src={slide.image}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* TABLET */}
                <div className="absolute right-[-40px] top-[40px] w-[180px] h-[240px] border border-black/10 rounded-xl overflow-hidden bg-white shadow-sm">
                    <img
                        src={slide.image}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* PHONE */}
                <div className="absolute left-[-20px] bottom-[-30px] w-[120px] h-[220px] border border-black/10 rounded-2xl overflow-hidden bg-white shadow-sm">
                    <img
                        src={slide.image}
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>

            {/* TITLE */}
            <p className="mt-6 text-sm text-black/60">
                {slide.title}
            </p>

        </div>
    )
}
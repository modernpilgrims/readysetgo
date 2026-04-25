type LogoProps = {
    variant?: "header" | "hero"
    animated?: boolean
}

export function Logo({ variant = "header", animated = false }: LogoProps) {
    const isHeader = variant === "header"

    return (
        <svg
            viewBox="0 0 160 120"
            className={isHeader ? "h-10 w-auto" : "h-auto w-[220px] md:w-[320px]"}
            aria-label="Ready Set Go"
            role="img"
        >
            <style>
                {`
          .rsg-word {
            font-family: var(--font-inter), Arial, sans-serif;
            font-weight: 800;
            letter-spacing: -0.06em;
            fill: currentColor;
          }

          ${animated ? `
            .rsg-ready { animation: rsgPulse 3s infinite; animation-delay: 0s; }
            .rsg-set { animation: rsgPulse 3s infinite; animation-delay: 1s; }
            .rsg-go { animation: rsgPulse 3s infinite; animation-delay: 2s; }

            @keyframes rsgPulse {
              0%, 70%, 100% { opacity: 0.35; }
              15%, 45% { opacity: 1; }
            }
          ` : ""}
        `}
            </style>

            <text
                className={`rsg-word ${animated ? "rsg-ready" : ""}`}
                x="0"
                y="34"
                fontSize="34"
            >
                READY
            </text>

            <text
                className={`rsg-word ${animated ? "rsg-set" : ""}`}
                x="0"
                y="72"
                fontSize="34"
            >
                SET
            </text>

            <text
                className={`rsg-word ${animated ? "rsg-go" : ""}`}
                x="0"
                y="110"
                fontSize="34"
            >
                GO
            </text>
        </svg>
    )
}
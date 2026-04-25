export function Section({
    children,
    id,
}: {
    children: React.ReactNode
    id?: string
}) {
    return (
        <section
            id={id}
            className="py-20 md:py-28 border-b border-black/5 scroll-mt-24"
        >
            {children}
        </section>
    )
}
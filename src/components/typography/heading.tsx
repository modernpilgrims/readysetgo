export function Heading({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {children}
        </h2>
    )
}
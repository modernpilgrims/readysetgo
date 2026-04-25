export function Card({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="border border-black/10 rounded-2xl p-6">
            {children}
        </div>
    )
}
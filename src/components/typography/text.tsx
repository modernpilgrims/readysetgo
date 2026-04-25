export function Text({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-base text-black/70 leading-relaxed">
            {children}
        </p>
    )
}
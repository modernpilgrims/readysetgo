export function Button({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <button className="h-12 px-5 rounded-xl bg-black text-white text-sm font-medium hover:opacity-90 transition">
      {children}
    </button>
  )
}
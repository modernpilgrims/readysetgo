type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
  className?: string
}

export function Button({
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <button
      className={`
        px-6 py-3 rounded-xl font-medium transition
        w-fit
        ${variant === "primary"
          ? "bg-white text-black"
          : "border border-white/20 text-white"}
        ${className}
      `}
    >
      {children}
    </button>
  )
}
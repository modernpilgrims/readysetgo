type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const base =
    "px-5 py-2 text-sm transition-colors border rounded-md"

  const variants = {
    primary: "bg-black text-white border-black",
    secondary: "bg-transparent text-black border-black/20",
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
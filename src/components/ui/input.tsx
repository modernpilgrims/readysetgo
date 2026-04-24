type InputProps = {
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({ placeholder, ...props }: InputProps) {
  return (
    <input
      className="w-full px-4 py-3 rounded-lg bg-black border border-white/20 text-white"
      placeholder={placeholder}
      {...props}
    />
  )
}
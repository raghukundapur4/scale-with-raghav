function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full rounded-xl border border-border bg-white px-4 py-3 text-text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-4 focus:ring-accent/10 ${className}`}
      {...props}
    />
  )
}

export default Input

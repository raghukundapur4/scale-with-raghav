function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex rounded-full bg-accent-light px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-accent ${className}`}>
      {children}
    </span>
  )
}

export default Badge

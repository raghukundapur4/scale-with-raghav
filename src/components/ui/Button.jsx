const variants = {
  primary: 'bg-accent text-white shadow-sm hover:bg-accent-dark hover:shadow-md',
  secondary: 'border border-border bg-white text-text-primary hover:border-accent/40 hover:bg-accent-light',
  ghost: 'text-text-secondary hover:bg-slate-100 hover:text-text-primary',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-4 text-base',
}

function Button({ as: Component = 'a', variant = 'primary', size = 'md', className = '', children, ...props }) {
  return (
    <Component
      className={`inline-flex items-center justify-center rounded-xl font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button

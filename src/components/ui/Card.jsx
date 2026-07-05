function Card({ as: Component = 'div', className = '', children, ...props }) {
  return (
    <Component className={`card card-hover ${className}`} {...props}>
      {children}
    </Component>
  )
}

export default Card

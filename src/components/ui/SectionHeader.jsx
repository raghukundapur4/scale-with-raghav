import Badge from './Badge'

function SectionHeader({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">{subtitle}</p>}
    </div>
  )
}

export default SectionHeader

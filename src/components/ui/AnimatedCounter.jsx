import { useCountUp } from '../../hooks/useCountUp'
import { useInView } from '../../hooks/useInView'

function AnimatedCounter({ value, suffix = '', prefix = '' }) {
  const [ref, inView] = useInView()
  const numeric = parseInt(value, 10)
  const count = useCountUp(numeric, inView)
  const trailing = value.replace(/^\d+/, '')

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {trailing}
      {suffix}
    </span>
  )
}

export default AnimatedCounter

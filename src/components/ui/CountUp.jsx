import { useEffect, useState } from 'react'
import { useReveal } from '../../hooks/useReveal'

/** Smoothly counts up to `value` once the element scrolls into view. */
export default function CountUp({ value, suffix = '', duration = 1100 }) {
  const [ref, visible] = useReveal(0.4)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!visible) return
    const start = performance.now()
    const ease = (t) => 1 - Math.pow(1 - t, 3)

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setDisplay(Math.round(ease(progress) * value))
      if (progress < 1) requestAnimationFrame(tick)
    }
    const frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [visible, value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  )
}

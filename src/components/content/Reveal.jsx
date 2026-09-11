import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, className = '', delay = 0, animate = false }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(!animate)

  useEffect(() => {
    if (!animate) {
      setVisible(true)
      return undefined
    }

    const node = ref.current
    if (!node) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || !('IntersectionObserver' in window)) {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [animate])

  return (
    <div
      ref={ref}
      className={`reveal ${animate ? 'reveal--animated' : 'reveal--static'} ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  )
}

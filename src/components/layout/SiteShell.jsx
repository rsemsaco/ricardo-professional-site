import { useEffect, useRef, useState } from 'react'
import ModeSwitch from '../navigation/ModeSwitch.jsx'
import { siteConfig } from '../../data/siteConfig.js'
import { navigationByMode } from '../../data/navigation.js'

export default function SiteShell({ children, mode, onModeChange }) {
  const navigation = navigationByMode[mode] || []
  const [activeHref, setActiveHref] = useState(navigation[0]?.href || '')
  const progressRef = useRef(null)

  useEffect(() => {
    setActiveHref(navigationByMode[mode]?.[0]?.href || '')

    const sections = (navigationByMode[mode] || [])
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)

    if (!sections.length || !('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target?.id) setActiveHref(`#${visible.target.id}`)
      },
      { rootMargin: '-22% 0px -60% 0px', threshold: [0.08, 0.2, 0.45, 0.7] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [mode])

  useEffect(() => {
    let frame = null

    const updateProgress = () => {
      frame = null
      const root = document.documentElement
      const max = Math.max(root.scrollHeight - window.innerHeight, 1)
      const progress = Math.min(Math.max(window.scrollY / max, 0), 1)
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`
    }

    const handleScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [mode])

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reducedMotion) return undefined

    let frame = null
    let pointerX = window.innerWidth / 2
    let pointerY = window.innerHeight / 2

    const paint = () => {
      frame = null
      document.documentElement.style.setProperty('--pointer-x', `${pointerX}px`)
      document.documentElement.style.setProperty('--pointer-y', `${pointerY}px`)
    }

    const handlePointer = (event) => {
      pointerX = event.clientX
      pointerY = event.clientY
      if (frame === null) frame = window.requestAnimationFrame(paint)
    }

    window.addEventListener('pointermove', handlePointer, { passive: true })
    return () => {
      window.removeEventListener('pointermove', handlePointer)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [])

  const renderNavigation = (className, label) => (
    <nav className={className} aria-label={label}>
      {navigation.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={activeHref === item.href ? 'is-active' : undefined}
          aria-current={activeHref === item.href ? 'location' : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )

  return (
    <div className={`site-shell theme-${mode}`}>
      <div className="ambient-pointer" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>

      <a className="skip-link" href="#conteudo-principal">
        Ir para o conteúdo
      </a>

      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand-lockup" href="#conteudo-principal" aria-label="Ricardo Maggessi — início da página">
            <span className="brand-lockup__monogram" aria-hidden="true">RM</span>
            <span className="brand-lockup__text">
              <span className="brand-lockup__name">{siteConfig.brand.name}</span>
              <span className="brand-lockup__descriptor">{siteConfig.brand.descriptor}</span>
            </span>
          </a>

          {renderNavigation(
            'section-nav',
            `Navegação da experiência ${mode === 'psychology' ? 'Psicologia' : 'Dados'}`,
          )}

          <ModeSwitch mode={mode} onModeChange={onModeChange} />
        </div>

        <div className="mobile-nav-shell">
          {renderNavigation(
            'section-nav-mobile',
            `Seções da experiência ${mode === 'psychology' ? 'Psicologia' : 'Dados'}`,
          )}
        </div>
      </header>

      <main id="conteudo-principal">{children}</main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div>
            <strong>{siteConfig.brand.name}</strong>
            <span>{siteConfig.brand.signature}</span>
          </div>
          <nav className="footer-links" aria-label="Perfis profissionais">
            <a href={siteConfig.contact.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={siteConfig.contact.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={siteConfig.contact.social.lattes} target="_blank" rel="noreferrer">Lattes</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

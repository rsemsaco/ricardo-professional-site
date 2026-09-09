import { useEffect, useRef, useState } from 'react'
import IntroSequence from '../animations/IntroSequence.jsx'
import ModeTransition from '../animations/ModeTransition.jsx'
import SiteShell from '../components/layout/SiteShell.jsx'
import DataPage from '../pages/DataPage.jsx'
import PsychologyPage from '../pages/PsychologyPage.jsx'
import { siteConfig } from '../data/siteConfig.js'
import { getModeFromPath, getModePath, isKnownModePath, MODES } from './router.js'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function setMeta(selector, attribute, value) {
  const element = document.querySelector(selector)
  if (element) element.setAttribute(attribute, value)
}

function updateDocumentMeta(mode) {
  const isPsychology = mode === MODES.psychology
  const title = isPsychology
    ? 'Ricardo Maggessi | Psicologia, Saúde e FAP'
    : 'Ricardo Maggessi | Dados, Automação & Tecnologia'
  const description = isPsychology
    ? 'Ricardo Maggessi — formação em Psicologia pela USP, FAP, experiência clínica supervisionada, Psicologia Hospitalar, pesquisa e saúde.'
    : 'Ricardo Maggessi — análise de dados e negócios, pesquisa, automações, saúde, tecnologia, IA aplicada e desenvolvimento de soluções.'
  const canonical = `${window.location.origin}${getModePath(mode)}`
  const imagePath = isPsychology ? siteConfig.media.psychologyProfile : siteConfig.media.dataProfile
  const socialImage = `${window.location.origin}${import.meta.env.BASE_URL}${imagePath.replace(/^\/+/, '')}`

  document.title = title
  setMeta('meta[name="description"]', 'content', description)
  setMeta('meta[name="theme-color"]', 'content', isPsychology ? '#F4F0E8' : '#172A3A')
  setMeta('meta[property="og:title"]', 'content', title)
  setMeta('meta[property="og:description"]', 'content', description)
  setMeta('meta[property="og:url"]', 'content', canonical)
  setMeta('meta[property="og:image"]', 'content', socialImage)
  setMeta('meta[name="twitter:title"]', 'content', title)
  setMeta('meta[name="twitter:description"]', 'content', description)
  setMeta('meta[name="twitter:image"]', 'content', socialImage)

  const canonicalLink = document.querySelector('link[rel="canonical"]')
  if (canonicalLink) canonicalLink.setAttribute('href', canonical)
}

export default function App() {
  const [mode, setMode] = useState(() => getModeFromPath())
  const [transition, setTransition] = useState({ active: false, target: mode })
  const [introActive, setIntroActive] = useState(() => !prefersReducedMotion())
  const timersRef = useRef([])

  useEffect(() => {
    if (!isKnownModePath()) {
      window.history.replaceState({}, '', getModePath(MODES.psychology))
      setMode(MODES.psychology)
    }

    const handlePopState = () => setMode(getModeFromPath())
    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      timersRef.current.forEach(window.clearTimeout)
    }
  }, [])

  useEffect(() => {
    if (!introActive) return undefined
    const timer = window.setTimeout(() => setIntroActive(false), 1150)
    return () => window.clearTimeout(timer)
  }, [introActive])

  useEffect(() => {
    document.documentElement.dataset.mode = mode
    updateDocumentMeta(mode)
  }, [mode])

  const navigateToMode = (nextMode) => {
    if (nextMode === mode || transition.active) return

    const reduceMotion = prefersReducedMotion()
    const midpoint = reduceMotion ? 0 : 470
    const finish = reduceMotion ? 0 : 1120

    setTransition({ active: true, target: nextMode })

    timersRef.current.push(
      window.setTimeout(() => {
        window.history.pushState({}, '', getModePath(nextMode))
        setMode(nextMode)
        window.scrollTo({ top: 0, behavior: 'auto' })
      }, midpoint),
    )

    timersRef.current.push(
      window.setTimeout(() => setTransition({ active: false, target: nextMode }), finish),
    )
  }

  return (
    <>
      <IntroSequence active={introActive} />
      <SiteShell mode={mode} onModeChange={navigateToMode}>
        {mode === MODES.psychology ? <PsychologyPage /> : <DataPage />}
      </SiteShell>
      <ModeTransition active={transition.active} targetMode={transition.target} />
    </>
  )
}

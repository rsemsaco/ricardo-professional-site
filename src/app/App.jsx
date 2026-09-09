import { useEffect, useRef, useState } from 'react'
import ModeTransition from '../animations/ModeTransition.jsx'
import SiteShell from '../components/layout/SiteShell.jsx'
import DataPage from '../pages/DataPage.jsx'
import PsychologyPage from '../pages/PsychologyPage.jsx'
import { getModeFromPath, getModePath, isKnownModePath, MODES } from './router.js'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function updateDocumentMeta(mode) {
  const isPsychology = mode === MODES.psychology
  document.title = isPsychology
    ? 'Ricardo Maggessi | Psicologia e FAP'
    : 'Ricardo Maggessi | Análise de Dados & Negócios'

  const description = isPsychology
    ? 'Ricardo Maggessi — Psicologia, FAP, experiência clínica e hospitalar, pesquisa e formação em saúde.'
    : 'Ricardo Maggessi — análise de dados e negócios, pesquisa, automações, saúde, tecnologia e IA aplicada.'

  document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', isPsychology ? '#F4F0E8' : '#172A3A')
}

export default function App() {
  const [mode, setMode] = useState(() => getModeFromPath())
  const [transition, setTransition] = useState({ active: false, target: mode })
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
    document.documentElement.dataset.mode = mode
    updateDocumentMeta(mode)
  }, [mode])

  const navigateToMode = (nextMode) => {
    if (nextMode === mode || transition.active) return

    const reduceMotion = prefersReducedMotion()
    const midpoint = reduceMotion ? 0 : 340
    const finish = reduceMotion ? 0 : 820

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
      <SiteShell mode={mode} onModeChange={navigateToMode}>
        {mode === MODES.psychology ? <PsychologyPage /> : <DataPage />}
      </SiteShell>
      <ModeTransition active={transition.active} targetMode={transition.target} />
    </>
  )
}

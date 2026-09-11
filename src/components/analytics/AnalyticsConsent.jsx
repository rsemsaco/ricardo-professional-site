import { useEffect, useState } from 'react'
import {
  getAnalyticsConsent,
  openAnalyticsPreferences,
  setAnalyticsConsent,
} from '../../analytics/ga4.js'

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState(() => getAnalyticsConsent())
  const [open, setOpen] = useState(() => getAnalyticsConsent() === null)

  useEffect(() => {
    const handlePreferences = () => setOpen(true)
    window.addEventListener('rm:analytics-preferences', handlePreferences)
    return () => window.removeEventListener('rm:analytics-preferences', handlePreferences)
  }, [])

  const choose = (value) => {
    setAnalyticsConsent(value)
    setChoice(value)
    setOpen(false)
  }

  if (!open) {
    return (
      <button
        type="button"
        className="analytics-preferences-link"
        onClick={openAnalyticsPreferences}
        aria-label="Revisar preferência de métricas"
      >
        Métricas
      </button>
    )
  }

  return (
    <aside className="analytics-consent" aria-label="Preferências de métricas">
      <div>
        <strong>Métricas do site</strong>
        <p>
          Posso usar o Google Analytics para entender quais áreas e conteúdos são mais úteis. Não envio nome, telefone, e-mail ou texto das mensagens do WhatsApp.
        </p>
      </div>
      <div className="analytics-consent__actions">
        <button type="button" onClick={() => choose('denied')}>Não permitir</button>
        <button type="button" className="analytics-consent__accept" onClick={() => choose('granted')}>Permitir métricas</button>
      </div>
      {choice ? <span className="analytics-consent__current">Preferência atual: {choice === 'granted' ? 'permitido' : 'não permitido'}</span> : null}
    </aside>
  )
}

import { MODES } from '../app/router.js'

const particles = Array.from({ length: 36 }, (_, index) => index)
const rails = Array.from({ length: 7 }, (_, index) => index)

export default function ModeTransition({ active, targetMode }) {
  const isData = targetMode === MODES.data

  return (
    <div
      className={`mode-transition ${active ? 'is-active' : ''} mode-transition--to-${targetMode}`}
      aria-hidden="true"
    >
      <div className="mode-transition__veil mode-transition__veil--back" />
      <div className="mode-transition__veil mode-transition__veil--front" />
      <div className="mode-transition__flare" />

      <svg className="mode-transition__curve mode-transition__curve--primary" viewBox="0 0 1200 500" preserveAspectRatio="none">
        <path d="M-20 340 C 240 40, 500 520, 760 190 S 1050 120, 1220 280" />
      </svg>
      <svg className="mode-transition__curve mode-transition__curve--echo" viewBox="0 0 1200 500" preserveAspectRatio="none">
        <path d="M-40 300 C 250 80, 470 440, 735 170 S 1030 150, 1240 240" />
      </svg>

      <div className="mode-transition__particles">
        {particles.map((particle) => (
          <span key={particle} style={{ '--particle-index': particle }} />
        ))}
      </div>

      <div className={`mode-transition__grid ${isData ? 'is-structured' : 'is-organic'}`} />
      <div className="mode-transition__rails">
        {rails.map((rail) => <span key={rail} style={{ '--rail-index': rail }} />)}
      </div>

      <div className="mode-transition__signal">
        <span className="mode-transition__signal-kicker">RICARDO MAGGESSI</span>
        <strong>{isData ? 'DADOS' : 'PSICOLOGIA'}</strong>
        <span>{isData ? 'estrutura · método · tecnologia' : 'relação · contexto · humano'}</span>
      </div>
    </div>
  )
}

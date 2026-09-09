import { MODES } from '../app/router.js'

const particles = Array.from({ length: 18 }, (_, index) => index)

export default function ModeTransition({ active, targetMode }) {
  return (
    <div
      className={`mode-transition ${active ? 'is-active' : ''} mode-transition--to-${targetMode}`}
      aria-hidden="true"
    >
      <div className="mode-transition__veil" />
      <svg
        className="mode-transition__curve"
        viewBox="0 0 1200 500"
        preserveAspectRatio="none"
      >
        <path d="M-20 340 C 240 40, 500 520, 760 190 S 1050 120, 1220 280" />
      </svg>
      <div className="mode-transition__particles">
        {particles.map((particle) => (
          <span key={particle} style={{ '--particle-index': particle }} />
        ))}
      </div>
      <div
        className={`mode-transition__grid ${targetMode === MODES.data ? 'is-structured' : ''}`}
      />
    </div>
  )
}

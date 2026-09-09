import { getModePath, MODES } from '../../app/router.js'

const options = [
  { mode: MODES.psychology, label: 'Psicologia' },
  { mode: MODES.data, label: 'Dados' },
]

export default function ModeSwitch({ mode, onModeChange }) {
  const handleClick = (event, nextMode) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }

    event.preventDefault()
    onModeChange(nextMode)
  }

  return (
    <nav className="mode-switch" aria-label="Alternar área profissional">
      <span className="mode-switch__track" aria-hidden="true">
        <span
          className={`mode-switch__indicator mode-switch__indicator--${mode}`}
        />
      </span>

      {options.map((option) => (
        <a
          key={option.mode}
          className={`mode-switch__option ${mode === option.mode ? 'is-active' : ''}`}
          href={getModePath(option.mode)}
          aria-current={mode === option.mode ? 'page' : undefined}
          onClick={(event) => handleClick(event, option.mode)}
        >
          {option.label}
        </a>
      ))}
    </nav>
  )
}

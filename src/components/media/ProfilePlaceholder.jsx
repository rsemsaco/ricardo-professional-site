export default function ProfilePlaceholder({ mode, label, path, id }) {
  const normalizedPath = path.replace(/^\/+/, '')
  const src = `${import.meta.env.BASE_URL}${normalizedPath}`
  const isPsychology = mode === 'psychology'
  const alt = isPsychology
    ? 'Retrato de Ricardo Maggessi na experiência Psicologia'
    : 'Ricardo Maggessi em evento profissional, segurando um microfone, na experiência Dados'

  return (
    <figure id={id} className={`profile-placeholder profile-placeholder--${mode} profile-portrait`}>
      <div className="profile-placeholder__visual">
        <img
          className="profile-portrait__image"
          src={src}
          alt={alt}
          width="1120"
          height="1400"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <span className="profile-portrait__wash" aria-hidden="true" />
        <span className="profile-placeholder__halo" aria-hidden="true" />
        <span className="profile-placeholder__line" aria-hidden="true" />
        <span className="profile-portrait__corner profile-portrait__corner--top" aria-hidden="true" />
        <span className="profile-portrait__corner profile-portrait__corner--bottom" aria-hidden="true" />
      </div>
      <figcaption className="profile-placeholder__caption">
        <div>
          <strong>{label}</strong>
          <span>{isPsychology ? 'Humano · clínico · científico' : 'Dados · método · tecnologia'}</span>
        </div>
        <span className="profile-portrait__signature">RM</span>
      </figcaption>
    </figure>
  )
}

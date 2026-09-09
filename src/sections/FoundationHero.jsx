import ProfilePlaceholder from '../components/media/ProfilePlaceholder.jsx'

export default function FoundationHero({
  eyebrow,
  title,
  description,
  mode,
  photoLabel,
  photoPath,
  statusLabel,
}) {
  return (
    <section className="foundation-hero" aria-labelledby={`${mode}-hero-title`}>
      <div className="foundation-hero__content">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id={`${mode}-hero-title`}>{title}</h1>
        <p className="foundation-hero__description">{description}</p>
        <div className="foundation-hero__status" role="status">
          <span className="status-dot" aria-hidden="true" />
          {statusLabel}
        </div>
      </div>

      <ProfilePlaceholder mode={mode} label={photoLabel} path={photoPath} />
    </section>
  )
}

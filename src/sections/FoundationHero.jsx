import ActionLink from '../components/content/ActionLink.jsx'
import Reveal from '../components/content/Reveal.jsx'
import ProfilePlaceholder from '../components/media/ProfilePlaceholder.jsx'

export default function FoundationHero({
  eyebrow,
  title,
  description,
  mode,
  photoLabel,
  photoPath,
  photoId,
  primaryAction,
  secondaryAction,
  credential,
  notice,
}) {
  return (
    <section className={`experience-hero experience-hero--${mode}`} aria-labelledby={`${mode}-hero-title`}>
      <Reveal animate className="experience-hero__content">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id={`${mode}-hero-title`}>{title}</h1>
        <p className="experience-hero__description">{description}</p>

        <div className="experience-hero__actions">
          {primaryAction ? (
            <ActionLink
              href={primaryAction.href}
              messageKey={primaryAction.messageKey}
              disabled={primaryAction.disabled}
              ariaLabel={primaryAction.ariaLabel}
            >
              {primaryAction.label}
            </ActionLink>
          ) : null}
          {secondaryAction ? (
            <ActionLink href={secondaryAction.href} variant="secondary">
              {secondaryAction.label}
            </ActionLink>
          ) : null}
        </div>

        {credential || notice ? (
          <div className="experience-hero__meta">
            {credential ? <span>{credential}</span> : null}
            {notice ? <span>{notice}</span> : null}
          </div>
        ) : null}
      </Reveal>

      <Reveal animate className="experience-hero__media" delay={120}>
        <ProfilePlaceholder mode={mode} label={photoLabel} path={photoPath} id={photoId} />
      </Reveal>
    </section>
  )
}

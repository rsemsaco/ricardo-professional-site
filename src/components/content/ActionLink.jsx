import { buildWhatsAppUrl } from '../../data/siteConfig.js'

export default function ActionLink({
  children,
  href,
  messageKey,
  variant = 'primary',
  disabled = false,
  ariaLabel,
}) {
  const resolvedHref = messageKey ? buildWhatsAppUrl(messageKey) : href
  const isExternal = Boolean(messageKey || resolvedHref?.startsWith('http'))
  const className = `action-link action-link--${variant}`

  if (disabled || !resolvedHref) {
    return (
      <button className={className} type="button" disabled aria-label={ariaLabel}>
        {children}
      </button>
    )
  }

  return (
    <a
      className={className}
      href={resolvedHref}
      aria-label={ariaLabel}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      <span>{children}</span>
      <span className="action-link__arrow" aria-hidden="true">↗</span>
    </a>
  )
}

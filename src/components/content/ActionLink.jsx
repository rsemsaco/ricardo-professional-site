import { getDefaultActionAnalytics, trackEvent } from '../../analytics/ga4.js'
import { buildWhatsAppUrl } from '../../data/siteConfig.js'

export default function ActionLink({
  children,
  href,
  messageKey,
  variant = 'primary',
  disabled = false,
  ariaLabel,
  analytics,
}) {
  const resolvedHref = messageKey ? buildWhatsAppUrl(messageKey) : href
  const isExternal = Boolean(messageKey || resolvedHref?.startsWith('http'))
  const className = `action-link action-link--${variant}`

  const handleClick = () => {
    const inferred = getDefaultActionAnalytics(messageKey, href)
    const event = analytics || inferred

    if (event?.eventName) {
      trackEvent(event.eventName, {
        link_label: typeof children === 'string' ? children : undefined,
        destination_type: messageKey ? 'whatsapp' : isExternal ? 'external' : 'internal',
        ...event.params,
      })
    }
  }

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
      onClick={handleClick}
    >
      <span>{children}</span>
      <span className="action-link__arrow" aria-hidden="true">↗</span>
    </a>
  )
}
